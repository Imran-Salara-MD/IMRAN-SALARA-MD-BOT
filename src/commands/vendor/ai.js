// IMRAN MD BOT — AI & Tools command pack (100 commands)
module.exports = [
  {
    cmd: 'ai',
    aliases: ['gpt'],
    category: 'AI & Tools',
    desc: 'AI se baat karein (API key lage to smart jawab)',
    usage: '.ai apna sawal likhein',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.ai waqt kya hai zindagi ka matlab`');
      const { aiApiUrl, aiApiKey, aiModel } = ctx.config;
      if (aiApiUrl && aiApiKey) {
        try {
          const r = await fetch(aiApiUrl.replace(/\/$/, '') + '/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + aiApiKey },
            body: JSON.stringify({ model: aiModel, messages: [{ role: 'system', content: 'You are IMRAN MD BOT, a helpful assistant. Reply in the same language as the user (Urdu, Roman Urdu, English or Arabic).' }, { role: 'user', content: ctx.text }] })
          }).then(r => r.json());
          const ans = r.choices?.[0]?.message?.content;
          if (ans) return ctx.reply('🤖 ' + ans);
        } catch (e) { /* fall through to honest fallback */ }
      }
      await ctx.reply('🤖 AI API configure nahi hai, is liye main seedha jawab nahi de sakta.\n\nLekin main aapki madad kar sakta hun:\n• `.menu` — tamam commands\n• `.translate urdu <text>` — tarjuma\n• `.dictionary <word>` — lafz ka matlab\n• `.wiki <topic>` — maloomat\n\n(Owner AI_API_URL aur AI_API_KEY lagaye to main ChatGPT jaisa jawab dunga.)');
    }
  },
  {
    cmd: 'ask',
    aliases: ['sawal'],
    category: 'AI & Tools',
    desc: 'Mukhtasar AI jawab (API ho to)',
    usage: '.ask <sawal>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.ask pani kyun geela hota hai`');
      const { aiApiUrl, aiApiKey, aiModel } = ctx.config;
      if (aiApiUrl && aiApiKey) {
        try {
          const r = await fetch(aiApiUrl.replace(/\/$/, '') + '/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + aiApiKey },
            body: JSON.stringify({ model: aiModel, messages: [{ role: 'system', content: 'Answer briefly in the user\'s language.' }, { role: 'user', content: ctx.text }] })
          }).then(r => r.json());
          const ans = r.choices?.[0]?.message?.content;
          if (ans) return ctx.reply('💡 ' + ans);
        } catch (e) {}
      }
      await ctx.reply('💡 AI API configure nahi hai. Mukhtasar jawab ke liye `.wiki ' + ctx.text.slice(0, 40) + '` try karein.');
    }
  },
  {
    cmd: 'summarize',
    aliases: ['khulasa'],
    category: 'AI & Tools',
    desc: 'Lambe text ka khulasa (3 ahem jumlay)',
    usage: '.summarize <lamba text>',
    run: async (ctx) => {
      if (ctx.text.length < 60) return ctx.reply('❌ Thora lamba text dein taake khulasa nikal sakun.');
      const sents = ctx.text.replace(/\n+/g, ' ').split(/(?<=[.!?۔])\s+/).filter(s => s.length > 10);
      if (sents.length <= 3) return ctx.reply('📝 ' + ctx.text);
      const freq = {};
      ctx.text.toLowerCase().split(/\s+/).forEach(w => { if (w.length > 3) freq[w] = (freq[w] || 0) + 1; });
      const scored = sents.map((s, i) => ({ s, i, sc: s.toLowerCase().split(/\s+/).reduce((a, w) => a + (freq[w] || 0), 0) }));
      scored.sort((a, b) => b.sc - a.sc);
      const top = scored.slice(0, 3).sort((a, b) => a.i - b.i).map(x => '• ' + x.s.trim());
      await ctx.reply('📝 *Khulasa:*\n\n' + top.join('\n'));
    }
  },
  {
    cmd: 'imagine',
    aliases: ['tasveer'],
    category: 'AI & Tools',
    desc: 'Text se tasveer banayein (AI API darkar)',
    usage: '.imagine <wazahat>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.imagine pahar par ghar suraj tulu`');
      await ctx.reply('🎨 Tasveer banane ke liye AI image API key darkar hai (AI_API_URL / AI_API_KEY).\n\nFilhal ye feature configure nahi hai — owner se rabta karein.');
    }
  },
  {
    cmd: 'translate',
    aliases: ['tr'],
    category: 'AI & Tools',
    desc: 'Kisi bhi zaban ka tarjuma',
    usage: '.translate urdu <text> | .tr en <text> | .tr ar <text>',
    run: async (ctx) => {
      const [lang, ...rest] = ctx.args;
      if (!lang || !rest.length) return ctx.reply('❌ Misal: `.translate urdu how are you`\nZabanein: urdu, en, ar, hi, fr, de, es...');
      const map = { urdu: 'ur', english: 'en', arabic: 'ar', hindi: 'hi' };
      const tl = map[lang.toLowerCase()] || lang.toLowerCase();
      try {
        const q = encodeURIComponent(rest.join(' '));
        const r = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tl}&dt=t&q=${q}`).then(r => r.json());
        await ctx.reply('🌐 ' + r[0].map(x => x[0]).join(''));
      } catch (e) { await ctx.reply('❌ Tarjuma nahi ho saka.'); }
    }
  },
  {
    cmd: 'dictionary',
    aliases: ['define', 'meaning'],
    category: 'AI & Tools',
    desc: 'English lafz ka matlab aur misal',
    usage: '.dictionary <word>',
    run: async (ctx) => {
      const w = ctx.args[0];
      if (!w) return ctx.reply('❌ Misal: `.dictionary love`');
      try {
        const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(w)}`).then(r => r.json());
        const e = r[0];
        const m = e.meanings[0];
        const d = m.definitions[0];
        await ctx.reply(`📖 *${e.word}* (${m.partOfSpeech})\n\n${d.definition}${d.example ? '\n\n💬 Misal: ' + d.example : ''}`);
      } catch (e) { await ctx.reply('❌ Lafz nahi mila.'); }
    }
  },
  {
    cmd: 'synonyms',
    aliases: ['syn'],
    category: 'AI & Tools',
    desc: 'Lafz ke hum-mani alfaz',
    usage: '.synonyms <word>',
    run: async (ctx) => {
      const w = ctx.args[0];
      if (!w) return ctx.reply('❌ Misal: `.synonyms happy`');
      try {
        const r = await fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(w)}&max=10`).then(r => r.json());
        if (!r.length) return ctx.reply('❌ Koi hum-mani lafz nahi mila.');
        await ctx.reply('🔗 *' + w + '* ke hum-mani:\n' + r.map(x => '• ' + x.word).join('\n'));
      } catch (e) { await ctx.reply('❌ Koshish nakaam.'); }
    }
  },
  {
    cmd: 'antonyms',
    aliases: ['ant'],
    category: 'AI & Tools',
    desc: 'Lafz ke mutazad alfaz',
    usage: '.antonyms <word>',
    run: async (ctx) => {
      const w = ctx.args[0];
      if (!w) return ctx.reply('❌ Misal: `.antonyms happy`');
      try {
        const r = await fetch(`https://api.datamuse.com/words?rel_ant=${encodeURIComponent(w)}&max=10`).then(r => r.json());
        if (!r.length) return ctx.reply('❌ Koi mutazad lafz nahi mila.');
        await ctx.reply('🔀 *' + w + '* ke mutazad:\n' + r.map(x => '• ' + x.word).join('\n'));
      } catch (e) { await ctx.reply('❌ Koshish nakaam.'); }
    }
  },
  {
    cmd: 'rhyme',
    aliases: ['kafiya'],
    category: 'AI & Tools',
    desc: 'Lafz se milti-julti awaz wale alfaz',
    usage: '.rhyme <word>',
    run: async (ctx) => {
      const w = ctx.args[0];
      if (!w) return ctx.reply('❌ Misal: `.rhyme day`');
      try {
        const r = await fetch(`https://api.datamuse.com/words?rel_rhy=${encodeURIComponent(w)}&max=10`).then(r => r.json());
        if (!r.length) return ctx.reply('❌ Koi hum-awaz lafz nahi mila.');
        await ctx.reply('🎵 *' + w + '* se milti awaz:\n' + r.map(x => '• ' + x.word).join('\n'));
      } catch (e) { await ctx.reply('❌ Koshish nakaam.'); }
    }
  },
  {
    cmd: 'weather',
    aliases: ['mausam'],
    category: 'AI & Tools',
    desc: 'Kisi sheher ka maujooda mausam',
    usage: '.weather <city>',
    run: async (ctx) => {
      const city = ctx.text;
      if (!city) return ctx.reply('❌ Misal: `.weather Lahore`');
      try {
        const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`).then(r => r.json());
        if (!g.results?.length) return ctx.reply('❌ Sheher nahi mila.');
        const { latitude, longitude, name, country } = g.results[0];
        const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`).then(r => r.json());
        const c = w.current;
        const codes = { 0: '☀️ Saaf', 1: '🌤️ Halke badal', 2: '⛅ Badal', 3: '☁️ Ghehne badal', 45: '🌫️ Dhund', 51: '🌦️ Halki boond', 61: '🌧️ Barish', 71: '🌨️ Barf', 95: '⛈️ Toofan' };
        await ctx.reply(`🌤️ *Mausam — ${name}, ${country}*\n\n🌡️ ${c.temperature_2m}°C\n${codes[c.weather_code] || '• Weather code ' + c.weather_code}\n💧 Nami: ${c.relative_humidity_2m}%\n💨 Hawa: ${c.wind_speed_10m} km/h`);
      } catch (e) { await ctx.reply('❌ Mausam ki maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'forecast',
    aliases: ['peshgoi'],
    category: 'AI & Tools',
    desc: '7 din ki mausam peshgoi',
    usage: '.forecast <city>',
    run: async (ctx) => {
      const city = ctx.text;
      if (!city) return ctx.reply('❌ Misal: `.forecast Karachi`');
      try {
        const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`).then(r => r.json());
        if (!g.results?.length) return ctx.reply('❌ Sheher nahi mila.');
        const { latitude, longitude, name } = g.results[0];
        const w = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=7`).then(r => r.json());
        const d = w.daily;
        let out = `📅 *7 Din Peshgoi — ${name}*\n\n`;
        for (let i = 0; i < 7; i++) out += `${d.time[i].slice(5)}: ${d.temperature_2m_min[i]}°–${d.temperature_2m_max[i]}°C ☔${d.precipitation_probability_max[i]}%\n`;
        await ctx.reply(out);
      } catch (e) { await ctx.reply('❌ Peshgoi nahi mil saki.'); }
    }
  },
  {
    cmd: 'pktime',
    aliases: ['timepk', 'waqt'],
    category: 'AI & Tools',
    desc: 'Pakistan ka maujooda waqt',
    usage: '.pktime',
    run: async (ctx) => {
      try {
        const r = await fetch('http://worldtimeapi.org/api/timezone/Asia/Karachi').then(r => r.json());
        const d = new Date(r.datetime);
        await ctx.reply('🕐 *Pakistan waqt:*\n' + d.toLocaleString('en-PK', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }));
      } catch (e) { await ctx.reply('❌ Waqt maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'wiki',
    aliases: ['wikipedia'],
    category: 'AI & Tools',
    desc: 'Wikipedia se maloomat (English)',
    usage: '.wiki <topic>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.wiki Pakistan`');
      try {
        const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(ctx.text.replace(/ /g, '_'))}`).then(r => r.json());
        if (r.type === 'disambiguation' || !r.extract) return ctx.reply('❌ Wazeh maloomat nahi milin.');
        await ctx.reply(`📚 *${r.title}*\n\n${r.extract.slice(0, 600)}${r.extract.length > 600 ? '…' : ''}`);
      } catch (e) { await ctx.reply('❌ Maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'wikiur',
    aliases: ['wikiurdu'],
    category: 'AI & Tools',
    desc: 'Wikipedia se maloomat (Urdu)',
    usage: '.wikiur <mozua>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.wikiur پاکستان`');
      try {
        const r = await fetch(`https://ur.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(ctx.text.replace(/ /g, '_'))}`).then(r => r.json());
        if (!r.extract) return ctx.reply('❌ Maloomat nahi milin.');
        await ctx.reply(`📚 *${r.title}*\n\n${r.extract.slice(0, 600)}${r.extract.length > 600 ? '…' : ''}`);
      } catch (e) { await ctx.reply('❌ Maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'countryinfo',
    aliases: ['country', 'mulk'],
    category: 'AI & Tools',
    desc: 'Kisi mulk ki mukammal maloomat',
    usage: '.countryinfo <country>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.countryinfo Japan`');
      try {
        const r = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(ctx.text)}`).then(r => r.json());
        const c = r[0];
        if (!c) return ctx.reply('❌ Mulk nahi mila.');
        await ctx.reply(`🌍 *${c.name.common}*\n\n🏛️ Darul-hakumat: ${(c.capital || ['—'])[0]}\n🗺️ Ilaqa: ${c.region}\n👥 Abadi: ${Number(c.population).toLocaleString()}\n🗣️ Zabanein: ${Object.values(c.languages || {}).join(', ') || '—'}\n💰 Currency: ${Object.values(c.currencies || {}).map(x => x.name).join(', ') || '—'}`);
      } catch (e) { await ctx.reply('❌ Maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'currency',
    aliases: ['convert', 'fx'],
    category: 'AI & Tools',
    desc: 'Currency converter (live rates)',
    usage: '.currency 100 USD PKR',
    run: async (ctx) => {
      const [amt, from, to] = ctx.args;
      if (!amt || !from || !to) return ctx.reply('❌ Misal: `.currency 100 USD PKR`');
      try {
        const r = await fetch(`https://open.er-api.com/v6/latest/${from.toUpperCase()}`).then(r => r.json());
        const rate = r.rates?.[to.toUpperCase()];
        if (!rate) return ctx.reply('❌ Currency code ghalat hai.');
        await ctx.reply(`💱 ${amt} ${from.toUpperCase()} = *${(parseFloat(amt) * rate).toFixed(2)} ${to.toUpperCase()}*\n(1 ${from.toUpperCase()} = ${rate} ${to.toUpperCase()})`);
      } catch (e) { await ctx.reply('❌ Rate nahi mil saka.'); }
    }
  },
  {
    cmd: 'numberfact',
    aliases: ['numfact'],
    category: 'AI & Tools',
    desc: 'Kisi number ke bare mein dilchasp baat',
    usage: '.numberfact 42',
    run: async (ctx) => {
      const n = ctx.args[0] || Math.floor(Math.random() * 100);
      try {
        const r = await fetch(`https://numbersapi.com/${n}?json`).then(r => r.json());
        await ctx.reply(`🔢 *Number ${n}:*\n${r.text}`);
      } catch (e) { await ctx.reply('❌ Fact nahi mil saka.'); }
    }
  },
  {
    cmd: 'mathfact',
    aliases: ['mfact'],
    category: 'AI & Tools',
    desc: 'Number ka math fact',
    usage: '.mathfact 7',
    run: async (ctx) => {
      const n = ctx.args[0] || Math.floor(Math.random() * 50);
      try {
        const r = await fetch(`https://numbersapi.com/${n}/math?json`).then(r => r.json());
        await ctx.reply(`➗ *Math fact ${n}:*\n${r.text}`);
      } catch (e) { await ctx.reply('❌ Fact nahi mil saka.'); }
    }
  },
  {
    cmd: 'uselessfact',
    aliases: ['ufact'],
    category: 'AI & Tools',
    desc: 'Be-maqsad lekin dilchasp maloomat',
    usage: '.uselessfact',
    run: async (ctx) => {
      try {
        const r = await fetch('https://uselessfacts.jsph.pl/random.json?language=en').then(r => r.json());
        await ctx.reply('💡 ' + r.text);
      } catch (e) { await ctx.reply('❌ Fact nahi mil saka.'); }
    }
  },
  {
    cmd: 'advice',
    aliases: ['nasihat', 'mashwara'],
    category: 'AI & Tools',
    desc: 'Zindagi ke liye mufeed mashwara',
    usage: '.advice',
    run: async (ctx) => {
      try {
        const r = await fetch('https://api.adviceslip.com/advice').then(r => r.json());
        await ctx.reply('🧠 *Mashwara:*\n' + r.slip.advice);
      } catch (e) { await ctx.reply('❌ Mashwara nahi mil saka.'); }
    }
  },
  {
    cmd: 'bored',
    aliases: ['activity', 'boriyat'],
    category: 'AI & Tools',
    desc: 'Boriyat door karne wali activity',
    usage: '.bored',
    run: async (ctx) => {
      try {
        const r = await fetch('https://www.boredapi.com/api/activity').then(r => r.json());
        await ctx.reply(`🎯 *Activity:* ${r.activity}\n📌 Type: ${r.type} | 👥 ${r.participants} afrad`);
      } catch (e) {
        const acts = ['Kitab ka ek bab parhein', '10 minute walk karein', 'Purane dost ko call karein', 'Nayi dish banana seekhein'];
        await ctx.reply('🎯 *Activity:* ' + acts[Math.floor(Math.random() * acts.length)]);
      }
    }
  },
  {
    cmd: 'github',
    aliases: ['gh'],
    category: 'AI & Tools',
    desc: 'GitHub user ki maloomat',
    usage: '.github <username>',
    run: async (ctx) => {
      const u = ctx.args[0];
      if (!u) return ctx.reply('❌ Misal: `.github torvalds`');
      try {
        const r = await fetch(`https://api.github.com/users/${encodeURIComponent(u)}`).then(r => r.json());
        if (r.message === 'Not Found') return ctx.reply('❌ User nahi mila.');
        await ctx.reply(`🐙 *${r.login}*\n\n👤 ${r.name || '—'}\n📝 ${r.bio || '—'}\n📦 Repos: ${r.public_repos} | 👥 Followers: ${r.followers}`);
      } catch (e) { await ctx.reply('❌ Maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'repo',
    aliases: ['ghrepo'],
    category: 'AI & Tools',
    desc: 'GitHub repository ki maloomat',
    usage: '.repo <owner>/<repo>',
    run: async (ctx) => {
      const u = ctx.args[0];
      if (!u || !u.includes('/')) return ctx.reply('❌ Misal: `.repo whiskeysockets/baileys`');
      try {
        const r = await fetch(`https://api.github.com/repos/${u}`).then(r => r.json());
        if (r.message === 'Not Found') return ctx.reply('❌ Repo nahi mila.');
        await ctx.reply(`📦 *${r.full_name}*\n\n${r.description || '—'}\n⭐ Stars: ${r.stargazers_count} | 🍴 Forks: ${r.forks_count}\n💻 ${r.language || '—'}`);
      } catch (e) { await ctx.reply('❌ Maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'npm',
    aliases: ['npmpkg'],
    category: 'AI & Tools',
    desc: 'NPM package ki maloomat',
    usage: '.npm <package>',
    run: async (ctx) => {
      const p = ctx.args[0];
      if (!p) return ctx.reply('❌ Misal: `.npm express`');
      try {
        const r = await fetch(`https://registry.npmjs.org/${encodeURIComponent(p)}/latest`).then(r => r.json());
        if (r.error) return ctx.reply('❌ Package nahi mila.');
        await ctx.reply(`📦 *${r.name}* v${r.version}\n\n${r.description || '—'}`);
      } catch (e) { await ctx.reply('❌ Maloomat nahi mil sakin.'); }
    }
  },
  {
    cmd: 'namaz',
    aliases: ['prayer', 'azaan'],
    category: 'AI & Tools',
    desc: 'Sheher ke namaz ke auqat',
    usage: '.namaz <city>',
    run: async (ctx) => {
      const city = ctx.text || 'Lahore';
      try {
        const r = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=Pakistan&method=2`).then(r => r.json());
        const t = r.data.timings;
        await ctx.reply(`🕌 *Namaz Auqat — ${city}*\n\n🌅 Fajr: ${t.Fajr}\n🌞 Sunrise: ${t.Sunrise}\n☀️ Dhuhr: ${t.Dhuhr}\n🌤️ Asr: ${t.Asr}\n🌇 Maghrib: ${t.Maghrib}\n🌙 Isha: ${t.Isha}`);
      } catch (e) { await ctx.reply('❌ Auqat nahi mil sake.'); }
    }
  },
  {
    cmd: 'qibla',
    aliases: ['qibladir'],
    category: 'AI & Tools',
    desc: 'Qibla ki simt (degrees)',
    usage: '.qibla 31.5 74.3',
    run: async (ctx) => {
      const [lat, lng] = ctx.args;
      if (!lat || !lng) return ctx.reply('❌ Misal: `.qibla 31.5 74.3` (Lahore)');
      try {
        const r = await fetch(`https://api.aladhan.com/v1/qibla/${lat}/${lng}`).then(r => r.json());
        await ctx.reply(`🧭 *Qibla Direction:* ${r.data.direction.toFixed(2)}°\n(Shumal se ghari ki simt mein)`);
      } catch (e) { await ctx.reply('❌ Simt maloom nahi ho saki.'); }
    }
  },
  {
    cmd: 'hijri',
    aliases: ['islamicdate'],
    category: 'AI & Tools',
    desc: 'Aaj ki Hijri tareekh',
    usage: '.hijri',
    run: async (ctx) => {
      try {
        const d = new Date();
        const ds = `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
        const r = await fetch(`https://api.aladhan.com/v1/gToH?date=${ds}`).then(r => r.json());
        const h = r.data.hijri;
        await ctx.reply(`🌙 *Hijri Tareekh:* ${h.day} ${h.month.en} ${h.year} Hijri`);
      } catch (e) { await ctx.reply('❌ Tareekh nahi mil saki.'); }
    }
  },
  {
    cmd: 'starsign',
    aliases: ['zodiac'],
    category: 'AI & Tools',
    desc: 'Tareekh-e-pedaish se burj maloom karein',
    usage: '.starsign 15 08  (din mahina)',
    run: async (ctx) => {
      const [dd, mm] = ctx.args.map(Number);
      if (!dd || !mm) return ctx.reply('❌ Misal: `.starsign 15 8`');
      const signs = [[19, 'Capricorn ♑', 'Aquarius ♒'], [18, 'Aquarius ♒', 'Pisces ♓'], [20, 'Pisces ♓', 'Aries ♈'], [19, 'Aries ♈', 'Taurus ♉'], [20, 'Taurus ♉', 'Gemini ♊'], [20, 'Gemini ♊', 'Cancer ♋'], [22, 'Cancer ♋', 'Leo ♌'], [22, 'Leo ♌', 'Virgo ♍'], [22, 'Virgo ♍', 'Libra ♎'], [22, 'Libra ♎', 'Scorpio ♏'], [21, 'Scorpio ♏', 'Sagittarius ♐'], [21, 'Sagittarius ♐', 'Capricorn ♑']];
      const [cut, a, b] = signs[mm - 1] || [];
      if (!a) return ctx.reply('❌ Mahina 1-12 ke darmiyan likhein.');
      await ctx.reply(`⭐ Aapka burj: *${dd > cut ? b : a}*`);
    }
  },
  {
    cmd: 'nameage',
    aliases: ['agify'],
    category: 'AI & Tools',
    desc: 'Naam se andazan umar',
    usage: '.nameage <naam>',
    run: async (ctx) => {
      const n = ctx.args[0];
      if (!n) return ctx.reply('❌ Misal: `.nameage Imran`');
      try {
        const r = await fetch(`https://api.agify.io?name=${encodeURIComponent(n)}`).then(r => r.json());
        await ctx.reply(`🎂 *${r.name}* ki andazan umar: *${r.age} saal* (sample: ${r.count})`);
      } catch (e) { await ctx.reply('❌ Maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'namegender',
    aliases: ['genderize'],
    category: 'AI & Tools',
    desc: 'Naam se andazan gender',
    usage: '.namegender <naam>',
    run: async (ctx) => {
      const n = ctx.args[0];
      if (!n) return ctx.reply('❌ Misal: `.namegender Sara`');
      try {
        const r = await fetch(`https://api.genderize.io?name=${encodeURIComponent(n)}`).then(r => r.json());
        await ctx.reply(`👤 *${r.name}*: ${r.gender === 'male' ? 'Larka ♂️' : 'Larki ♀️'} (${Math.round(r.probability * 100)}% yaqeen)`);
      } catch (e) { await ctx.reply('❌ Maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'nationality',
    aliases: ['natio'],
    category: 'AI & Tools',
    desc: 'Naam se andazan qomiyat',
    usage: '.nationality <naam>',
    run: async (ctx) => {
      const n = ctx.args[0];
      if (!n) return ctx.reply('❌ Misal: `.nationality Ahmed`');
      try {
        const r = await fetch(`https://api.nationalize.io?name=${encodeURIComponent(n)}`).then(r => r.json());
        if (!r.country?.length) return ctx.reply('❌ Andaza nahi lag saka.');
        await ctx.reply('🌍 *' + n + '* ka imkani taaluq:\n' + r.country.slice(0, 3).map(c => `• ${c.country_id} (${Math.round(c.probability * 100)}%)`).join('\n'));
      } catch (e) { await ctx.reply('❌ Maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'dogpic',
    aliases: ['dog'],
    category: 'AI & Tools',
    desc: 'Piyare kuttay ki tasveer',
    usage: '.dogpic',
    run: async (ctx) => {
      try {
        const r = await fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json());
        await ctx.sock.sendMessage(ctx.from, { image: { url: r.message }, caption: '🐶' }, { quoted: ctx.msg });
      } catch (e) { await ctx.reply('❌ Tasveer nahi mil saki.'); }
    }
  },
  {
    cmd: 'catpic',
    aliases: ['cat'],
    category: 'AI & Tools',
    desc: 'Piyari billi ki tasveer',
    usage: '.catpic',
    run: async (ctx) => {
      try {
        const r = await fetch('https://cataas.com/cat?json=true').then(r => r.json());
        await ctx.sock.sendMessage(ctx.from, { image: { url: 'https://cataas.com' + r.url }, caption: '🐱' }, { quoted: ctx.msg });
      } catch (e) { await ctx.reply('❌ Tasveer nahi mil saki.'); }
    }
  },
  {
    cmd: 'foxpic',
    aliases: ['fox'],
    category: 'AI & Tools',
    desc: 'Lomri ki tasveer',
    usage: '.foxpic',
    run: async (ctx) => {
      try {
        const r = await fetch('https://randomfox.ca/floof').then(r => r.json());
        await ctx.sock.sendMessage(ctx.from, { image: { url: r.image }, caption: '🦊' }, { quoted: ctx.msg });
      } catch (e) { await ctx.reply('❌ Tasveer nahi mil saki.'); }
    }
  },
  {
    cmd: 'duckpic',
    aliases: ['duck'],
    category: 'AI & Tools',
    desc: 'Batakh ki tasveer',
    usage: '.duckpic',
    run: async (ctx) => {
      try {
        const r = await fetch('https://random-d.uk/api/v2/random').then(r => r.json());
        await ctx.sock.sendMessage(ctx.from, { image: { url: r.url }, caption: '🦆' }, { quoted: ctx.msg });
      } catch (e) { await ctx.reply('❌ Tasveer nahi mil saki.'); }
    }
  },
  {
    cmd: 'httpcat',
    aliases: ['httpcode'],
    category: 'AI & Tools',
    desc: 'HTTP status code billi ki surat mein',
    usage: '.httpcat 404',
    run: async (ctx) => {
      const code = ctx.args[0] || '200';
      await ctx.sock.sendMessage(ctx.from, { image: { url: `https://http.cat/${code}` }, caption: `🐱 HTTP ${code}` }, { quoted: ctx.msg }).catch(() => ctx.reply('❌ Ye code nahi mila.'));
    }
  },
  {
    cmd: 'itunes',
    aliases: ['search'],
    category: 'AI & Tools',
    desc: 'Gaana / film iTunes par talash karein',
    usage: '.itunes <naam>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.itunes Atif Aslam`');
      try {
        const r = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(ctx.text)}&media=music&limit=5`).then(r => r.json());
        if (!r.results?.length) return ctx.reply('❌ Kuch nahi mila.');
        await ctx.reply('🎵 *iTunes Results:*\n\n' + r.results.map((x, i) => `${i + 1}. ${x.trackName}\n   👤 ${x.artistName} | 💿 ${x.collectionName || '—'}`).join('\n\n'));
      } catch (e) { await ctx.reply('❌ Talash nahi ho saki.'); }
    }
  },
  {
    cmd: 'qrtext',
    aliases: ['qr'],
    category: 'AI & Tools',
    desc: 'Text ya link ka QR code banayein',
    usage: '.qrtext <text ya link>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.qrtext https://google.com`');
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(ctx.text)}`;
      await ctx.sock.sendMessage(ctx.from, { image: { url }, caption: '🔳 QR Code tayyar!' }, { quoted: ctx.msg }).catch(() => ctx.reply('❌ QR nahi ban saka.'));
    }
  },
  {
    cmd: 'tinyurl',
    aliases: ['short'],
    category: 'AI & Tools',
    desc: 'Lamba link chhota karein',
    usage: '.tinyurl <link>',
    run: async (ctx) => {
      const u = ctx.args[0];
      if (!u) return ctx.reply('❌ Misal: `.tinyurl https://google.com`');
      try {
        const r = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(u)}`).then(r => r.text());
        await ctx.reply('🔗 *Chhota link:*\n' + r);
      } catch (e) { await ctx.reply('❌ Link chhota nahi ho saka.'); }
    }
  },
  {
    cmd: 'unshorten',
    aliases: ['expand'],
    category: 'AI & Tools',
    desc: 'Chhote link ka asal pata dekhein',
    usage: '.unshorten <short link>',
    run: async (ctx) => {
      const u = ctx.args[0];
      if (!u) return ctx.reply('❌ Misal: `.unshorten https://bit.ly/xyz`');
      try {
        const r = await fetch(u, { method: 'HEAD', redirect: 'follow' });
        await ctx.reply('🔍 *Asal link:*\n' + r.url);
      } catch (e) { await ctx.reply('❌ Link khol nahi saka.'); }
    }
  },
  {
    cmd: 'reverse',
    aliases: ['rev'],
    category: 'AI & Tools',
    desc: 'Text ulta kar dein',
    usage: '.reverse <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.reverse hello`');
      await ctx.reply('🔄 ' + [...ctx.text].reverse().join(''));
    }
  },
  {
    cmd: 'upper',
    aliases: ['up'],
    category: 'AI & Tools',
    desc: 'Text BARA kar dein',
    usage: '.upper <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.upper hello`');
      await ctx.reply(ctx.text.toUpperCase());
    }
  },
  {
    cmd: 'lower',
    aliases: ['low'],
    category: 'AI & Tools',
    desc: 'Text chhota kar dein',
    usage: '.lower <TEXT>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.lower HELLO`');
      await ctx.reply(ctx.text.toLowerCase());
    }
  },
  {
    cmd: 'title',
    aliases: ['capitalize'],
    category: 'AI & Tools',
    desc: 'Har lafz ka pehla harf bara',
    usage: '.title <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.title hello world`');
      await ctx.reply(ctx.text.toLowerCase().replace(/(^|\s)\S/g, c => c.toUpperCase()));
    }
  },
  {
    cmd: 'mock',
    aliases: ['spongebob'],
    category: 'AI & Tools',
    desc: 'tAnZ kArTa hUa TeXt',
    usage: '.mock <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.mock tum bohot achay ho`');
      await ctx.reply([...ctx.text].map((c, i) => i % 2 ? c.toUpperCase() : c.toLowerCase()).join(''));
    }
  },
  {
    cmd: 'clap',
    aliases: ['claptext'],
    category: 'AI & Tools',
    desc: 'Lafzon ke darmiyan 👏',
    usage: '.clap <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.clap tum jeet gaye`');
      await ctx.reply('👏 ' + ctx.text.split(/\s+/).join(' 👏 ') + ' 👏');
    }
  },
  {
    cmd: 'vaporwave',
    aliases: ['vapor'],
    category: 'AI & Tools',
    desc: 'Ｖａｐｏｒｗａｖｅ style text',
    usage: '.vaporwave <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.vaporwave hello`');
      await ctx.reply([...ctx.text].map(c => {
        const n = c.charCodeAt(0);
        if (n >= 33 && n <= 126) return String.fromCharCode(n + 0xFEE0);
        if (c === ' ') return '　';
        return c;
      }).join(''));
    }
  },
  {
    cmd: 'emojify',
    aliases: ['emoji'],
    category: 'AI & Tools',
    desc: 'Text ko emoji letters mein badlein',
    usage: '.emojify <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.emojify hi`');
      const out = [...ctx.text.toLowerCase()].map(c => {
        if (c >= 'a' && c <= 'z') return `:regional_indicator_${c}:`.replace(/:/g, '') && String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 97);
        if (c === ' ') return '  ';
        if (c >= '0' && c <= '9') return ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'][+c];
        return c;
      }).join(' ');
      await ctx.reply(out);
    }
  },
  {
    cmd: 'morse',
    aliases: ['morsecode'],
    category: 'AI & Tools',
    desc: 'Text ko Morse code mein badlein',
    usage: '.morse <text>',
    run: async (ctx) => {
      const M = { a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..', 0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', ' ': '/' };
      if (!ctx.text) return ctx.reply('❌ Misal: `.morse sos`');
      await ctx.reply('📡 ' + [...ctx.text.toLowerCase()].map(c => M[c] || c).join(' '));
    }
  },
  {
    cmd: 'unmorse',
    aliases: ['demorse'],
    category: 'AI & Tools',
    desc: 'Morse code wapas text mein',
    usage: '.unmorse ... --- ...',
    run: async (ctx) => {
      const M = { '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '/': ' ' };
      if (!ctx.text) return ctx.reply('❌ Misal: `.unmorse ... --- ...`');
      await ctx.reply('📡 ' + ctx.text.trim().split(/\s+/).map(c => M[c] ?? '?').join(''));
    }
  },
  {
    cmd: 'binary',
    aliases: ['bin'],
    category: 'AI & Tools',
    desc: 'Text ko binary (0/1) mein badlein',
    usage: '.binary <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.binary hi`');
      await ctx.reply('💻 ' + [...ctx.text].map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '));
    }
  },
  {
    cmd: 'unbinary',
    aliases: ['debin'],
    category: 'AI & Tools',
    desc: 'Binary wapas text mein',
    usage: '.unbinary 01101000 01101001',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.unbinary 01101000 01101001`');
      try {
        await ctx.reply('💻 ' + ctx.text.trim().split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join(''));
      } catch (e) { await ctx.reply('❌ Ghalat binary.'); }
    }
  },
  {
    cmd: 'base64e',
    aliases: ['b64e'],
    category: 'AI & Tools',
    desc: 'Text ko Base64 mein encode karein',
    usage: '.base64e <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.base64e hello`');
      await ctx.reply('🔐 ' + Buffer.from(ctx.text, 'utf8').toString('base64'));
    }
  },
  {
    cmd: 'base64d',
    aliases: ['b64d'],
    category: 'AI & Tools',
    desc: 'Base64 ko wapas text mein decode karein',
    usage: '.base64d <base64>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.base64d aGVsbG8=`');
      try {
        await ctx.reply('🔓 ' + Buffer.from(ctx.text.trim(), 'base64').toString('utf8'));
      } catch (e) { await ctx.reply('❌ Ghalat Base64.'); }
    }
  },
  {
    cmd: 'urlencode',
    aliases: ['ue'],
    category: 'AI & Tools',
    desc: 'Text ko URL-safe banayein',
    usage: '.urlencode <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.urlencode hello world`');
      await ctx.reply('🔗 ' + encodeURIComponent(ctx.text));
    }
  },
  {
    cmd: 'urldecode',
    aliases: ['ud'],
    category: 'AI & Tools',
    desc: 'URL-encoded text wapas parhein',
    usage: '.urldecode <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.urldecode hello%20world`');
      try {
        await ctx.reply('🔗 ' + decodeURIComponent(ctx.text));
      } catch (e) { await ctx.reply('❌ Ghalat encoding.'); }
    }
  },
  {
    cmd: 'wordcount',
    aliases: ['wc'],
    category: 'AI & Tools',
    desc: 'Text mein alfaz ginein',
    usage: '.wordcount <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Koi text dein.');
      const w = ctx.text.trim().split(/\s+/).length;
      await ctx.reply(`📝 Alfaz: *${w}* | Huruf: *${ctx.text.length}*`);
    }
  },
  {
    cmd: 'charcount',
    aliases: ['cc'],
    category: 'AI & Tools',
    desc: 'Huruf, alfaz aur lines ginein',
    usage: '.charcount <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Koi text dein.');
      const lines = ctx.text.split('\n').length;
      const words = ctx.text.trim().split(/\s+/).length;
      await ctx.reply(`🔤 Huruf: *${ctx.text.length}*\n📝 Alfaz: *${words}*\n📄 Lines: *${lines}*`);
    }
  },
  {
    cmd: 'palindrome',
    aliases: ['palin'],
    category: 'AI & Tools',
    desc: 'Check karein lafz ulta-seedha ek jaisa hai?',
    usage: '.palindrome <word>',
    run: async (ctx) => {
      const w = ctx.text.replace(/[\s,.!?]/g, '').toLowerCase();
      if (!w) return ctx.reply('❌ Misal: `.palindrome madam`');
      const is = w === [...w].reverse().join('');
      await ctx.reply(is ? `✅ *${ctx.text}* palindrome hai! (ulta-seedha ek jaisa)` : `❌ *${ctx.text}* palindrome nahi hai.`);
    }
  },
  {
    cmd: 'owo',
    aliases: ['uwu'],
    category: 'AI & Tools',
    desc: 'Text ko owo style mein badlein',
    usage: '.owo <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.owo hello friend`');
      const faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
      const out = ctx.text.replace(/[rl]/g, 'w').replace(/[RL]/g, 'W').replace(/n([aeiou])/g, 'ny$1').replace(/N([aeiou])/g, 'Ny$1').replace(/N([AEIOU])/g, 'NY$1');
      await ctx.reply(out + ' ' + faces[Math.floor(Math.random() * faces.length)]);
    }
  },
  {
    cmd: 'zalgo',
    aliases: ['cursed'],
    category: 'AI & Tools',
    desc: 'Zalgo (bigra hua) text',
    usage: '.zalgo <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.zalgo hello`');
      const marks = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u030b', '\u0313', '\u0314', '\u0334', '\u0335', '\u0336'];
      await ctx.reply([...ctx.text].map(c => c + marks[Math.floor(Math.random() * marks.length)] + marks[Math.floor(Math.random() * marks.length)]).join(''));
    }
  },
  {
    cmd: 'strike',
    aliases: ['strikethrough'],
    category: 'AI & Tools',
    desc: 'Text par kaatne wali lakeer',
    usage: '.strike <text>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.strike ghalat`');
      await ctx.reply([...ctx.text].map(c => c + '\u0336').join(''));
    }
  },
  {
    cmd: 'smallcaps',
    aliases: ['scaps'],
    category: 'AI & Tools',
    desc: 'Sᴍᴀʟʟ Cᴀᴘs style text',
    usage: '.smallcaps <text>',
    run: async (ctx) => {
      const M = { a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ' };
      if (!ctx.text) return ctx.reply('❌ Misal: `.smallcaps hello`');
      await ctx.reply([...ctx.text.toLowerCase()].map(c => M[c] || c).join(''));
    }
  },
  {
    cmd: 'fliptext',
    aliases: ['flip'],
    category: 'AI & Tools',
    desc: 'Text ulta (upside-down)',
    usage: '.fliptext <text>',
    run: async (ctx) => {
      const M = { a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z', '.': '˙', ',': "'", '!': '¡', '?': '¿' };
      if (!ctx.text) return ctx.reply('❌ Misal: `.fliptext hello`');
      await ctx.reply([...ctx.text.toLowerCase()].reverse().map(c => M[c] || c).join(''));
    }
  },
  {
    cmd: 'password',
    aliases: ['pass', 'pwgen'],
    category: 'AI & Tools',
    desc: 'Mazboot random password banayein',
    usage: '.password [lambai, default 12]',
    run: async (ctx) => {
      const crypto = require('crypto');
      const len = Math.min(Math.max(parseInt(ctx.args[0]) || 12, 6), 64);
      const pw = crypto.randomBytes(len).toString('base64').replace(/[^A-Za-z0-9]/g, '').slice(0, len);
      await ctx.reply(`🔐 *Mazboot password (${pw.length} huruf):*\n\`${pw}\`\n\n⚠️ Kisi ke saath share na karein!`);
    }
  },
  {
    cmd: 'uuid',
    aliases: ['guid'],
    category: 'AI & Tools',
    desc: 'Random UUID banayein',
    usage: '.uuid',
    run: async (ctx) => {
      const crypto = require('crypto');
      await ctx.reply('🆔 `' + crypto.randomUUID() + '`');
    }
  },
  {
    cmd: 'pin',
    aliases: ['otpgen'],
    category: 'AI & Tools',
    desc: 'Random PIN code banayein',
    usage: '.pin [4 ya 6]',
    run: async (ctx) => {
      const n = ctx.args[0] === '6' ? 6 : 4;
      const pin = String(Math.floor(Math.random() * 10 ** n)).padStart(n, '0');
      await ctx.reply(`🔢 *${n}-digit PIN:* \`${pin}\``);
    }
  },
  {
    cmd: 'pick',
    aliases: ['choose'],
    category: 'AI & Tools',
    desc: 'Options mein se ek muntakhib karein',
    usage: '.pick chai coffee doodh',
    run: async (ctx) => {
      if (ctx.args.length < 2) return ctx.reply('❌ Misal: `.pick chai coffee doodh`');
      await ctx.reply('🎯 Mera intekhab: *' + ctx.args[Math.floor(Math.random() * ctx.args.length)] + '*');
    }
  },
  {
    cmd: 'diceroll',
    aliases: ['roll'],
    category: 'AI & Tools',
    desc: 'Pasa phenkein (dice roll)',
    usage: '.diceroll [2d6 jaisa]',
    run: async (ctx) => {
      const m = (ctx.args[0] || '1d6').match(/^(\d+)d(\d+)$/i);
      if (!m) return ctx.reply('❌ Misal: `.diceroll 2d6`');
      const [n, sides] = [Math.min(+m[1], 20), Math.min(+m[2], 100)];
      const rolls = Array.from({ length: n }, () => 1 + Math.floor(Math.random() * sides));
      await ctx.reply(`🎲 ${rolls.join(' + ')} = *${rolls.reduce((a, b) => a + b, 0)}*`);
    }
  },
  {
    cmd: 'cointoss',
    aliases: ['toss'],
    category: 'AI & Tools',
    desc: 'Sikka uchalein (head/tail)',
    usage: '.cointoss',
    run: async (ctx) => {
      await ctx.reply(Math.random() < 0.5 ? '🪙 *Head!*' : '🪙 *Tail!*');
    }
  },
  {
    cmd: 'math',
    aliases: ['hisaab'],
    category: 'AI & Tools',
    desc: 'Calculator — hisaab kitab',
    usage: '.math 5*8+2',
    run: async (ctx) => {
      const expr = ctx.text.replace(/\s+/g, '');
      if (!expr || !/^[0-9+\-*/().%^]*$/.test(expr)) return ctx.reply('❌ Misal: `.math 5*8+2` (sirf adad aur + - * / % ^)');
      try {
        const ans = Function('"use strict";return(' + expr.replace(/\^/g, '**') + ')')();
        await ctx.reply(`🧮 ${expr} = *${+Number(ans).toFixed(6)}*`);
      } catch (e) { await ctx.reply('❌ Hisaab ghalat hai.'); }
    }
  },
  {
    cmd: 'prime',
    aliases: ['isprime'],
    category: 'AI & Tools',
    desc: 'Check karein adad prime hai?',
    usage: '.prime 17',
    run: async (ctx) => {
      const n = parseInt(ctx.args[0]);
      if (!n || n < 2) return ctx.reply('❌ Misal: `.prime 17`');
      let is = true;
      for (let i = 2; i * i <= n; i++) if (n % i === 0) { is = false; break; }
      await ctx.reply(is ? `✅ *${n}* prime number hai!` : `❌ *${n}* prime nahi hai.`);
    }
  },
  {
    cmd: 'fibonacci',
    aliases: ['fib'],
    category: 'AI & Tools',
    desc: 'Fibonacci series banayein',
    usage: '.fibonacci 10',
    run: async (ctx) => {
      const n = Math.min(Math.max(parseInt(ctx.args[0]) || 10, 1), 50);
      const s = [0, 1];
      for (let i = 2; i < n; i++) s.push(s[i - 1] + s[i - 2]);
      await ctx.reply('🔢 Fibonacci (' + n + '):\n' + s.slice(0, n).join(', '));
    }
  },
  {
    cmd: 'factorial',
    aliases: ['factn'],
    category: 'AI & Tools',
    desc: 'Adad ka factorial',
    usage: '.factorial 5',
    run: async (ctx) => {
      const n = parseInt(ctx.args[0]);
      if (isNaN(n) || n < 0 || n > 170) return ctx.reply('❌ Misal: `.factorial 5` (0–170)');
      let f = 1;
      for (let i = 2; i <= n; i++) f *= i;
      await ctx.reply(`❗ ${n}! = *${f}*`);
    }
  },
  {
    cmd: 'bmi',
    aliases: ['sehat'],
    category: 'AI & Tools',
    desc: 'BMI (jismani wazan index) maloom karein',
    usage: '.bmi 70 5.9  (wazan kg, qad feet)',
    run: async (ctx) => {
      const [kg, ft] = ctx.args.map(Number);
      if (!kg || !ft) return ctx.reply('❌ Misal: `.bmi 70 5.9`');
      const m = ft * 0.3048;
      const bmi = kg / (m * m);
      const cat = bmi < 18.5 ? 'Kam wazan' : bmi < 25 ? 'Normal ✅' : bmi < 30 ? 'Zyada wazan' : 'Motapa';
      await ctx.reply(`⚖️ *BMI:* ${bmi.toFixed(1)} — ${cat}`);
    }
  },
  {
    cmd: 'agecalc',
    aliases: ['age'],
    category: 'AI & Tools',
    desc: 'Tareekh-e-pedaish se umar',
    usage: '.agecalc 2000-05-15',
    run: async (ctx) => {
      const b = new Date(ctx.args[0]);
      if (isNaN(b)) return ctx.reply('❌ Misal: `.agecalc 2000-05-15` (YYYY-MM-DD)');
      const now = new Date();
      let y = now.getFullYear() - b.getFullYear();
      let m = now.getMonth() - b.getMonth();
      if (m < 0 || (m === 0 && now.getDate() < b.getDate())) { y--; m += 12; }
      const days = Math.floor((now - b) / 86400000);
      await ctx.reply(`🎂 *Umar:* ${y} saal, ${m} mahine\n📅 Kul din: ${days.toLocaleString()}`);
    }
  },
  {
    cmd: 'percent',
    aliases: ['pct'],
    category: 'AI & Tools',
    desc: 'Feesad nikalein (x ka y%)',
    usage: '.percent 20 500',
    run: async (ctx) => {
      const [p, n] = ctx.args.map(Number);
      if (isNaN(p) || isNaN(n)) return ctx.reply('❌ Misal: `.percent 20 500` (500 ka 20%)');
      await ctx.reply(`📊 ${n} ka ${p}% = *${(n * p / 100).toFixed(2)}*`);
    }
  },
  {
    cmd: 'average',
    aliases: ['avg'],
    category: 'AI & Tools',
    desc: 'Adaad ka ostan (average)',
    usage: '.average 10 20 30',
    run: async (ctx) => {
      const ns = ctx.args.map(Number).filter(x => !isNaN(x));
      if (!ns.length) return ctx.reply('❌ Misal: `.average 10 20 30`');
      await ctx.reply(`📊 Ostan: *${(ns.reduce((a, b) => a + b, 0) / ns.length).toFixed(2)}*`);
    }
  },
  {
    cmd: 'temp',
    aliases: ['temperature'],
    category: 'AI & Tools',
    desc: 'Celsius ↔ Fahrenheit',
    usage: '.temp 37 c  ya  .temp 98 f',
    run: async (ctx) => {
      const [v, u] = ctx.args;
      const n = parseFloat(v);
      if (isNaN(n)) return ctx.reply('❌ Misal: `.temp 37 c` ya `.temp 98 f`');
      if ((u || 'c').toLowerCase().startsWith('c')) await ctx.reply(`🌡️ ${n}°C = *${(n * 9 / 5 + 32).toFixed(1)}°F*`);
      else await ctx.reply(`🌡️ ${n}°F = *${((n - 32) * 5 / 9).toFixed(1)}°C*`);
    }
  },
  {
    cmd: 'unit',
    aliases: ['convertunit'],
    category: 'AI & Tools',
    desc: 'Lambai / wazan ki ikaiyan badlein',
    usage: '.unit 10 km mi  |  .unit 5 kg lb',
    run: async (ctx) => {
      const [v, from, to] = ctx.args;
      const n = parseFloat(v);
      const conv = { km: { mi: 0.621371 }, mi: { km: 1.60934 }, kg: { lb: 2.20462 }, lb: { kg: 0.453592 }, m: { ft: 3.28084 }, ft: { m: 0.3048 }, cm: { in: 0.393701 }, in: { cm: 2.54 } };
      const f = (from || '').toLowerCase(), t = (to || '').toLowerCase();
      if (isNaN(n) || !conv[f]?.[t]) return ctx.reply('❌ Misal: `.unit 10 km mi`\nIkaiyan: km, mi, kg, lb, m, ft, cm, in');
      await ctx.reply(`📏 ${n} ${f} = *${(n * conv[f][t]).toFixed(3)} ${t}*`);
    }
  },
  {
    cmd: 'timer',
    aliases: ['alarm'],
    category: 'AI & Tools',
    desc: 'Minute baad yaad-dihani',
    usage: '.timer 5 chai tayyar',
    run: async (ctx) => {
      const mins = parseFloat(ctx.args[0]);
      if (!mins || mins <= 0 || mins > 1440) return ctx.reply('❌ Misal: `.timer 5 chai tayyar` (1–1440 minute)');
      const msg = ctx.args.slice(1).join(' ') || 'Waqt ho gaya!';
      setTimeout(() => ctx.sock.sendMessage(ctx.from, { text: `⏰ *Timer:* ${msg}` }, { quoted: ctx.msg }).catch(() => {}), mins * 60000);
      await ctx.reply(`⏰ Timer lag gaya — ${mins} minute baad yaad dilaunga.\n(Not: server restart ho to timer khatam)`);
    }
  },
  {
    cmd: 'remindme',
    aliases: ['remind', 'yad'],
    category: 'AI & Tools',
    desc: 'Kisi baat ki yaad-dihani lagayein',
    usage: '.remindme 30 dawai khana',
    run: async (ctx) => {
      const mins = parseFloat(ctx.args[0]);
      if (!mins || mins <= 0 || mins > 1440) return ctx.reply('❌ Misal: `.remindme 30 dawai khana`');
      const msg = ctx.args.slice(1).join(' ') || 'Yaad-dihani!';
      setTimeout(() => ctx.sock.sendMessage(ctx.from, { text: `🔔 *Yaad-dihani:* ${msg}` }, { quoted: ctx.msg }).catch(() => {}), mins * 60000);
      await ctx.reply(`🔔 Theek hai! ${mins} minute baad yaad dilaunga: "${msg}"`);
    }
  },
  {
    cmd: 'color',
    aliases: ['rang'],
    category: 'AI & Tools',
    desc: 'Random rang ka hex code',
    usage: '.color',
    run: async (ctx) => {
      const h = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
      const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
      await ctx.reply(`🎨 *Rang:* #${h.toUpperCase()}\n🔴${r} 🟢${g} 🔵${b}`);
    }
  },
  {
    cmd: 'lorem',
    aliases: ['dummytext'],
    category: 'AI & Tools',
    desc: 'Lorem ipsum dummy text',
    usage: '.lorem [alfaz ki tadad]',
    run: async (ctx) => {
      const base = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'.split(' ');
      const n = Math.min(Math.max(parseInt(ctx.args[0]) || 30, 5), 200);
      let out = [];
      for (let i = 0; i < n; i++) out.push(base[i % base.length]);
      await ctx.reply('📄 ' + out.join(' ') + '.');
    }
  },
  {
    cmd: 'serverip',
    aliases: ['myip'],
    category: 'AI & Tools',
    desc: 'Bot ke server ka IP aur sheher',
    usage: '.serverip',
    run: async (ctx) => {
      try {
        const r = await fetch('http://ip-api.com/json/').then(r => r.json());
        await ctx.reply(`🌐 *Server:* ${r.query}\n📍 ${r.city}, ${r.country} (${r.isp || '—'})`);
      } catch (e) { await ctx.reply('❌ Maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'chuck',
    aliases: ['chucknorris'],
    category: 'AI & Tools',
    desc: 'Chuck Norris joke',
    usage: '.chuck',
    run: async (ctx) => {
      try {
        const r = await fetch('https://api.chucknorris.io/jokes/random').then(r => r.json());
        await ctx.reply('💪 ' + r.value);
      } catch (e) { await ctx.reply('❌ Joke nahi mil saka.'); }
    }
  },
  {
    cmd: 'dadjoke',
    aliases: ['dad'],
    category: 'AI & Tools',
    desc: 'Dad joke (halka phulka)',
    usage: '.dadjoke',
    run: async (ctx) => {
      try {
        const r = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } }).then(r => r.json());
        await ctx.reply('👨 ' + r.joke);
      } catch (e) { await ctx.reply('❌ Joke nahi mil saka.'); }
    }
  },
  {
    cmd: 'kanye',
    aliases: ['kanyequote'],
    category: 'AI & Tools',
    desc: 'Kanye West ka qaul',
    usage: '.kanye',
    run: async (ctx) => {
      try {
        const r = await fetch('https://api.kanye.rest').then(r => r.json());
        await ctx.reply('🎤 *" ' + r.quote + ' "*\n— Kanye West');
      } catch (e) { await ctx.reply('❌ Qaul nahi mil saka.'); }
    }
  },
  {
    cmd: 'nickname',
    aliases: ['nick'],
    category: 'AI & Tools',
    desc: 'Stylish nickname banayein',
    usage: '.nickname Imran',
    run: async (ctx) => {
      const n = ctx.args[0] || 'Player';
      const a = ['乂', '꧁', '★', '『', '⫷', '『'];
      const b = ['乂', '꧂', '★', '』', '⫸', '』'];
      const i = Math.floor(Math.random() * a.length);
      await ctx.reply(`✨ *Nickname:* ${a[i]}${n}${b[i]}`);
    }
  },
  {
    cmd: 'username',
    aliases: ['uname'],
    category: 'AI & Tools',
    desc: 'Random username ideas',
    usage: '.username [naam]',
    run: async (ctx) => {
      const base = (ctx.args[0] || 'user').toLowerCase().replace(/\W/g, '');
      const pre = ['the', 'real', 'itz', 'mr', 'dark', 'king'];
      const suf = ['_official', '.yt', '_01', 'x', '_pk', '007'];
      const p = pre[Math.floor(Math.random() * pre.length)], s = suf[Math.floor(Math.random() * suf.length)];
      await ctx.reply(`👤 *Username ideas:*\n• ${p}${base}${s}\n• ${base}_${Math.floor(Math.random() * 999)}\n• ${base}${s}${Math.floor(Math.random() * 99)}`);
    }
  },
  {
    cmd: 'geocode',
    aliases: ['latlong', 'coords'],
    category: 'AI & Tools',
    desc: 'Sheher ke coordinates (lat/long)',
    usage: '.geocode <city>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Misal: `.geocode Lahore`');
      try {
        const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ctx.text)}&count=1`).then(r => r.json());
        if (!g.results?.length) return ctx.reply('❌ Jagah nahi mili.');
        const r0 = g.results[0];
        await ctx.reply(`📍 *${r0.name}, ${r0.country}*\nLatitude: ${r0.latitude}\nLongitude: ${r0.longitude}`);
      } catch (e) { await ctx.reply('❌ Maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'elevation',
    aliases: ['height', 'bulandi'],
    category: 'AI & Tools',
    desc: 'Kisi jagah ki satah-samandar se bulandi',
    usage: '.elevation 31.5 74.3',
    run: async (ctx) => {
      const [lat, lng] = ctx.args;
      if (!lat || !lng) return ctx.reply('❌ Misal: `.elevation 31.5 74.3`');
      try {
        const r = await fetch(`https://api.open-meteo.com/v1/elevation?latitude=${lat}&longitude=${lng}`).then(r => r.json());
        await ctx.reply(`⛰️ Bulandi: *${r.elevation[0]} meter* (satah-samandar se)`);
      } catch (e) { await ctx.reply('❌ Maloom nahi ho saka.'); }
    }
  },
  {
    cmd: 'aqi',
    aliases: ['airquality', 'fiza'],
    category: 'AI & Tools',
    desc: 'Hawa ka mayar (AQI)',
    usage: '.aqi <city>',
    run: async (ctx) => {
      const city = ctx.text;
      if (!city) return ctx.reply('❌ Misal: `.aqi Lahore`');
      try {
        const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`).then(r => r.json());
        if (!g.results?.length) return ctx.reply('❌ Sheher nahi mila.');
        const { latitude, longitude, name } = g.results[0];
        const r = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm2_5`).then(r => r.json());
        const aqi = r.current.us_aqi;
        const lvl = aqi <= 50 ? 'Achhi ✅' : aqi <= 100 ? 'Qabil-e-qubool 🙂' : aqi <= 150 ? 'Hassas afrad ke liye kharab 😷' : 'Kharab 🤢';
        await ctx.reply(`🌫️ *AQI — ${name}:* ${aqi} (${lvl})\nPM2.5: ${r.current.pm2_5} µg/m³`);
      } catch (e) { await ctx.reply('❌ AQI nahi mil saka.'); }
    }
  },
  {
    cmd: 'riddle',
    aliases: ['paheli'],
    category: 'AI & Tools',
    desc: 'Paheli (jawab ke saath)',
    usage: '.riddle',
    run: async (ctx) => {
      const R = [
        ['Wo kya hai jo jitna nikalo utna barhta hai?', 'Garha (pit)'],
        ['Wo kya hai jiske paas chehra hai magar aankhein nahi?', 'Ghari (clock)'],
        ['What has keys but no locks?', 'Keyboard ⌨️'],
        ['Wo kya hai jo upar jata hai, neeche nahi aata?', 'Umar (age)'],
        ['What runs but never walks?', 'Ghadi (clock) ⏰'],
        ['Wo kya hai jo tumhara hai magar doosre zyada istemal karte hain?', 'Tumhara naam'],
        ['What has a head and tail but no body?', 'Sikka (coin) 🪙'],
        ['Wo kya hai jo bolta nahi magar jawab deta hai?', 'Goonj (echo)'],
      ];
      const [q, a] = R[Math.floor(Math.random() * R.length)];
      await ctx.reply(`🧩 *Paheli:*\n${q}\n\n💡 Jawab: ${a}`);
    }
  },
  {
    cmd: 'eightball',
    aliases: ['8ball', 'magicball'],
    category: 'AI & Tools',
    desc: 'Jadu ki gend se sawal ka jawab',
    usage: '.eightball <sawal>',
    run: async (ctx) => {
      if (!ctx.text) return ctx.reply('❌ Pehle sawal to poochein! `.eightball kya main kamyab hunga`');
      const A = ['Yaqeenan haan! ✅', 'Haan, bilkul 💯', 'Imkan hai 🙂', 'Mushkil lagta hai 🤔', 'Bilkul nahi ❌', 'Waqt batayega ⏳', 'Sawal dobara poochein 🔮', 'Haan, mehnat jari rakhein 💪'];
      await ctx.reply(`🎱 *Sawal:* ${ctx.text}\n*Jawab:* ${A[Math.floor(Math.random() * A.length)]}`);
    }
  },
  {
    cmd: 'lovecalc',
    aliases: ['love'],
    category: 'AI & Tools',
    desc: 'Do naamon ki mohabbat ka feesad (mazak)',
    usage: '.lovecalc Ali Sara',
    run: async (ctx) => {
      const [a, b] = ctx.args;
      if (!a || !b) return ctx.reply('❌ Misal: `.lovecalc Ali Sara`');
      let h = 0;
      for (const c of (a + b).toLowerCase()) h = (h * 31 + c.charCodeAt(0)) % 101;
      const pct = 40 + (h % 61);
      await ctx.reply(`❤️ *${a} + ${b} = ${pct}%*\n${pct > 80 ? 'Kya baat hai! 💕' : pct > 60 ? 'Achi jori 🙂' : 'Dosti behtar rahegi 😄'}\n\n_(Sirf tafreeh ke liye)_`);
    }
  },
  {
    cmd: 'compliment',
    aliases: ['tareef'],
    category: 'AI & Tools',
    desc: 'Piyari tareef',
    usage: '.compliment [@user]',
    run: async (ctx) => {
      const C = ['Aapki muskurahat din bana deti hai 😊', 'Aap bohot mehnati hain 💪', 'Aapka dil bohot bara hai ❤️', 'Aap se baat karke acha lagta hai 🌟', 'Aap bohot zaheen hain 🧠', 'Aapki soch bohot achi hai ✨'];
      const who = ctx.args[0] ? ctx.args[0] + ' ' : '';
      await ctx.reply(`💐 ${who}${C[Math.floor(Math.random() * C.length)]}`);
    }
  },
  {
    cmd: 'roastme',
    aliases: ['roast'],
    category: 'AI & Tools',
    desc: 'Halka-phulka mazaq (pyar bhara)',
    usage: '.roastme',
    run: async (ctx) => {
      const R = ['Aap itne masroof hain ke aaina bhi aapko miss karta hai 😄', 'Aapka WiFi signal aapke iradon se zyada mazboot hai 📶', 'Aap chai ke baghair adhoore hain ☕', 'Aapki neend ka schedule NASA bhi samajh nahi saka 😴'];
      await ctx.reply('🔥 ' + R[Math.floor(Math.random() * R.length)] + '\n_(Sirf mazaq! 😄)_');
    }
  },
  {
    cmd: 'motivate',
    aliases: ['himmat'],
    category: 'AI & Tools',
    desc: 'Himmat afza baat',
    usage: '.motivate',
    run: async (ctx) => {
      const M = ['Mehnat kabhi zaya nahi jati 💪', 'Har mushkil ke baad aasani hai 🌅', 'Chhote qadam bhi manzil tak le jate hain 🚶', 'Khud par yaqeen rakhein, aap kar sakte hain ⭐', 'Nakamiyabi kamyabi ki pehli seerhi hai 🪜', 'Aaj ka din behtareen banayein 🌞'];
      await ctx.reply('✨ *' + M[Math.floor(Math.random() * M.length)] + '*');
    }
  },
  {
    cmd: 'ship',
    aliases: ['jori'],
    category: 'AI & Tools',
    desc: 'Do naamon ko jor kar ship-name banayein',
    usage: '.ship Ali Sara',
    run: async (ctx) => {
      const [a, b] = ctx.args;
      if (!a || !b) return ctx.reply('❌ Misal: `.ship Ali Sara`');
      const ship = a.slice(0, Math.ceil(a.length / 2)) + b.slice(Math.floor(b.length / 2));
      await ctx.reply(`💘 *Ship name:* ${a} + ${b} = *${ship}* ✨`);
    }
  },
];
