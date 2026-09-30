// IMRAN MD BOT — Islamic command pack (100 commands)
module.exports = [
  {
    cmd: 'dua',
    aliases: [],
    category: 'Islamic',
    desc: 'Random masnoon dua with translation',
    usage: '.dua',
    owner: false,
    run: async (ctx) => {
      const duas = [
        '🤲 *رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ*\n_"Aye hamare Rab! Hamein duniya mein bhalai de aur aakhirat mein bhalai de, aur hamein aag ke azab se bacha."_ (Surah Baqarah 2:201)',
        '🤲 *اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى*\n_"Aye Allah! Main tujh se hidayat, taqwa, paakdamani aur (dil ki) ghina maangta hun."_ (Sahih Muslim)',
        '🤲 *يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ*\n_"Aye dilon ko pherne wale! Mere dil ko apne deen par sabit qadam rakh."_ (Tirmidhi)',
        '🤲 *اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ*\n_"Aye Allah! Apne zikr, shukr aur behtareen ibadat par meri madad farma."_ (Abu Dawood)',
        '🤲 *رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ*\n_"Aye mere Rab! Mujhe, mere walidain aur tamam momineen ko us din bakhsh de jis din hisab qaim hoga."_ (Surah Ibrahim 14:41)',
        '🤲 *اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ*\n_"Aye Allah! Main teri naimat ke zawal aur teri aafiyat ke palat jane se teri panah maangta hun."_ (Sahih Muslim)',
      ];
      await ctx.reply(duas[Math.floor(Math.random() * duas.length)]);
    }
  },
  {
    cmd: 'dua-safar',
    aliases: [],
    category: 'Islamic',
    desc: 'Safar (travel) ki dua',
    usage: '.dua-safar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🧳 *Safar ki Dua:*\n\n*سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ*\n\n_"Paak hai wo zaat jis ne is sawari ko hamare liye musakhkhar kiya, warna hum is par qadir na the, aur beshak hum apne Rab ki taraf lautne wale hain."_ (Surah Zukhruf 43:13-14)');
    }
  },
  {
    cmd: 'dua-khana',
    aliases: [],
    category: 'Islamic',
    desc: 'Khana shuru karne ki dua',
    usage: '.dua-khana',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🍽️ *Khane se pehle:*\n\n*بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ*\n\n_"Allah ke naam se, aur Allah ki barkat par (khata hun)."_');
    }
  },
  {
    cmd: 'dua-khana-baad',
    aliases: [],
    category: 'Islamic',
    desc: 'Khane ke baad ki dua',
    usage: '.dua-khana-baad',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🍽️ *Khane ke baad:*\n\n*الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ*\n\n_"Tamam tareef Allah ke liye jis ne hamein khilaya, pilaya aur musalman banaya."_ (Tirmidhi)');
    }
  },
  {
    cmd: 'dua-sona',
    aliases: [],
    category: 'Islamic',
    desc: 'Sone se pehle ki dua',
    usage: '.dua-sona',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌙 *Sone ki Dua:*\n\n*بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا*\n\n_"Aye Allah! Tere naam se (sota hun) marta hun aur jeeta hun."_ (Sahih Bukhari)');
    }
  },
  {
    cmd: 'dua-uthna',
    aliases: [],
    category: 'Islamic',
    desc: 'Neend se uthne ki dua',
    usage: '.dua-uthna',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☀️ *Neend se uthne ki Dua:*\n\n*الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ*\n\n_"Tamam tareef Allah ke liye jis ne hamein maut (neend) ke baad zinda kiya, aur usi ki taraf uthna hai."_ (Sahih Bukhari)');
    }
  },
  {
    cmd: 'dua-pareshani',
    aliases: [],
    category: 'Islamic',
    desc: 'Pareshani/gham ki dua',
    usage: '.dua-pareshani',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Pareshani ki Dua:*\n\n*اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ*\n\n_"Aye Allah! Main fikr o gham, aajizi o susti, bukhl o buzdili, qarz ke bojh aur logon ke ghalbe se teri panah maangta hun."_ (Sahih Bukhari)');
    }
  },
  {
    cmd: 'dua-bimari',
    aliases: [],
    category: 'Islamic',
    desc: 'Bimar ke liye shifa ki dua',
    usage: '.dua-bimari',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🏥 *Bimar ke liye Dua:*\n\n*أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ أَنْتَ الشَّافِي، لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ، شِفَاءً لاَ يُغَادِرُ سَقَمًا*\n\n_"Takleef door farma, aye logon ke Rab! Shifa de, Tu hi Shafi hai. Teri shifa ke siwa koi shifa nahi — aisi shifa jo koi bimari baqi na chhore."_ (Bukhari & Muslim)');
    }
  },
  {
    cmd: 'dua-rizq',
    aliases: [],
    category: 'Islamic',
    desc: 'Rizq mein barkat ki dua',
    usage: '.dua-rizq',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('💰 *Rizq ki Dua:*\n\n*اللَّهُمَّ اكْفِنِي بِحَلاَلِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ*\n\n_"Aye Allah! Apne halal ke zariye haram se mujhe kafi ho ja, aur apne fazl se mujhe apne siwa sab se be-niyaz kar de."_ (Tirmidhi)');
    }
  },
  {
    cmd: 'dua-imtihan',
    aliases: [],
    category: 'Islamic',
    desc: 'Imtihan mein kamyabi ki dua',
    usage: '.dua-imtihan',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📝 *Imtihan ki Dua:*\n\n*رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي*\n\n_"Aye mere Rab! Mera seena khol de, mera kaam aasan kar de, aur meri zaban ki girah khol de taake log meri baat samjhein."_ (Surah Taha 20:25-28)');
    }
  },
  {
    cmd: 'dua-barish',
    aliases: [],
    category: 'Islamic',
    desc: 'Barish ke waqt ki dua',
    usage: '.dua-barish',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌧️ *Barish ki Dua:*\n\n*اللَّهُمَّ صَيِّبًا نَافِعًا*\n\n_"Aye Allah! (Is barish ko) faida-mand bana de."_ (Sahih Bukhari)\n\nBarish ke baad: *مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ* — "Hum par Allah ke fazl o rehmat se barish hui."');
    }
  },
  {
    cmd: 'dua-ghar',
    aliases: [],
    category: 'Islamic',
    desc: 'Ghar mein dakhil hone ki dua',
    usage: '.dua-ghar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🏠 *Ghar mein dakhil hone ki Dua:*\n\n*بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا*\n\n_"Allah ke naam se hum dakhil hue, Allah ke naam se nikle, aur apne Rab par bharosa kiya."_ (Abu Dawood)');
    }
  },
  {
    cmd: 'dua-bahar',
    aliases: [],
    category: 'Islamic',
    desc: 'Ghar se nikalne ki dua',
    usage: '.dua-bahar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🚪 *Ghar se nikalne ki Dua:*\n\n*بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ*\n\n_"Allah ke naam se, maine Allah par bharosa kiya, gunah se bachne aur neki ki taqat sirf Allah se hai."_ (Tirmidhi)');
    }
  },
  {
    cmd: 'dua-masjid',
    aliases: [],
    category: 'Islamic',
    desc: 'Masjid mein dakhil hone ki dua',
    usage: '.dua-masjid',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕌 *Masjid mein dakhil hone ki Dua:*\n\n*اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ*\n\n_"Aye Allah! Mere liye apni rehmat ke darwaze khol de."_ (Sahih Muslim)\n\nNikalte waqt: *اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ* — "Aye Allah! Main tujh se tera fazl maangta hun."');
    }
  },
  {
    cmd: 'dua-wuzu',
    aliases: [],
    category: 'Islamic',
    desc: 'Wuzu ke baad ki dua',
    usage: '.dua-wuzu',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('💧 *Wuzu ke baad ki Dua:*\n\n*أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ*\n\n_"Main gawahi deta hun ke Allah ke siwa koi mabood nahi, wo akela hai uska koi shareek nahi, aur main gawahi deta hun ke Muhammad (ﷺ) uske bande aur rasool hain."_ (Sahih Muslim)\n\nFazilat: Is dua parhne wale ke liye Jannat ke 8 darwaze khol diye jate hain.');
    }
  },
  {
    cmd: 'dua-iftar',
    aliases: [],
    category: 'Islamic',
    desc: 'Iftar ke waqt ki dua',
    usage: '.dua-iftar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌙 *Iftar ki Dua:*\n\n*اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ*\n\n_"Aye Allah! Maine tere liye roza rakha, tujh par iman laya, tujh par bharosa kiya aur tere diye rizq se iftar karta hun."_');
    }
  },
  {
    cmd: 'dua-sehri',
    aliases: [],
    category: 'Islamic',
    desc: 'Sehri/rozay ki niyyat',
    usage: '.dua-sehri',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌙 *Rozay ki Niyyat:*\n\n*وَبِصَوْمِ غَدٍ نَوَيْتُ مِنْ شَهْرِ رَمَضَانَ*\n\n_"Aur maine Ramazan ke mahine ke kal ke rozay ki niyyat ki."_\n\nNote: Niyyat dil ka irada hai — zaban se kehna zaroori nahi, dil mein irada kafi hai.');
    }
  },
  {
    cmd: 'dua-nikah',
    aliases: [],
    category: 'Islamic',
    desc: 'Dulha-dulhan ke liye dua',
    usage: '.dua-nikah',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('💍 *Nikah ki Mubarak Dua:*\n\n*بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ*\n\n_"Allah tumhein barkat de, tum par barkat nazil kare aur tum dono ko bhalai mein jama kare."_ (Tirmidhi)');
    }
  },
  {
    cmd: 'dua-aulad',
    aliases: [],
    category: 'Islamic',
    desc: 'Nek aulad ke liye dua',
    usage: '.dua-aulad',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('👶 *Nek Aulad ki Dua:*\n\n*رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ*\n\n_"Aye mere Rab! Mujhe nek (aulad) ata farma."_ (Surah Saffat 37:100)\n\nAur: *رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ* (Surah Furqan 25:74)');
    }
  },
  {
    cmd: 'dua-mayyat',
    aliases: [],
    category: 'Islamic',
    desc: 'Mayyat ke liye dua-e-maghfirat',
    usage: '.dua-mayyat',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Mayyat ke liye Dua:*\n\n*اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ*\n\n_"Aye Allah! Use bakhsh de, us par reham farma, use aafiyat de aur use muaf farma."_ (Sahih Muslim)');
    }
  },
  {
    cmd: 'dua-qarz',
    aliases: [],
    category: 'Islamic',
    desc: 'Qarz se nijat ki dua',
    usage: '.dua-qarz',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Qarz se Nijat ki Dua:*\n\n*اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ*\n\n_"Aye Allah! Main gunah aur qarz (ke bojh) se teri panah maangta hun."_ (Bukhari & Muslim)\n\nAur rizq wali dua bhi parhein: `.dua-rizq`');
    }
  },
  {
    cmd: 'dua-gussa',
    aliases: [],
    category: 'Islamic',
    desc: 'Gussa thanda karne ki dua',
    usage: '.dua-gussa',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('😤 *Gusse ke waqt:*\n\n*أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ*\n\n_"Main Allah ki panah maangta hun mardood shaitan se."_ (Sahih Bukhari)\n\nSunnat tareeqa: khare hain to baith jayein, baithe hain to lait jayein, aur wuzu kar lein — gussa thanda ho jayega.');
    }
  },
  {
    cmd: 'dua-khauf',
    aliases: [],
    category: 'Islamic',
    desc: 'Khauf/dar ke waqt ki dua',
    usage: '.dua-khauf',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Khauf ke waqt:*\n\n*حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ*\n\n_"Hamein Allah kafi hai, aur wo behtareen kaarsaz hai."_ (Surah Aal-e-Imran 3:173)\n\nYe kalimaat Uhud ke baad Sahaba ne kahe the — Allah ne unhein aman ata farmaya.');
    }
  },
  {
    cmd: 'dua-shifa',
    aliases: [],
    category: 'Islamic',
    desc: 'Dard/takleef par parhne ki dua',
    usage: '.dua-shifa',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Dard ki jagah hath rakh kar parhein:*\n\n*بِسْمِ اللَّهِ* (3 martaba)\n\nphir 7 martaba:\n*أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ*\n\n_"Main Allah aur uski qudrat ki panah maangta hun us cheez ke shar se jo main mehsoos karta hun aur jis se darta hun."_ (Sahih Muslim)');
    }
  },
  {
    cmd: 'dua-hajat',
    aliases: [],
    category: 'Islamic',
    desc: 'Hajat/zaroorat ke waqt ki dua',
    usage: '.dua-hajat',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Hajat ki Dua:*\n\n*لاَ إِلَهَ إِلاَّ اللَّهُ الْحَلِيمُ الْكَرِيمُ، سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ*\n\n_"Allah ke siwa koi mabood nahi, wo Burdbar-o-Kareem hai. Paak hai Allah, Arsh-e-Azeem ka Rab. Tamam tareef Allah ke liye jo tamam jahanon ka Rab hai."_ (Tirmidhi)\n\nPhir apni hajat Allah se maangein.');
    }
  },
  {
    cmd: 'dua-istikhara',
    aliases: [],
    category: 'Islamic',
    desc: 'Istikhara ki dua',
    usage: '.dua-istikhara',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Istikhara ki Dua (mukhtasar):*\n\n*اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ*\n\n_"Aye Allah! Main tere ilm se khair maangta hun, teri qudrat se taqat maangta hun, aur tere azeem fazl se maangta hun."_ (Sahih Bukhari)\n\nTareeqa: 2 rakat nafl parh kar ye dua maangein, phir jis kaam mein dil jam jaye wo ikhtiyar karein. Khwab dekhna zaroori nahi.');
    }
  },
  {
    cmd: 'dua-toba',
    aliases: [],
    category: 'Islamic',
    desc: 'Toba-o-istighfar ki dua',
    usage: '.dua-toba',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Toba ki Dua:*\n\n*أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ*\n\n_"Main apne Rab Allah se har gunah ki muafi maangta hun aur uski taraf ruju karta hun."_\n\nSayyid-ul-Istighfar (sab se afzal): *اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...* (Bukhari) — jo subah/sham yaqeen se parhe, Jannati hai.');
    }
  },
  {
    cmd: 'dua-juma',
    aliases: [],
    category: 'Islamic',
    desc: "Juma ke din ki dua",
    usage: '.dua-juma',
    owner: false,
    run: async (ctx) => {
      await ctx.reply("🕌 *Juma ki Dua:*\n\n*اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ*\n\nJuma ke din kasrat se darood parhein — Nabi ﷺ ne farmaya: _\"Tumhare dinon mein sab se afzal Juma ka din hai, is mein mujh par kasrat se darood bhejo.\"_ (Abu Dawood)\n\nJuma mein ek ghari qabooliyat ki hai (Asr ke baad) — us waqt dua maangein.");
    }
  },
  {
    cmd: 'dua-subah',
    aliases: [],
    category: 'Islamic',
    desc: 'Subah ke azkar',
    usage: '.dua-subah',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌅 *Subah ke Azkar:*\n\n*أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ*\n_"Hum ne subah ki aur sari badshahat Allah ke liye hai, tamam tareef Allah ke liye."_ (Sahih Muslim)\n\n• *رَضِيتُ بِاللَّهِ رَبًّا وَبِالْإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ نَبِيًّا* (3x)\n• Ayatul Kursi, Surah Ikhlas/Falaq/Nas (3x)');
    }
  },
  {
    cmd: 'dua-sham',
    aliases: [],
    category: 'Islamic',
    desc: 'Sham ke azkar',
    usage: '.dua-sham',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌆 *Sham ke Azkar:*\n\n*أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ*\n_"Hum ne sham ki aur sari badshahat Allah ke liye hai, tamam tareef Allah ke liye."_ (Sahih Muslim)\n\n• *بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ* (3x)\n• Ayatul Kursi, Surah Ikhlas/Falaq/Nas (3x)');
    }
  },
];
module.exports.push(
  {
    cmd: 'ayatul-kursi',
    aliases: [],
    category: 'Islamic',
    desc: 'Ayatul Kursi with translation',
    usage: '.ayatul-kursi',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Ayatul Kursi* (Surah Baqarah 2:255):\n\n*اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ، وَلاَ يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ*\n\n_"Allah ke siwa koi mabood nahi, wo Zinda-o-Qaim hai. Use na oongh aati hai na neend..."_\n\n⭐ Fazilat: Har farz namaz ke baad parhne wale ke liye Jannat mein dakhle mein sirf maut hail hai. (Nasai)');
    }
  },
  {
    cmd: 'surah-fatiha',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Fatiha with translation',
    usage: '.surah-fatiha',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Fatiha* (7 ayaat, Makki):\n\n*بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلاَ الضَّالِّينَ*\n\n_"Tamam tareef Allah ke liye jo tamam jahanon ka Rab hai, bara Meherban nihayat Reham wala, Roz-e-Jaza ka Malik. Hum teri hi ibadat karte hain aur tujh hi se madad maangte hain. Hamein seedhe raste par chala..."_\n\n⭐ "Umm-ul-Kitab" — har namaz mein parhna wajib hai.');
    }
  },
  {
    cmd: 'surah-ikhlas',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Ikhlas with translation',
    usage: '.surah-ikhlas',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Ikhlas* (4 ayaat, Makki):\n\n*قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ*\n\n_"Keh dijiye: Wo Allah ek hai. Allah Be-niyaz hai. Na us ne kisi ko jana, na wo jana gaya. Aur uska koi hum-sar nahi."_\n\n⭐ Fazilat: Ye surah Quran ke *ek tihai* (1/3) ke barabar hai. (Sahih Bukhari)');
    }
  },
  {
    cmd: 'surah-falaq',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Falaq with translation',
    usage: '.surah-falaq',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Falaq* (5 ayaat, Makki):\n\n*قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ*\n\n_"Keh dijiye: Main subah ke Rab ki panah maangta hun — har us cheez ke shar se jo us ne paida ki, andheri raat ke shar se jab wo chha jaye, girahon mein phoonkne waliyon ke shar se, aur hasad karne wale ke shar se jab wo hasad kare."_\n\n⭐ Muawwazatain (Falaq + Nas) subah/sham 3-3 martaba parhein.');
    }
  },
  {
    cmd: 'surah-nas',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Nas with translation',
    usage: '.surah-nas',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah An-Nas* (6 ayaat, Makki):\n\n*قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ*\n\n_"Keh dijiye: Main logon ke Rab, logon ke Badshah, logon ke Mabood ki panah maangta hun — waswasa dalne wale chhup jane wale ke shar se, jo logon ke seenon mein waswase dalta hai, jinno mein se ho ya insano mein se."_');
    }
  },
  {
    cmd: 'surah-kausar',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Kausar with translation',
    usage: '.surah-kausar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Kausar* (3 ayaat — Quran ki sab se chhoti surah, Makki):\n\n*إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ ۝ إِنَّ شَانِئَكَ هُوَ الأَبْتَرُ*\n\n_"Beshak hum ne aap ko Kausar ata ki. Pas apne Rab ke liye namaz parhein aur qurbani karein. Beshak aap ka dushman hi be-nam-o-nishan hone wala hai."_\n\n⭐ Kausar Jannat ki ek nahar ka naam bhi hai.');
    }
  },
  {
    cmd: 'surah-asr',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Asr with translation',
    usage: '.surah-asr',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Asr* (3 ayaat, Makki):\n\n*وَالْعَصْرِ ۝ إِنَّ الإِنْسَانَ لَفِي خُسْرٍ ۝ إِلاَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ*\n\n_"Qasam hai zamane ki! Beshak insan khasare mein hai — siwa un logon ke jo iman laye, nek amal kiye, haq ki naseehat ki aur sabr ki naseehat ki."_\n\n⭐ Imam Shafi farmate hain: agar sirf ye surah nazil hoti to logon ki hidayat ke liye kafi thi.');
    }
  },
  {
    cmd: 'surah-fil',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Fil with translation',
    usage: '.surah-fil',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Fil* (5 ayaat, Makki):\n\n*أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ۝ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ ۝ وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ ۝ تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ ۝ فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ*\n\n_"Kya aap ne nahi dekha aap ke Rab ne hathi walon ke saath kya kiya? Kya unki chaal ko bekar nahi kar diya? Aur un par jhund ke jhund parinde bheje, jo un par pakki mitti ke pathar barsate the, phir unhein khaye hue bhuse ki tarah kar diya."_\n\n📜 Ye Abraha ke lashkar ka waqia hai — usi saal Nabi ﷺ ki wiladat hui (Aam-ul-Fil).');
    }
  },
  {
    cmd: 'surah-quraish',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Quraish with translation',
    usage: '.surah-quraish',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Quraish* (4 ayaat, Makki):\n\n*لِإِيلاَفِ قُرَيْشٍ ۝ إِيلاَفِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ ۝ فَلْيَعْبُدُوا رَبَّ هَذَا الْبَيْتِ ۝ الَّذِي أَطْعَمَهُمْ مِنْ جُوعٍ وَآمَنَهُمْ مِنْ خَوْفٍ*\n\n_"Quraish ke manoos hone ke liye — unke sardiyon aur garmiyon ke safar se manoos hone ke liye. Pas unhein chahiye ke is Ghar ke Rab ki ibadat karein, jis ne unhein bhook mein khana diya aur khauf se aman diya."_');
    }
  },
  {
    cmd: 'surah-maun',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Maun with translation',
    usage: '.surah-maun',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Maun* (7 ayaat, Makki):\n\n*أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ۝ فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ۝ وَلاَ يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ ۝ فَوَيْلٌ لِلْمُصَلِّينَ ۝ الَّذِينَ هُمْ عَنْ صَلاَتِهِمْ سَاهُونَ ۝ الَّذِينَ هُمْ يُرَاءُونَ ۝ وَيَمْنَعُونَ الْمَاعُونَ*\n\n_"Kya aap ne use dekha jo jaza ko jhutlata hai? Wahi hai jo yateem ko dhakke deta hai aur miskeen ko khana khilane par nahi ubharta. Pas halakat hai un namaziyon ke liye jo apni namaz se ghafil hain, jo dikhawa karte hain aur mamuli cheez (bartan waghera) dene se rokte hain."_');
    }
  },
  {
    cmd: 'surah-lahab',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Lahab with translation',
    usage: '.surah-lahab',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Lahab* (5 ayaat, Makki):\n\n*تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَى عَنْهُ مَالُهُ وَمَا كَسَبَ ۝ سَيَصْلَى نَارًا ذَاتَ لَهَبٍ ۝ وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ ۝ فِي جِيدِهَا حَبْلٌ مِنْ مَسَدٍ*\n\n_"Abu Lahab ke dono hath toot jayein aur wo halak ho. Uska maal aur uski kamai uske kuch kaam na aayi. Wo bharakti aag mein dakhil hoga, aur uski biwi bhi — jo lakriyan dhoone wali hai — uski gardan mein khajur ki chhaal ki rassi hogi."_');
    }
  },
  {
    cmd: 'surah-yasin',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Yasin ki fazilat aur maloomat',
    usage: '.surah-yasin',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Yasin* (83 ayaat, Makki — Para 22-23):\n\n⭐ "Qalb-ul-Quran" (Quran ka dil) kahlati hai.\n⭐ Fazilat: Jo ise Allah ki raza ke liye parhe, uske pichhle gunah muaf ho jate hain. (Darimi)\n⭐ Marne wale ke paas parhne ki targheeb di gayi hai.\n\nMukhtasar mazmoon: Tauheed, Risalat aur Aakhirat ka isbat — basti walon ka qissa aur fitrat ki nishaniyan.');
    }
  },
  {
    cmd: 'surah-rahman',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Rahman ki fazilat aur maloomat',
    usage: '.surah-rahman',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Ar-Rahman* (78 ayaat, Makki — Para 27):\n\n⭐ "Aroos-ul-Quran" (Quran ki dulhan) kahlati hai. (Baihaqi)\n⭐ Is mein 31 martaba ye ayat aayi hai:\n*فَبِأَيِّ آلاَءِ رَبِّكُمَا تُكَذِّبَانِ*\n_"Phir tum apne Rab ki kin kin naimaton ko jhutlaoge?"_\n⭐ Mazmoon: Allah ki naimaton ka tazkira — insan o jinn dono se khitab.');
    }
  },
  {
    cmd: 'surah-mulk',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Mulk ki fazilat aur maloomat',
    usage: '.surah-mulk',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Mulk* (30 ayaat, Makki — Para 29):\n\n⭐ Fazilat: Ye surah apne parhne wale ki sifarish karegi hatta ke use bakhsh diya jayega. (Tirmidhi)\n⭐ Qabr ke azab se bachane wali surah hai — sone se pehle parhne ki targheeb hai.\n⭐ Shuruat: *تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ* — "Bara barkat wala hai wo zaat jis ke hath mein badshahat hai."');
    }
  },
  {
    cmd: 'surah-kahf',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Kahf ki fazilat (Juma)',
    usage: '.surah-kahf',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Kahf* (110 ayaat, Makki — Para 15-16):\n\n⭐ Juma ke din parhne ki fazilat: do Jumaon ke darmiyan noor (roshni) ho jati hai. (Hakim)\n⭐ Ibtidai 10 ayaat yaad karne wala Dajjal ke fitne se mehfooz rahega. (Sahih Muslim)\n⭐ Qisse: Ashab-e-Kahf, Musa o Khizr, Zulqarnain.');
    }
  },
  {
    cmd: 'surah-waqiah',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Waqiah ki fazilat',
    usage: '.surah-waqiah',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Waqiah* (96 ayaat, Makki — Para 27):\n\n⭐ Fazilat: Jo ise har raat parhe, use kabhi faqa (tangdasti) nahi hogi. (Baihaqi)\n⭐ Mazmoon: Qayamat ke din logon ke 3 giroh — Sabqat karne wale, Dayein hath wale, aur Bayein hath wale.\n⭐ Rizq ki tangi door karne ke liye mujarrab surah samjhi jati hai.');
    }
  },
  {
    cmd: 'surah-dukhan',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Dukhan ki fazilat',
    usage: '.surah-dukhan',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Ad-Dukhan* (59 ayaat, Makki — Para 25):\n\n⭐ Fazilat: Jo ise raat mein parhe, subah tak 70,000 farishte uske liye maghfirat ki dua karte hain. (Tirmidhi)\n⭐ Mazmoon: Quran ke nazool, Laylatul Qadr, aur Firaun ke anjam ka zikr.');
    }
  },
  {
    cmd: 'surah-muzzammil',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Muzzammil ki maloomat',
    usage: '.surah-muzzammil',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Muzzammil* (20 ayaat, Makki — Para 29):\n\n⭐ Ibtidai ayaat mein Nabi ﷺ ko raat ki ibadat (Tahajjud) ka hukm diya gaya:\n*يَا أَيُّهَا الْمُزَّمِّلُ ۝ قُمِ اللَّيْلَ إِلاَّ قَلِيلاً*\n_"Aye kapre mein lipatne wale! Raat ko (ibadat ke liye) khare ho jayein, magar thoda sa (so lein)."_');
    }
  },
  {
    cmd: 'surah-humazah',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Humazah with translation',
    usage: '.surah-humazah',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah Al-Humazah* (9 ayaat, Makki):\n\n*وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ ۝ الَّذِي جَمَعَ مَالاً وَعَدَّدَهُ ۝ يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ ۝ كَلاَّ لَيُنْبَذَنَّ فِي الْحُطَمَةِ...*\n\n_"Halakat hai har taana dene wale, aeb nikalne wale ke liye — jo maal jama karta hai aur use ginta rehta hai. Wo samajhta hai ke uska maal use hamesha zinda rakhega. Hargiz nahi! Wo zaroor Hutamah (bharakti aag) mein phenka jayega."_');
    }
  },
  {
    cmd: 'surah-takathur',
    aliases: [],
    category: 'Islamic',
    desc: 'Surah Takathur with translation',
    usage: '.surah-takathur',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📖 *Surah At-Takathur* (8 ayaat, Makki):\n\n*أَلْهَاكُمُ التَّكَاثُرُ ۝ حَتَّى زُرْتُمُ الْمَقَابِرَ ۝ كَلاَّ سَوْفَ تَعْلَمُونَ...*\n\n_"Tumhein zyada-talabi (maal o aulad ki kasrat ki hawas) ne ghafil kar diya, hatta ke tum qabron tak ja pahunche. Hargiz nahi! Anqareeb tum jan loge..."_\n\n⭐ Sabaq: Duniya ki hawas se bacho, aakhirat ki tayyari karo.');
    }
  },
);
module.exports.push(
  {
    cmd: 'asma1',
    aliases: [],
    category: 'Islamic',
    desc: "Allah ke 99 naam (1-20)",
    usage: '.asma1',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Asma-ul-Husna (1-20):*\n\n1. Allah — Sab se bara naam\n2. Ar-Rahman — Nihayat Meherban\n3. Ar-Rahim — Bara Reham karne wala\n4. Al-Malik — Badshah\n5. Al-Quddus — Paak\n6. As-Salam — Salamati dene wala\n7. Al-Mumin — Aman dene wala\n8. Al-Muhaymin — Nigahban\n9. Al-Aziz — Ghalib\n10. Al-Jabbar — Zabardast\n11. Al-Mutakabbir — Bartari wala\n12. Al-Khaliq — Paida karne wala\n13. Al-Bari — Banane wala\n14. Al-Musawwir — Soorat banane wala\n15. Al-Ghaffar — Bakhshne wala\n16. Al-Qahhar — Qaboo rakhne wala\n17. Al-Wahhab — Khub ata karne wala\n18. Ar-Razzaq — Rizq dene wala\n19. Al-Fattah — Kholne wala (mushkil kusha)\n20. Al-Alim — Sab kuch janne wala\n\nAgla hissa: `.asma2`');
    }
  },
  {
    cmd: 'asma2',
    aliases: [],
    category: 'Islamic',
    desc: "Allah ke 99 naam (21-40)",
    usage: '.asma2',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Asma-ul-Husna (21-40):*\n\n21. Al-Qabid — Tangi karne wala\n22. Al-Basit — Kushadgi dene wala\n23. Al-Khafid — Past karne wala\n24. Ar-Rafi — Buland karne wala\n25. Al-Muizz — Izzat dene wala\n26. Al-Mudhill — Zillat dene wala\n27. As-Sami — Sunne wala\n28. Al-Basir — Dekhne wala\n29. Al-Hakam — Faisla karne wala\n30. Al-Adl — Insaaf karne wala\n31. Al-Latif — Narm, bareek been\n32. Al-Khabir — Khabar rakhne wala\n33. Al-Halim — Burdbar\n34. Al-Azim — Azmat wala\n35. Al-Ghafur — Muaf karne wala\n36. Ash-Shakur — Qadar karne wala\n37. Al-Ali — Buland martaba\n38. Al-Kabir — Sab se bara\n39. Al-Hafiz — Hifazat karne wala\n40. Al-Muqit — Rozi pahunchane wala\n\nAgla hissa: `.asma3`');
    }
  },
  {
    cmd: 'asma3',
    aliases: [],
    category: 'Islamic',
    desc: "Allah ke 99 naam (41-60)",
    usage: '.asma3',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Asma-ul-Husna (41-60):*\n\n41. Al-Hasib — Hisab lene wala\n42. Al-Jalil — Buzurgi wala\n43. Al-Karim — Karam karne wala\n44. Ar-Raqib — Nigran\n45. Al-Mujib — Dua qabool karne wala\n46. Al-Wasi — Wusat wala\n47. Al-Hakim — Hikmat wala\n48. Al-Wadud — Mohabbat karne wala\n49. Al-Majid — Buzurg\n50. Al-Baith — Uthane wala\n51. Ash-Shahid — Gawah\n52. Al-Haqq — Barhaq\n53. Al-Wakil — Kaarsaz\n54. Al-Qawi — Taqatwar\n55. Al-Matin — Mazboot\n56. Al-Waliyy — Dost, madadgar\n57. Al-Hamid — Tareef ke laiq\n58. Al-Muhsi — Gina janne wala\n59. Al-Mubdi — Pehli bar paida karne wala\n60. Al-Muid — Dobara paida karne wala\n\nAgla hissa: `.asma4`');
    }
  },
  {
    cmd: 'asma4',
    aliases: [],
    category: 'Islamic',
    desc: "Allah ke 99 naam (61-80)",
    usage: '.asma4',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Asma-ul-Husna (61-80):*\n\n61. Al-Muhyi — Zinda karne wala\n62. Al-Mumit — Maut dene wala\n63. Al-Hayy — Hamesha zinda\n64. Al-Qayyum — Qaim rakhne wala\n65. Al-Wajid — Pane wala\n66. Al-Majid — Izzat wala\n67. Al-Wahid — Akela\n68. As-Samad — Be-niyaz\n69. Al-Qadir — Qudrat wala\n70. Al-Muqtadir — Poori qudrat wala\n71. Al-Muqaddim — Aage karne wala\n72. Al-Muakhkhir — Peechhe karne wala\n73. Al-Awwal — Sab se pehla\n74. Al-Akhir — Sab se aakhir\n75. Az-Zahir — Zahir\n76. Al-Batin — Poshida\n77. Al-Wali — Wali, sarparast\n78. Al-Mutaali — Buland tar\n79. Al-Barr — Ehsan karne wala\n80. At-Tawwab — Toba qabool karne wala\n\nAgla hissa: `.asma5`');
    }
  },
  {
    cmd: 'asma5',
    aliases: [],
    category: 'Islamic',
    desc: "Allah ke 99 naam (81-99)",
    usage: '.asma5',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Asma-ul-Husna (81-99):*\n\n81. Al-Muntaqim — Badla lene wala\n82. Al-Afuww — Muaf karne wala\n83. Ar-Rauf — Nihayat shafeeq\n84. Malik-ul-Mulk — Badshahat ka malik\n85. Dhul-Jalali-wal-Ikram — Jalal o ikram wala\n86. Al-Muqsit — Insaaf karne wala\n87. Al-Jami — Jama karne wala\n88. Al-Ghaniyy — Be-niyaz\n89. Al-Mughni — Be-niyaz karne wala\n90. Al-Mani — Rokne wala\n91. Ad-Darr — Nuqsan pahunchane wala\n92. An-Nafi — Nafa dene wala\n93. An-Nur — Noor\n94. Al-Hadi — Hidayat dene wala\n95. Al-Badi — Naya paida karne wala\n96. Al-Baqi — Baqi rehne wala\n97. Al-Warith — Waris\n98. Ar-Rashid — Seedhi rah dikhane wala\n99. As-Sabur — Sabar karne wala\n\n⭐ Jo in naamon ko yaad karega, Jannat mein jayega. (Bukhari & Muslim)');
    }
  },
  {
    cmd: 'kalma1',
    aliases: [],
    category: 'Islamic',
    desc: 'Pehla Kalma — Tayyab',
    usage: '.kalma1',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☝️ *Pehla Kalma — Tayyab:*\n\n*لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ*\n\n_"Allah ke siwa koi mabood nahi, Muhammad (ﷺ) Allah ke Rasool hain."_\n\n⭐ Iman ka bunyadi iqrar — isi par Jannat ka wada hai.');
    }
  },
  {
    cmd: 'kalma2',
    aliases: [],
    category: 'Islamic',
    desc: 'Dusra Kalma — Shahadat',
    usage: '.kalma2',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☝️ *Dusra Kalma — Shahadat:*\n\n*أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ*\n\n_"Main gawahi deta hun ke Allah ke siwa koi mabood nahi, wo akela hai uska koi shareek nahi, aur main gawahi deta hun ke Muhammad (ﷺ) uske bande aur Rasool hain."_');
    }
  },
  {
    cmd: 'kalma3',
    aliases: [],
    category: 'Islamic',
    desc: 'Teesra Kalma — Tamjeed',
    usage: '.kalma3',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☝️ *Teesra Kalma — Tamjeed:*\n\n*سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ*\n\n_"Paak hai Allah, tamam tareef Allah ke liye, Allah ke siwa koi mabood nahi, Allah sab se bara hai. Gunah se bachne aur neki ki taqat sirf Allah se hai jo Buland o Azeem hai."_');
    }
  },
  {
    cmd: 'kalma4',
    aliases: [],
    category: 'Islamic',
    desc: 'Chautha Kalma — Tauheed',
    usage: '.kalma4',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☝️ *Chautha Kalma — Tauheed:*\n\n*لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ*\n\n_"Allah ke siwa koi mabood nahi, wo akela hai uska koi shareek nahi. Usi ki badshahat hai aur usi ke liye tareef hai. Wo zinda karta hai aur maut deta hai, aur wo har cheez par qadir hai."_');
    }
  },
  {
    cmd: 'kalma5',
    aliases: [],
    category: 'Islamic',
    desc: 'Panchwan Kalma — Astaghfar',
    usage: '.kalma5',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☝️ *Panchwan Kalma — Astaghfar:*\n\n*أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهُ عَمْدًا أَوْ خَطَأً، سِرًّا أَوْ عَلَانِيَةً، وَأَتُوبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِي أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِي لَا أَعْلَمُ*\n\n_"Main apne Rab Allah se har us gunah ki muafi maangta hun jo maine jan boojh kar ya bhool se, chhup kar ya khul kar kiya, aur main us gunah se bhi toba karta hun jise main janta hun aur jise nahi janta."_');
    }
  },
  {
    cmd: 'kalma6',
    aliases: [],
    category: 'Islamic',
    desc: 'Chhata Kalma — Radd-e-Kufr',
    usage: '.kalma6',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☝️ *Chhata Kalma — Radd-e-Kufr:*\n\n*اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ*\n\n_"Aye Allah! Main teri panah maangta hun is se ke main jan boojh kar tere saath kisi ko shareek karun, aur us (shirk) se muafi maangta hun jise main nahi janta."_');
    }
  },
);
module.exports.push(
  {
    cmd: 'hadith',
    aliases: [],
    category: 'Islamic',
    desc: 'Random sahih hadith with reference',
    usage: '.hadith',
    owner: false,
    run: async (ctx) => {
      const ahadith = [
        '📜 *"Aamaal ka daromadar niyyaton par hai, aur har shakhs ko wahi milega jiski us ne niyyat ki."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Tum mein se koi (kamil) momin nahi ho sakta jab tak wo apne bhai ke liye wahi pasand na kare jo apne liye pasand karta hai."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Paaki aadha iman hai."* (Sahih Muslim)',
        '📜 *"Tum mein sab se behtar wo hai jo Quran seekhe aur sikhaye."* (Sahih Bukhari)',
        '📜 *"Aasani karo, mushkil na banao; khushkhabri do, nafrat na dilao."* (Sahih Bukhari)',
        '📜 *"Musalman wo hai jiski zaban aur hath se dusre musalman mehfooz rahein."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Pehlewan wo nahi jo kushti mein ghalib aaye, pehlewan wo hai jo gusse ke waqt apne nafs par qaboo rakhe."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Jo Allah aur Aakhirat par iman rakhta hai, use chahiye ke achhi baat kahe ya khamosh rahe."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Narmi jis cheez mein hoti hai use khubsurat bana deti hai."* (Sahih Muslim)',
        '📜 *"Allah Narm hai aur har kaam mein narmi ko pasand farmata hai."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Allah ko sab se mehboob amal wo hai jo hamesha kiya jaye, chahe thoda ho."* (Sahih Bukhari & Sahih Muslim)',
        '📜 *"Ilm hasil karna har musalman par farz hai."* (Sunan Ibn Majah)',
        '📜 *"Duniya momin ke liye qaid-khana aur kafir ke liye jannat hai."* (Sahih Muslim)',
        '📜 *"Tum zameen walon par reham karo, aasman wala tum par reham karega."* (Tirmidhi)',
        '📜 *"Sab se afzal jihad zalim badshah ke samne kalima-e-haq kehna hai."* (Abu Dawood)',
      ];
      await ctx.reply(ahadith[Math.floor(Math.random() * ahadith.length)]);
    }
  },
  {
    cmd: 'hadith-ilm',
    aliases: [],
    category: 'Islamic',
    desc: 'Ilm ke fazail par hadith',
    usage: '.hadith-ilm',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📚 *Ilm ki Fazilat:*\n\n📜 *"Jo shakhs ilm hasil karne ke liye raaste par chalta hai, Allah uske liye Jannat ka raasta aasan kar deta hai."* (Sahih Muslim)\n\n📜 *"Ulama ambiya ke waris hain."* (Tirmidhi)\n\n📜 *"Ilm hasil karna har musalman (mard o aurat) par farz hai."* (Ibn Majah)');
    }
  },
  {
    cmd: 'hadith-akhlaq',
    aliases: [],
    category: 'Islamic',
    desc: 'Akhlaq par hadith',
    usage: '.hadith-akhlaq',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤝 *Akhlaq ki Fazilat:*\n\n📜 *"Tum mein sab se behtar wo hain jo akhlaq mein sab se behtar hain."* (Sahih Bukhari & Sahih Muslim)\n\n📜 *"Main ache akhlaq ki takmeel ke liye bheja gaya hun."* (Musnad Ahmad)\n\n📜 *"Momin ke mizan mein husn-e-akhlaq se bhari koi cheez nahi hogi."* (Tirmidhi)');
    }
  },
  {
    cmd: 'hadith-namaz',
    aliases: [],
    category: 'Islamic',
    desc: 'Namaz ki fazilat par hadith',
    usage: '.hadith-namaz',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕌 *Namaz ki Fazilat:*\n\n📜 *"Qayamat ke din bande se sab se pehle namaz ka hisab liya jayega."* (Tirmidhi)\n\n📜 *"Aadmi aur kufr ke darmiyan (farq) namaz chhorna hai."* (Sahih Muslim)\n\n📜 *"Paanchon namazein aur Juma se Juma darmiyani gunahon ka kaffara hain."* (Sahih Muslim)');
    }
  },
  {
    cmd: 'hadith-sabr',
    aliases: [],
    category: 'Islamic',
    desc: 'Sabr par hadith',
    usage: '.hadith-sabr',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Sabr ki Fazilat:*\n\n📜 *"Musalman ko jo thakan, bimari, fikr, gham ya takleef pahunchti hai — hatta ke kanta chubhna bhi — Allah uske zariye uske gunah muaf farma deta hai."* (Sahih Bukhari & Sahih Muslim)\n\n📜 *"Sabr roshni hai."* (Sahih Muslim)\n\n📜 *"Sabr karne walon ko be-hisab ajr diya jayega."* (Surah Zumar 39:10)');
    }
  },
  {
    cmd: 'seerah',
    aliases: [],
    category: 'Islamic',
    desc: 'Seerat-un-Nabi ﷺ — random facts',
    usage: '.seerah',
    owner: false,
    run: async (ctx) => {
      const facts = [
        '🌙 Wiladat: 12 Rabi-ul-Awwal, Aam-ul-Fil (570 CE), Makkah Mukarramah mein hui.',
        '🌙 Walid ka naam Abdullah (wiladat se pehle wafat), Walida ka naam Amina bint Wahb.',
        '🌙 Dada Abdul Muttalib aur chacha Abu Talib ne parwarish ki.',
        '🌙 25 saal ki umar mein Hazrat Khadija (RA) se nikah hua.',
        '🌙 40 saal ki umar mein Ghar-e-Hira mein pehli wahi nazil hui (Surah Alaq ki ibtidai ayaat).',
        '🌙 Makkah mein 13 saal aur Madina mein 10 saal tableegh farmai.',
        '🌙 Hijrat 622 CE mein hui — isi se Hijri calendar shuru hota hai.',
        '🌙 Wafat: 12 Rabi-ul-Awwal, 11 Hijri (632 CE), Madina Munawwara mein hui.',
        '🌙 Laqab: As-Sadiq (sachcha), Al-Amin (amanatdar) — dushman bhi mante the.',
        '🌙 Sab se pehle iman lane wale: Hazrat Khadija (RA) — khawateen mein; Hazrat Ali (RA) — bachon mein; Hazrat Abu Bakr (RA) — mardon mein.',
      ];
      await ctx.reply('📜 *Seerat-un-Nabi ﷺ:*\n\n' + facts[Math.floor(Math.random() * facts.length)]);
    }
  },
  {
    cmd: 'seerah-makkah',
    aliases: [],
    category: 'Islamic',
    desc: 'Makki daur ki seerat',
    usage: '.seerah-makkah',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📜 *Makki Daur (13 saal):*\n\n• Pehli 3 saal khufiya dawat — qareebi logon mein.\n• Phir Koh-e-Safa par elaniya dawat.\n• Mushrikeen ne sakht mukhalfat ki: boycott (Shaib-e-Abi Talib mein 3 saal), zulm o sitam.\n• Hazrat Hamza (RA) aur Hazrat Umar (RA) ka iman — musalmanon ko taqat mili.\n• Do hijratein Habsha ki taraf huin.\n• Aam-ul-Huzn: Hazrat Khadija (RA) aur Abu Talib ki wafat.\n• Waqia-e-Meraj isi daur mein hua.');
    }
  },
  {
    cmd: 'seerah-madina',
    aliases: [],
    category: 'Islamic',
    desc: 'Madani daur ki seerat',
    usage: '.seerah-madina',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📜 *Madani Daur (10 saal):*\n\n• Hijrat ke baad Masjid-e-Nabwi ki tameer.\n• Muhajireen o Ansar mein Muakhat (bhai-chara).\n• Madina ka dastoor (Misaq-e-Madina) — pehla tehreeri samaji muahida.\n• Ghazwat: Badr (2H), Uhud (3H), Khandaq (5H).\n• Sulah-e-Hudaibiya (6H) aur Fath-e-Makkah (8H).\n• Hajjat-ul-Wida (10H) — Khutba-e-Hajjat-ul-Wida mein insani huqooq ka elan.');
    }
  },
  {
    cmd: 'seerah-hijrat',
    aliases: [],
    category: 'Islamic',
    desc: 'Hijrat-e-Madina ka waqia',
    usage: '.seerah-hijrat',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📜 *Hijrat-e-Madina (622 CE / 1 Hijri):*\n\n• Mushrikeen ne qatl ka mansooba banaya to Allah ke hukm se Nabi ﷺ Makkah se nikle.\n• Hazrat Abu Bakr Siddiq (RA) safar mein saathi the.\n• Ghar-e-Saur mein 3 din qiyam — Quran mein zikr: *"Gham na kar, Allah hamare saath hai."* (Surah Tauba 9:40)\n• Madina pahunch kar Quba mein pehli masjid tameer hui.\n• Isi hijrat se Islami (Hijri) calendar ka aghaz hua.');
    }
  },
  {
    cmd: 'seerah-ghazwat',
    aliases: [],
    category: 'Islamic',
    desc: 'Ahem ghazwat ki maloomat',
    usage: '.seerah-ghazwat',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('⚔️ *Ahem Ghazwat:*\n\n• *Badr* (2H / 624 CE): 313 musalman vs ~1000 kuffar — azeem fatah.\n• *Uhud* (3H / 625 CE): tir-andazon ki ghalti se nuqsan — Hazrat Hamza (RA) shaheed.\n• *Khandaq/Ahzab* (5H / 627 CE): Hazrat Salman Farsi (RA) ke mashware se khandaq khodi gayi.\n• *Fath-e-Makkah* (8H / 630 CE): baghair khoon-rezi fatah — aam muafi ka elan: *"Aaj tum par koi malamat nahi."*');
    }
  },
  {
    cmd: 'sahaba',
    aliases: [],
    category: 'Islamic',
    desc: 'Sahaba Karam — random bio',
    usage: '.sahaba',
    owner: false,
    run: async (ctx) => {
      const bios = [
        '⭐ *Hazrat Abu Bakr Siddiq (RA):* Pehle khalifa, Nabi ﷺ ke sab se qareebi saathi, Hijrat mein rafeeq, "Siddiq" ka laqab Meraj ki tasdeeq par mila.',
        '⭐ *Hazrat Umar Farooq (RA):* Dusre khalifa, "Farooq" (haq o batil mein farq karne wale), unke daur mein Islam Misr, Sham aur Fars tak phaila.',
        '⭐ *Hazrat Usman Ghani (RA):* Teesre khalifa, "Zun-Noorain" (do noor wale), Quran ko ek mushaf par jama karwaya.',
        '⭐ *Hazrat Ali (RA):* Chauthe khalifa, "Asadullah" (Allah ka sher), ilm ka darwaza, Khaibar ka qila fatah kiya.',
        '⭐ *Hazrat Khadija (RA):* Pehli musalman khatoon, Nabi ﷺ ki wafadar rafeeq-e-hayat, 25 saal saath nibhaya.',
        '⭐ *Hazrat Aisha (RA):* Umm-ul-Momineen, 2000+ ahadith ki rawi, ilm ka samandar.',
        '⭐ *Hazrat Bilal (RA):* Pehle muazzin, Habshi ghulam the — Islam ne azad kiya, sabr ki alamat.',
        '⭐ *Hazrat Hamza (RA):* "Sayyid-ush-Shuhada", Uhud mein shaheed hue.',
      ];
      await ctx.reply(bios[Math.floor(Math.random() * bios.length)]);
    }
  },
  {
    cmd: 'abubakar',
    aliases: [],
    category: 'Islamic',
    desc: 'Hazrat Abu Bakr Siddiq RA',
    usage: '.abubakar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('⭐ *Hazrat Abu Bakr Siddiq (RA):*\n\n• Asal naam: Abdullah bin Abi Quhafa.\n• Pehle khalifa-e-Rashid (11-13H).\n• Sab se pehle aazad mardon mein iman laye.\n• Hijrat mein Nabi ﷺ ke saathi — Ghar-e-Saur.\n• "Siddiq" laqab Waqia-e-Meraj ki foran tasdeeq par mila.\n• Jang-e-Yamama ke baad Quran ki jama ka hukm diya.');
    }
  },
  {
    cmd: 'umar',
    aliases: [],
    category: 'Islamic',
    desc: 'Hazrat Umar Farooq RA',
    usage: '.umar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('⭐ *Hazrat Umar Farooq (RA):*\n\n• Dusre khalifa-e-Rashid (13-23H).\n• "Farooq" — haq o batil mein farq karne wale.\n• Unke daur mein Fars, Sham, Misr aur Bait-ul-Maqdis fatah hua.\n• Deewan (sarkari daftar), Hijri calendar ka nizam aur adliya ki bunyad rakhi.\n• Nabi ﷺ ne farmaya: _"Mere baad koi nabi hota to Umar hota."_ (Tirmidhi)');
    }
  },
  {
    cmd: 'usman',
    aliases: [],
    category: 'Islamic',
    desc: 'Hazrat Usman Ghani RA',
    usage: '.usman',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('⭐ *Hazrat Usman Ghani (RA):*\n\n• Teesre khalifa-e-Rashid (23-35H).\n• "Zun-Noorain" — Nabi ﷺ ki do sahabzadiyon (Ruqayya phir Umm-e-Kulsum RA) se nikah.\n• Quran ko ek mushaf (Mushaf-e-Usmani) par jama karwaya.\n• Ghazwa-e-Tabuk mein azeem mali qurbani — "Ghani" (sakhi) mashhoor.\n• Bahut haya-daar — farishte bhi unse haya karte the. (Sahih Muslim)');
    }
  },
  {
    cmd: 'ali',
    aliases: [],
    category: 'Islamic',
    desc: 'Hazrat Ali RA',
    usage: '.ali',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('⭐ *Hazrat Ali (RA):*\n\n• Chauthe khalifa-e-Rashid (35-40H).\n• Bachon mein sab se pehle iman laye.\n• "Asadullah" (Allah ka sher) — Khaibar ka qila fatah kiya.\n• Nabi ﷺ ne farmaya: _"Main ilm ka shehar hun aur Ali uska darwaza hai."_ (Tirmidhi)\n• Hazrat Fatima (RA) se nikah — Hazrat Hasan o Husain (RA) ke walid.');
    }
  },
  {
    cmd: 'darood',
    aliases: [],
    category: 'Islamic',
    desc: 'Darood Sharif ki fazilat',
    usage: '.darood',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌹 *Darood Sharif ki Fazilat:*\n\n📜 *"Jo mujh par ek martaba darood bhejta hai, Allah us par 10 rehmatein nazil farmata hai, uske 10 gunah muaf karta hai aur uske 10 darje buland karta hai."* (Sahih Muslim, Nasai)\n\n📜 *"Qayamat ke din mujh se sab se qareeb wo hoga jo mujh par sab se zyada darood bhejta tha."* (Tirmidhi)\n\nMukhtasar darood: *اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ*');
    }
  },
  {
    cmd: 'darood-ibrahimi',
    aliases: [],
    category: 'Islamic',
    desc: 'Darood-e-Ibrahimi full text',
    usage: '.darood-ibrahimi',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌹 *Darood-e-Ibrahimi:*\n\n*اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ*\n\n_"Aye Allah! Muhammad aur aal-e-Muhammad par rehmat nazil farma jaise tune Ibrahim aur aal-e-Ibrahim par nazil farmai. Beshak Tu tareef ke laiq buzurg hai..."_ (Bukhari & Muslim)\n\n⭐ Yehi darood namaz mein parha jata hai.');
    }
  },
  {
    cmd: 'darood-fazilat',
    aliases: [],
    category: 'Islamic',
    desc: 'Darood ke fawaid',
    usage: '.darood-fazilat',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌹 *Darood ke Fawaid:*\n\n1. 10 rehmatein, 10 gunah muaf, 10 darje buland (Muslim)\n2. Qayamat mein Nabi ﷺ ka qurb (Tirmidhi)\n3. Dua ki qabooliyat ka zariya — dua se pehle o baad darood parhein\n4. Gham o fikr door hota hai: *"Tumhara gham kafi ho jayega aur gunah bakhsh diye jayenge."* (Tirmidhi)\n5. Juma ke din kasrat se parhne ki khaas targheeb');
    }
  },
  {
    cmd: 'darood-taj',
    aliases: [],
    category: 'Islamic',
    desc: 'Darood-e-Taj ka taruf',
    usage: '.darood-taj',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌹 *Darood-e-Taj:*\n\n*اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَاحِبِ التَّاجِ وَالْمِعْرَاجِ وَالْبُرَاقِ وَالْعَلَمِ...*\n\n_"Aye Allah! Hamare sardar Muhammad par darood bhej — jo taaj, meraj, buraq aur alam wale hain..."_\n\nYe darood buzurgon mein maqbool hai aur hajat-rawa samjha jata hai. Poora darood lamba hai — rozana subah/sham parhne ka mamool banayein.');
    }
  },
);
module.exports.push(
  {
    cmd: 'namaz2',
    aliases: [],
    category: 'Islamic',
    desc: '5 namazon ke naam aur rakat',
    usage: '.namaz',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕌 *Paanch Namazein:*\n\n1. *Fajr* — 2 Sunnat + 2 Farz (subah)\n2. *Zuhr* — 4 Sunnat + 4 Farz + 2 Sunnat + 2 Nafl (dopahar)\n3. *Asr* — 4 Sunnat (ghair-muakkada) + 4 Farz (shaam se pehle)\n4. *Maghrib* — 3 Farz + 2 Sunnat + 2 Nafl (ghurub-e-aftab)\n5. *Isha* — 4 Sunnat + 4 Farz + 2 Sunnat + 2 Nafl + 3 Witr + 2 Nafl (raat)\n\n⭐ Namaz deen ka sutoon hai. (Tirmidhi)');
    }
  },
  {
    cmd: 'roza',
    aliases: [],
    category: 'Islamic',
    desc: 'Roze ki maloomat',
    usage: '.roza',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌙 *Roza:*\n\n• Ramazan ke roze har baligh musalman par *farz* hain.\n• Sehri khana sunnat aur barkat hai — chahe ek ghunt pani ho.\n• Iftar mein jaldi karna sunnat hai.\n• Roze ki halat mein jhoot, gheebat aur larai se bachein — warna roza be-noor ho jata hai.\n• *Fazilat:* "Roza dhaal hai." (Bukhari) — Jannat ka ek darwaza "Rayyan" rozedaron ke liye hai.');
    }
  },
  {
    cmd: 'zakat',
    aliases: [],
    category: 'Islamic',
    desc: 'Zakat ki bunyadi maloomat',
    usage: '.zakat',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('💰 *Zakat (bunyadi maloomat):*\n\n• Zakat Islam ka teesra rukn hai — maal ka *2.5%* (chaaleeswan hissa).\n• *Nisab:* 87.48 gram sona ya 612.36 gram chandi (ya iski qeemat) — jo saal bhar paas rahe.\n• Zakat ke mustahiq: fuqara, masakeen, qarz-dar, musafir waghera (Surah Tauba 9:60).\n• Zakat ada karne se maal paak hota hai aur barkat hoti hai.\n• Tafseeli masail ke liye apne mufti/alim se ruju karein.');
    }
  },
  {
    cmd: 'hajj',
    aliases: [],
    category: 'Islamic',
    desc: 'Hajj ke arkan',
    usage: '.hajj',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕋 *Hajj ke Bunyadi Arkan:*\n\n1. *Ihram* — niyyat ke saath ihram bandhna\n2. *Wuquf-e-Arafat* — 9 Zilhaj ko Arafat mein theharna (Hajj ka rukn-e-azam)\n3. *Tawaf-e-Ziyarat* — Khana-e-Kaaba ka tawaf\n4. *Sai* — Safa o Marwa ke darmiyan sai\n\n⭐ "Hajj-e-Mabroor ka badla Jannat ke siwa kuch nahi." (Bukhari & Muslim)\n⭐ Hajj zindagi mein ek martaba farz hai — istitaat (gunjaish) hone par.');
    }
  },
  {
    cmd: 'umrah',
    aliases: [],
    category: 'Islamic',
    desc: 'Umrah ka tareeqa',
    usage: '.umrah',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕋 *Umrah ka Tareeqa:*\n\n1. Miqat se *Ihram* bandhein (niyyat + talbiya)\n2. Makkah pahunch kar *Tawaf* (7 chakkar)\n3. *Sai* — Safa o Marwa (7 chakkar)\n4. *Halq/Qasar* — sar mundwana ya baal katwana\n\n⭐ "Umrah se umrah tak darmiyani gunahon ka kaffara hai." (Bukhari & Muslim)\n⭐ Ramazan mein umrah Hajj ke barabar sawab rakhta hai. (Bukhari)');
    }
  },
  {
    cmd: 'qibla2',
    aliases: [],
    category: 'Islamic',
    desc: 'Qibla direction info',
    usage: '.qibla',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🧭 *Qibla (Khana-e-Kaaba, Makkah):*\n\n• Namaz mein rukh *Khana-e-Kaaba* ki taraf hota hai.\n• Pakistan/India se Qibla *maghrib (west)* ki taraf hai.\n• Sahi simt ke liye mobile ki *Qibla compass* app istemal karein ya qareebi masjid se maloom karein.\n• Agar simt maloom na ho sake to tehqeeq ke baad jis taraf ghalib guman ho, udhar namaz parh lein.');
    }
  },
  {
    cmd: 'tasbih',
    aliases: [],
    category: 'Islamic',
    desc: 'Namaz ke baad ki tasbihat',
    usage: '.tasbih',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Har Farz Namaz ke baad:*\n\n• *سُبْحَانَ اللَّهِ* — 33 martaba\n• *الْحَمْدُ لِلَّهِ* — 33 martaba\n• *اللَّهُ أَكْبَرُ* — 34 martaba\n\n⭐ "Jo ye parhega, uske gunah muaf ho jayenge chahe samandar ki jhag ke barabar hon." (Sahih Muslim)\n\nAur 100 martaba: *لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ*');
    }
  },
  {
    cmd: 'istighfar',
    aliases: [],
    category: 'Islamic',
    desc: 'Istighfar ki fazilat',
    usage: '.istighfar',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🤲 *Istighfar ki Fazilat:*\n\n📜 *"Jo istighfar ko lazim pakre, Allah uske liye har tangi se nikalne ka raasta bana dega, har gham se nijat dega aur use aisi jagah se rizq dega jahan se use guman bhi na ho."* (Abu Dawood)\n\nMukhtasar: *أَسْتَغْفِرُ اللَّهَ* (100 martaba rozana)\n\nNabi ﷺ rozana 70-100 martaba istighfar farmate the. (Sahih Bukhari)');
    }
  },
  {
    cmd: 'wazifa',
    aliases: [],
    category: 'Islamic',
    desc: 'Rozana ke mujarrab wazaif',
    usage: '.wazifa',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📿 *Rozana ke Wazaif:*\n\n• Subah/sham: *Ayatul Kursi* + Surah Ikhlas, Falaq, Nas (3x)\n• *لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ* — 100x (Jannat ka khazana)\n• *سُبْحَانَ اللَّهِ وَبِحَمْدِهِ* — 100x subah (gunah muaf)\n• Darood Sharif — kasrat se\n• Istighfar — 100x rozana\n\n⭐ Behtareen wazifa: 5 waqt ki namaz pabandi se + Quran ki tilawat. Baqi sab iski takmeel hain.');
    }
  },
  {
    cmd: 'sunnat',
    aliases: [],
    category: 'Islamic',
    desc: 'Rozana ki pyari sunnatein',
    usage: '.sunnat',
    owner: false,
    run: async (ctx) => {
      const s = [
        '🌙 Sone se pehle wuzu karna aur dayein karwat sona.',
        '🌙 Khana dayein hath se aur "Bismillah" parh kar khana.',
        '🌙 Ghar mein dakhil hote waqt salam kehna.',
        '🌙 Masjid mein dayein paon se dakhil hona.',
        '🌙 Pani baith kar, 3 saans mein peena.',
        '🌙 Juma ke din ghusl karna aur khushbu lagana.',
        '🌙 Chehre par muskurahat — ye bhi sadqa hai.',
        '🌙 Miswak karna — munh ki paaki, Rab ki raza.',
      ];
      await ctx.reply('⭐ *Rozana ki Sunnat:*\n\n' + s[Math.floor(Math.random() * s.length)]);
    }
  },
  {
    cmd: 'ramadan',
    aliases: [],
    category: 'Islamic',
    desc: 'Ramazan ki fazilat',
    usage: '.ramadan',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌙 *Mah-e-Ramazan:*\n\n• Quran isi mahine mein nazil hua (Laylatul Qadr mein).\n• Is mein Jannat ke darwaze khol diye jate hain, Jahannum band, shayateen jakar diye jate hain. (Bukhari)\n• Ek raat (Laylatul Qadr) 1000 mahinon se behtar.\n• Roza, Taraweeh, Sehri, Iftar, Zakat o Sadqat ka mahina.\n• Aakhri ashra mein etikaf ki sunnat.');
    }
  },
  {
    cmd: 'qadr',
    aliases: [],
    category: 'Islamic',
    desc: 'Laylatul Qadr ki maloomat',
    usage: '.qadr',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌙 *Laylatul Qadr:*\n\n*إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِنْ أَلْفِ شَهْرٍ*\n\n• 1000 mahinon (83 saal) se behtar raat.\n• Ramazan ke aakhri ashre ki *taaq raaton* (21, 23, 25, 27, 29) mein talash karein. (Bukhari)\n• Is raat ki dua: *اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي*');
    }
  },
  {
    cmd: 'taraweeh',
    aliases: [],
    category: 'Islamic',
    desc: 'Taraweeh ki maloomat',
    usage: '.taraweeh',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕌 *Taraweeh:*\n\n• Ramazan ki raaton ki khaas namaz — *sunnat-e-muakkada*.\n• Aam taur par 20 rakat parhi jati hain (Haramein mein bhi).\n• *"Jo Ramazan mein iman aur sawab ki niyyat se qiyam kare, uske pichhle gunah muaf ho jate hain."* (Bukhari & Muslim)\n• Isha ke baad se Sehri tak waqt hai.');
    }
  },
  {
    cmd: 'fitr',
    aliases: [],
    category: 'Islamic',
    desc: 'Sadqa-e-Fitr ki maloomat',
    usage: '.fitr',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('💰 *Sadqa-e-Fitr:*\n\n• Har musalman (chhota/bara, mard/aurat) par *wajib* hai.\n• Miqdar: ~2 kg gandum ya uski qeemat (fi zamana).\n• *Eid ki namaz se pehle* ada karna chahiye.\n• Maqsad: rozon ki kotahiyon ka kaffara aur ghareebon ko Eid ki khushi mein shareek karna.');
    }
  },
  {
    cmd: 'juma',
    aliases: [],
    category: 'Islamic',
    desc: "Juma ke din ki fazilat",
    usage: '.juma',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🕌 *Juma ki Fazilat:*\n\n• "Dino ka sardar" — isi din Hazrat Adam (AS) paida hue. (Tirmidhi)\n• Juma ki namaz mardon par farz hai; jaldi jana, ghusl, khushbu, Surah Kahf ki tilawat sunnat hai.\n• Kasrat se *darood* parhein.\n• Asr ke baad dua ki qabooliyat ki ghari hai — khoob dua maangein.\n• Khutba ghor se sunein — khutbe mein baat karna mana hai.');
    }
  },
  {
    cmd: 'eid2',
    aliases: [],
    category: 'Islamic',
    desc: 'Eidain ki maloomat',
    usage: '.eid',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🎉 *Eidain:*\n\n• *Eid-ul-Fitr* — 1 Shawwal (Ramazan ke baad)\n• *Eid-ul-Adha* — 10 Zilhaj (Hajj ke ayyam mein)\n• Sunnatein: ghusl, naye/umda kapre, khushbu, Eidgah paidal jana, ek raaste se jana dusre se wapas.\n• Eid-ul-Fitr se pehle meethi cheez (khajoor) khana sunnat; Eid-ul-Adha mein qurbani ke baad khana.\n• Takbeerat: *اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ*');
    }
  },
  {
    cmd: 'tahajjud',
    aliases: [],
    category: 'Islamic',
    desc: 'Tahajjud ki fazilat',
    usage: '.tahajjud',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('🌌 *Tahajjud:*\n\n• Raat ki nafl namaz — farz ke baad sab se afzal namaz. (Sahih Muslim)\n• Waqt: Isha ke baad se Fajr tak; behtareen waqt raat ka aakhri tihai hissa.\n• *"Hamara Rab har raat aasman-e-duniya par nazil hota hai... kaun hai jo mujh se maange main use dun?"* (Bukhari & Muslim)\n• Kam se kam 2 rakat se shuru karein.');
    }
  },
  {
    cmd: 'ishraq',
    aliases: [],
    category: 'Islamic',
    desc: 'Ishraq/Chasht ki namaz',
    usage: '.ishraq',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('☀️ *Ishraq o Chasht:*\n\n• *Ishraq:* Suraj nikalne ke ~15-20 min baad 2-4 rakat.\n• Fazilat: Fajr jamaat se parh kar zikr mein baithe rehna, phir 2 rakat — *mukammal Hajj o Umre ka sawab.* (Tirmidhi)\n• *Chasht:* Suraj buland hone par (9-11 baje) 2-12 rakat — rizq mein barkat ka zariya samjhi jati hai.');
    }
  },
  {
    cmd: 'muharram',
    aliases: [],
    category: 'Islamic',
    desc: 'Muharram aur Ashura',
    usage: '.muharram',
    owner: false,
    run: async (ctx) => {
      await ctx.reply('📅 *Muharram-ul-Haram:*\n\n• Islami saal ka pehla mahina — hurmat wale 4 mahinon mein se.\n• *Ashura (10 Muharram)* ka roza: pichhle saal ke gunahon ka kaffara. (Sahih Muslim)\n• Sunnat: 9 aur 10, ya 10 aur 11 Muharram ka roza rakhein.\n• Isi mahine mein Waqia-e-Karbala (61H) pesh aaya — Hazrat Imam Husain (RA) aur unke rufaqa ki shahadat par sab musalman ghamzada hain.');
    }
  },
  {
    cmd: 'shaban',
    aliases: [],
    category: 'Islamic',
    desc: "Shaban ke mahine ki maloomat",
    usage: '.shaban',
    owner: false,
    run: async (ctx) => {
      await ctx.reply("📅 *Mah-e-Shaban:*\n\n• Ramazan se pehle ka mahina — Nabi ﷺ is mein kasrat se roze rakhte the. (Bukhari & Muslim)\n• 15 Shaban ki raat (Shab-e-Barat) mein ibadat, dua aur istighfar ka mamool raha hai; is raat ki fazilat par mukhtalif riwayaat hain — nafl ibadat karna achha samjha jata hai.\n• Shaban aamaal pesh hone ka mahina kaha gaya hai — is liye roze se isteqbal karein.");
    }
  },
);
