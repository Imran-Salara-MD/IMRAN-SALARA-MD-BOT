// IMRAN MD BOT — Group command pack (100 commands).
// In-memory toggles exported via module.exports._state so the main handler can wire event hooks.
const antilink = new Set();
const welcomeOn = new Set();
const goodbyeOn = new Set();
const welcomeMsg = {};
const goodbyeMsg = {};
const rulesMap = {};
const notesMap = {};
const warnsMap = {};
const afkMap = {};
const antiforeignOn = new Set();
const antistickerOn = new Set();
const antipornOn = new Set();
const filterOn = new Set();
const filtersMap = {};

const isGroup = (ctx) => ctx.from.endsWith('@g.us');

function ctxInfo(ctx) {
  const m = ctx.msg.message || {};
  return (
    m.extendedTextMessage?.contextInfo ||
    m.imageMessage?.contextInfo ||
    m.videoMessage?.contextInfo ||
    {}
  );
}

async function needAdmin(ctx) {
  try {
    const meta = await ctx.sock.groupMetadata(ctx.from);
    const p = meta.participants.find((x) => x.id === ctx.senderJid);
    return { ok: !!(p && p.admin) || ctx.isOwner, meta };
  } catch {
    return { ok: ctx.isOwner, meta: null };
  }
}

async function needGroupAdmin(ctx) {
  if (!isGroup(ctx)) {
    await ctx.reply('👥 Ye command sirf *group* mein kaam karti hai.');
    return null;
  }
  const { ok } = await needAdmin(ctx);
  if (!ok) {
    await ctx.reply('⛔ Sirf *group admin* ye command use kar sakta hai.');
    return null;
  }
  return true;
}

function targetJid(ctx) {
  const ci = ctxInfo(ctx);
  if (ci.mentionedJid && ci.mentionedJid.length) return ci.mentionedJid[0];
  if (ci.participant) return ci.participant;
  if (ctx.args[0]) {
    const d = ctx.args[0].replace(/\D/g, '');
    if (d.length >= 10) return d + '@s.whatsapp.net';
  }
  return null;
}

function quotedText(ctx) {
  const ci = ctxInfo(ctx);
  const q = ci.quotedMessage || {};
  return (q.conversation || q.extendedTextMessage?.text || q.imageMessage?.caption || '').trim();
}

