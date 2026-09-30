// ============================================================
// IMRAN MD BOT — command registry (150 core + 519 ported = 669)
// Aggregates every category file into one lookup table.
// ============================================================

const general = require('./general');
const fun = require('./fun');
const tools = require('./tools');
const downloaders = require('./downloaders');
const movies = require('./movies');
const islamic = require('./islamic');
const aifun = require('./aifun');
const ported = require('./ported');

const allCommands = [
  ...general,
  ...fun,
  ...tools,
  ...downloaders,
  ...movies,
  ...islamic,
  ...aifun,
  ...ported,
];

// Guard against accidental duplicates at load time.
const seen = new Set();
for (const cmd of allCommands) {
  if (seen.has(cmd.name)) throw new Error(`Duplicate command name: ${cmd.name}`);
  seen.add(cmd.name);
}

// Alias lookup (ported commands may carry aliases).
const aliasMap = new Map();
for (const cmd of allCommands) {
  for (const a of (cmd.aliases || [])) {
    const key = String(a).toLowerCase();
    if (seen.has(key)) throw new Error(`Duplicate alias (collides with command name): ${a}`);
    if (aliasMap.has(key)) throw new Error(`Duplicate alias: ${a}`);
    aliasMap.set(key, cmd);
  }
}

// Case-insensitive lookup; strips a leading dot if present.
function findCommand(name) {
  const key = String(name || '').toLowerCase().replace(/^\./, '');
  return allCommands.find((c) => c.name === key) || aliasMap.get(key) || null;
}

module.exports = { allCommands, findCommand };
