const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const os = require('os');

const BOOT = Date.now();
function fmtUp(sec) {
  sec = Math.floor(sec);
  const d = Math.floor(sec / 86400), h = Math.floor(sec % 86400 / 3600),
        m = Math.floor(sec % 3600 / 60), s = sec % 60;
  return `${d}d ${h}h ${m}m ${s}s`;
}
const MORSE = {A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',' ':'/'};
const RMORSE = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));
const EMOJI_L = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => { EMOJI_L[c] = String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 97); });
'0123456789'.split('').forEach(c => { EMOJI_L[c] = c + '️⃣'; });
EMOJI_L[' '] = '   ';
function need(t, u) { return t && t.trim() ? null : `Usage: ${u}`; }

module.exports = [
{
  cmd: 'menu',
  category: 'General',
  desc: 'Show IMRAN MD BOT menu with photo',
  usage: '.menu',
  run: async (ctx) => {
    const fs = require('fs');
    const path = require('path');
    const cats = ctx.categories();
    let cap = `*🤖 ${ctx.config.botName}*\n👑 Owner: ${ctx.config.ownerName} (+${ctx.config.ownerNumber})\n📌 Total Commands: ${ctx.commands.length}\n\n`;
    for (const [cat, list] of Object.entries(cats)) {
      cap += `*${cat}* (${list.length})\n` + list.map(c => `  ${ctx.prefix}${c.cmd}`).join(' ') + `\n\n`;
    }
    cap += `_Type ${ctx.prefix}help <command> for details_`;
    const img = path.join(__dirname, '..', 'public', 'menu.jpg');
    if (fs.existsSync(img)) {
      await ctx.sock.sendMessage(ctx.from, { image: fs.readFileSync(img), caption: cap }, { quoted: ctx.msg });
    } else {
      await ctx.reply(cap);
    }
  }
},
{
  cmd: 'help',
  aliases: ['h'],
  category: 'General',
  desc: 'Get details of any command',
  usage: '.help ping',
  run: async (ctx) => {
    const q = (ctx.args[0] || '').toLowerCase();
    if (!q) {
      const cats = ctx.categories();
      let t = `*🤖 ${ctx.config.botName} — Help*\n\n`;
      for (const [cat, list] of Object.entries(cats)) t += `*${cat}:* ${list.length} commands\n`;
      t += `\n_Type ${ctx.prefix}help <command> for details_\n_Type ${ctx.prefix}menu for full menu_`;
      return ctx.reply(t);
    }
    const c = ctx.commands.find(x => x.cmd === q || (x.aliases || []).includes(q));
    if (!c) return ctx.reply(`❌ Command *${q}* nahi mila.`);
    await ctx.reply(`*${ctx.prefix}${c.cmd}*\n📂 ${c.category}\n📝 ${c.desc}\n▶️ ${c.usage}${c.owner ? '\n👑 Owner only' : ''}`);
  }
},
{
  cmd: 'ping',
  aliases: ['p'],
  category: 'General',
  desc: 'Check bot response speed',
  usage: '.ping',
  run: async (ctx) => {
    const t0 = Date.now();
    await ctx.reply(`🏓 *Pong!*\n⚡ Speed: ${Date.now() - t0}ms`);
  }
},
{
  cmd: 'alive',
  category: 'General',
  desc: 'Check if bot is online',
  usage: '.alive',
  run: async (ctx) => {
    await ctx.reply(`✅ *${ctx.config.botName} is ALIVE!*\n⏱ Uptime: ${fmtUp(process.uptime())}\n📌 Commands: ${ctx.commands.length}`);
  }
},
{
  cmd: 'owner',
  aliases: ['own'],
  category: 'General',
  desc: 'Show bot owner info',
  usage: '.owner',
  run: async (ctx) => {
    await ctx.reply(`👑 *Owner:* ${ctx.config.ownerName}\n📞 *Number:* +${ctx.config.ownerNumber}\n🤖 *Bot:* ${ctx.config.botName}`);
  }
},
{
  cmd: 'botinfo',
  aliases: ['binfo'],
  category: 'General',
  desc: 'Show bot information',
  usage: '.botinfo',
  run: async (ctx) => {
    let ver = '1.0.0';
    try { ver = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')).version; } catch {}
    await ctx.reply(`🤖 *${ctx.config.botName}*\n📌 Version: ${ver}\n👑 Owner: ${ctx.config.ownerName}\n⚙️ Commands: ${ctx.commands.length}\n⏱ Uptime: ${fmtUp(process.uptime())}\n💻 Platform: ${os.platform()}`);
  }
},
{
  cmd: 'runtime',
  category: 'General',
  desc: 'Show bot runtime',
  usage: '.runtime',
  run: async (ctx) => { await ctx.reply(`⏱ *Runtime:* ${fmtUp(process.uptime())}`); }
},
{
  cmd: 'speed',
  category: 'General',
  desc: 'Test bot processing speed',
  usage: '.speed',
  run: async (ctx) => {
    const t0 = Date.now();
    let x = 0; for (let i = 0; i < 1000000; i++) x += i;
    await ctx.reply(`⚡ *Processing speed:* ${Date.now() - t0}ms\n(checksum: ${x})`);
  }
},
{
  cmd: 'date',
  category: 'General',
  desc: 'Show today date',
  usage: '.date',
  run: async (ctx) => { await ctx.reply(`📅 *Date:* ${new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`); }
},
{
  cmd: 'time',
  category: 'General',
  desc: 'Show current time',
  usage: '.time',
  run: async (ctx) => { await ctx.reply(`🕒 *Time:* ${new Date().toLocaleTimeString('en-GB')}`); }
},
{
  cmd: 'day2',
  category: 'General',
  desc: 'Show today day name',
  usage: '.day',
  run: async (ctx) => { await ctx.reply(`📆 *Day:* ${new Date().toLocaleDateString('en-US', { weekday: 'long' })}`); }
},
{
  cmd: 'weekday',
  category: 'General',
  desc: 'Show full weekday info',
  usage: '.weekday',
  run: async (ctx) => {
    const n = new Date();
    await ctx.reply(`📆 *${n.toLocaleDateString('en-US', { weekday: 'long' })}*\n${n.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`);
  }
},
{
  cmd: 'month',
  category: 'General',
  desc: 'Show current month',
  usage: '.month',
  run: async (ctx) => { await ctx.reply(`🗓 *Month:* ${new Date().toLocaleDateString('en-US', { month: 'long' })}`); }
},
{
  cmd: 'year',
  category: 'General',
  desc: 'Show current year',
  usage: '.year',
  run: async (ctx) => { await ctx.reply(`🗓 *Year:* ${new Date().getFullYear()}`); }
},
{
  cmd: 'timestamp',
  aliases: ['ts'],
  category: 'General',
  desc: 'Show current timestamp (ms)',
  usage: '.timestamp',
  run: async (ctx) => { await ctx.reply(`⏱ *Timestamp:* ${Date.now()}`); }
},
{
  cmd: 'unixtime',
  aliases: ['unix'],
  category: 'General',
  desc: 'Show unix time (seconds)',
  usage: '.unixtime',
  run: async (ctx) => { await ctx.reply(`⏱ *Unix time:* ${Math.floor(Date.now() / 1000)}`); }
},
{
  cmd: 'calc',
  category: 'General',
  desc: 'Calculate math expression',
  usage: '.calc 2+2*3',
  run: async (ctx) => {
    const expr = ctx.text.trim();
    const e = need(expr, '.calc 2+2*3'); if (e) return ctx.reply(e);
    if (!/^[0-9+\-*/().\s%^!]+$/.test(expr)) return ctx.reply('❌ Sirf numbers aur + - * / ( ) % likhein.');
    try {
      const val = Function('"use strict";return (' + expr.replace(/\^/g, '**') + ')')();
      if (typeof val !== 'number' || !isFinite(val)) throw new Error('bad');
      await ctx.reply(`🧮 *Result:* ${val}`);
    } catch { await ctx.reply('❌ Calculation error. Expression check karein.'); }
  }
},
{
  cmd: 'id',
  category: 'General',
  desc: 'Show current chat JID',
  usage: '.id',
  run: async (ctx) => { await ctx.reply(`🆔 *Chat ID:*\n${ctx.from}`); }
},
{
  cmd: 'me',
  category: 'General',
  desc: 'Show your number',
  usage: '.me',
  run: async (ctx) => { await ctx.reply(`👤 *Aapka number:* +${ctx.sender}`); }
},
{
  cmd: 'myjid',
  category: 'General',
  desc: 'Show your JID',
  usage: '.myjid',
  run: async (ctx) => { await ctx.reply(`🆔 *Your JID:*\n${ctx.senderJid}`); }
},
{
  cmd: 'chat',
  category: 'General',
  desc: 'Show chat type (group/personal)',
  usage: '.chat',
  run: async (ctx) => {
    const t = ctx.from.endsWith('@g.us') ? '👥 Group chat' : '👤 Personal chat';
    await ctx.reply(`💬 *Chat type:* ${t}`);
  }
},
{
  cmd: 'list',
  aliases: ['cmdlist'],
  category: 'General',
  desc: 'List all command names',
  usage: '.list',
  run: async (ctx) => {
    await ctx.reply(`📜 *All Commands (${ctx.commands.length}):*\n` + ctx.commands.map(c => ctx.prefix + c.cmd).join(', '));
  }
},
{
  cmd: 'totalcmds',
  aliases: ['total'],
  category: 'General',
  desc: 'Show total command count',
  usage: '.totalcmds',
  run: async (ctx) => { await ctx.reply(`📌 *Total Commands:* ${ctx.commands.length}`); }
},
{
  cmd: 'categories',
  aliases: ['cats'],
  category: 'General',
  desc: 'Show command categories',
  usage: '.categories',
  run: async (ctx) => {
    const cats = ctx.categories();
    let t = `📂 *Categories:*\n`;
    for (const [cat, list] of Object.entries(cats)) t += `\n• *${cat}* — ${list.length} commands`;
    await ctx.reply(t);
  }
},
{
  cmd: 'search2',
  aliases: ['find'],
  category: 'General',
  desc: 'Search commands by keyword',
  usage: '.search song',
  run: async (ctx) => {
    const q = ctx.text.trim().toLowerCase();
    const e = need(q, '.search <keyword>'); if (e) return ctx.reply(e);
    const hits = ctx.commands.filter(c => c.cmd.includes(q) || c.desc.toLowerCase().includes(q));
    if (!hits.length) return ctx.reply(`❌ *${q}* se koi command nahi mila.`);
    await ctx.reply(`🔎 *Results for "${q}" (${hits.length}):*\n` + hits.map(c => `${ctx.prefix}${c.cmd} — ${c.desc}`).join('\n'));
  }
},
{
  cmd: 'cmdinfo',
  aliases: ['cinfo'],
  category: 'General',
  desc: 'Full info of a command',
  usage: '.cmdinfo ping',
  run: async (ctx) => {
    const q = (ctx.args[0] || '').toLowerCase();
    const e = need(q, '.cmdinfo <command>'); if (e) return ctx.reply(e);
    const c = ctx.commands.find(x => x.cmd === q || (x.aliases || []).includes(q));
    if (!c) return ctx.reply('❌ Command nahi mila.');
    await ctx.reply(`ℹ️ *${ctx.prefix}${c.cmd}*\n📂 Category: ${c.category}\n📝 ${c.desc}\n▶️ Usage: ${c.usage}\n🔗 Aliases: ${(c.aliases || []).join(', ') || 'none'}\n👑 Owner only: ${c.owner ? 'Yes' : 'No'}`);
  }
},
{
  cmd: 'repo2',
  category: 'General',
  desc: 'Show bot repository info',
  usage: '.repo',
  run: async (ctx) => {
    let pkg = { name: 'salara-md-bot', version: '1.0.0' };
    try { pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')); } catch {}
    await ctx.reply(`📦 *Package:* ${pkg.name}\n📌 *Version:* ${pkg.version}\n📝 *Desc:* ${pkg.description || '-'}`);
  }
},
{
  cmd: 'support',
  category: 'General',
  desc: 'Get support info',
  usage: '.support',
  run: async (ctx) => { await ctx.reply(`🛟 *Support*\nKisi masle ke liye owner se rabta karein:\n👑 ${ctx.config.ownerName}\n📞 +${ctx.config.ownerNumber}`); }
},
{
  cmd: 'rules',
  category: 'General',
  desc: 'Show bot rules',
  usage: '.rules',
  run: async (ctx) => {
    await ctx.reply(`📜 *Bot Rules*\n1. Spam mat karein 🚫\n2. Owner ke commands use na karein 👑\n3. Ghalat istemal par block ho sakte hain ⚠️\n4. Izzat se baat karein 🤝`);
  }
},
{
  cmd: 'donate',
  category: 'General',
  desc: 'Support the bot developer',
  usage: '.donate',
  run: async (ctx) => { await ctx.reply(`💝 *Donate*\nBot pasand aaya? Owner ko support karein:\n👑 ${ctx.config.ownerName}\n📞 +${ctx.config.ownerNumber}\nShukriya! 🙏`); }
},
{
  cmd: 'source',
  aliases: ['src'],
  category: 'General',
  desc: 'Show bot tech info',
  usage: '.source',
  run: async (ctx) => { await ctx.reply(`💻 *${ctx.config.botName}*\n⚙️ Node.js + Baileys (WhatsApp Web API)\n📌 ${ctx.commands.length} commands\n👑 Developer: ${ctx.config.ownerName}`); }
},
{
  cmd: 'version',
  aliases: ['ver'],
  category: 'General',
  desc: 'Show bot version',
  usage: '.version',
  run: async (ctx) => {
    let ver = '1.0.0';
    try { ver = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')).version; } catch {}
    await ctx.reply(`📌 *${ctx.config.botName} v${ver}*`);
  }
},
{
  cmd: 'uptime',
  category: 'General',
  desc: 'Show detailed uptime',
  usage: '.uptime',
  run: async (ctx) => {
    await ctx.reply(`⏱ *Uptime:* ${fmtUp(process.uptime())}\n🚀 *Started:* ${new Date(BOOT).toLocaleString('en-GB')}`);
  }
},
{
  cmd: 'latency',
  category: 'General',
  desc: 'Measure reply latency',
  usage: '.latency',
  run: async (ctx) => {
    const t0 = Date.now();
    await ctx.sock.sendMessage(ctx.from, { text: '📡 Testing…' }, { quoted: ctx.msg });
    await ctx.reply(`📡 *Latency:* ${Date.now() - t0}ms`);
  }
},
{
  cmd: 'starttime',
  category: 'General',
  desc: 'Show bot start time',
  usage: '.starttime',
  run: async (ctx) => { await ctx.reply(`🚀 *Bot started:*\n${new Date(BOOT).toLocaleString('en-GB')}`); }
},
{
  cmd: 'sysinfo',
  category: 'General',
  desc: 'Show system information',
  usage: '.sysinfo',
  run: async (ctx) => {
    await ctx.reply(`💻 *System Info*\n🖥 OS: ${os.type()} ${os.release()}\n⚙️ Platform: ${os.platform()} (${os.arch()})\n🧠 CPUs: ${os.cpus().length}\n💾 Free RAM: ${(os.freemem() / 1024 / 1024).toFixed(0)} MB\n🟢 Node: ${process.version}`);
  }
},
{
  cmd: 'memory',
  aliases: ['mem'],
  category: 'General',
  desc: 'Show bot memory usage',
  usage: '.memory',
  run: async (ctx) => {
    const m = process.memoryUsage();
    await ctx.reply(`🧠 *Memory Usage*\nRSS: ${(m.rss / 1024 / 1024).toFixed(1)} MB\nHeap: ${(m.heapUsed / 1024 / 1024).toFixed(1)} / ${(m.heapTotal / 1024 / 1024).toFixed(1)} MB`);
  }
},
{
  cmd: 'platform',
  aliases: ['os'],
  category: 'General',
  desc: 'Show OS platform',
  usage: '.platform',
  run: async (ctx) => { await ctx.reply(`🖥 *Platform:* ${os.platform()} (${os.arch()})\n${os.type()} ${os.release()}`); }
},
{
  cmd: 'nodever',
  category: 'General',
  desc: 'Show Node.js version',
  usage: '.nodever',
  run: async (ctx) => { await ctx.reply(`🟢 *Node.js:* ${process.version}`); }
},
{
  cmd: 'cpu',
  category: 'General',
  desc: 'Show CPU info',
  usage: '.cpu',
  run: async (ctx) => {
    const c = os.cpus();
    await ctx.reply(`🧠 *CPU:* ${c.length} cores\n${c[0].model.trim()}\n⚡ Speed: ${c[0].speed} MHz`);
  }
},
{
  cmd: 'profile',
  aliases: ['pp'],
  category: 'General',
  desc: 'Get profile photo of a number',
  usage: '.profile 923001234567',
  run: async (ctx) => {
    let jid = ctx.senderJid;
    if (ctx.args[0]) jid = ctx.args[0].replace(/\D/g, '') + '@s.whatsapp.net';
    try {
      const url = await ctx.sock.profilePictureUrl(jid, 'image');
      await ctx.sock.sendMessage(ctx.from, { image: { url }, caption: `🖼 Profile photo` }, { quoted: ctx.msg });
    } catch { await ctx.reply('❌ Profile photo nahi mili.'); }
  }
},
{
  cmd: 'about',
  category: 'General',
  desc: 'About IMRAN MD BOT',
  usage: '.about',
  run: async (ctx) => {
    await ctx.reply(`🤖 *${ctx.config.botName}*\n\nYe ek powerful WhatsApp MD bot hai jisme ${ctx.commands.length} commands hain — downloading, group tools, fun, Islamic, AI aur bohat kuch!\n\n👑 Owner: ${ctx.config.ownerName} (+${ctx.config.ownerNumber})`);
  }
},
{
  cmd: 'terms',
  category: 'General',
  desc: 'Show terms of use',
  usage: '.terms',
  run: async (ctx) => {
    await ctx.reply(`📄 *Terms of Use*\n1. Ye bot tafreeh aur sahulat ke liye hai.\n2. Ghalat istemal ki zimmedari user ki hogi.\n3. Bot ko spam ke liye use na karein.\n4. Owner kisi bhi waqt access khatam kar sakta hai.`);
  }
},
{
  cmd: 'privacy',
  category: 'General',
  desc: 'Show privacy policy',
  usage: '.privacy',
  run: async (ctx) => {
    await ctx.reply(`🔒 *Privacy Policy*\n• Aapke messages sirf commands chalane ke liye parhe jate hain.\n• Koi data teesre fareeq ko nahi becha jata.\n• Session data sirf bot chalane ke liye mehfooz rehta hai.`);
  }
},
{
  cmd: 'contact',
  category: 'General',
  desc: 'Get owner contact card',
  usage: '.contact',
  run: async (ctx) => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${ctx.config.ownerName}\nTEL;type=CELL;waid=${ctx.config.ownerNumber}:+${ctx.config.ownerNumber}\nEND:VCARD`;
    await ctx.sock.sendMessage(ctx.from, { contacts: { displayName: ctx.config.ownerName, contacts: [{ vcard }] } }, { quoted: ctx.msg });
  }
},
{
  cmd: 'feedback',
  aliases: ['fb'],
  category: 'General',
  desc: 'Send feedback to owner',
  usage: '.feedback your message',
  run: async (ctx) => {
    const e = need(ctx.text, '.feedback <your message>'); if (e) return ctx.reply(e);
    await ctx.sock.sendMessage(ctx.config.ownerNumber + '@s.whatsapp.net', { text: `📩 *Feedback* from +${ctx.sender}:\n${ctx.text}` });
    await ctx.reply('🙏 Shukriya! Aapka feedback owner ko bhej diya gaya.');
  }
},
{
  cmd: 'suggest',
  category: 'General',
  desc: 'Suggest a new feature',
  usage: '.suggest your idea',
  run: async (ctx) => {
    const e = need(ctx.text, '.suggest <your idea>'); if (e) return ctx.reply(e);
    await ctx.sock.sendMessage(ctx.config.ownerNumber + '@s.whatsapp.net', { text: `💡 *Suggestion* from +${ctx.sender}:\n${ctx.text}` });
    await ctx.reply('💡 Shukriya! Aapki tajweez owner ko bhej di gayi.');
  }
},
{
  cmd: 'report',
  category: 'General',
  desc: 'Report a problem to owner',
  usage: '.report problem detail',
  run: async (ctx) => {
    const e = need(ctx.text, '.report <problem>'); if (e) return ctx.reply(e);
    await ctx.sock.sendMessage(ctx.config.ownerNumber + '@s.whatsapp.net', { text: `🚨 *Report* from +${ctx.sender}:\n${ctx.text}` });
    await ctx.reply('🚨 Report owner ko bhej di gayi. Jald hal kiya jayega.');
  }
},
{
  cmd: 'echo',
  category: 'General',
  desc: 'Bot repeats your text',
  usage: '.echo hello world',
  run: async (ctx) => {
    const e = need(ctx.text, '.echo <text>'); if (e) return ctx.reply(e);
    await ctx.reply(ctx.text);
  }
},
{
  cmd: 'say',
  category: 'General',
  desc: 'Bot says text as new message',
  usage: '.say hello world',
  run: async (ctx) => {
    const e = need(ctx.text, '.say <text>'); if (e) return ctx.reply(e);
    await ctx.sock.sendMessage(ctx.from, { text: ctx.text });
  }
},
{
  cmd: 'repeat',
  category: 'General',
  desc: 'Repeat text N times',
  usage: '.repeat 3 hello',
  run: async (ctx) => {
    const n = Math.min(20, Math.max(1, parseInt(ctx.args[0], 10) || 0));
    if (!n) return ctx.reply('Usage: .repeat <1-20> <text>');
    const t = ctx.args.slice(1).join(' ');
    const e = need(t, '.repeat <1-20> <text>'); if (e) return ctx.reply(e);
    await ctx.reply(Array(n).fill(t).join('\n'));
  }
},
{
  cmd: 'reverse2',
  aliases: ['rev'],
  category: 'General',
  desc: 'Reverse your text',
  usage: '.reverse hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.reverse <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔄 *Reversed:* ${ctx.text.split('').reverse().join('')}`);
  }
},
{
  cmd: 'upper2',
  category: 'General',
  desc: 'Convert text to UPPERCASE',
  usage: '.upper hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.upper <text>'); if (e) return ctx.reply(e);
    await ctx.reply(ctx.text.toUpperCase());
  }
},
{
  cmd: 'lower2',
  category: 'General',
  desc: 'Convert text to lowercase',
  usage: '.lower HELLO',
  run: async (ctx) => {
    const e = need(ctx.text, '.lower <text>'); if (e) return ctx.reply(e);
    await ctx.reply(ctx.text.toLowerCase());
  }
},
{
  cmd: 'shuffle',
  category: 'General',
  desc: 'Shuffle characters of text',
  usage: '.shuffle hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.shuffle <text>'); if (e) return ctx.reply(e);
    const a = ctx.text.split('');
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; }
    await ctx.reply(`🔀 *Shuffled:* ${a.join('')}`);
  }
},
{
  cmd: 'sort',
  category: 'General',
  desc: 'Sort words alphabetically',
  usage: '.sort mango apple banana',
  run: async (ctx) => {
    const e = need(ctx.text, '.sort <words>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔤 *Sorted:* ${ctx.text.split(/\s+/).sort((a, b) => a.localeCompare(b)).join(' ')}`);
  }
},
{
  cmd: 'count',
  category: 'General',
  desc: 'Count chars, words and lines',
  usage: '.count some text',
  run: async (ctx) => {
    const e = need(ctx.text, '.count <text>'); if (e) return ctx.reply(e);
    const t = ctx.text;
    await ctx.reply(`🔢 *Count*\n🔤 Characters: ${t.length}\n📝 Words: ${t.trim().split(/\s+/).length}\n📄 Lines: ${t.split('\n').length}`);
  }
},
{
  cmd: 'words',
  aliases: ['wc'],
  category: 'General',
  desc: 'Count words in text',
  usage: '.words some text here',
  run: async (ctx) => {
    const e = need(ctx.text, '.words <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`📝 *Words:* ${ctx.text.trim().split(/\s+/).length}`);
  }
},
{
  cmd: 'chars',
  aliases: ['cc'],
  category: 'General',
  desc: 'Count characters in text',
  usage: '.chars some text',
  run: async (ctx) => {
    const e = need(ctx.text, '.chars <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔤 *Characters:* ${ctx.text.length}`);
  }
},
{
  cmd: 'lines',
  aliases: ['lc'],
  category: 'General',
  desc: 'Count lines in text',
  usage: '.lines line1\nline2',
  run: async (ctx) => {
    const e = need(ctx.text, '.lines <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`📄 *Lines:* ${ctx.text.split('\n').length}`);
  }
},
{
  cmd: 'vowels',
  category: 'General',
  desc: 'Count vowels in text',
  usage: '.vowels hello world',
  run: async (ctx) => {
    const e = need(ctx.text, '.vowels <text>'); if (e) return ctx.reply(e);
    const n = (ctx.text.match(/[aeiouAEIOU]/g) || []).length;
    await ctx.reply(`🔤 *Vowels:* ${n}`);
  }
},
{
  cmd: 'consonants',
  category: 'General',
  desc: 'Count consonants in text',
  usage: '.consonants hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.consonants <text>'); if (e) return ctx.reply(e);
    const letters = (ctx.text.match(/[a-zA-Z]/g) || []).length;
    const vowels = (ctx.text.match(/[aeiouAEIOU]/g) || []).length;
    await ctx.reply(`🔤 *Consonants:* ${letters - vowels}`);
  }
},
{
  cmd: 'palindrome2',
  aliases: ['pal'],
  category: 'General',
  desc: 'Check if text is palindrome',
  usage: '.palindrome madam',
  run: async (ctx) => {
    const e = need(ctx.text, '.palindrome <text>'); if (e) return ctx.reply(e);
    const clean = ctx.text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPal = clean && clean === clean.split('').reverse().join('');
    await ctx.reply(isPal ? `✅ *"${ctx.text}"* palindrome hai!` : `❌ *"${ctx.text}"* palindrome nahi hai.`);
  }
},
{
  cmd: 'ascii',
  category: 'General',
  desc: 'Show ASCII codes of text',
  usage: '.ascii hi',
  run: async (ctx) => {
    const e = need(ctx.text, '.ascii <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔢 *ASCII:*\n` + ctx.text.split('').map(ch => `${ch} = ${ch.charCodeAt(0)}`).join('\n'));
  }
},
{
  cmd: 'binary2',
  aliases: ['bin'],
  category: 'General',
  desc: 'Convert text to binary',
  usage: '.binary hi',
  run: async (ctx) => {
    const e = need(ctx.text, '.binary <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`💻 *Binary:*\n` + ctx.text.split('').map(ch => ch.charCodeAt(0).toString(2).padStart(8, '0')).join(' '));
  }
},
{
  cmd: 'morse2',
  category: 'General',
  desc: 'Convert text to morse code',
  usage: '.morse hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.morse <text>'); if (e) return ctx.reply(e);
    const out = ctx.text.toUpperCase().split('').map(ch => MORSE[ch] || '?').join(' ');
    await ctx.reply(`📻 *Morse:*\n${out}`);
  }
},
{
  cmd: 'unmorse2',
  category: 'General',
  desc: 'Decode morse code to text',
  usage: '.unmorse .... .',
  run: async (ctx) => {
    const e = need(ctx.text, '.unmorse <code>'); if (e) return ctx.reply(e);
    const out = ctx.text.trim().split(/\s+/).map(c => RMORSE[c] || '?').join('');
    await ctx.reply(`📻 *Decoded:* ${out}`);
  }
},
{
  cmd: 'b64e2',
  category: 'General',
  desc: 'Encode text to Base64',
  usage: '.b64e hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.b64e <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔐 *Base64:*\n${Buffer.from(ctx.text, 'utf8').toString('base64')}`);
  }
},
{
  cmd: 'b64d2',
  category: 'General',
  desc: 'Decode Base64 to text',
  usage: '.b64d aGVsbG8=',
  run: async (ctx) => {
    const e = need(ctx.text, '.b64d <base64>'); if (e) return ctx.reply(e);
    try {
      await ctx.reply(`🔓 *Decoded:*\n${Buffer.from(ctx.text.trim(), 'base64').toString('utf8')}`);
    } catch { await ctx.reply('❌ Ghalat Base64 string.'); }
  }
},
{
  cmd: 'urlencode2',
  aliases: ['urle'],
  category: 'General',
  desc: 'URL-encode text',
  usage: '.urlencode hello world',
  run: async (ctx) => {
    const e = need(ctx.text, '.urlencode <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔗 *Encoded:*\n${encodeURIComponent(ctx.text)}`);
  }
},
{
  cmd: 'urldecode2',
  aliases: ['urld'],
  category: 'General',
  desc: 'URL-decode text',
  usage: '.urldecode hello%20world',
  run: async (ctx) => {
    const e = need(ctx.text, '.urldecode <text>'); if (e) return ctx.reply(e);
    try { await ctx.reply(`🔓 *Decoded:*\n${decodeURIComponent(ctx.text.trim())}`); }
    catch { await ctx.reply('❌ Ghalat URL-encoded string.'); }
  }
},
{
  cmd: 'sha256',
  aliases: ['sha'],
  category: 'General',
  desc: 'SHA256 hash of text',
  usage: '.sha256 hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.sha256 <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔐 *SHA256:*\n${crypto.createHash('sha256').update(ctx.text).digest('hex')}`);
  }
},
{
  cmd: 'md5',
  category: 'General',
  desc: 'MD5 hash of text',
  usage: '.md5 hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.md5 <text>'); if (e) return ctx.reply(e);
    await ctx.reply(`🔐 *MD5:*\n${crypto.createHash('md5').update(ctx.text).digest('hex')}`);
  }
},
{
  cmd: 'uuid2',
  category: 'General',
  desc: 'Generate a random UUID',
  usage: '.uuid',
  run: async (ctx) => { await ctx.reply(`🆔 *UUID:*\n${crypto.randomUUID()}`); }
},
{
  cmd: 'password2',
  aliases: ['pass', 'genpass'],
  category: 'General',
  desc: 'Generate a random password',
  usage: '.password 12',
  run: async (ctx) => {
    const len = Math.min(64, Math.max(4, parseInt(ctx.args[0], 10) || 12));
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*';
    const bytes = crypto.randomBytes(len);
    let p = ''; for (const b of bytes) p += chars[b % chars.length];
    await ctx.reply(`🔑 *Password (${len} chars):*\n${p}`);
  }
},
{
  cmd: 'rand',
  aliases: ['randomnum'],
  category: 'General',
  desc: 'Random number in a range',
  usage: '.rand 1 100',
  run: async (ctx) => {
    let a = parseInt(ctx.args[0], 10), b = parseInt(ctx.args[1], 10);
    if (isNaN(a)) a = 1; if (isNaN(b)) b = 100;
    if (a > b)[a, b] = [b, a];
    const n = a + crypto.randomInt(b - a + 1);
    await ctx.reply(`🎲 *Random (${a}-${b}):* ${n}`);
  }
},
{
  cmd: 'flip2',
  aliases: ['coin'],
  category: 'General',
  desc: 'Flip a coin',
  usage: '.flip',
  run: async (ctx) => { await ctx.reply(`🪙 *Coin:* ${Math.random() < 0.5 ? 'Head' : 'Tail'}!`); }
},
{
  cmd: 'roll2x',
  category: 'General',
  desc: 'Roll a dice (1-6)',
  usage: '.roll',
  run: async (ctx) => { await ctx.reply(`🎲 *Dice:* ${1 + crypto.randomInt(6)}`); }
},
{
  cmd: 'choose2',
  aliases: ['pick'],
  category: 'General',
  desc: 'Randomly choose one option',
  usage: '.choose apple | banana | mango',
  run: async (ctx) => {
    const e = need(ctx.text, '.choose a | b | c'); if (e) return ctx.reply(e);
    const opts = ctx.text.includes('|') ? ctx.text.split('|').map(s => s.trim()).filter(Boolean) : ctx.text.split(/\s+/);
    if (opts.length < 2) return ctx.reply('❌ Kam az kam 2 options dein.');
    await ctx.reply(`🤔 *I choose:* ${opts[crypto.randomInt(opts.length)]}`);
  }
},
{
  cmd: 'yesno',
  category: 'General',
  desc: 'Get a Yes/No/Maybe answer',
  usage: '.yesno should I go?',
  run: async (ctx) => {
    const ans = ['✅ Yes!', '❌ No.', '🤔 Maybe…', '💯 Definitely!', '🚫 Absolutely not.'][crypto.randomInt(5)];
    await ctx.reply(`${ans}`);
  }
},
{
  cmd: 'percent2',
  aliases: ['pct'],
  category: 'General',
  desc: 'Random percentage for anything',
  usage: '.percent battery',
  run: async (ctx) => {
    const e = need(ctx.text, '.percent <thing>'); if (e) return ctx.reply(e);
    await ctx.reply(`📊 *${ctx.text}:* ${crypto.randomInt(101)}%`);
  }
},
{
  cmd: 'rate2',
  category: 'General',
  desc: 'Rate anything out of 10',
  usage: '.rate biryani',
  run: async (ctx) => {
    const e = need(ctx.text, '.rate <thing>'); if (e) return ctx.reply(e);
    await ctx.reply(`⭐ *${ctx.text}:* ${crypto.randomInt(11)}/10`);
  }
},
{
  cmd: 'love2x',
  category: 'General',
  desc: 'Love compatibility calculator (fun)',
  usage: '.love ali | sara',
  run: async (ctx) => {
    const parts = ctx.text.split('|').map(s => s.trim()).filter(Boolean);
    if (parts.length < 2) return ctx.reply('Usage: .love <name1> | <name2>');
    const h = crypto.createHash('md5').update(parts.join('').toLowerCase()).digest();
    const pct = h[0] % 101;
    const bar = '❤️'.repeat(Math.round(pct / 10)) + '🤍'.repeat(10 - Math.round(pct / 10));
    await ctx.reply(`💘 *${parts[0]} ❤ ${parts[1]}*\n${bar}\n*${pct}%* match!`);
  }
},
{
  cmd: 'timer2',
  category: 'General',
  desc: 'Set a countdown timer',
  usage: '.timer 10',
  run: async (ctx) => {
    const s = parseInt(ctx.args[0], 10);
    if (!s || s < 1 || s > 300) return ctx.reply('Usage: .timer <seconds 1-300>');
    await ctx.reply(`⏱ Timer set: ${s} seconds.`);
    setTimeout(() => ctx.sock.sendMessage(ctx.from, { text: `⏰ *Time up!* (${s}s)` }, { quoted: ctx.msg }).catch(() => {}), s * 1000);
  }
},
{
  cmd: 'remind2',
  aliases: ['reminder'],
  category: 'General',
  desc: 'Set a reminder',
  usage: '.remind 60 call ami',
  run: async (ctx) => {
    const s = parseInt(ctx.args[0], 10);
    if (!s || s < 1 || s > 3600) return ctx.reply('Usage: .remind <seconds 1-3600> <text>');
    const t = ctx.args.slice(1).join(' ') || 'Reminder';
    await ctx.reply(`🔔 Reminder set: ${s} seconds.`);
    setTimeout(() => ctx.sock.sendMessage(ctx.from, { text: `🔔 *Reminder:*\n${t}` }, { quoted: ctx.msg }).catch(() => {}), s * 1000);
  }
},
{
  cmd: 'age2',
  category: 'General',
  desc: 'Calculate age from birthdate',
  usage: '.age 2000-05-15',
  run: async (ctx) => {
    const d = new Date(ctx.args[0]);
    if (isNaN(d)) return ctx.reply('Usage: .age YYYY-MM-DD (e.g. .age 2000-05-15)');
    const now = new Date();
    let age = now.getFullYear() - d.getFullYear();
    if (now.getMonth() < d.getMonth() || (now.getMonth() === d.getMonth() && now.getDate() < d.getDate())) age--;
    await ctx.reply(`🎂 *Age:* ${age} years`);
  }
},
{
  cmd: 'countdown',
  aliases: ['cdown'],
  category: 'General',
  desc: 'Days left until a date',
  usage: '.countdown 2027-01-01',
  run: async (ctx) => {
    const d = new Date(ctx.args[0]);
    if (isNaN(d)) return ctx.reply('Usage: .countdown YYYY-MM-DD');
    const days = Math.ceil((d - Date.now()) / 86400000);
    await ctx.reply(days < 0 ? `📅 Ye date guzar chuki hai (${-days} din pehle).` : `⏳ *${days} din* baqi hain (${ctx.args[0]} tak).`);
  }
},
{
  cmd: 'weekdayof',
  category: 'General',
  desc: 'Weekday of any date',
  usage: '.weekdayof 2026-12-25',
  run: async (ctx) => {
    const d = new Date(ctx.args[0]);
    if (isNaN(d)) return ctx.reply('Usage: .weekdayof YYYY-MM-DD');
    await ctx.reply(`📆 *${ctx.args[0]}* → *${d.toLocaleDateString('en-US', { weekday: 'long' })}*`);
  }
},
{
  cmd: 'daysbetween',
  aliases: ['dbetween'],
  category: 'General',
  desc: 'Days between two dates',
  usage: '.daysbetween 2026-01-01 2026-12-31',
  run: async (ctx) => {
    const a = new Date(ctx.args[0]), b = new Date(ctx.args[1]);
    if (isNaN(a) || isNaN(b)) return ctx.reply('Usage: .daysbetween YYYY-MM-DD YYYY-MM-DD');
    await ctx.reply(`📆 *Days between:* ${Math.abs(Math.round((b - a) / 86400000))} din`);
  }
},
{
  cmd: 'status',
  category: 'General',
  desc: 'Get WhatsApp status/about of a number',
  usage: '.status 923001234567',
  run: async (ctx) => {
    const num = (ctx.args[0] || ctx.sender).replace(/\D/g, '');
    try {
      const st = await ctx.sock.fetchStatus(num + '@s.whatsapp.net');
      await ctx.reply(`📝 *Status of +${num}:*\n${st?.status || '(koi status nahi)'}`);
    } catch { await ctx.reply('❌ Status nahi mil saka. Number sahi likhein.'); }
  }
},
{
  cmd: 'groups',
  aliases: ['grouplist', 'mygroups'],
  category: 'General',
  desc: 'List groups the bot is in',
  usage: '.groups',
  run: async (ctx) => {
    try {
      const gs = Object.values(await ctx.sock.groupFetchAllParticipating());
      if (!gs.length) return ctx.reply('Bot kisi group mein nahi hai.');
      await ctx.reply(`👥 *Bot Groups (${gs.length}):*\n` + gs.slice(0, 50).map((g, i) => `${i + 1}. ${g.subject}`).join('\n'));
    } catch { await ctx.reply('❌ Group list nahi mil saki.'); }
  }
},
{
  cmd: 'blocklist',
  aliases: ['blocks'],
  category: 'General',
  desc: 'Show blocked contacts count',
  usage: '.blocklist',
  run: async (ctx) => {
    try {
      const bl = await ctx.sock.fetchBlocklist();
      await ctx.reply(`🚫 *Blocked:* ${bl.length} contacts${bl.length ? '\n' + bl.slice(0, 20).map(j => '+' + j.split('@')[0]).join('\n') : ''}`);
    } catch { await ctx.reply('❌ Blocklist nahi mil saki.'); }
  }
},
{
  cmd: 'setname',
  category: 'General',
  desc: 'Change bot WhatsApp name (owner)',
  usage: '.setname IMRAN MD',
  owner: true,
  run: async (ctx) => {
    const e = need(ctx.text, '.setname <new name>'); if (e) return ctx.reply(e);
    try { await ctx.sock.updateProfileName(ctx.text.slice(0, 25)); await ctx.reply('✅ Bot name update ho gaya.'); }
    catch { await ctx.reply('❌ Name update nahi ho saka.'); }
  }
},
{
  cmd: 'setbio',
  category: 'General',
  desc: 'Change bot WhatsApp bio (owner)',
  usage: '.setbio my bio text',
  owner: true,
  run: async (ctx) => {
    const e = need(ctx.text, '.setbio <text>'); if (e) return ctx.reply(e);
    try { await ctx.sock.updateProfileStatus(ctx.text.slice(0, 139)); await ctx.reply('✅ Bio update ho gayi.'); }
    catch { await ctx.reply('❌ Bio update nahi ho saki.'); }
  }
},
{
  cmd: 'restart',
  aliases: ['reboot'],
  category: 'General',
  desc: 'Restart the bot (owner)',
  usage: '.restart',
  owner: true,
  run: async (ctx) => {
    await ctx.reply('🔄 Bot restart ho raha hai…');
    setTimeout(() => process.exit(0), 1500);
  }
},
{
  cmd: 'prefix',
  category: 'General',
  desc: 'Show command prefix',
  usage: '.prefix',
  run: async (ctx) => { await ctx.reply(`⌨️ *Command prefix:* \`${ctx.prefix}\`\nExample: ${ctx.prefix}menu`); }
},
{
  cmd: 'emojify2',
  aliases: ['emoji'],
  category: 'General',
  desc: 'Convert text to emoji letters',
  usage: '.emojify hello',
  run: async (ctx) => {
    const e = need(ctx.text, '.emojify <text>'); if (e) return ctx.reply(e);
    const out = ctx.text.toLowerCase().split('').map(ch => EMOJI_L[ch] || ch).join(' ');
    await ctx.reply(out);
  }
},
{
  cmd: 'shortmenu',
  aliases: ['smenu'],
  category: 'General',
  desc: 'Compact text-only menu',
  usage: '.shortmenu',
  run: async (ctx) => {
    const cats = ctx.categories();
    let t = `*🤖 ${ctx.config.botName}* — ${ctx.commands.length} commands\n`;
    for (const [cat, list] of Object.entries(cats)) t += `\n*${cat}:*\n${list.map(c => ctx.prefix + c.cmd).join('  ')}`;
    await ctx.reply(t);
  }
},
{
  cmd: 'changelog',
  category: 'General',
  desc: 'Show bot changelog',
  usage: '.changelog',
  run: async (ctx) => {
    let ver = '1.0.0';
    try { ver = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')).version; } catch {}
    await ctx.reply(`📝 *Changelog v${ver}*\n• 600 dot-commands added\n• Pairing dashboard launched\n• Auto-reply & auto-forward added\n• Professional menu with owner photo\n• Group tools & downloaders included`);
  }
},
{
  cmd: 'credits',
  category: 'General',
  desc: 'Show bot credits',
  usage: '.credits',
  run: async (ctx) => {
    await ctx.reply(`🌟 *Credits*\n🤖 ${ctx.config.botName}\n👑 Owner: ${ctx.config.ownerName}\n💻 Built with Node.js + Baileys\n❤️ Thanks for using!`);
  }
},
];