module.exports = [
  // ---------- 1-10: tagging ----------
  { cmd: 'tagall', aliases: ['everyoneall'], category: 'Group', desc: 'Sab members ko mention karo', usage: '.tagall [message]', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const members = meta.participants.map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: ctx.text || '📢 *Attention Everyone!*', mentions: members }, { quoted: ctx.msg });
    } },
  { cmd: 'hidetag', aliases: ['htag'], category: 'Group', desc: 'Bina naam dikhaye sab ko tag', usage: '.hidetag <message>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Message likhein: `.hidetag Assalam o Alaikum`');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const members = meta.participants.map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: ctx.text, mentions: members }, { quoted: ctx.msg });
    } },
  { cmd: 'tagadmins', aliases: ['admins2'], category: 'Group', desc: 'Sirf admins ko mention karo', usage: '.tagadmins [message]', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const admins = meta.participants.filter((p) => p.admin).map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: ctx.text || '👑 *Admins hazir hon!*', mentions: admins }, { quoted: ctx.msg });
    } },
  { cmd: 'admins', aliases: ['adminlist'], category: 'Group', desc: 'Admins ki list', usage: '.admins', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const admins = meta.participants.filter((p) => p.admin);
      let t = `👑 *Group Admins* (${admins.length})\n\n`;
      admins.forEach((a, i) => { t += `${i + 1}. @${a.id.split('@')[0]}${a.admin === 'superadmin' ? ' 👑' : ''}\n`; });
      await ctx.sock.sendMessage(ctx.from, { text: t, mentions: admins.map((a) => a.id) }, { quoted: ctx.msg });
    } },
  { cmd: 'members', aliases: ['memberlist'], category: 'Group', desc: 'Sab members ki list', usage: '.members', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      let t = `👥 *${meta.subject}* — ${meta.participants.length} members\n\n`;
      meta.participants.forEach((p, i) => { t += `${i + 1}. @${p.id.split('@')[0]}${p.admin ? ' 👑' : ''}\n`; });
      await ctx.sock.sendMessage(ctx.from, { text: t, mentions: meta.participants.map((p) => p.id) }, { quoted: ctx.msg });
    } },
  { cmd: 'everyone', aliases: [], category: 'Group', desc: 'Har member ko ek-ek karke tag', usage: '.everyone <message>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const members = meta.participants.map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: `📣 ${ctx.text || 'Sab hazir hon!'}\n` + members.map((m) => `@${m.split('@')[0]}`).join(' '), mentions: members }, { quoted: ctx.msg });
    } },
  { cmd: 'tag', aliases: [], category: 'Group', desc: 'Short tagall', usage: '.tag <message>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const members = meta.participants.map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: ctx.text || '🔔', mentions: members }, { quoted: ctx.msg });
    } },
  { cmd: 'stag', aliases: ['silents'], category: 'Group', desc: 'Khamosh tag (bina text ke)', usage: '.stag', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const members = meta.participants.map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: '‎', mentions: members }, { quoted: ctx.msg });
    } },
  { cmd: 'tagone', aliases: [], category: 'Group', desc: 'Ek member ko tag karo', usage: '.tagone @user <message>', owner: false,
    run: async (ctx) => {
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Mention ya reply karein: `.tagone @user Salam`');
      const msg = ctx.args.slice(1).join(' ') || '👋';
      await ctx.sock.sendMessage(ctx.from, { text: `@${t.split('@')[0]} ${msg}`, mentions: [t] }, { quoted: ctx.msg });
    } },
  { cmd: 'report2', aliases: [], category: 'Group', desc: 'Admins ko report bhejo', usage: '.report (reply)', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const admins = meta.participants.filter((p) => p.admin).map((p) => p.id);
      const q = quotedText(ctx);
      await ctx.sock.sendMessage(ctx.from, { text: `🚨 *REPORT* by @${ctx.senderJid.split('@')[0]}\n${q ? `> ${q}` : ''}`, mentions: [ctx.senderJid, ...admins] }, { quoted: ctx.msg });
    } },
  // ---------- 11-20: admin actions ----------
  { cmd: 'kick', aliases: [], category: 'Group', desc: 'Member ko nikalo', usage: '.kick @user', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Target batayein: `.kick @user` ya reply karke.');
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'remove'); await ctx.reply(`👢 @${t.split('@')[0]} ko nikal diya.`, { mentions: [t] }); }
      catch (e) { await ctx.reply('❌ Nikaal na saka. Kya bot admin hai?'); }
    } },
  { cmd: 'add', aliases: [], category: 'Group', desc: 'Number se member add karo', usage: '.add 923001234567', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('🔢 Number dein: `.add 923001234567`');
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'add'); await ctx.reply(`✅ @${t.split('@')[0]} ko add kar diya.`, { mentions: [t] }); }
      catch (e) { await ctx.reply('❌ Add na ho saka (privacy ya bot admin nahi).'); }
    } },
  { cmd: 'promote', aliases: [], category: 'Group', desc: 'Member ko admin banao', usage: '.promote @user', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Target batayein: `.promote @user`');
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'promote'); await ctx.reply(`👑 @${t.split('@')[0]} ab admin hai.`, { mentions: [t] }); }
      catch (e) { await ctx.reply('❌ Promote na ho saka.'); }
    } },
  { cmd: 'demote', aliases: [], category: 'Group', desc: 'Admin se hatao', usage: '.demote @user', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Target batayein: `.demote @user`');
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'demote'); await ctx.reply(`⬇️ @${t.split('@')[0]} ab admin nahi.`, { mentions: [t] }); }
      catch (e) { await ctx.reply('❌ Demote na ho saka.'); }
    } },
  { cmd: 'softkick', aliases: [], category: 'Group', desc: 'Nikalo aur foran wapas add karo', usage: '.softkick @user', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Target batayein.');
      try {
        await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'remove');
        setTimeout(async () => { try { await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'add'); } catch {} }, 3000);
        await ctx.reply(`🔄 @${t.split('@')[0]} ko soft-kick kiya.`, { mentions: [t] });
      } catch (e) { await ctx.reply('❌ Soft-kick na ho saka.'); }
    } },
  { cmd: 'warn', aliases: [], category: 'Group', desc: 'Member ko warning do (3 par kick)', usage: '.warn @user [wajah]', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Target batayein: `.warn @user wajah`');
      warnsMap[ctx.from] = warnsMap[ctx.from] || {};
      warnsMap[ctx.from][t] = (warnsMap[ctx.from][t] || 0) + 1;
      const n = warnsMap[ctx.from][t];
      const reason = ctx.args.slice(1).join(' ') || 'Koi wajah nahi';
      if (n >= 3) {
        try { await ctx.sock.groupParticipantsUpdate(ctx.from, [t], 'remove'); } catch {}
        delete warnsMap[ctx.from][t];
        await ctx.reply(`🚫 @${t.split('@')[0]} ko 3 warnings par *kick* kar diya.\nWajah: ${reason}`, { mentions: [t] });
      } else {
        await ctx.reply(`⚠️ @${t.split('@')[0]} ko warning ${n}/3\nWajah: ${reason}`, { mentions: [t] });
      }
    } },
  { cmd: 'warns', aliases: ['warnlist'], category: 'Group', desc: 'Warnings dekho', usage: '.warns [@user]', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const w = warnsMap[ctx.from] || {};
      const t = targetJid(ctx);
      if (t) return ctx.reply(`⚠️ @${t.split('@')[0]} ki warnings: *${w[t] || 0}/3*`, { mentions: [t] });
      const keys = Object.keys(w);
      if (!keys.length) return ctx.reply('✅ Kisi ko warning nahi mili.');
      let s = '⚠️ *Warnings:*\n';
      keys.forEach((k, i) => { s += `${i + 1}. @${k.split('@')[0]} — ${w[k]}/3\n`; });
      await ctx.sock.sendMessage(ctx.from, { text: s, mentions: keys }, { quoted: ctx.msg });
    } },
  { cmd: 'unwarn', aliases: [], category: 'Group', desc: 'Ek warning kam karo', usage: '.unwarn @user', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 Target batayein.');
      warnsMap[ctx.from] = warnsMap[ctx.from] || {};
      warnsMap[ctx.from][t] = Math.max(0, (warnsMap[ctx.from][t] || 0) - 1);
      await ctx.reply(`✅ @${t.split('@')[0]} ki warnings ab: *${warnsMap[ctx.from][t]}/3*`, { mentions: [t] });
    } },
  { cmd: 'resetwarns', aliases: [], category: 'Group', desc: 'Sab warnings reset karo', usage: '.resetwarns', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      warnsMap[ctx.from] = {};
      await ctx.reply('🧹 Sab warnings reset kar din.');
    } },
  { cmd: 'purgewarned', aliases: [], category: 'Group', desc: 'Warning wale sab ko kick', usage: '.purgewarned confirm', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (ctx.args[0] !== 'confirm') return ctx.reply('⚠️ Pakka? `.purgewarned confirm` likhein.');
      const w = warnsMap[ctx.from] || {};
      const targets = Object.keys(w).filter((k) => w[k] > 0);
      if (!targets.length) return ctx.reply('✅ Koi warned user nahi.');
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, targets, 'remove'); warnsMap[ctx.from] = {}; await ctx.reply(`🧹 ${targets.length} warned users kick kar diye.`); }
      catch (e) { await ctx.reply('❌ Kick na ho sake.'); }
    } },
  // ---------- 21-30: group settings ----------
  { cmd: 'mute', aliases: ['announce', 'readonly', 'close2'], category: 'Group', desc: 'Sirf admins likh sakein', usage: '.mute', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupSettingUpdate(ctx.from, 'announcement'); await ctx.reply('🔇 Group *mute* — ab sirf admins likh sakte hain.'); }
      catch (e) { await ctx.reply('❌ Mute na ho saka.'); }
    } },
  { cmd: 'unmute', aliases: ['chat2', 'open2'], category: 'Group', desc: 'Sab ke liye kholo', usage: '.unmute', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupSettingUpdate(ctx.from, 'not_announcement'); await ctx.reply('🔊 Group *unmute* — sab likh sakte hain.'); }
      catch (e) { await ctx.reply('❌ Unmute na ho saka.'); }
    } },
  { cmd: 'lock', aliases: ['seal', 'private2'], category: 'Group', desc: 'Settings lock (sirf admin)', usage: '.lock', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupSettingUpdate(ctx.from, 'locked'); await ctx.reply('🔒 Group settings *lock*.'); }
      catch (e) { await ctx.reply('❌ Lock na ho saka.'); }
    } },
  { cmd: 'unlock', aliases: ['unseal', 'public2', 'open3'], category: 'Group', desc: 'Settings unlock', usage: '.unlock', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupSettingUpdate(ctx.from, 'unlocked'); await ctx.reply('🔓 Group settings *unlock*.'); }
      catch (e) { await ctx.reply('❌ Unlock na ho saka.'); }
    } },
  { cmd: 'timedmute', aliases: [], category: 'Group', desc: 'Kuch minute ke liye mute', usage: '.timedmute 10', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const mins = parseInt(ctx.args[0]);
      if (!mins || mins < 1 || mins > 1440) return ctx.reply('⏱️ Minute batayein: `.timedmute 10`');
      try {
        await ctx.sock.groupSettingUpdate(ctx.from, 'announcement');
        await ctx.reply(`🔇 Group ${mins} minute ke liye mute.`);
        setTimeout(async () => {
          try { await ctx.sock.groupSettingUpdate(ctx.from, 'not_announcement'); await ctx.sock.sendMessage(ctx.from, { text: '🔊 Time khatam — group unmute.' }); } catch {}
        }, mins * 60000);
      } catch (e) { await ctx.reply('❌ Mute na ho saka.'); }
    } },
  { cmd: 'ephemeral', aliases: ['disappearing'], category: 'Group', desc: 'Disappearing messages', usage: '.ephemeral on/off/24h/7d', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      const map = { on: 86400, '24h': 86400, '7d': 604800, '90d': 7776000, off: 0 };
      if (!(a in map)) return ctx.reply('⏳ `.ephemeral on` / `.ephemeral 7d` / `.ephemeral off`');
      try { await ctx.sock.groupToggleEphemeral(ctx.from, map[a]); await ctx.reply(map[a] ? `⏳ Disappearing messages *on* (${ctx.args[0]})` : '⏳ Disappearing messages *off*'); }
      catch (e) { await ctx.reply('❌ Setting na badal saki.'); }
    } },
  { cmd: 'noephemeral', aliases: [], category: 'Group', desc: 'Disappearing messages off', usage: '.noephemeral', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupToggleEphemeral(ctx.from, 0); await ctx.reply('⏳ Disappearing messages *off*.'); }
      catch (e) { await ctx.reply('❌ Setting na badal saki.'); }
    } },
  { cmd: 'setname2', aliases: ['setsubject', 'rename'], category: 'Group', desc: 'Group ka naam badlo', usage: '.setname <naya naam>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Naam likhein: `.setname Meri Family`');
      try { await ctx.sock.groupUpdateSubject(ctx.from, ctx.text); await ctx.reply(`✅ Naam badal diya: *${ctx.text}*`); }
      catch (e) { await ctx.reply('❌ Naam na badal saka.'); }
    } },
  { cmd: 'setdesc', aliases: [], category: 'Group', desc: 'Group description badlo', usage: '.setdesc <text>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Description likhein.');
      try { await ctx.sock.groupUpdateDescription(ctx.from, ctx.text); await ctx.reply('✅ Description update ho gayi.'); }
      catch (e) { await ctx.reply('❌ Description na badal saki.'); }
    } },
  { cmd: 'gsettings', aliases: [], category: 'Group', desc: 'Group settings dekho', usage: '.gsettings', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      await ctx.reply(`⚙️ *Group Settings*\n\n🔇 Mute: ${meta.announce ? 'ON' : 'OFF'}\n🔒 Locked: ${meta.restrict ? 'ON' : 'OFF'}\n⏳ Ephemeral: ${meta.ephemeralDuration ? meta.ephemeralDuration + 's' : 'OFF'}\n👥 Members: ${meta.participants.length}\n📝 Join approval: ${meta.joinApprovalMode ? 'ON' : 'OFF'}`);
    } },
  // ---------- 31-40: info ----------
  { cmd: 'groupinfo', aliases: ['ginfo'], category: 'Group', desc: 'Group ki mukammal maloomat', usage: '.groupinfo', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const admins = meta.participants.filter((p) => p.admin).length;
      await ctx.reply(`👥 *${meta.subject}*\n\n🆔 ID: ${meta.id}\n👤 Members: ${meta.participants.length}\n👑 Admins: ${admins}\n📅 Bana: ${new Date(meta.creation * 1000).toLocaleDateString('ur-PK')}\n📝 Desc: ${meta.desc || '—'}`);
    } },
  { cmd: 'gcount', aliases: ['membercount', 'total2'], category: 'Group', desc: 'Members gino', usage: '.gcount', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      await ctx.reply(`👥 Total members: *${meta.participants.length}*`);
    } },
  { cmd: 'gname', aliases: ['groupname'], category: 'Group', desc: 'Group ka naam dekho', usage: '.gname', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      await ctx.reply(`👥 Naam: *${meta.subject}*`);
    } },
  { cmd: 'gdesc', aliases: ['groupdesc'], category: 'Group', desc: 'Description dekho', usage: '.gdesc', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      await ctx.reply(`📝 *Description:*\n${meta.desc || 'Koi description nahi.'}`);
    } },
  { cmd: 'gid', aliases: ['groupid'], category: 'Group', desc: 'Group JID dekho', usage: '.gid', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      await ctx.reply(`🆔 \`${ctx.from}\``);
    } },
  { cmd: 'gpic', aliases: [], category: 'Group', desc: 'Group ki profile pic', usage: '.gpic', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      try {
        const url = await ctx.sock.profilePictureUrl(ctx.from, 'image');
        await ctx.sock.sendMessage(ctx.from, { image: { url }, caption: '🖼️ Group DP' }, { quoted: ctx.msg });
      } catch { await ctx.reply('🖼️ Group ki koi DP nahi.'); }
    } },
  { cmd: 'stats', aliases: [], category: 'Group', desc: 'Group statistics', usage: '.stats', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const admins = meta.participants.filter((p) => p.admin).length;
      await ctx.reply(`📊 *Group Stats*\n\n👥 Members: ${meta.participants.length}\n👑 Admins: ${admins}\n🙋 Regular: ${meta.participants.length - admins}\n📅 Created: ${new Date(meta.creation * 1000).toLocaleDateString()}\n📝 Desc length: ${(meta.desc || '').length} chars`);
    } },
  { cmd: 'created', aliases: [], category: 'Group', desc: 'Group kab bana', usage: '.created', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      await ctx.reply(`📅 Ye group bana tha: *${new Date(meta.creation * 1000).toLocaleString('ur-PK')}*`);
    } },
  { cmd: 'gowner', aliases: [], category: 'Group', desc: 'Group banane wala kon', usage: '.gowner', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      if (!meta.owner) return ctx.reply('👑 Owner maloom nahi.');
      await ctx.reply(`👑 Group creator: @${meta.owner.split('@')[0]}`, { mentions: [meta.owner] });
    } },
  { cmd: 'whois', aliases: ['memberinfo'], category: 'Group', desc: 'Member ki maloomat', usage: '.whois @user', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const t = targetJid(ctx) || ctx.senderJid;
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const p = meta.participants.find((x) => x.id === t);
      await ctx.reply(`👤 *User Info*\n\n🔢 Number: +${t.split('@')[0]}\n👑 Admin: ${p?.admin ? 'Haan' : 'Nahi'}\n👥 Group mein: ${p ? 'Haan' : 'Nahi'}`, { mentions: [t] });
    } },
  // ---------- 41-50: invite links ----------
  { cmd: 'invite', aliases: ['getlink', 'invitelink2'], category: 'Group', desc: 'Group invite link', usage: '.invite', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { const code = await ctx.sock.groupInviteCode(ctx.from); await ctx.reply(`🔗 *Invite Link:*\nhttps://chat.whatsapp.com/${code}`); }
      catch (e) { await ctx.reply('❌ Link na mil saka.'); }
    } },
  { cmd: 'link', aliases: [], category: 'Group', desc: 'Invite link (short)', usage: '.link', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { const code = await ctx.sock.groupInviteCode(ctx.from); await ctx.reply(`https://chat.whatsapp.com/${code}`); }
      catch (e) { await ctx.reply('❌ Link na mil saka.'); }
    } },
  { cmd: 'revoke', aliases: ['resetlink'], category: 'Group', desc: 'Purana link khatam karo', usage: '.revoke', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupRevokeInvite(ctx.from); await ctx.reply('🔄 Purana invite link *revoke* kar diya.'); }
      catch (e) { await ctx.reply('❌ Revoke na ho saka.'); }
    } },
  { cmd: 'newlink', aliases: [], category: 'Group', desc: 'Naya invite link banao', usage: '.newlink', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { await ctx.sock.groupRevokeInvite(ctx.from); const code = await ctx.sock.groupInviteCode(ctx.from); await ctx.reply(`🔗 *Naya Invite Link:*\nhttps://chat.whatsapp.com/${code}`); }
      catch (e) { await ctx.reply('❌ Naya link na ban saka.'); }
    } },
  { cmd: 'checklink', aliases: [], category: 'Group', desc: 'Current link check karo', usage: '.checklink', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try { const code = await ctx.sock.groupInviteCode(ctx.from); await ctx.reply(`✅ Active link:\nhttps://chat.whatsapp.com/${code}`); }
      catch (e) { await ctx.reply('❌ Link check na ho saka.'); }
    } },
  { cmd: 'inviteinfo', aliases: [], category: 'Group', desc: 'Invite code se group info', usage: '.inviteinfo <code/link>', owner: false,
    run: async (ctx) => {
      const raw = ctx.args[0];
      if (!raw) return ctx.reply('🔗 Code ya link dein: `.inviteinfo AbCdEfGh`');
      const code = raw.split('/').pop();
      try {
        const info = await ctx.sock.groupGetInviteInfo(code);
        await ctx.reply(`🔍 *Invite Info*\n\n👥 Naam: ${info.subject}\n🆔 ID: ${info.id}\n👤 Members: ${info.size || '?'}\n📅 Bana: ${info.creation ? new Date(info.creation * 1000).toLocaleDateString() : '?'}`);
      } catch { await ctx.reply('❌ Ghalat ya expire code.'); }
    } },
  { cmd: 'join', aliases: [], category: 'Group', desc: 'Invite link se group join karo', usage: '.join <invite-link>', owner: true,
    run: async (ctx) => {
      const raw = ctx.args[0];
      if (!raw) return ctx.reply('🔗 Link dein: `.join https://chat.whatsapp.com/XXXX`');
      const code = raw.split('/').pop();
      try { const jid = await ctx.sock.groupAcceptInvite(code); await ctx.reply(`✅ Group join kar liya: ${jid}`); }
      catch (e) { await ctx.reply('❌ Join na ho saka.'); }
    } },
  { cmd: 'leave', aliases: [], category: 'Group', desc: 'Group se niklo', usage: '.leave', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      if (!(await needGroupAdmin(ctx))) return;
      await ctx.reply('👋 Allah Hafiz! Bot group chhor raha hai.');
      try { await ctx.sock.groupLeave(ctx.from); } catch {}
    } },
  { cmd: 'creategroup', aliases: [], category: 'Group', desc: 'Naya group banao', usage: '.creategroup <naam>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx)) && !ctx.isOwner) return;
      if (!ctx.text) return ctx.reply('✏️ Naam likhein: `.creategroup Mera Group`');
      try { const g = await ctx.sock.groupCreate(ctx.text, []); await ctx.reply(`✅ Group ban gaya!\n🆔 ${g.id}\n🔗 Link ke liye group mein `.invite` likhein.`); }
      catch (e) { await ctx.reply('❌ Group na ban saka.'); }
    } },
  { cmd: 'glist', aliases: ['grouplist'], category: 'Group', desc: 'Bot kin groups mein hai', usage: '.glist', owner: false,
    run: async (ctx) => {
      try {
        const gs = await ctx.sock.groupFetchAllParticipating();
        const list = Object.values(gs);
        let t = `👥 *Bot ke Groups* (${list.length})\n\n`;
        list.forEach((g, i) => { t += `${i + 1}. ${g.subject} — ${g.participants.length} members\n`; });
        await ctx.reply(t || 'Koi group nahi.');
      } catch { await ctx.reply('❌ List na mil saki.'); }
    } },
  // ---------- 51-60: join requests ----------
  { cmd: 'requests', aliases: [], category: 'Group', desc: 'Join requests dekho', usage: '.requests', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try {
        const req = await ctx.sock.groupRequestParticipantsList(ctx.from);
        if (!req.length) return ctx.reply('✅ Koi pending request nahi.');
        let t = `📥 *Pending Requests* (${req.length})\n\n`;
        req.forEach((r, i) => { t += `${i + 1}. @${r.jid.split('@')[0]}\n`; });
        await ctx.sock.sendMessage(ctx.from, { text: t, mentions: req.map((r) => r.jid) }, { quoted: ctx.msg });
      } catch { await ctx.reply('❌ Requests na mil sakin (approval mode off ho sakta hai).'); }
    } },
  { cmd: 'approve', aliases: [], category: 'Group', desc: 'Request approve karo', usage: '.approve @user / number', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 `.approve @user` ya number dein.');
      try { await ctx.sock.groupRequestParticipantsUpdate(ctx.from, [t], 'approve'); await ctx.reply(`✅ @${t.split('@')[0]} approve ho gaya.`, { mentions: [t] }); }
      catch (e) { await ctx.reply('❌ Approve na ho saka.'); }
    } },
  { cmd: 'reject', aliases: [], category: 'Group', desc: 'Request reject karo', usage: '.reject @user', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 `.reject @user`');
      try { await ctx.sock.groupRequestParticipantsUpdate(ctx.from, [t], 'reject'); await ctx.reply(`🚫 @${t.split('@')[0]} reject.`, { mentions: [t] }); }
      catch (e) { await ctx.reply('❌ Reject na ho saka.'); }
    } },
  { cmd: 'approveall', aliases: ['acceptall'], category: 'Group', desc: 'Sab requests approve', usage: '.approveall', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try {
        const req = await ctx.sock.groupRequestParticipantsList(ctx.from);
        if (!req.length) return ctx.reply('✅ Koi request nahi.');
        await ctx.sock.groupRequestParticipantsUpdate(ctx.from, req.map((r) => r.jid), 'approve');
        await ctx.reply(`✅ ${req.length} requests approve kar din.`);
      } catch { await ctx.reply('❌ Approve na ho sake.'); }
    } },
  { cmd: 'rejectall', aliases: [], category: 'Group', desc: 'Sab requests reject', usage: '.rejectall', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      try {
        const req = await ctx.sock.groupRequestParticipantsList(ctx.from);
        if (!req.length) return ctx.reply('✅ Koi request nahi.');
        await ctx.sock.groupRequestParticipantsUpdate(ctx.from, req.map((r) => r.jid), 'reject');
        await ctx.reply(`🚫 ${req.length} requests reject kar din.`);
      } catch { await ctx.reply('❌ Reject na ho sake.'); }
    } },
  { cmd: 'poll', aliases: ['pollcreate'], category: 'Group', desc: 'Group mein poll banao', usage: '.poll Sawal | opt1 | opt2', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const parts = ctx.text.split('|').map((s) => s.trim()).filter(Boolean);
      if (parts.length < 3) return ctx.reply('🗳️ `.poll Kya khayein? | Biryani | Karahi`');
      try { await ctx.sock.sendMessage(ctx.from, { poll: { name: parts[0], values: parts.slice(1, 13), selectableCount: 1 } }, { quoted: ctx.msg }); }
      catch (e) { await ctx.reply('❌ Poll na ban saka.'); }
    } },
  { cmd: 'del', aliases: ['delete2'], category: 'Group', desc: 'Reply wala message delete karo', usage: '.del (reply)', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const ci = ctxInfo(ctx);
      if (!ci.stanzaId) return ctx.reply('💬 Kisi message par reply karke `.del` likhein.');
      try {
        await ctx.sock.sendMessage(ctx.from, { delete: { remoteJid: ctx.from, fromMe: false, id: ci.stanzaId, participant: ci.participant } });
      } catch { await ctx.reply('❌ Delete na ho saka.'); }
    } },
  { cmd: 'botadmin', aliases: ['checkadmin'], category: 'Group', desc: 'Kya bot admin hai?', usage: '.botadmin', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const me = ctx.sock.user?.id;
      const p = meta.participants.find((x) => x.id === me);
      await ctx.reply(p?.admin ? '✅ Bot *admin* hai.' : '❌ Bot admin *nahi* hai. Admin banayein taake sab features chalein.');
    } },
  { cmd: 'amadmin', aliases: [], category: 'Group', desc: 'Kya main admin hun?', usage: '.amadmin', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const { ok } = await needAdmin(ctx);
      await ctx.reply(ok ? '✅ Aap *admin* hain.' : '❌ Aap admin nahi hain.');
    } },
  { cmd: 'isadmin', aliases: [], category: 'Group', desc: 'Kya ye user admin hai?', usage: '.isadmin @user', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const t = targetJid(ctx);
      if (!t) return ctx.reply('👤 `.isadmin @user`');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const p = meta.participants.find((x) => x.id === t);
      await ctx.reply(p?.admin ? `✅ @${t.split('@')[0]} *admin* hai.` : `❌ @${t.split('@')[0]} admin nahi.`, { mentions: [t] });
    } },
  // ---------- 61-70: auto-mod toggles ----------
  { cmd: 'antilink', aliases: [], category: 'Group', desc: 'Link protection on/off', usage: '.antilink on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { antilink.add(ctx.from); await ctx.reply('🔗 *Antilink ON* — links par action hoga.'); }
      else if (a === 'off') { antilink.delete(ctx.from); await ctx.reply('🔗 *Antilink OFF*.'); }
      else await ctx.reply(`🔗 Antilink: *${antilink.has(ctx.from) ? 'ON' : 'OFF'}*\n`.concat('`.antilink on` / `.antilink off`'));
    } },
  { cmd: 'antiforeign', aliases: [], category: 'Group', desc: 'Ghair-mulki numbers par nazar', usage: '.antiforeign on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { antiforeignOn.add(ctx.from); await ctx.reply('🌍 *Antiforeign ON*.'); }
      else if (a === 'off') { antiforeignOn.delete(ctx.from); await ctx.reply('🌍 *Antiforeign OFF*.'); }
      else await ctx.reply(`🌍 Antiforeign: *${antiforeignOn.has(ctx.from) ? 'ON' : 'OFF'}*`);
    } },
  { cmd: 'antisticker', aliases: [], category: 'Group', desc: 'Sticker protection on/off', usage: '.antisticker on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { antistickerOn.add(ctx.from); await ctx.reply('🟨 *Antisticker ON*.'); }
      else if (a === 'off') { antistickerOn.delete(ctx.from); await ctx.reply('🟨 *Antisticker OFF*.'); }
      else await ctx.reply(`🟨 Antisticker: *${antistickerOn.has(ctx.from) ? 'ON' : 'OFF'}*`);
    } },
  { cmd: 'antiporn', aliases: [], category: 'Group', desc: 'Gandi cheezon se hifazat', usage: '.antiporn on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { antipornOn.add(ctx.from); await ctx.reply('🛡️ *Antiporn ON*.'); }
      else if (a === 'off') { antipornOn.delete(ctx.from); await ctx.reply('🛡️ *Antiporn OFF*.'); }
      else await ctx.reply(`🛡️ Antiporn: *${antipornOn.has(ctx.from) ? 'ON' : 'OFF'}*`);
    } },
  { cmd: 'filter', aliases: [], category: 'Group', desc: 'Gali word-filter on/off', usage: '.filter on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { filterOn.add(ctx.from); await ctx.reply('🤬 *Word-filter ON*.'); }
      else if (a === 'off') { filterOn.delete(ctx.from); await ctx.reply('🤬 *Word-filter OFF*.'); }
      else await ctx.reply(`🤬 Word-filter: *${filterOn.has(ctx.from) ? 'ON' : 'OFF'}*`);
    } },
  { cmd: 'addfilter', aliases: [], category: 'Group', desc: 'Filter mein lafz add karo', usage: '.addfilter <lafz>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Lafz likhein: `.addfilter gali`');
      filtersMap[ctx.from] = filtersMap[ctx.from] || [];
      filtersMap[ctx.from].push(ctx.text.toLowerCase());
      await ctx.reply(`✅ Filter mein add: *${ctx.text}*`);
    } },
  { cmd: 'delfilter', aliases: [], category: 'Group', desc: 'Filter se lafz hatao', usage: '.delfilter <lafz>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      filtersMap[ctx.from] = (filtersMap[ctx.from] || []).filter((w) => w !== ctx.text.toLowerCase());
      await ctx.reply(`🧹 Filter se hataya: *${ctx.text}*`);
    } },
  { cmd: 'filters', aliases: [], category: 'Group', desc: 'Filter list dekho', usage: '.filters', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const f = filtersMap[ctx.from] || [];
      await ctx.reply(f.length ? `🤬 *Filtered words:*\n${f.map((w, i) => `${i + 1}. ${w}`).join('\n')}` : '🤬 Koi filtered lafz nahi.');
    } },
  { cmd: 'modstatus', aliases: [], category: 'Group', desc: 'Sab protections ka status', usage: '.modstatus', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const g = ctx.from;
      await ctx.reply(`🛡️ *Moderation Status*\n\n🔗 Antilink: ${antilink.has(g) ? 'ON' : 'OFF'}\n🌍 Antiforeign: ${antiforeignOn.has(g) ? 'ON' : 'OFF'}\n🟨 Antisticker: ${antistickerOn.has(g) ? 'ON' : 'OFF'}\n🛡️ Antiporn: ${antipornOn.has(g) ? 'ON' : 'OFF'}\n🤬 Word-filter: ${filterOn.has(g) ? 'ON' : 'OFF'}\n👋 Welcome: ${welcomeOn.has(g) ? 'ON' : 'OFF'}\n👋 Goodbye: ${goodbyeOn.has(g) ? 'ON' : 'OFF'}`);
    } },
  { cmd: 'kickall', aliases: [], category: 'Group', desc: 'Sab non-admins ko nikalo (owner)', usage: '.kickall confirm', owner: true,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      if (ctx.args[0] !== 'confirm') return ctx.reply('⚠️ *Khatarnak!* Pakka to `.kickall confirm` likhein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const me = ctx.sock.user?.id;
      const targets = meta.participants.filter((p) => !p.admin && p.id !== me).map((p) => p.id);
      if (!targets.length) return ctx.reply('✅ Koi non-admin nahi.');
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, targets, 'remove'); await ctx.reply(`🧹 ${targets.length} members nikal diye.`); }
      catch (e) { await ctx.reply('❌ Kickall na ho saka.'); }
    } },
  // ---------- 71-80: welcome / goodbye / rules / notes ----------
  { cmd: 'welcome', aliases: [], category: 'Group', desc: 'Welcome message on/off', usage: '.welcome on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { welcomeOn.add(ctx.from); await ctx.reply('👋 *Welcome ON*.'); }
      else if (a === 'off') { welcomeOn.delete(ctx.from); await ctx.reply('👋 *Welcome OFF*.'); }
      else await ctx.reply(`👋 Welcome: *${welcomeOn.has(ctx.from) ? 'ON' : 'OFF'}*`);
    } },
  { cmd: 'goodbye', aliases: [], category: 'Group', desc: 'Goodbye message on/off', usage: '.goodbye on/off', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const a = (ctx.args[0] || '').toLowerCase();
      if (a === 'on') { goodbyeOn.add(ctx.from); await ctx.reply('👋 *Goodbye ON*.'); }
      else if (a === 'off') { goodbyeOn.delete(ctx.from); await ctx.reply('👋 *Goodbye OFF*.'); }
      else await ctx.reply(`👋 Goodbye: *${goodbyeOn.has(ctx.from) ? 'ON' : 'OFF'}*`);
    } },
  { cmd: 'setwelcome', aliases: [], category: 'Group', desc: 'Welcome text set karo', usage: '.setwelcome <text> (@user)', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Text likhein, @user = naya member.');
      welcomeMsg[ctx.from] = ctx.text;
      welcomeOn.add(ctx.from);
      await ctx.reply('👋 Welcome message set + ON.');
    } },
  { cmd: 'setgoodbye', aliases: [], category: 'Group', desc: 'Goodbye text set karo', usage: '.setgoodbye <text>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Text likhein.');
      goodbyeMsg[ctx.from] = ctx.text;
      goodbyeOn.add(ctx.from);
      await ctx.reply('👋 Goodbye message set + ON.');
    } },
  { cmd: 'greet', aliases: [], category: 'Group', desc: 'Welcome message abhi bhejo', usage: '.greet @user', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const t = targetJid(ctx) || ctx.senderJid;
      const msg = (welcomeMsg[ctx.from] || '👋 Welcome @user! Group mein khush aamdeed. 🎉').replace('@user', `@${t.split('@')[0]}`);
      await ctx.sock.sendMessage(ctx.from, { text: msg, mentions: [t] }, { quoted: ctx.msg });
    } },
  { cmd: 'bye', aliases: [], category: 'Group', desc: 'Goodbye message abhi bhejo', usage: '.bye @user', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const t = targetJid(ctx) || ctx.senderJid;
      const msg = (goodbyeMsg[ctx.from] || '👋 @user Allah Hafiz!').replace('@user', `@${t.split('@')[0]}`);
      await ctx.sock.sendMessage(ctx.from, { text: msg, mentions: [t] }, { quoted: ctx.msg });
    } },
  { cmd: 'rules2', aliases: ['rule'], category: 'Group', desc: 'Group ke usool dekho', usage: '.rules', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      await ctx.reply(`📜 *Group Rules*\n\n${rulesMap[ctx.from] || 'Koi rules set nahi. Admin `.setrules` se banayein.'}`);
    } },
  { cmd: 'setrules', aliases: [], category: 'Group', desc: 'Group rules set karo', usage: '.setrules <text>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      if (!ctx.text) return ctx.reply('✏️ Rules likhein.');
      rulesMap[ctx.from] = ctx.text;
      await ctx.reply('📜 Rules set ho gaye.');
    } },
  { cmd: 'notes', aliases: [], category: 'Group', desc: 'Saved notes ki list', usage: '.notes', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const n = notesMap[ctx.from] || {};
      const keys = Object.keys(n);
      await ctx.reply(keys.length ? `🗒️ *Notes:*\n${keys.map((k, i) => `${i + 1}. ${k}`).join('\n')}\n\nPadhne ke liye: \`.getnote naam\`` : '🗒️ Koi note nahi. `.addnote naam text` se banayein.');
    } },
  { cmd: 'addnote', aliases: [], category: 'Group', desc: 'Note save karo', usage: '.addnote <naam> <text>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const [name, ...rest] = ctx.args;
      if (!name || !rest.length) return ctx.reply('✏️ `.addnote salam Assalam o Alaikum`');
      notesMap[ctx.from] = notesMap[ctx.from] || {};
      notesMap[ctx.from][name.toLowerCase()] = rest.join(' ');
      await ctx.reply(`🗒️ Note *${name}* save ho gaya.`);
    } },
  // ---------- 81-90: notes/afk/broadcast ----------
  { cmd: 'getnote', aliases: ['note'], category: 'Group', desc: 'Note parho', usage: '.getnote <naam>', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const n = (notesMap[ctx.from] || {})[(ctx.args[0] || '').toLowerCase()];
      if (!n) return ctx.reply('🗒️ Ye note nahi mila.');
      await ctx.reply(`🗒️ *${ctx.args[0]}:*\n${n}`);
    } },
  { cmd: 'delnote', aliases: [], category: 'Group', desc: 'Note delete karo', usage: '.delnote <naam>', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const k = (ctx.args[0] || '').toLowerCase();
      if (notesMap[ctx.from]?.[k]) { delete notesMap[ctx.from][k]; await ctx.reply(`🧹 Note *${k}* delete.`); }
      else await ctx.reply('🗒️ Ye note nahi mila.');
    } },
  { cmd: 'afk', aliases: [], category: 'Group', desc: 'AFK lagao', usage: '.afk [wajah]', owner: false,
    run: async (ctx) => {
      afkMap[ctx.senderJid] = { reason: ctx.text || 'Koi wajah nahi', since: Date.now() };
      await ctx.reply(`💤 Aap *AFK* hain.\nWajah: ${afkMap[ctx.senderJid].reason}`);
    } },
  { cmd: 'unafk', aliases: [], category: 'Group', desc: 'AFK khatam', usage: '.unafk', owner: false,
    run: async (ctx) => {
      if (afkMap[ctx.senderJid]) { delete afkMap[ctx.senderJid]; await ctx.reply('✅ Welcome back! AFK khatam.'); }
      else await ctx.reply('Aap AFK nahi thay.');
    } },
  { cmd: 'afklist', aliases: [], category: 'Group', desc: 'Kon AFK hai', usage: '.afklist', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      const keys = Object.keys(afkMap);
      if (!keys.length) return ctx.reply('💤 Koi AFK nahi.');
      let t = '💤 *AFK List:*\n\n';
      keys.forEach((k, i) => { t += `${i + 1}. @${k.split('@')[0]} — ${afkMap[k].reason}\n`; });
      await ctx.sock.sendMessage(ctx.from, { text: t, mentions: keys }, { quoted: ctx.msg });
    } },
  { cmd: 'broadcast', aliases: ['bc'], category: 'Group', desc: 'Sab groups mein paigham (owner)', usage: '.broadcast <text>', owner: true,
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('📢 Text likhein: `.broadcast Salam`');
      try {
        const gs = await ctx.sock.groupFetchAllParticipating();
        const ids = Object.keys(gs);
        let n = 0;
        for (const id of ids) {
          try { await ctx.sock.sendMessage(id, { text: `📢 *${ctx.config.botName} Broadcast*\n\n${ctx.text}` }); n++; await new Promise((r) => setTimeout(r, 800)); } catch {}
        }
        await ctx.reply(`✅ Broadcast ${n} groups mein bhej diya.`);
      } catch { await ctx.reply('❌ Broadcast na ho saka.'); }
    } },
  { cmd: 'promoteall', aliases: [], category: 'Group', desc: 'Sab ko admin (owner)', usage: '.promoteall confirm', owner: true,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      if (ctx.args[0] !== 'confirm') return ctx.reply('⚠️ Pakka? `.promoteall confirm`');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const targets = meta.participants.filter((p) => !p.admin).map((p) => p.id);
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, targets, 'promote'); await ctx.reply(`👑 ${targets.length} members admin bana diye.`); }
      catch { await ctx.reply('❌ Na ho saka.'); }
    } },
  { cmd: 'demoteall', aliases: [], category: 'Group', desc: 'Sab se admin wapas (owner)', usage: '.demoteall confirm', owner: true,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      if (ctx.args[0] !== 'confirm') return ctx.reply('⚠️ Pakka? `.demoteall confirm`');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const me = ctx.sock.user?.id;
      const targets = meta.participants.filter((p) => p.admin && p.admin !== 'superadmin' && p.id !== me).map((p) => p.id);
      try { await ctx.sock.groupParticipantsUpdate(ctx.from, targets, 'demote'); await ctx.reply(`⬇️ ${targets.length} admins hata diye.`); }
      catch { await ctx.reply('❌ Na ho saka.'); }
    } },
  { cmd: 'remind2x', aliases: [], category: 'Group', desc: 'Yaad-dihani set karo', usage: '.remind 10 <text>', owner: false,
    run: async (ctx) => {
      const mins = parseInt(ctx.args[0]);
      const msg = ctx.args.slice(1).join(' ');
      if (!mins || !msg) return ctx.reply('⏰ `.remind 10 Namaz parh lo`');
      await ctx.reply(`⏰ ${mins} minute baad yaad dilayenge.`);
      setTimeout(async () => {
        try { await ctx.sock.sendMessage(ctx.from, { text: `⏰ *Reminder:* ${msg}`, mentions: [ctx.senderJid] }); } catch {}
      }, mins * 60000);
    } },
  { cmd: 'alert', aliases: [], category: 'Group', desc: 'Admins ko alert bhejo', usage: '.alert <message>', owner: false,
    run: async (ctx) => {
      if (!isGroup(ctx)) return ctx.reply('👥 Sirf group mein.');
      if (!ctx.text) return ctx.reply('✏️ Message likhein.');
      const meta = await ctx.sock.groupMetadata(ctx.from);
      const admins = meta.participants.filter((p) => p.admin).map((p) => p.id);
      await ctx.sock.sendMessage(ctx.from, { text: `🚨 *ALERT:* ${ctx.text}`, mentions: admins }, { quoted: ctx.msg });
    } },
  // ---------- 91-100: presence / tools ----------
  { cmd: 'typing', aliases: [], category: 'Group', desc: 'Typing dikhao', usage: '.typing', owner: false,
    run: async (ctx) => {
      try { await ctx.sock.sendPresenceUpdate('composing', ctx.from); await ctx.reply('⌨️ Typing... (5 sec)'); await new Promise((r) => setTimeout(r, 5000)); await ctx.sock.sendPresenceUpdate('paused', ctx.from); }
      catch { await ctx.reply('❌ Na ho saka.'); }
    } },
  { cmd: 'recording', aliases: [], category: 'Group', desc: 'Recording dikhao', usage: '.recording', owner: false,
    run: async (ctx) => {
      try { await ctx.sock.sendPresenceUpdate('recording', ctx.from); await ctx.reply('🎙️ Recording... (5 sec)'); await new Promise((r) => setTimeout(r, 5000)); await ctx.sock.sendPresenceUpdate('paused', ctx.from); }
      catch { await ctx.reply('❌ Na ho saka.'); }
    } },
  { cmd: 'presence', aliases: [], category: 'Group', desc: 'Online status set karo', usage: '.presence online/offline/typing', owner: false,
    run: async (ctx) => {
      const a = (ctx.args[0] || '').toLowerCase();
      const map = { online: 'available', offline: 'unavailable', typing: 'composing' };
      if (!map[a]) return ctx.reply('`.presence online/offline/typing`');
      try { await ctx.sock.sendPresenceUpdate(map[a], ctx.from); await ctx.reply(`✅ Presence: *${a}*`); }
      catch { await ctx.reply('❌ Na ho saka.'); }
    } },
  { cmd: 'vcard', aliases: [], category: 'Group', desc: 'Owner ka contact bhejo', usage: '.vcard', owner: false,
    run: async (ctx) => {
      const num = ctx.config.ownerNumber;
      const v = `BEGIN:VCARD\nVERSION:3.0\nFN:${ctx.config.ownerName}\nTEL;type=CELL;type=VOICE;waid=${num}:+${num}\nEND:VCARD`;
      await ctx.sock.sendMessage(ctx.from, { contacts: { displayName: ctx.config.ownerName, contacts: [{ vcard: v }] } }, { quoted: ctx.msg });
    } },
  { cmd: 'wiki2', aliases: [], category: 'Group', desc: 'Wikipedia se maloomat', usage: '.wiki <topic>', owner: false,
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('🔍 `.wiki Pakistan`');
      try {
        const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(ctx.text)}`);
        const j = await r.json();
        if (j.extract) await ctx.reply(`📚 *${j.title}*\n\n${j.extract.slice(0, 900)}`);
        else await ctx.reply('❌ Kuch nahi mila.');
      } catch { await ctx.reply('❌ Wikipedia se rabta na ho saka.'); }
    } },
  { cmd: 'currency2', aliases: [], category: 'Group', desc: 'Currency converter', usage: '.currency 100 USD PKR', owner: false,
    run: async (ctx) => {
      const [amt, from, to] = ctx.args;
      if (!amt || !from || !to) return ctx.reply('💱 `.currency 100 USD PKR`');
      try {
        const r = await fetch(`https://open.er-api.com/v6/latest/${from.toUpperCase()}`);
        const j = await r.json();
        const rate = j.rates?.[to.toUpperCase()];
        if (!rate) return ctx.reply('❌ Currency ghalat.');
        await ctx.reply(`💱 *${amt} ${from.toUpperCase()}* = *${(parseFloat(amt) * rate).toFixed(2)} ${to.toUpperCase()}*\nRate: 1 ${from.toUpperCase()} = ${rate} ${to.toUpperCase()}`);
      } catch { await ctx.reply('❌ Rate na mil saka.'); }
    } },
  { cmd: 'prayer2', aliases: [], category: 'Group', desc: 'Namaz ke auqat', usage: '.prayer [city]', owner: false,
    run: async (ctx) => {
      const city = ctx.text || 'Lahore';
      try {
        const r = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=Pakistan&method=2`);
        const j = await r.json();
        const t = j.data?.timings;
        if (!t) return ctx.reply('❌ Auqat na mil sake.');
        await ctx.reply(`🕌 *Namaz Times — ${city}*\n\n🌅 Fajr: ${t.Fajr}\n🌞 Sunrise: ${t.Sunrise}\n☀️ Dhuhr: ${t.Dhuhr}\n🌤️ Asr: ${t.Asr}\n🌇 Maghrib: ${t.Maghrib}\n🌙 Isha: ${t.Isha}`);
      } catch { await ctx.reply('❌ Rabta na ho saka.'); }
    } },
  { cmd: 'limits', aliases: [], category: 'Group', desc: 'WhatsApp group limits', usage: '.limits', owner: false,
    run: async (ctx) => {
      await ctx.reply('📏 *WhatsApp Group Limits*\n\n👥 Members: 1024 tak\n👑 Admins: jitne chaho\n📝 Group name: 100 chars\n📄 Description: 512 chars\n⏳ Disappearing: 24h / 7d / 90d');
    } },
  { cmd: 'ghelp', aliases: [], category: 'Group', desc: 'Group commands ki list', usage: '.ghelp', owner: false,
    run: async (ctx) => {
      const list = (ctx.categories()['Group'] || []).map((c) => `• \`${ctx.prefix}${c.cmd}\` — ${c.desc}`);
      await ctx.reply(`👥 *Group Commands* (${list.length})\n\n${list.join('\n')}`);
    } },
  { cmd: 'sendto', aliases: [], category: 'Group', desc: 'Reply wala text doosri jagah bhejo', usage: '.sendto <jid> (reply)', owner: false,
    run: async (ctx) => {
      if (!(await needGroupAdmin(ctx))) return;
      const jid = ctx.args[0];
      const q = quotedText(ctx);
      if (!jid || !q) return ctx.reply('📤 `.sendto groupJID` + kisi message par reply karein.');
      try { await ctx.sock.sendMessage(jid, { text: `📤 *Forwarded:*\n\n${q}` }); await ctx.reply('✅ Bhej diya.'); }
      catch { await ctx.reply('❌ Bhej na saka. JID check karein.'); }
    } },
];

module.exports._state = { antilink, welcomeOn, goodbyeOn, welcomeMsg, goodbyeMsg, rulesMap, notesMap, warnsMap, afkMap, antiforeignOn, antistickerOn, antipornOn, filterOn, filtersMap };
