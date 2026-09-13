// lib/mongoAuthState.js
//
// MongoDB-backed auth state for Baileys.
//
// Why this exists: Heroku's filesystem is ephemeral. Every dyno restart
// (which happens at least once every ~24h, plus on every deploy/sleep)
// wipes the local ./auth_info folder, forcing you to re-pair WhatsApp.
// Storing the session in MongoDB instead means it survives restarts,
// so the bot can genuinely stay connected 24/7.
//
// Usage:
//   const { useMongoAuthState, removeMongoAuthState, listMongoSessions } = require('./lib/mongoAuthState');
//   const { state, saveCreds } = await useMongoAuthState(MONGODB_URI, userId);
//
// If MONGODB_URI is not set, index.js falls back to the original
// local-file based useMultiFileAuthState (fine for local/Termux use).

const { initAuthCreds, BufferJSON, proto } = require('@whiskeysockets/baileys');
const { MongoClient } = require('mongodb');

let clientPromise = null;
let cachedUri = null;

function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getClient(uri) {
    if (!clientPromise || cachedUri !== uri) {
        cachedUri = uri;
        const client = new MongoClient(uri, { maxPoolSize: 5 });
        clientPromise = client.connect().then(() => client);
    }
    return clientPromise;
}

async function getCollection(uri) {
    const client = await getClient(uri);
    const dbName = process.env.MONGODB_DB_NAME || 'whatsapp_md_bot';
    const collection = client.db(dbName).collection('baileys_auth');
    // _id already gives us a unique index; nothing extra needed.
    return collection;
}

function docId(userId, key) {
    return `${userId}::${key}`;
}

async function useMongoAuthState(uri, userId) {
    const col = await getCollection(uri);

    const writeData = async (key, data) => {
        const value = JSON.stringify(data, BufferJSON.replacer);
        await col.updateOne(
            { _id: docId(userId, key) },
            { $set: { value, updatedAt: new Date() } },
            { upsert: true }
        );
    };

    const readData = async (key) => {
        try {
            const doc = await col.findOne({ _id: docId(userId, key) });
            if (!doc || doc.value === undefined || doc.value === null) return null;
            return JSON.parse(doc.value, BufferJSON.reviver);
        } catch {
            return null;
        }
    };

    const removeData = async (key) => {
        try {
            await col.deleteOne({ _id: docId(userId, key) });
        } catch {
            // ignore
        }
    };

    const creds = (await readData('creds')) || initAuthCreds();

    return {
        state: {
            creds,
            keys: {
                get: async (type, ids) => {
                    const data = {};
                    await Promise.all(
                        ids.map(async (id) => {
                            let value = await readData(`${type}-${id}`);
                            if (type === 'app-state-sync-key' && value) {
                                value = proto.Message.AppStateSyncKeyData.fromObject(value);
                            }
                            data[id] = value;
                        })
                    );
                    return data;
                },
                set: async (data) => {
                    const tasks = [];
                    for (const category of Object.keys(data)) {
                        for (const id of Object.keys(data[category])) {
                            const value = data[category][id];
                            const key = `${category}-${id}`;
                            tasks.push(value ? writeData(key, value) : removeData(key));
                        }
                    }
                    await Promise.all(tasks);
                }
            }
        },
        saveCreds: async () => {
            await writeData('creds', creds);
        }
    };
}

// Wipe a session's data (call this on logout / 401, alongside the local
// fs cleanup that already happens for the non-Mongo fallback path).
async function removeMongoAuthState(uri, userId) {
    const col = await getCollection(uri);
    await col.deleteMany({ _id: { $regex: `^${escapeRegExp(userId)}::` } });
}

// List every userId that currently has a saved session in Mongo, so
// loadExistingSessions() can auto-resume them on boot, same as it does
// today by scanning the local auth_info directory.
async function listMongoSessions(uri) {
    const col = await getCollection(uri);
    const docs = await col.find({ _id: { $regex: '::creds$' } }, { projection: { _id: 1 } }).toArray();
    return docs.map(doc => doc._id.slice(0, -('::creds'.length)));
}

module.exports = { useMongoAuthState, removeMongoAuthState, listMongoSessions };
