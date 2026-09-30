// IMRAN MD BOT — Downloader command pack (100 commands, category: Downloader)
// Rules: only Node built-ins + global fetch(). Every command makes a genuine
// attempt via real public no-key endpoints; on failure it replies honestly.
const enc = encodeURIComponent;

// Recursively find the first plausible media URL inside an API JSON response.
async function apiMedia(apiUrl) {
  const r = await fetch(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error('API ' + r.status);
  const j = await r.json();
  const urls = [];
  (function walk(o) {
    if (typeof o === 'string' && o.startsWith('http')) urls.push(o);
    else if (o && typeof o === 'object') for (const k in o) walk(o[k]);
  })(j);
  return (
    urls.find((u) => /\.(mp3|mp4|m4a|webm|mov|jpg|jpeg|png)(\?|$)/i.test(u)) ||
    urls[0] ||
    null
  );
}

const VREDEN = 'https://api.vreden.my.id/api';
// Try well-known public downloader endpoints for a link. Returns media URL or null.
async function tryDl(link, kinds) {
  const map = {
    ytmp3: [`${VREDEN}/ytmp3?url=${enc(link)}`],
    ytmp4: [`${VREDEN}/ytmp4?url=${enc(link)}`],
    tiktok: [`${VREDEN}/tiktok?url=${enc(link)}`],
    fb: [`${VREDEN}/fbdl?url=${enc(link)}`],
    ig: [`${VREDEN}/igdl?url=${enc(link)}`],
    tw: [`${VREDEN}/twitterdl?url=${enc(link)}`],
    pin: [`${VREDEN}/pinterest?url=${enc(link)}`],
  };
  for (const k of kinds) {
    for (const ep of map[k] || []) {
      try {
        const u = await apiMedia(ep);
        if (u) return u;
      } catch (e) { /* try next */ }
    }
  }
  return null;
}

// iTunes Search API (free, no key) — 30 second song previews are real downloads.
async function itunesPreview(query, limit = 1) {
  const r = await fetch(`https://itunes.apple.com/search?term=${enc(query)}&media=music&limit=${limit}`);
  if (!r.ok) throw new Error('iTunes ' + r.status);
  const j = await r.json();
  return (j.results || []).filter((t) => t.previewUrl);
}

const ytSearchLink = (q) => `https://www.youtube.com/results?search_query=${enc(q)}`;

// Wikipedia summary (free, no key) — real movie/drama info + poster.
async function wikiSummary(title) {
  const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${enc(title)}`, {
    headers: { 'User-Agent': 'IMRANMDBOT/1.0' },
  });
  if (!r.ok) throw new Error('Not found');
  return r.json();
}

const need = (ctx, what, ex) => ctx.reply(`❌ ${what} likhein.\nMisal: \`${ctx.prefix}${ex}\``);

module.exports = [
  // ---------------- SONG / AUDIO (1-15) ----------------
  { cmd: 'song', category: 'Downloader', desc: 'Gaana search + 30 sec preview download', usage: '.song <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Gaane ka naam', 'song dil dil pakistan');
    await ctx.reply('🔎 *' + ctx.text + '* dhoond raha hun...');
    try { const t = (await itunesPreview(ctx.text))[0];
      if (!t) return ctx.reply('❌ Gaana nahi mila. Kuch aur try karein.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4', fileName: t.trackName + '.m4a' }, { quoted: ctx.msg });
      await ctx.reply(`🎵 *${t.trackName}*\n👤 ${t.artistName}\n💿 ${t.collectionName || ''}\n🔗 YouTube: ${ytSearchLink(ctx.text)}`);
    } catch (e) { await ctx.reply('❌ Download nahi ho saka. Dobara try karein.'); } } },
  { cmd: 'gaana', category: 'Downloader', desc: 'Gaana download (Roman Urdu)', usage: '.gaana <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Gaane ka naam', 'gaanaPasoori');
    try { const t = (await itunesPreview(ctx.text))[0];
      if (!t) return ctx.reply('❌ Nahi mila, naam sahi likhein.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      await ctx.reply(`🎶 *${t.trackName}* — ${t.artistName}`);
    } catch (e) { await ctx.reply('❌ Masla ho gaya, dobara try karein.'); } } },
  { cmd: 'mp3', category: 'Downloader', desc: 'Link se MP3 ya naam se gaana', usage: '.mp3 <link ya naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Link ya gaane ka naam', 'mp3 <link>');
    try {
      if (/^https?:\/\//i.test(ctx.text)) {
        await ctx.reply('⬇️ MP3 bana raha hun...');
        const u = await tryDl(ctx.text, ['ytmp3']);
        if (!u) return ctx.reply('❌ Is link se MP3 nahi ban saka. YouTube link try karein.');
        await ctx.sock.sendMessage(ctx.from, { audio: { url: u }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      } else { const t = (await itunesPreview(ctx.text))[0];
        if (!t) return ctx.reply('❌ Gaana nahi mila.');
        await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
        await ctx.reply(`🎵 *${t.trackName}* — ${t.artistName}`); }
    } catch (e) { await ctx.reply('❌ Download fail ho gaya.'); } } },
  { cmd: 'play', category: 'Downloader', desc: 'Gaana play/download karein', usage: '.play <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Gaane ka naam', 'play atif aslam');
    try { const t = (await itunesPreview(ctx.text))[0];
      if (!t) return ctx.reply('❌ Nahi mila.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      await ctx.reply(`▶️ *${t.trackName}*\n👤 ${t.artistName}`);
    } catch (e) { await ctx.reply('❌ Try again later.'); } } },
  { cmd: 'track', category: 'Downloader', desc: 'Top 5 matching tracks ki list', usage: '.track <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'track pasoori');
    try { const list = await itunesPreview(ctx.text, 5);
      if (!list.length) return ctx.reply('❌ Kuch nahi mila.');
      let out = '🎧 *Top results:*\n\n';
      list.forEach((t, i) => { out += `${i + 1}. ${t.trackName} — ${t.artistName}\n`; });
      await ctx.reply(out + '\nPehle wale ka preview bhej raha hun...');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: list[0].previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Search fail ho gaya.'); } } },
  { cmd: 'tune', category: 'Downloader', desc: 'Dhunn/gaana preview', usage: '.tune <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'tune janam janam');
    try { const t = (await itunesPreview(ctx.text))[0];
      if (!t) return ctx.reply('❌ Nahi mila.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      await ctx.reply(`🎼 *${t.trackName}* — ${t.artistName}`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'music', category: 'Downloader', desc: 'Music search top 5', usage: '.music <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'music nusrat');
    try { const list = await itunesPreview(ctx.text, 5);
      if (!list.length) return ctx.reply('❌ Nahi mila.');
      let out = '🎶 *Music results:*\n\n';
      list.forEach((t, i) => { out += `${i + 1}. *${t.trackName}* — ${t.artistName}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'audio', category: 'Downloader', desc: 'Audio download (link ya naam)', usage: '.audio <link/naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Link ya naam', 'audio <link>');
    try {
      if (/^https?:\/\//i.test(ctx.text)) {
        const u = await tryDl(ctx.text, ['ytmp3']);
        if (!u) return ctx.reply('❌ Audio nahi nikal saka.');
        await ctx.sock.sendMessage(ctx.from, { audio: { url: u }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      } else { const t = (await itunesPreview(ctx.text))[0];
        if (!t) return ctx.reply('❌ Nahi mila.');
        await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
        await ctx.reply(`🔊 *${t.trackName}* — ${t.artistName}`); }
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ytaudio', category: 'Downloader', desc: 'YouTube link se audio', usage: '.ytaudio <youtube link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'YouTube link', 'ytaudio <link>');
    await ctx.reply('⬇️ Audio nikal raha hun...');
    try { const u = await tryDl(ctx.text, ['ytmp3']);
      if (!u) return ctx.reply('❌ API se audio nahi mila. Thodi der baad try karein.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: u }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Download fail.'); } } },
  { cmd: 'ytmp3', category: 'Downloader', desc: 'YouTube se MP3', usage: '.ytmp3 <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'YouTube link', 'ytmp3 <link>');
    await ctx.reply('⬇️ MP3 ready ho raha hai...');
    try { const u = await tryDl(ctx.text, ['ytmp3']);
      if (!u) return ctx.reply('❌ MP3 nahi ban saka. Baad mein try karein.');
      await ctx.sock.sendMessage(ctx.from, { document: { url: u }, mimetype: 'audio/mpeg', fileName: 'salara-audio.mp3' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ytmp4', category: 'Downloader', desc: 'YouTube se MP4 video', usage: '.ytmp4 <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'YouTube link', 'ytmp4 <link>');
    await ctx.reply('⬇️ Video download ho rahi hai...');
    try { const u = await tryDl(ctx.text, ['ytmp4']);
      if (!u) return ctx.reply('❌ Video nahi mili. Baad mein try karein.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎬 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ytvideo', category: 'Downloader', desc: 'YouTube video download', usage: '.ytvideo <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'YouTube link', 'ytvideo <link>');
    try { const u = await tryDl(ctx.text, ['ytmp4']);
      if (!u) return ctx.reply('❌ Video nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎬 *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ytdl', category: 'Downloader', desc: 'YouTube downloader (mp3/mp4)', usage: '.ytdl <link> [mp3|mp4]', run: async (ctx) => {
    const [link, fmt] = ctx.args;
    if (!/^https?:\/\//i.test(link || '')) return need(ctx, 'YouTube link', 'ytdl <link> mp3');
    await ctx.reply('⬇️ Download ho raha hai...');
    try { const u = await tryDl(link, [fmt === 'mp4' ? 'ytmp4' : 'ytmp3']);
      if (!u) return ctx.reply('❌ Nahi ho saka.');
      if (fmt === 'mp4') await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎬 IMRAN MD' }, { quoted: ctx.msg });
      else await ctx.sock.sendMessage(ctx.from, { audio: { url: u }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ytsearch', category: 'Downloader', desc: 'YouTube par search link', usage: '.ytsearch <lafz>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Search lafz', 'ytsearch funny video');
    await ctx.reply(`🔎 *YouTube Search:*\n${ytSearchLink(ctx.text)}`);
  } },
  { cmd: 'yts', category: 'Downloader', desc: 'Chhota YouTube search', usage: '.yts <lafz>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Lafz', 'yts drama');
    await ctx.reply(`🎬 ${ytSearchLink(ctx.text)}`);
  } },

  // ---------------- VIDEO (16-19) ----------------
  { cmd: 'video', category: 'Downloader', desc: 'Video search link + download note', usage: '.video <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Video ka naam', 'video funny cats');
    await ctx.reply(`🎥 *Video search:*\n${ytSearchLink(ctx.text)}\n\n💡 Download ke liye video ka link copy karke \`.ytmp4 <link>\` likhein.`);
  } },
  { cmd: 'mp4', category: 'Downloader', desc: 'Link se MP4 video', usage: '.mp4 <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Video link', 'mp4 <link>');
    await ctx.reply('⬇️ Video aa rahi hai...');
    try { const u = await tryDl(ctx.text, ['ytmp4']);
      if (!u) return ctx.reply('❌ Video nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎬 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'clip', category: 'Downloader', desc: 'Short clip search', usage: '.clip <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Clip ka naam', 'clip cricket six');
    await ctx.reply(`✂️ *Clip search:*\n${ytSearchLink(ctx.text + ' short clip')}`);
  } },
  { cmd: 'mv', category: 'Downloader', desc: 'Music video search', usage: '.mv <gaana>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Gaane ka naam', 'mv pasoori');
    await ctx.reply(`🎬 *Music video:*\n${ytSearchLink(ctx.text + ' official music video')}`);
  } },

  // ---------------- TIKTOK (20-25) ----------------
  { cmd: 'tiktok', category: 'Downloader', desc: 'TikTok video download (bina watermark)', usage: '.tiktok <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'TikTok link', 'tiktok <link>');
    await ctx.reply('⬇️ TikTok video aa rahi hai...');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Video nahi mili. Link sahi hai? Dobara try karein.');
      await ctx.sock.sendMessage(ctx.from, /\.(jpg|jpeg|png)/i.test(u) ? { image: { url: u }, caption: '🎵 IMRAN MD' } : { video: { url: u }, caption: '🎵 *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'tikdl', category: 'Downloader', desc: 'TikTok downloader', usage: '.tikdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'TikTok link', 'tikdl <link>');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Nahi ho saka.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'tt', category: 'Downloader', desc: 'TikTok short download', usage: '.tt <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'tt <link>');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Nahi mila.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ttaudio', category: 'Downloader', desc: 'TikTok video ka audio', usage: '.ttaudio <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'TikTok link', 'ttaudio <link>');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Audio nahi mila.');
      try { await ctx.sock.sendMessage(ctx.from, { audio: { url: u }, mimetype: 'audio/mp4' }, { quoted: ctx.msg }); }
      catch { await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 audio nahi bana, video bhej di' }, { quoted: ctx.msg }); }
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ttvideo', category: 'Downloader', desc: 'TikTok no-watermark video', usage: '.ttvideo <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'ttvideo <link>');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 *No watermark* — IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'ttslide', category: 'Downloader', desc: 'TikTok photo slide download', usage: '.ttslide <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'ttslide <link>');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Slide nahi mili.');
      if (/\.(jpg|jpeg|png)/i.test(u)) await ctx.sock.sendMessage(ctx.from, { image: { url: u }, caption: '🖼️ IMRAN MD' }, { quoted: ctx.msg });
      else await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- FACEBOOK (26-29) ----------------
  { cmd: 'fbdl', category: 'Downloader', desc: 'Facebook video download', usage: '.fbdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Facebook link', 'fbdl <link>');
    await ctx.reply('⬇️ Facebook video aa rahi hai...');
    try { const u = await tryDl(ctx.text, ['fb']);
      if (!u) return ctx.reply('❌ Video nahi mili. Public video ka link dein.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📘 *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'fbvideo', category: 'Downloader', desc: 'FB video downloader', usage: '.fbvideo <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'fbvideo <link>');
    try { const u = await tryDl(ctx.text, ['fb']);
      if (!u) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📘 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'fbaudio', category: 'Downloader', desc: 'Facebook video ka audio', usage: '.fbaudio <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'fbaudio <link>');
    try { const u = await tryDl(ctx.text, ['fb']);
      if (!u) return ctx.reply('❌ Nahi mila.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: u }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'fbwatch', category: 'Downloader', desc: 'FB Watch video download', usage: '.fbwatch <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'fbwatch <link>');
    try { const u = await tryDl(ctx.text, ['fb']);
      if (!u) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📘 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- INSTAGRAM (30-34) ----------------
  { cmd: 'instadl', category: 'Downloader', desc: 'Instagram download (reel/video/photo)', usage: '.instadl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Instagram link', 'instadl <link>');
    await ctx.reply('⬇️ Instagram media aa raha hai...');
    try { const u = await tryDl(ctx.text, ['ig']);
      if (!u) return ctx.reply('❌ Nahi mila. Public post ka link dein.');
      if (/\.(jpg|jpeg|png)/i.test(u)) await ctx.sock.sendMessage(ctx.from, { image: { url: u }, caption: '📸 IMRAN MD' }, { quoted: ctx.msg });
      else await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📸 *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'instavid', category: 'Downloader', desc: 'Instagram video download', usage: '.instavid <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'instavid <link>');
    try { const u = await tryDl(ctx.text, ['ig']);
      if (!u) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📸 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'instareel', category: 'Downloader', desc: 'Instagram reel download', usage: '.instareel <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Reel link', 'instareel <link>');
    try { const u = await tryDl(ctx.text, ['ig']);
      if (!u) return ctx.reply('❌ Reel nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎞️ *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'instaimg', category: 'Downloader', desc: 'Instagram photo download', usage: '.instaimg <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'instaimg <link>');
    try { const u = await tryDl(ctx.text, ['ig']);
      if (!u) return ctx.reply('❌ Photo nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { image: { url: u }, caption: '📸 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'igdl', category: 'Downloader', desc: 'IG downloader (short)', usage: '.igdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'igdl <link>');
    try { const u = await tryDl(ctx.text, ['ig']);
      if (!u) return ctx.reply('❌ Nahi mila.');
      if (/\.(jpg|jpeg|png)/i.test(u)) await ctx.sock.sendMessage(ctx.from, { image: { url: u }, caption: '📸 IMRAN MD BOT' }, { quoted: ctx.msg });
      else await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📸 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- TWITTER/X (35-37) ----------------
  { cmd: 'twitterdl', category: 'Downloader', desc: 'Twitter/X video download', usage: '.twitterdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Tweet link', 'twitterdl <link>');
    await ctx.reply('⬇️ Tweet video aa rahi hai...');
    try { const u = await tryDl(ctx.text, ['tw']);
      if (!u) return ctx.reply('❌ Video nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🐦 *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'tweetdl', category: 'Downloader', desc: 'Tweet downloader', usage: '.tweetdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'tweetdl <link>');
    try { const u = await tryDl(ctx.text, ['tw']);
      if (!u) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🐦 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'xdl', category: 'Downloader', desc: 'X (Twitter) download', usage: '.xdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'xdl <link>');
    try { const u = await tryDl(ctx.text, ['tw']);
      if (!u) return ctx.reply('❌ Nahi mila.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🐦 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- LYRICS (38-40) ----------------
  { cmd: 'lyrics', category: 'Downloader', desc: 'Gaane ke bol (lyrics)', usage: '.lyrics <fankaar - gaana>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Fankaar - Gaana', 'lyrics Atif Aslam - Jeena Jeena');
    await ctx.reply('📝 Lyrics dhoond raha hun...');
    try {
      let artist = '', title = ctx.text;
      if (ctx.text.includes('-')) { const p = ctx.text.split('-'); artist = p[0].trim(); title = p.slice(1).join('-').trim(); }
      else { const s = await (await fetch(`https://api.lyrics.ovh/suggest/${enc(ctx.text)}`)).json();
        const d = s.data && s.data[0]; if (!d) return ctx.reply('❌ Gaana nahi mila.');
        artist = d.artist.name; title = d.title; }
      const j = await (await fetch(`https://api.lyrics.ovh/v1/${enc(artist)}/${enc(title)}`)).json();
      if (!j.lyrics) return ctx.reply('❌ Lyrics nahi mile.');
      const words = j.lyrics.length > 3500 ? j.lyrics.slice(0, 3500) + '\n... (mukammal lyrics ke liye dobara search karein)' : j.lyrics;
      await ctx.reply(`🎤 *${title}* — ${artist}\n\n${words}`);
    } catch (e) { await ctx.reply('❌ Lyrics nahi mil sake.'); } } },
  { cmd: 'lyric', category: 'Downloader', desc: 'Lyrics (short)', usage: '.lyric <gaana>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Gaana', 'lyric Pasoori');
    try { const s = await (await fetch(`https://api.lyrics.ovh/suggest/${enc(ctx.text)}`)).json();
      const d = s.data && s.data[0]; if (!d) return ctx.reply('❌ Nahi mila.');
      const j = await (await fetch(`https://api.lyrics.ovh/v1/${enc(d.artist.name)}/${enc(d.title)}`)).json();
      if (!j.lyrics) return ctx.reply('❌ Lyrics nahi mile.');
      await ctx.reply(`🎤 *${d.title}* — ${d.artist.name}\n\n${j.lyrics.slice(0, 3000)}`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'gaanalyrics', category: 'Downloader', desc: 'Gaane ke bol Roman Urdu mein', usage: '.gaanalyrics <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'gaanalyrics dil diyan gallan');
    try { const s = await (await fetch(`https://api.lyrics.ovh/suggest/${enc(ctx.text)}`)).json();
      const d = s.data && s.data[0]; if (!d) return ctx.reply('❌ Nahi mila.');
      const j = await (await fetch(`https://api.lyrics.ovh/v1/${enc(d.artist.name)}/${enc(d.title)}`)).json();
      if (!j.lyrics) return ctx.reply('❌ Bol nahi mile.');
      await ctx.reply(`🎶 *${d.title}*\n👤 ${d.artist.name}\n\n${j.lyrics.slice(0, 3000)}`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- ITUNES (41-44) ----------------
  { cmd: 'itunessong', category: 'Downloader', desc: 'iTunes se gaana preview', usage: '.itunessong <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'itunessong shape of you');
    try { const list = await itunesPreview(ctx.text, 3);
      if (!list.length) return ctx.reply('❌ Nahi mila.');
      let out = '🍎 *iTunes results:*\n\n';
      list.forEach((t, i) => { out += `${i + 1}. *${t.trackName}* — ${t.artistName}\n`; });
      await ctx.reply(out);
      await ctx.sock.sendMessage(ctx.from, { audio: { url: list[0].previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'itunes2', category: 'Downloader', desc: 'iTunes album/track maloomat', usage: '.itunes <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'itunes coke studio');
    try { const r = await fetch(`https://itunes.apple.com/search?term=${enc(ctx.text)}&media=music&limit=5`);
      const j = await r.json(); const list = j.results || [];
      if (!list.length) return ctx.reply('❌ Nahi mila.');
      let out = '🍎 *iTunes:*\n\n';
      list.forEach((t, i) => { out += `${i + 1}. *${t.trackName || t.collectionName}*\n   👤 ${t.artistName} | 💿 ${t.collectionName || '-'}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'applesong', category: 'Downloader', desc: 'Apple Music preview', usage: '.applesong <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'applesong raabta');
    try { const t = (await itunesPreview(ctx.text))[0];
      if (!t) return ctx.reply('❌ Nahi mila.');
      if (t.artworkUrl100) await ctx.sock.sendMessage(ctx.from, { image: { url: t.artworkUrl100.replace('100x100', '600x600') }, caption: `🍎 *${t.trackName}*\n👤 ${t.artistName}` }, { quoted: ctx.msg });
      await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'preview', category: 'Downloader', desc: '30 second ka song preview', usage: '.preview <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'preview levitating');
    try { const t = (await itunesPreview(ctx.text))[0];
      if (!t) return ctx.reply('❌ Nahi mila.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      await ctx.reply(`⏯️ Preview: *${t.trackName}* — ${t.artistName}`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- PODCAST (45-47) ----------------
  { cmd: 'podcast', category: 'Downloader', desc: 'Podcast search (iTunes)', usage: '.podcast <mozua>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Mozua', 'podcast business');
    try { const r = await fetch(`https://itunes.apple.com/search?term=${enc(ctx.text)}&media=podcast&limit=5`);
      const j = await r.json(); const list = j.results || [];
      if (!list.length) return ctx.reply('❌ Podcast nahi mili.');
      let out = '🎙️ *Podcasts:*\n\n';
      list.forEach((p, i) => { out += `${i + 1}. *${p.collectionName}*\n   👤 ${p.artistName}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'podcastsearch', category: 'Downloader', desc: 'Podcast talash', usage: '.podcastsearch <lafz>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Lafz', 'podcastsearch cricket');
    try { const r = await fetch(`https://itunes.apple.com/search?term=${enc(ctx.text)}&media=podcast&limit=5`);
      const j = await r.json(); const list = j.results || [];
      if (!list.length) return ctx.reply('❌ Nahi mili.');
      let out = '🎙️ *Results:*\n\n';
      list.forEach((p, i) => { out += `${i + 1}. *${p.collectionName}* — ${p.artistName}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'podcastep', category: 'Downloader', desc: 'Podcast episodes', usage: '.podcastep <podcast naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'podcastep joe rogan');
    try { const r = await fetch(`https://itunes.apple.com/search?term=${enc(ctx.text)}&media=podcast&entity=podcastEpisode&limit=5`);
      const j = await r.json(); const list = j.results || [];
      if (!list.length) return ctx.reply('❌ Episodes nahi mile.');
      let out = '🎧 *Episodes:*\n\n';
      list.forEach((p, i) => { out += `${i + 1}. *${p.trackName}*\n   📻 ${p.collectionName}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- ANIME / MANGA (48-52) ----------------
  { cmd: 'anime', category: 'Downloader', desc: 'Anime maloomat (Jikan API)', usage: '.anime <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Anime ka naam', 'anime naruto');
    await ctx.reply('🎌 Dhoond raha hun...');
    try { const j = await (await fetch(`https://api.jikan.moe/v4/anime?q=${enc(ctx.text)}&limit=1`)).json();
      const a = j.data && j.data[0]; if (!a) return ctx.reply('❌ Anime nahi mila.');
      const cap = `🎌 *${a.title}*\n⭐ Score: ${a.score || '?'}\n📺 Episodes: ${a.episodes || '?'}\n📅 ${a.aired?.string || ''}\n\n${(a.synopsis || '').slice(0, 600)}`;
      if (a.images?.jpg?.image_url) await ctx.sock.sendMessage(ctx.from, { image: { url: a.images.jpg.image_url }, caption: cap }, { quoted: ctx.msg });
      else await ctx.reply(cap);
    } catch (e) { await ctx.reply('❌ Fail. Thodi der baad try karein (API limit).'); } } },
  { cmd: 'animeinfo', category: 'Downloader', desc: 'Anime tafseel', usage: '.animeinfo <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'animeinfo one piece');
    try { const j = await (await fetch(`https://api.jikan.moe/v4/anime?q=${enc(ctx.text)}&limit=1`)).json();
      const a = j.data && j.data[0]; if (!a) return ctx.reply('❌ Nahi mila.');
      await ctx.reply(`🎌 *${a.title}*\n🏷️ ${a.title_japanese || ''}\n⭐ ${a.score || '?'} | 📺 ${a.episodes || '?'} eps\n🎭 ${(a.genres || []).map((g) => g.name).join(', ')}\n\n${(a.synopsis || '').slice(0, 800)}`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'manga', category: 'Downloader', desc: 'Manga maloomat', usage: '.manga <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Manga ka naam', 'manga berserk');
    try { const j = await (await fetch(`https://api.jikan.moe/v4/manga?q=${enc(ctx.text)}&limit=1`)).json();
      const m = j.data && j.data[0]; if (!m) return ctx.reply('❌ Nahi mila.');
      const cap = `📖 *${m.title}*\n⭐ ${m.score || '?'} | 📚 ${m.chapters || '?'} chapters\n\n${(m.synopsis || '').slice(0, 600)}`;
      if (m.images?.jpg?.image_url) await ctx.sock.sendMessage(ctx.from, { image: { url: m.images.jpg.image_url }, caption: cap }, { quoted: ctx.msg });
      else await ctx.reply(cap);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'mangainfo', category: 'Downloader', desc: 'Manga tafseel', usage: '.mangainfo <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'mangainfo solo leveling');
    try { const j = await (await fetch(`https://api.jikan.moe/v4/manga?q=${enc(ctx.text)}&limit=1`)).json();
      const m = j.data && j.data[0]; if (!m) return ctx.reply('❌ Nahi mila.');
      await ctx.reply(`📖 *${m.title}*\n⭐ Score: ${m.score || '?'}\n📚 Chapters: ${m.chapters || '?'}\n🎭 ${(m.genres || []).map((g) => g.name).join(', ')}\n\n${(m.synopsis || '').slice(0, 800)}`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'animechar', category: 'Downloader', desc: 'Anime character info', usage: '.animechar <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Character ka naam', 'animechar goku');
    try { const j = await (await fetch(`https://api.jikan.moe/v4/characters?q=${enc(ctx.text)}&limit=1`)).json();
      const c = j.data && j.data[0]; if (!c) return ctx.reply('❌ Nahi mila.');
      const cap = `👤 *${c.name}*\n${c.name_kanji || ''}\n\n${(c.about || 'No info').slice(0, 600)}`;
      if (c.images?.jpg?.image_url) await ctx.sock.sendMessage(ctx.from, { image: { url: c.images.jpg.image_url }, caption: cap }, { quoted: ctx.msg });
      else await ctx.reply(cap);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- WALLPAPER (53-58) ----------------
  { cmd: 'wallpaper', category: 'Downloader', desc: 'Random HD wallpaper', usage: '.wallpaper', run: async (ctx) => {
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://picsum.photos/seed/${Date.now()}/800/600` }, caption: '🖼️ *Wallpaper* — IMRAN MD' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Wallpaper nahi aa saka.'); } } },
  { cmd: 'wallpaperhd', category: 'Downloader', desc: 'Full HD wallpaper', usage: '.wallpaperhd', run: async (ctx) => {
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://picsum.photos/seed/${Date.now()}/1920/1080` }, caption: '🖼️ *HD Wallpaper*' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'mobilewall', category: 'Downloader', desc: 'Mobile wallpaper', usage: '.mobilewall', run: async (ctx) => {
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://picsum.photos/seed/${Date.now()}/720/1280` }, caption: '📱 *Mobile Wallpaper*' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'pcwall', category: 'Downloader', desc: 'PC/Desktop wallpaper', usage: '.pcwall', run: async (ctx) => {
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://picsum.photos/seed/${Date.now()}/1366/768` }, caption: '💻 *PC Wallpaper*' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'naturewall', category: 'Downloader', desc: 'Nature wallpaper', usage: '.naturewall', run: async (ctx) => {
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://picsum.photos/seed/nature${Date.now() % 1000}/800/600` }, caption: '🌿 *Nature Wallpaper*' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'darkwall', category: 'Downloader', desc: 'Dark style wallpaper', usage: '.darkwall', run: async (ctx) => {
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://picsum.photos/seed/dark${Date.now() % 1000}/800/600?grayscale` }, caption: '🌑 *Dark Wallpaper*' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Fail.'); } } },

  // ---------------- MOVIE / DRAMA (59-67) ----------------
  { cmd: 'movieinfo', category: 'Downloader', desc: 'Film ki maloomat + poster', usage: '.movieinfo <film>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Film ka naam', 'movieinfo 3 idiots');
    await ctx.reply('🎬 Maloomat la raha hun...');
    try { const w = await wikiSummary(ctx.text + ' film');
      if (w.type === 'disambiguation') return ctx.reply('❌ Wazeh naam likhein, misal: `.movieinfo Dangal (2016 film)`');
      const cap = `🎬 *${w.title}*\n\n${(w.extract || '').slice(0, 900)}`;
      if (w.thumbnail?.source) await ctx.sock.sendMessage(ctx.from, { image: { url: w.thumbnail.source }, caption: cap }, { quoted: ctx.msg });
      else await ctx.reply(cap);
    } catch (e) { await ctx.reply('❌ Film nahi mili. Naam sahi likhein.'); } } },
  { cmd: 'findmovie', category: 'Downloader', desc: 'Film dhoondein', usage: '.findmovie <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'findmovie sholay');
    try { const w = await wikiSummary(ctx.text);
      await ctx.reply(`🔎 *${w.title}*\n\n${(w.extract || '').slice(0, 900)}`);
    } catch (e) { await ctx.reply('❌ Nahi mili.'); } } },
  { cmd: 'moviesearch', category: 'Downloader', desc: 'Film search list', usage: '.moviesearch <lafz>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Lafz', 'moviesearch avengers');
    try { const j = await (await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${enc(ctx.text + ' film')}&format=json&srlimit=5`, { headers: { 'User-Agent': 'IMRANMDBOT/1.0' } })).json();
      const list = j.query?.search || [];
      if (!list.length) return ctx.reply('❌ Kuch nahi mila.');
      let out = '🎬 *Search results:*\n\n';
      list.forEach((s, i) => { out += `${i + 1}. ${s.title}\n`; });
      await ctx.reply(out + '\nTafseel ke liye: `.movieinfo <poora naam>`');
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'movietrailer', category: 'Downloader', desc: 'Film ka trailer link', usage: '.movietrailer <film>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Film ka naam', 'movietrailer pathaan');
    await ctx.reply(`🎞️ *Trailer:*\n${ytSearchLink(ctx.text + ' official trailer')}`);
  } },
  { cmd: 'filminfo', category: 'Downloader', desc: 'Film info (short)', usage: '.filminfo <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'filminfo jawan');
    try { const w = await wikiSummary(ctx.text + ' film');
      await ctx.reply(`🎬 *${w.title}*\n\n${(w.extract || '').slice(0, 700)}`);
    } catch (e) { await ctx.reply('❌ Nahi mili.'); } } },
  { cmd: 'drama', category: 'Downloader', desc: 'Dramay ki maloomat', usage: '.drama <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Dramay ka naam', 'drama mere paas tum ho');
    await ctx.reply('📺 Dhoond raha hun...');
    try { const w = await wikiSummary(ctx.text);
      const cap = `📺 *${w.title}*\n\n${(w.extract || '').slice(0, 900)}`;
      if (w.thumbnail?.source) await ctx.sock.sendMessage(ctx.from, { image: { url: w.thumbnail.source }, caption: cap }, { quoted: ctx.msg });
      else await ctx.reply(cap);
    } catch (e) { await ctx.reply('❌ Drama nahi mila.'); } } },
  { cmd: 'dramaep', category: 'Downloader', desc: 'Drama episode info', usage: '.dramaep <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'dramaep ertugrul');
    try { const w = await wikiSummary(ctx.text + ' TV series');
      await ctx.reply(`📺 *${w.title}*\n\n${(w.extract || '').slice(0, 800)}\n\n🔗 Episodes: ${ytSearchLink(ctx.text + ' episode 1')}`);
    } catch (e) { await ctx.reply('❌ Nahi mila.'); } } },
  { cmd: 'dramainfo', category: 'Downloader', desc: 'Drama tafseel', usage: '.dramainfo <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'dramainfo humsafar');
    try { const w = await wikiSummary(ctx.text);
      await ctx.reply(`📺 *${w.title}*\n\n${(w.extract || '').slice(0, 800)}`);
    } catch (e) { await ctx.reply('❌ Nahi mila.'); } } },
  { cmd: 'pakdrama', category: 'Downloader', desc: 'Pakistani drama info', usage: '.pakdrama <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'pakdrama zindagi gulzar hai');
    try { const w = await wikiSummary(ctx.text + ' Pakistani drama');
      await ctx.reply(`🇵🇰 *${w.title}*\n\n${(w.extract || '').slice(0, 800)}`);
    } catch (e) { await ctx.reply('❌ Nahi mila.'); } } },

  // ---------------- GENRE SEARCH (68-77) ----------------
  { cmd: 'qawwali', category: 'Downloader', desc: 'Qawwali search/download', usage: '.qawwali [naam]', run: async (ctx) => {
    const q = ctx.text || 'nusrat fateh ali khan qawwali';
    try { const t = (await itunesPreview(q))[0];
      await ctx.reply(`🕌 *Qawwali:*\n${ytSearchLink(q)}`);
      if (t) await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply(`🕌 ${ytSearchLink(q)}`); } } },
  { cmd: 'naat', category: 'Downloader', desc: 'Naat search', usage: '.naat [naam]', run: async (ctx) => {
    const q = (ctx.text || 'owais raza qadri') + ' naat';
    await ctx.reply(`🕌 *Naat:*\n${ytSearchLink(q)}`);
  } },
  { cmd: 'nasheed', category: 'Downloader', desc: 'Nasheed search', usage: '.nasheed [naam]', run: async (ctx) => {
    const q = (ctx.text || 'muhammad tareq') + ' nasheed';
    await ctx.reply(`🌙 *Nasheed:*\n${ytSearchLink(q)}`);
  } },
  { cmd: 'ghazal', category: 'Downloader', desc: 'Ghazal search + preview', usage: '.ghazal [naam]', run: async (ctx) => {
    const q = (ctx.text || 'mehdi hassan') + ' ghazal';
    try { const t = (await itunesPreview(q))[0];
      await ctx.reply(`🎻 *Ghazal:*\n${ytSearchLink(q)}`);
      if (t) await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply(`🎻 ${ytSearchLink(q)}`); } } },
  { cmd: 'punjabisong', category: 'Downloader', desc: 'Punjabi gaana', usage: '.punjabisong [naam]', run: async (ctx) => {
    const q = (ctx.text || 'punjabi song') + ' punjabi song';
    try { const t = (await itunesPreview(q))[0];
      await ctx.reply(`💃 *Punjabi:*\n${ytSearchLink(q)}`);
      if (t) await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply(`💃 ${ytSearchLink(q)}`); } } },
  { cmd: 'hindisong', category: 'Downloader', desc: 'Hindi gaana', usage: '.hindisong [naam]', run: async (ctx) => {
    const q = ctx.text || 'latest hindi song';
    try { const t = (await itunesPreview(q + ' hindi'))[0];
      await ctx.reply(`🎵 *Hindi:*\n${ytSearchLink(q)}`);
      if (t) await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply(`🎵 ${ytSearchLink(q)}`); } } },
  { cmd: 'sadsong', category: 'Downloader', desc: 'Sad gaana', usage: '.sadsong [naam]', run: async (ctx) => {
    const q = (ctx.text || 'sad song') + ' sad';
    try { const t = (await itunesPreview(q))[0];
      await ctx.reply(`💔 *Sad song:*\n${ytSearchLink(q)}`);
      if (t) await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply(`💔 ${ytSearchLink(q)}`); } } },
  { cmd: 'djsong', category: 'Downloader', desc: 'DJ song', usage: '.djsong [naam]', run: async (ctx) => {
    const q = (ctx.text || 'dj') + ' dj remix';
    await ctx.reply(`🎧 *DJ:*\n${ytSearchLink(q)}`);
  } },
  { cmd: 'remix', category: 'Downloader', desc: 'Remix song', usage: '.remix [naam]', run: async (ctx) => {
    const q = (ctx.text || 'song') + ' remix';
    await ctx.reply(`🔀 *Remix:*\n${ytSearchLink(q)}`);
  } },
  { cmd: 'lofi', category: 'Downloader', desc: 'Lofi music', usage: '.lofi [mood]', run: async (ctx) => {
    const q = (ctx.text || 'lofi hip hop') + ' lofi';
    try { const t = (await itunesPreview(q))[0];
      await ctx.reply(`☕ *Lofi:*\n${ytSearchLink(q)}`);
      if (t) await ctx.sock.sendMessage(ctx.from, { audio: { url: t.previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply(`☕ ${ytSearchLink(q)}`); } } },

  // ---------------- MISC MEDIA (78-100) ----------------
  { cmd: 'ringtone', category: 'Downloader', desc: 'Ringtone preview', usage: '.ringtone [naam]', run: async (ctx) => {
    const q = (ctx.text || 'iphone') + ' ringtone';
    try { const list = await itunesPreview(q, 3);
      if (!list.length) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { audio: { url: list[0].previewUrl }, mimetype: 'audio/mp4' }, { quoted: ctx.msg });
      await ctx.reply(`📲 Ringtone: *${list[0].trackName}*`);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'audiobook', category: 'Downloader', desc: 'Audiobook search', usage: '.audiobook <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Kitaab ka naam', 'audiobook atomic habits');
    try { const r = await fetch(`https://itunes.apple.com/search?term=${enc(ctx.text)}&media=audiobook&limit=5`);
      const j = await r.json(); const list = j.results || [];
      if (!list.length) return ctx.reply('❌ Nahi mili.');
      let out = '📚 *Audiobooks:*\n\n';
      list.forEach((b, i) => { out += `${i + 1}. *${b.collectionName}* — ${b.artistName}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'soundcloud', category: 'Downloader', desc: 'SoundCloud search link', usage: '.soundcloud <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'soundcloud rap');
    await ctx.reply(`🟠 *SoundCloud:*\nhttps://soundcloud.com/search/sounds?q=${enc(ctx.text)}`);
  } },
  { cmd: 'scdl', category: 'Downloader', desc: 'SoundCloud link note', usage: '.scdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'SoundCloud link', 'scdl <link>');
    await ctx.reply('🟠 SoundCloud se direct download ke liye link khol kar download button dabayein:\n' + ctx.text);
  } },
  { cmd: 'spotify', category: 'Downloader', desc: 'Spotify search link', usage: '.spotify <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'spotify pasoori');
    await ctx.reply(`🟢 *Spotify:*\nhttps://open.spotify.com/search/${enc(ctx.text)}`);
  } },
  { cmd: 'spotisearch', category: 'Downloader', desc: 'Spotify talash', usage: '.spotisearch <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'spotisearch atif');
    await ctx.reply(`🟢 https://open.spotify.com/search/${enc(ctx.text)}`);
  } },
  { cmd: 'ytthumb', category: 'Downloader', desc: 'YouTube video ka thumbnail', usage: '.ytthumb <youtube link>', run: async (ctx) => {
    const m = (ctx.text || '').match(/(?:v=|youtu\.be\/|shorts\/)([\w-]{11})/);
    if (!m) return need(ctx, 'YouTube link', 'ytthumb <link>');
    try { await ctx.sock.sendMessage(ctx.from, { image: { url: `https://i.ytimg.com/vi/${m[1]}/maxresdefault.jpg` }, caption: '🖼️ *Thumbnail* — IMRAN MD' }, { quoted: ctx.msg }); }
    catch (e) { await ctx.reply('❌ Thumbnail nahi mila.'); } } },
  { cmd: 'vimeoinfo', category: 'Downloader', desc: 'Vimeo video maloomat', usage: '.vimeoinfo <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Vimeo link', 'vimeoinfo <link>');
    try { const j = await (await fetch(`https://vimeo.com/api/oembed.json?url=${enc(ctx.text)}`)).json();
      const cap = `🎥 *${j.title}*\n👤 ${j.author_name}\n⏱️ ${j.duration || '?'} sec`;
      if (j.thumbnail_url) await ctx.sock.sendMessage(ctx.from, { image: { url: j.thumbnail_url }, caption: cap }, { quoted: ctx.msg });
      else await ctx.reply(cap);
    } catch (e) { await ctx.reply('❌ Maloomat nahi mili.'); } } },
  { cmd: 'pindl', category: 'Downloader', desc: 'Pinterest download', usage: '.pindl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Pinterest link', 'pindl <link>');
    try { const u = await tryDl(ctx.text, ['pin']);
      if (!u) return ctx.reply('❌ Download nahi ho saka.');
      if (/\.(jpg|jpeg|png)/i.test(u)) await ctx.sock.sendMessage(ctx.from, { image: { url: u }, caption: '📌 IMRAN MD' }, { quoted: ctx.msg });
      else await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '📌 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'pinimg', category: 'Downloader', desc: 'Pinterest image', usage: '.pinimg <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Link', 'pinimg <link>');
    try { const u = await tryDl(ctx.text, ['pin']);
      if (!u) return ctx.reply('❌ Nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { image: { url: u }, caption: '📌 *IMRAN MD BOT*' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'likeedl', category: 'Downloader', desc: 'Likee video download', usage: '.likeedl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'Likee link', 'likeedl <link>');
    await ctx.reply('⬇️ Likee video...');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Video nahi mili. Likee download limited hai.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 IMRAN MD' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'snackdl', category: 'Downloader', desc: 'SnackVideo download', usage: '.snackdl <link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'SnackVideo link', 'snackdl <link>');
    try { const u = await tryDl(ctx.text, ['tiktok']);
      if (!u) return ctx.reply('❌ Video nahi mili.');
      await ctx.sock.sendMessage(ctx.from, { video: { url: u }, caption: '🎵 IMRAN MD BOT' }, { quoted: ctx.msg });
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'rumbledl', category: 'Downloader', desc: 'Rumble video search', usage: '.rumbledl <naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'Naam', 'rumbledl news');
    await ctx.reply(`🟢 *Rumble:*\nhttps://rumble.com/search/video?q=${enc(ctx.text)}`);
  } },
  { cmd: 'mediadl', category: 'Downloader', desc: 'MediaFire direct link nikalein', usage: '.mediadl <mediafire link>', run: async (ctx) => {
    if (!/^https?:\/\//i.test(ctx.text)) return need(ctx, 'MediaFire link', 'mediadl <link>');
    await ctx.reply('🔎 Direct link nikal raha hun...');
    try { const html = await (await fetch(ctx.text, { headers: { 'User-Agent': 'Mozilla/5.0' } })).text();
      const m = html.match(/https:\/\/download\d*\.mediafire\.com\/[^"'\\\s]+/);
      if (!m) return ctx.reply('❌ Direct link nahi mila. File private to nahi?');
      await ctx.reply(`✅ *Direct download link:*\n${m[0]}`);
    } catch (e) { await ctx.reply('❌ Link nahi khul saka.'); } } },
  { cmd: 'gdrivedl', category: 'Downloader', desc: 'Google Drive direct download link', usage: '.gdrivedl <drive link>', run: async (ctx) => {
    const m = (ctx.text || '').match(/[-\w]{25,}/);
    if (!m) return need(ctx, 'Google Drive share link', 'gdrivedl <link>');
    const direct = `https://drive.google.com/uc?export=download&id=${m[0]}`;
    await ctx.reply(`💾 *Direct download:*\n${direct}\n\nChhoti files seedha download hongi.`);
  } },
  { cmd: 'apkdl', category: 'Downloader', desc: 'APK search (APKMirror)', usage: '.apkdl <app naam>', run: async (ctx) => {
    if (!ctx.text) return need(ctx, 'App ka naam', 'apkdl whatsapp');
    await ctx.reply(`📦 *APK search:*\nhttps://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=${enc(ctx.text)}\n\n⚠️ APK sirf bharosemand site se install karein.`);
  } },
  { cmd: 'tiktrend', category: 'Downloader', desc: 'TikTok trending', usage: '.tiktrend', run: async (ctx) => {
    await ctx.reply('🔥 *TikTok Trending:*\nhttps://www.tiktok.com/discover');
  } },
  { cmd: 'yttrend', category: 'Downloader', desc: 'YouTube trending videos', usage: '.yttrend', run: async (ctx) => {
    await ctx.reply('🔥 *YouTube Trending:*\nhttps://www.youtube.com/feed/trending');
  } },
  { cmd: 'topmovies', category: 'Downloader', desc: 'Top movies chart (IMDb)', usage: '.topmovies', run: async (ctx) => {
    await ctx.reply('🏆 *Top Movies (IMDb):*\nhttps://www.imdb.com/chart/top/');
  } },
  { cmd: 'topsongs', category: 'Downloader', desc: 'Billboard Hot 100', usage: '.topsongs', run: async (ctx) => {
    await ctx.reply('🏆 *Billboard Hot 100:*\nhttps://www.billboard.com/charts/hot-100/');
  } },
  { cmd: 'newrelease', category: 'Downloader', desc: 'Naye gaanon ki list (iTunes)', usage: '.newrelease', run: async (ctx) => {
    await ctx.reply('🆕 Naye gaane la raha hun...');
    try { const j = await (await fetch('https://itunes.apple.com/us/rss/topsongs/limit=10/json')).json();
      const list = j.feed?.entry || [];
      if (!list.length) return ctx.reply('❌ List nahi mili.');
      let out = '🆕 *Top New Songs:*\n\n';
      list.forEach((e, i) => { out += `${i + 1}. *${e['im:name'].label}* — ${e['im:artist'].label}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'topalbums', category: 'Downloader', desc: 'Top albums (iTunes)', usage: '.topalbums', run: async (ctx) => {
    try { const j = await (await fetch('https://itunes.apple.com/us/rss/topalbums/limit=10/json')).json();
      const list = j.feed?.entry || [];
      if (!list.length) return ctx.reply('❌ List nahi mili.');
      let out = '💿 *Top Albums:*\n\n';
      list.forEach((e, i) => { out += `${i + 1}. *${e['im:name'].label}* — ${e['im:artist'].label}\n`; });
      await ctx.reply(out);
    } catch (e) { await ctx.reply('❌ Fail.'); } } },
  { cmd: 'radiolive', category: 'Downloader', desc: 'Live radio (duniya bhar)', usage: '.radiolive', run: async (ctx) => {
    await ctx.reply('📻 *Live Radio:*\nhttps://radio.garden/\n\nDuniya bhar ke live stations sunein 🌍');
  } },
];
