module.exports = [
  {
    cmd: 'joke',
    aliases: [],
    category: 'Fun',
    desc: 'Send a random funny joke',
    usage: '.joke',
    owner: false,
    run: async (ctx) => {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything! 😄",
        "Ek aadmi doctor ke paas gaya: 'Doctor sahab, mujhe bhoolne ki bimari hai.' Doctor: 'Kab se?' Aadmi: 'Kab se kya?' 😂",
        "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾",
        "Teacher: 'Tumhare abbu kya karte hain?' Bacha: 'Jhoot bolte hain.' Teacher: 'Matlab?' Bacha: 'Kehtay hain main parhai mein acha hun!' 😂",
        "I told my friend she was drawing her eyebrows too high. She looked surprised. 😲",
        "Biwi: 'Padosi roz naye kapre pehenta hai.' Shohar: 'To?' Biwi: 'Mujhe bhi dilao!' Shohar: 'Uske kapre bhi uski biwi nahi, sale lagi thi!' 😂",
        "Why don't skeletons fight each other? They don't have the guts! 💀",
        "Aadmi: 'Bhai, ye rasta kahan jata hai?' Rahgeer: 'Qabristan.' Aadmi: 'Wahan kya hai?' Rahgeer: 'Sukoon... jo tumhein yahan nahi mil raha!' 😂",
        "My bed is a magical place. I suddenly remember everything I forgot to do! 🛏️😅",
        "Ustad: 'Beta, tumhara result?' Shagird: 'Sir, aap tension na lein, main fail nahi hua... school hi band ho gaya!' 🏫😂"
      ];
      await ctx.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    }
  },
  {
    cmd: 'latifa',
    aliases: [],
    category: 'Fun',
    desc: 'Send a random Urdu latifa',
    usage: '.latifa',
    owner: false,
    run: async (ctx) => {
      const jokes = [
        "Ustad: 'Beta, 2+2 kitne hote hain?' Shagird: 'Sir, ye to aap ko pata hona chahiye, aap ustad hain!' 😂",
        "Ek shakhs ne dua mangi: 'Ya Allah, mujhe sabar ata farma... aur jaldi farma!' 🤲😄",
        "Doctor: 'Aap ko kya takleef hai?' Mareez: 'Jab chai peeta hun to aankh mein dard hota hai.' Doctor: 'Chamach nikaal kar piya karo!' ☕😂",
        "Bacha: 'Abbu! School mein aag lag gayi!' Abbu: 'Sab khairiyat?' Bacha: 'Haan, lekin homework jal gaya!' 🔥😂",
        "Biwi: 'Tum mujh se kitna pyaar karte ho?' Shohar: 'Itna ke tolne wali machine toot jaye.' Biwi: 'Aww!' Shohar: 'Haan, itna bhari jhoot!' 😂",
        "Gahak: 'Ye murga kitne ka?' Dukandaar: '500 ka.' Gahak: 'Itna mehnga?!' Dukandaar: 'Sahab, ye angrezi bolta hai!' 🐓😂",
        "Mareez: 'Mujhe neend nahi aati.' Doctor: 'Bheren gino.' Mareez: 'Ginta hun, lekin 1 lakh par neend khul jati hai ke itni bheren aayen kahan se!' 🐑😂",
        "Bacha: 'Ammi, aaj maine school mein 100 rupay bachaye!' Ammi: 'Kaise?' Bacha: 'Bus ki bajaye bus ke peeche bhaagta aaya!' 🚌😂",
        "Ustad ji: 'Kal sab apne abbu ka naam likh kar lao.' Bacha: 'Sir, abbu ka naam to mujhe bhi nahi pata, sab Abbu kehte hain!' 😄",
        "Ek aadmi ne tote se poocha: 'Tum bol sakte ho?' Tota: 'Haan, aur tum soch sakte ho? Kabhi try kiya?' 🦜😂"
      ];
      await ctx.reply(jokes[Math.floor(Math.random() * jokes.length)]);
    }
  },
  {
    cmd: 'shayari',
    aliases: ['shair'],
    category: 'Fun',
    desc: 'Send a random romantic shayari couplet',
    usage: '.shayari',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "Teri yaadon ke diye jalte hain seene mein,\nTere bina ye raatein kat'ti hain mahine mein. 🌙",
        "Chandni raat mein tera chehra yaad aaya,\nDil ne phir tera naam pukara, tu na aaya. 💫",
        "Mohabbat mein jeet haar nahi dekhi jati,\nDil lagane walon se duniya nahi dekhi jati. ❤️",
        "Tum mile to laga zindagi mil gayi,\nWarna jee to hum pehle bhi rahe thay. 🌹",
        "Dosti ka rishta bhi kya khoob hai,\nDoor reh kar bhi dil ke qareeb hai. 🤝",
        "Waqt guzarta hai, yaadein reh jati hain,\nBichar jate hain log, baatein reh jati hain. 🍂",
        "Khush rehna seekho, gham to aate jate hain,\nMuskurahat se bade dard chhupaye jate hain. 😊",
        "Zindagi ek safar hai suhana,\nHar mor par hai koi bahana. 🛤️"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'sher',
    aliases: [],
    category: 'Fun',
    desc: 'Send a random classical-style sher',
    usage: '.sher',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "Raat bhar jaagta raha chand sitaaron ke saath,\nSubah hui to khwab bhi rooth gaye hazaaron ke saath. 🌌",
        "Tere ishq mein hum ne ye sila paya hai,\nHansna bhool gaye, bas rona aaya hai. 🥀",
        "Duniya ne tujh ko bhoolne ko kaha tha,\nHum ne duniya ko bhoolna seekh liya. 🌍",
        "Aaina dekh kar hairan hun main,\nMujh mein chhupa hai koi anjaan sa main. 🪞",
        "Gham ki raaton mein bhi ek umeed hai,\nSubah ka sooraj phir niklega, ye naveed hai. 🌅",
        "Waqt ke saath badal jate hain chehre saare,\nBaaqi rehta hai bas kirdaar hamara. ⏳",
        "Khamoshi bhi ek zabaan hoti hai,\nJo samjhe wohi pehchaan hoti hai. 🤫",
        "Manzil mile na mile, safar jaari hai,\nHausla buland hai, himmat baari hai. 🏔️"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'ghazal2',
    aliases: [],
    category: 'Fun',
    desc: 'Send a random ghazal-style couplet',
    usage: '.ghazal',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "Tere dar pe aaya hun faryaad lekar,\nDil mein dabi hui ek yaad lekar. 🕊️",
        "Bahaaron ne bhi dekha hai ye manzar,\nPhool khilte hain tere naam lekar. 🌸",
        "Shab-e-firaaq mein taare ginte ginte,\nNeend aa gayi tera naam lete lete. ✨",
        "Tere chehre ki roshni se roshan jahaan,\nTu na ho to andhera har su, har makaan. 🕯️",
        "Dil ki duniya mein basa hai tu aise,\nJaise sehra mein ho paani ka qatra. 🏜️",
        "Na pooch mere dil ka haal ae dost,\nToota hua hai, phir bhi dhadakta hai. 💔"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'rubai',
    aliases: [],
    category: 'Fun',
    desc: 'Send a random rubai (quatrain)',
    usage: '.rubai',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "Zindagi se yehi gila hai mujhe,\nTu bahut der se mila hai mujhe. ⏰\nTu mohabbat se koi chaal to seekh,\nHaar jaane ka hausla hai mujhe. 🌹",
        "Subah hoti hai, shaam hoti hai,\nUmr yunhi tamam hoti hai. 🌅\nKoi samjhe to ek baat kahun,\nZindagi naam hai jeene ka — jee le! 🌺",
        "Dost woh jo museebat mein kaam aaye,\nDushman woh jo peeth peeche waar kare. 🤝\nZindagi mein yehi pehchana maine,\nWaqt sab ka chehra dikha deta hai. ⏳",
        "Phool khilte hain, kaliyaan muskurati hain,\nBahaar aate hi fizaen gungunati hain. 🌸\nTu jo hansta hai to lagta hai aise,\nJaise duniya ki khushiyaan laut aati hain. 😊",
        "Roti, kapra, makaan — kya yehi zindagi?\nNahi! Pyaar, wafa, imaan — yehi zindagi. 🏠\nJo doosron ke kaam aaye wohi insaan,\nWarna saans lena bhi kya zindagi! ❤️",
        "Chandni raat thi, taare ginte rahe,\nTeri yaadon ke diye jalte rahe. 🌙\nSubah hui to ye ehsaas hua,\nHum to bas khwabon mein milte rahe. 💭"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'mushaira',
    aliases: [],
    category: 'Fun',
    desc: 'Funny virtual mushaira session',
    usage: '.mushaira',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🎤 *Mushaira shuru!* Pehla sher arz hai:\n'Mehfil mein aaye ho to adaab se aao,\nSher sun'ne ka saleeqa bhi saath lao!' 👏",
        "🎤 Agla shayar:\n'Dil diya tha dildaar ko, dildaar ne dil tor diya,\nAb dil ke tukre liye phirte hain, bazaar mein shor macha diya!' 😄",
        "🎤 'Irshaad! Irshaad!'\n'Chai pi, biscuit khaya, phir bhi neend na aayi,\nTeri yaad ne ae dost, raat bhar jagaya!' ☕🌙",
        "🎤 'Wah wah! Kya kehne!'\n'Mobile ki battery low, dil ka network full,\nTere message ka intezaar, yehi hai usool!' 📱❤️",
        "🎤 'Mukarrar! Mukarrar!'\n'Roti ko choochi kehte hain, daal ko pani,\nShayar ki zindagi bhi ajeeb hai kahani!' 🍛😄",
        "🎤 Aakhri sher:\n'Mushaira khatm, daad ka shukriya,\nAgli mehfil mein phir milenge — Khuda Hafiz!' 🤲✨"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'quote',
    aliases: ['aqwal'],
    category: 'Fun',
    desc: 'Send a random famous quote',
    usage: '.quote',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "\"The best way to predict the future is to create it.\" — Peter Drucker 💡",
        "\"Kamyaabi unhi ko milti hai jo haar nahi maante.\" 💪",
        "\"In the middle of difficulty lies opportunity.\" — Albert Einstein 🌟",
        "\"Waqt se pehle aur qismat se zyada, kisi ko kuch nahi milta.\" ⏳",
        "\"Be yourself; everyone else is already taken.\" — Oscar Wilde 😎",
        "\"Mehnat itni khamoshi se karo ke kamyaabi shor macha de.\" 🔥",
        "\"The only way to do great work is to love what you do.\" — Steve Jobs ❤️",
        "\"Jo logon ke liye aasaniyaan paida karta hai, Allah uske liye aasaniyaan paida karta hai.\" 🤲"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'motivate2',
    aliases: ['joshtak'],
    category: 'Fun',
    desc: 'Get a motivational boost',
    usage: '.motivate',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "💪 Uth! Tera waqt aa gaya hai. Kal ka intezaar mat kar!",
        "🔥 Nakami ka matlab ye nahi ke tum haar gaye — iska matlab hai ke tum seekh rahe ho!",
        "🌅 Har subah ek naya mauqa hai. Aaj kuch bada kar!",
        "⭐ Tum mein woh taaqat hai jo tum khud nahi jaante. Aazma kar dekho!",
        "🏔️ Mushkilaat pahad jaisi lagti hain, lekin qadam badhao — raasta nikal aayega!",
        "💎 Heera bhi kabhi koyla tha — dabao se hi chamak aati hai!",
        "🚀 Sapne woh nahi jo neend mein aayen, sapne woh hain jo neend ura dein!",
        "🌱 Aaj ki mehnat, kal ki kamyaabi hai. Rukna mat!"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'success',
    aliases: [],
    category: 'Fun',
    desc: 'Get a random success tip',
    usage: '.success',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🎯 *Success Tip:* Roz subah apne 3 sab se zaroori kaam likho — aur unhein poora karo!",
        "📚 *Success Tip:* Roz 20 minute kuch naya seekho. Ek saal mein 120+ ghante aage hoge!",
        "⏰ *Success Tip:* Subah jaldi utho — kamyaab logon ki aadat!",
        "🤝 *Success Tip:* Achay logon ki sohbat ikhtiyar karo — tum un jaisay ban jao ge.",
        "💰 *Success Tip:* Kamai se pehle bachat karo, kharch ke baad jo bache woh nahi!",
        "🧘 *Success Tip:* Roz 10 minute khamoshi mein betho — zehen saaf, faislay behtar!",
        "📵 *Success Tip:* Sone se 1 ghanta pehle mobile door rakho — neend aur sehat dono behtar!",
        "✍️ *Success Tip:* Apne khwab likho — likhe hue khwab maqsad ban jate hain!"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'wisdom',
    aliases: ['danaai'],
    category: 'Fun',
    desc: 'Get a random wisdom saying',
    usage: '.wisdom',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🦉 Khamoshi kabhi kabhi sab se buland jawab hoti hai.",
        "🌊 Gehra paani khamosh behta hai — aqalmand zyada nahi bolte.",
        "🪞 Doosron mein aib nikaalne se pehle apne girebaan mein jhaank lo.",
        "🌳 Jo darakht phal deta hai, wohi jhukta hai — aajizi kamyaabi ki nishani hai.",
        "⚖️ Gussa ek tez talwaar hai jo pehle apne maalik ko kaatti hai.",
        "💧 Qatra qatra dariya banta hai — chhoti koshishen badi kamyaabi laati hain.",
        "🕯️ Doosron ke liye roshni bano — tumhara apna raasta bhi roshan hoga.",
        "🌾 Khaali khosha hawa mein uchalta hai, bhara hua jhuk jata hai."
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'deep',
    aliases: [],
    category: 'Fun',
    desc: 'Deep thoughts to ponder',
    usage: '.deep',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🌌 Hum sitaaron ko dekhte hain jo hazaaron saal pehle mar chuke — kya hum bhi kisi ki yaad mein zinda hain?",
        "🪞 Tum woh ho jo tum sochte ho ke tum ho... ya woh jo doosre sochte hain?",
        "⏳ Waqt guzarta hai, ya hum guzarte hain waqt ke andar?",
        "🌊 Samandar ki lehron ko koi rok nahi sakta — kya khayalat bhi aise hi hain?",
        "💭 Khwab mein hum doosri duniya jeete hain — kya ye zindagi kisi ka khwab hai?",
        "🍂 Patjhar mein patte girte hain taake bahar aa sake — khatma hi shuruaat hai."
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'shower',
    aliases: [],
    category: 'Fun',
    desc: 'Funny shower thoughts',
    usage: '.shower',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🚿 Tumhara future self abhi tumhein dekh kar soch raha hai: 'Kaash isne meri baat maani hoti.'",
        "🪥 Toothbrush ko nahi pata ke tum usay kab phenko ge — woh bas roz tumhari khidmat karta hai. Wafadaar!",
        "🛁 Nahate waqt sab se achay khayal aate hain — kyunke wahan koi notification nahi aata!",
        "🪞 Aaina tumhein ulta dikhata hai — tum ne kabhi apna asal chehra dekha hi nahi!",
        "🧦 Moze hamesha joray mein gum hote hain — kya washing machine mein koi aur duniya hai?",
        "⏰ Alarm se 5 minute pehle aankh khul jana — jism ka apna alarm system!"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'fact',
    aliases: [],
    category: 'Fun',
    desc: 'Send a random interesting fact',
    usage: '.fact',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🍯 *Fact:* Shehed kabhi kharab nahi hota! Hazaaron saal purana shehed bhi khane layak rehta hai.",
        "🐙 *Fact:* Octopus ke 3 dil hote hain!",
        "🌙 *Fact:* Chaand har saal dharti se 3.8 cm door hota ja raha hai!",
        "💧 *Fact:* Insani jism ka 60% hissa paani hai!",
        "🦒 *Fact:* Ziraafa ki zabaan 50 cm tak lambi ho sakti hai!",
        "⚡ *Fact:* Bijli ki chamak sooraj se 5 guna zyada garam hoti hai!",
        "🐝 *Fact:* Shehed ki makhi apni zindagi mein sirf 1/12 chammach shehed banati hai!",
        "🌍 *Fact:* Dharti ka sab se gehra hissa Mariana Trench hai — 11 km gehra!"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'didyouknow',
    aliases: ['dyk'],
    category: 'Fun',
    desc: 'Kya aap jaante hain? random facts',
    usage: '.didyouknow',
    owner: false,
    run: async (ctx) => {
      const lines = [
        "🤔 *Kya aap jaante hain?* Billi apne wazan se 6 guna uncha kood sakti hai!",
        "🤔 *Kya aap jaante hain?* Insan ki naak 1 trillion khushbu pehchan sakti hai!",
        "🤔 *Kya aap jaante hain?* Shutar murgh ki aankh uske dimagh se badi hoti hai!",
        "🤔 *Kya aap jaante hain?* Madhumakkhi ke 5 aankhen hoti hain!",
        "🤔 *Kya aap jaante hain?* Samandar ke paani mein sona bhi hai — lekin bahut kam!",
        "🤔 *Kya aap jaante hain?* Hathi apne pairon se aawaz mehsoos kar sakta hai!",
        "🤔 *Kya aap jaante hain?* Insan ke jism ki sab se mazboot haddi jaangh ki hoti hai!",
        "🤔 *Kya aap jaante hain?* Chuha aur ziraafa dono ki gardan mein 7 mohre hote hain!"
      ];
      await ctx.reply(lines[Math.floor(Math.random() * lines.length)]);
    }
  },
  {
    cmd: 'trivia',
    aliases: [],
    category: 'Fun',
    desc: 'Trivia question with answer',
    usage: '.trivia',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["Duniya ka sab se bara samandar kaunsa hai?", "Pacific Ocean (Bahira-e-Kabeer) 🌊"],
        ["Pakistan ka qomi khel kaunsa hai?", "Hockey 🏑"],
        ["Insan ke jism mein kul kitni haddiyan hoti hain?", "206 🦴"],
        ["Quran Pak mein kul kitni suratein hain?", "114 📖"],
        ["Duniya ka sab se lamba darya kaunsa hai?", "Darya-e-Neel (Nile) 🏞️"],
        ["Pehla Nobel Prize kab diya gaya?", "1901 🏅"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`❓ *Sawal:* ${q}\n\n🔽🔽🔽\n\n✅ *Jawab:* ${a}`);
    }
  },
  {
    cmd: 'quiz',
    aliases: [],
    category: 'Fun',
    desc: 'General knowledge quiz question',
    usage: '.quiz',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["Pakistan ka dar-ul-hukumat kya hai?", "Islamabad 🇵🇰"],
        ["Chaand par qadam rakhne wala pehla insan kaun tha?", "Neil Armstrong 🌙"],
        ["Duniya ki sab se unchi choti kaunsi hai?", "Mount Everest 🏔️"],
        ["Pakistan ka qomi phool kaunsa hai?", "Chambeli (Jasmine) 🌼"],
        ["Qaus-e-qaza mein kitne rang hote hain?", "7 🌈"],
        ["Insan ka dil ek din mein kitni baar dhadakta hai?", "Taqreeban 100,000 baar ❤️"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`❓ *Quiz:* ${q}\n\n🔽🔽🔽\n\n✅ *Jawab:* ${a}`);
    }
  },
  {
    cmd: 'riddle2',
    aliases: [],
    category: 'Fun',
    desc: 'English riddle with answer',
    usage: '.riddle',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", "An echo! 🔊"],
        ["The more you take, the more you leave behind. What am I?", "Footsteps! 👣"],
        ["What has keys but can't open locks?", "A piano! 🎹"],
        ["What gets wetter the more it dries?", "A towel! 🏖️"],
        ["What has a head and a tail but no body?", "A coin! 🪙"],
        ["What runs but never walks, has a mouth but never talks?", "A river! 🏞️"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`🧩 *Riddle:* ${q}\n\n🔽🔽🔽\n\n✅ *Answer:* ${a}`);
    }
  },
  {
    cmd: 'paheli2',
    aliases: [],
    category: 'Fun',
    desc: 'Urdu paheli with answer',
    usage: '.paheli',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["Woh kya hai jo paida hote hi urta hai?", "Dhuwaan! 💨"],
        ["Aisi kaunsi cheez hai jise jitna nikalo utni bharti hai?", "Garha (kuan)! 🕳️"],
        ["Woh kaunsa darakht hai jis par patte nahi hote?", "Khandaan ka darakht (family tree)! 🌳"],
        ["Woh kya hai jo tumhara hai lekin doosre zyada istemal karte hain?", "Tumhara naam! 📛"],
        ["Kaunsi cheez upar jati hai, neeche nahi aati?", "Umar! 🎂"],
        ["Woh kya hai jo aag mein jal kar bhi zinda rehta hai?", "Sona (gold)! 🪙"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`🧩 *Paheli:* ${q}\n\n🔽🔽🔽\n\n✅ *Jawab:* ${a}`);
    }
  },
  {
    cmd: 'puzzle',
    aliases: [],
    category: 'Fun',
    desc: 'Logic puzzle with solution',
    usage: '.puzzle',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["Ek kamre mein 3 bulb, bahar 3 switch. Ek baar andar ja kar batao kaunsa switch kis bulb ka?", "Ek switch 5 min ON rakho, phir OFF kar ke doosra ON karo, andar jao: jalta bulb = doosra switch, garam band bulb = pehla, thanda = teesra! 💡"],
        ["1, 2, 4, 8, 16 ke baad kya aayega?", "32! (har baar dogna) 🔢"],
        ["3 murgiyan 3 din mein 9 ande deti hain. 1 murgi 1 din mein kitne?", "1 anda! 🥚"],
        ["Tumhare paas 10 machliyan thin, 3 doob gayin. Kitni bachi?", "10! Machliyan doobti nahi! 🐟😂"],
        ["Kaunsa mahina 28 din ka hota hai?", "Saare mahine! (sab mein 28 din to hote hain) 📅😄"],
        ["Ek train 60 km/h se chal rahi hai. 30 km ka safar kitne minute mein?", "30 minute! 🚂"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`🧩 *Puzzle:* ${q}\n\n🔽🔽🔽\n\n✅ *Hal:* ${a}`);
    }
  },
  {
    cmd: 'teaser',
    aliases: [],
    category: 'Fun',
    desc: 'Brain teaser with answer',
    usage: '.teaser',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["Aadmi ghar se nikla, 3 mod liye, wapas aaya to 2 naqaab-posh mile. Kya ho raha tha?", "Cricket khel raha tha! 🏏"],
        ["Kya cheez hamesha aage badhti hai, kabhi peeche nahi hatti?", "Umar aur waqt! ⏰"],
        ["Building mein aag lagi, sab bahar nikle, ek aadmi andar raha. Kyun?", "Woh firefighter tha! 🔥🧑‍🚒"],
        ["Woh kaunsa sawal hai jiska jawab tum 'haan' mein kabhi nahi de sakte?", "'Kya tum so rahe ho?' 😴"],
        ["5 bhai hain, har bhai ki 1 behan. Kul kitne bache?", "6! (5 bhai + 1 behan) 👨‍👩‍👧‍👦"],
        ["Kaunsi cheez tum todte ho jab uska naam lete ho?", "Khamoshi! 🤫"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`🧠 *Teaser:* ${q}\n\n🔽🔽🔽\n\n✅ *Jawab:* ${a}`);
    }
  },
  {
    cmd: 'eightball2',
    aliases: ['8ball'],
    category: 'Fun',
    desc: 'Ask the magic 8-ball a question',
    usage: '.eightball <sawal>',
    owner: false,
    run: async (ctx) => {
      if (!ctx.text) {
        await ctx.reply('🔮 *Usage:* .eightball <apna sawal likhein>\nMisal: .eightball kya main kamyaab hunga?');
        return;
      }
      const answers = [
        "Bilkul haan! ✅", "Yaqeenan! 💯", "Haan, sitare tumhare saath hain! ⭐",
        "Mumkin hai, koshish jaari rakho 🤞", "Mushkil lagta hai 😅", "Bilkul nahi! ❌",
        "Abhi waqt nahi aaya ⏳", "Dobara poocho 🔮", "Allah behtar jaanta hai 🤲",
        "Dil kehta hai haan! ❤️", "Thoda sabar karo 🍃", "Jawab dhuund mein hai 🌫️"
      ];
      await ctx.reply(`🔮 *Sawal:* ${ctx.text}\n\n🎱 *Jawab:* ${answers[Math.floor(Math.random() * answers.length)]}`);
    }
  },
  {
    cmd: 'magic',
    aliases: [],
    category: 'Fun',
    desc: 'Crystal ball mystical answer',
    usage: '.magic <sawal>',
    owner: false,
    run: async (ctx) => {
      if (!ctx.text) {
        await ctx.reply('✨ *Usage:* .magic <apna sawal likhein>');
        return;
      }
      const answers = [
        "✨ Crystal kehta hai: Haan, raasta saaf hai!",
        "🌙 Sitaare hanste hue kehte hain: Bilkul!",
        "💫 Kainaat tumhare haq mein hai!",
        "🌫️ Abhi dhund hai... thoda intezaar karo.",
        "⚡ Bijli chamki — jawab 'nahi' hai!",
        "🕯️ Roshni madham hai — phir koshish karo.",
        "🌊 Lehren kehti hain: waqt tumhara hai!",
        "🍀 Qismat muskurayi — haan!"
      ];
      await ctx.reply(`*Sawal:* ${ctx.text}\n\n${answers[Math.floor(Math.random() * answers.length)]}`);
    }
  },
  {
    cmd: 'coin',
    aliases: ['coinflip'],
    category: 'Fun',
    desc: 'Flip a coin',
    usage: '.coin',
    owner: false,
    run: async (ctx) => {
      const res = Math.random() < 0.5 ? 'Head 👑' : 'Tail 🦅';
      await ctx.reply(`🪙 Coin uchala...\n\n*${res}* aaya!`);
    }
  },
  {
    cmd: 'dice',
    aliases: [],
    category: 'Fun',
    desc: 'Roll a dice',
    usage: '.dice',
    owner: false,
    run: async (ctx) => {
      const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      const n = Math.floor(Math.random() * 6);
      await ctx.reply(`🎲 Dice giraya...\n\n${faces[n]} *${n + 1}* aaya!`);
    }
  },
  {
    cmd: 'roll2',
    aliases: [],
    category: 'Fun',
    desc: 'Roll a dice with custom sides',
    usage: '.roll <sides>',
    owner: false,
    run: async (ctx) => {
      let sides = parseInt(ctx.args[0]) || 6;
      if (sides < 2) sides = 2;
      if (sides > 100) sides = 100;
      const n = 1 + Math.floor(Math.random() * sides);
      await ctx.reply(`🎲 ${sides} sides wala dice...\n\n*${n}* aaya!`);
    }
  },
  {
    cmd: 'rps',
    aliases: [],
    category: 'Fun',
    desc: 'Rock Paper Scissors vs bot',
    usage: '.rps <rock|paper|scissors>',
    owner: false,
    run: async (ctx) => {
      const map = { rock: '✊', pathar: '✊', paper: '✋', kaghaz: '✋', scissors: '✌️', qainchi: '✌️', kainchi: '✌️' };
      const you = map[(ctx.args[0] || '').toLowerCase()];
      if (!you) {
        await ctx.reply('✊✋✌️ *Usage:* .rps <rock|paper|scissors>\nUrdu mein: pathar, kaghaz, qainchi bhi chalega!');
        return;
      }
      const opts = ['✊', '✋', '✌️'];
      const bot = opts[Math.floor(Math.random() * 3)];
      const win = { '✊': '✌️', '✋': '✊', '✌️': '✋' };
      let res = bot === you ? '🤝 *Barabar!* Dobara khelo!' : (win[you] === bot ? '🎉 *Tum jeet gaye!* Mubarak!' : '🤖 *Bot jeet gaya!* Phir try karo!');
      await ctx.reply(`Tum: ${you}  vs  Bot: ${bot}\n\n${res}`);
    }
  },
  {
    cmd: 'slot',
    aliases: [],
    category: 'Fun',
    desc: 'Slot machine game',
    usage: '.slot',
    owner: false,
    run: async (ctx) => {
      const items = ['🍒', '⭐', '🔔', '💎', '🍋', '7️⃣'];
      const a = items[Math.floor(Math.random() * items.length)];
      const b = items[Math.floor(Math.random() * items.length)];
      const c = items[Math.floor(Math.random() * items.length)];
      const msg = (a === b && b === c) ? '🎰 *JACKPOT!* Tum jeet gaye! 🏆' : '🎰 Phir try karo!';
      await ctx.reply(`🎰 | ${a} | ${b} | ${c} |\n\n${msg}`);
    }
  },
  {
    cmd: 'lotto',
    aliases: [],
    category: 'Fun',
    desc: 'Get 6 lucky lottery numbers',
    usage: '.lotto',
    owner: false,
    run: async (ctx) => {
      const nums = new Set();
      while (nums.size < 6) nums.add(1 + Math.floor(Math.random() * 49));
      await ctx.reply(`🎟️ *Tumhare lucky lottery numbers:*\n\n${[...nums].sort((x, y) => x - y).join(' • ')}\n\nGood luck! 🍀`);
    }
  },
  {
    cmd: 'lucky',
    aliases: [],
    category: 'Fun',
    desc: 'Your lucky number, color and day',
    usage: '.lucky',
    owner: false,
    run: async (ctx) => {
      const colors = ['Surkh 🔴', 'Neela 🔵', 'Sabz 🟢', 'Peela 🟡', 'Jamuni 🟣', 'Narangi 🟠', 'Sufaid ⚪', 'Kala ⚫'];
      const days = ['Peer', 'Mangal', 'Budh', 'Jumeraat', 'Juma', 'Hafta', 'Itwaar'];
      await ctx.reply(`🍀 *Aaj ki qismat:*\n\n🔢 Lucky Number: *${1 + Math.floor(Math.random() * 100)}*\n🎨 Lucky Color: *${colors[Math.floor(Math.random() * colors.length)]}*\n📅 Lucky Day: *${days[Math.floor(Math.random() * days.length)]}*`);
    }
  },
  {
    cmd: 'stars',
    aliases: [],
    category: 'Fun',
    desc: 'Fun horoscope prediction',
    usage: '.stars <your star/sign>',
    owner: false,
    run: async (ctx) => {
      const preds = [
        "Aaj koi purana dost yaad karega — phone uthana mat bhoolna! 📞😄",
        "Aaj chai zyada meethi lagegi — qismat meethi hai! ☕🍬",
        "Koi tumhari tareef karega — sharmaana mat! 😊",
        "Aaj kaam mein rukawat aayegi, lekin shaam tak sab theek! 🌤️",
        "Aaj paisa kharch hoga — lekin khushi bhi milegi! 💸😄",
        "Koi achi khabar milne wali hai — kaan khule rakho! 📢",
        "Aaj tumhara din hai — jo chaho mango! 🌟",
        "Thoda aaram karo, sitare kehte hain rest zaroori hai! 😴"
      ];
      const sign = ctx.text || 'tumhara sitara';
      await ctx.reply(`🔯 *Horoscope — ${sign}:*\n\n${preds[Math.floor(Math.random() * preds.length)]}`);
    }
  },
  {
    cmd: 'zodiac2',
    aliases: [],
    category: 'Fun',
    desc: 'Fun zodiac sign traits',
    usage: '.zodiac <sign>',
    owner: false,
    run: async (ctx) => {
      const traits = {
        aries: '♈ Aries: Bahadur, tez, leader — lekin ghusse ke tez! 🔥',
        taurus: '♉ Taurus: Wafadaar, mehnati — aur khane ke shaukeen! 🍔',
        gemini: '♊ Gemini: Baaton ke dhani — do mood ek saath! 🗣️',
        cancer: '♋ Cancer: Naram dil, jazbaati — ghar se mohabbat! 🏠',
        leo: '♌ Leo: Sher dil, confident — spotlight inhi ka! 🦁',
        virgo: '♍ Virgo: Perfect, detail wale — har cheez saaf! ✨',
        libra: '♎ Libra: Sulah pasand — faisla karne mein time! ⚖️',
        scorpio: '♏ Scorpio: Gehre raaz wale — wafadaar dost! 🦂',
        sagittarius: '♐ Sagittarius: Ghumakkad, khush mizaaj — adventure! 🏹',
        capricorn: '♑ Capricorn: Mehnati, zimmedaar — manzil ke pakke! 🐐',
        aquarius: '♒ Aquarius: Alag soch — duniya badalne wale! 🌊',
        pisces: '♓ Pisces: Khwabon ki duniya — naram dil shayar! 🐟'
      };
      const key = (ctx.args[0] || '').toLowerCase();
      if (traits[key]) {
        await ctx.reply(traits[key]);
      } else {
        const keys = Object.keys(traits);
        await ctx.reply(`${traits[keys[Math.floor(Math.random() * keys.length)]]}\n\nℹ️ Kisi khaas sign ke liye: .zodiac <aries...pisces>`);
      }
    }
  },
  {
    cmd: 'love2',
    aliases: ['lovecalc'],
    category: 'Fun',
    desc: 'Fun love compatibility calculator',
    usage: '.love <naam1> <naam2>',
    owner: false,
    run: async (ctx) => {
      const [n1, n2] = ctx.args;
      if (!n1 || !n2) {
        await ctx.reply('💘 *Usage:* .love <naam1> <naam2>\nMisal: .love Ali Sara');
        return;
      }
      const s = (n1 + n2).toLowerCase();
      let h = 0;
      for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) % 1000;
      const pct = 40 + (h % 61);
      const msg = pct > 90 ? '💍 Shaadi pakki samjho!' : pct > 75 ? '❤️ Kya jori hai!' : pct > 55 ? '💕 Achi shuruaat hai!' : '🤝 Dosti to pakki hai!';
      await ctx.reply(`💘 *Love Calculator*\n\n${n1} ❤️ ${n2}\n\nCompatibility: *${pct}%*\n${msg}`);
    }
  },
  {
    cmd: 'friendship',
    aliases: [],
    category: 'Fun',
    desc: 'Fun friendship percentage',
    usage: '.friendship <naam1> <naam2>',
    owner: false,
    run: async (ctx) => {
      const [n1, n2] = ctx.args;
      if (!n1 || !n2) {
        await ctx.reply('🤝 *Usage:* .friendship <naam1> <naam2>');
        return;
      }
      const s = (n1 + 'dost' + n2).toLowerCase();
      let h = 0;
      for (const ch of s) h = (h * 17 + ch.charCodeAt(0)) % 1000;
      const pct = 50 + (h % 51);
      await ctx.reply(`🤝 *Friendship Meter*\n\n${n1} + ${n2}\n\nDosti: *${pct}%*\n${pct > 85 ? '🌟 Yaari number 1!' : pct > 70 ? '😄 Pakke dost!' : '👍 Achi dosti!'}`);
    }
  },
  {
    cmd: 'truth',
    aliases: [],
    category: 'Fun',
    desc: 'Random truth question',
    usage: '.truth',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🙈 Tumhari sab se bari khwahish kya hai?",
        "😅 Wo kaunsa kaam hai jo tum ne chhup kar kiya aur kisi ko nahi bataya?",
        "📱 Tumhare phone mein sab se ajeeb photo kaunsi hai?",
        "🍔 Agar zindagi bhar ek hi khana khana pare to kya khaoge?",
        "😴 Tumhari sab se ajeeb aadat kya hai?",
        "💘 Pehli mohabbat ka naam batao! (himmat hai to)",
        "🎬 Kaunsi film dekh kar tum roye thay?",
        "🤫 Tum ne kabhi jhoot bol kar chutti li hai? Kab?",
        "🏆 Agar 1 crore mil jaye to sab se pehle kya karoge?",
        "👻 Kya tum bhooton par yaqeen rakhte ho? Wajah batao!"
      ];
      await ctx.reply(`*TRUTH:* ${items[Math.floor(Math.random() * items.length)]}`);
    }
  },
  {
    cmd: 'dare',
    aliases: [],
    category: 'Fun',
    desc: 'Random fun dare',
    usage: '.dare',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🎤 Apni pasandeeda gaane ki 2 lines type kar ke bhejo — abhi!",
        "😜 Apne naam ka ulta spell kar ke bhejo!",
        "🤳 Apni abhi ki selfie ka emoji version banao: 5 emoji mein apna mood batao!",
        "🗣️ Zor se 'Main sab se acha hun!' 3 baar bolo (ghar walon ke saamne 😄)",
        "💃 Apni kursi par beth kar 10 second naacho — aur 'ho gaya' likho!",
        "📢 Group mein apne best friend ki tareef mein 3 lines likho!",
        "🍋 Socho ke tum ne lemon khaya — chehra banao aur describe karo! 😖",
        "🎭 Agle 5 minute tak har message mein '😎' lagao!",
        "📝 Apne haath se 'SALARA MD BOT' likh kar tasveer bhejo!",
        "🦁 Sher ki tarah dahaaro aur likho 'Dahaar liya!' 🦁"
      ];
      await ctx.reply(`*DARE:* ${items[Math.floor(Math.random() * items.length)]}`);
    }
  },
  {
    cmd: 'wyr',
    aliases: [],
    category: 'Fun',
    desc: 'Would you rather question',
    usage: '.wyr',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🤔 *Would you rather:* Hamesha bhookha raho ya hamesha neend mein raho?",
        "🤔 *Would you rather:* Parrot ki tarah bol sako ya billi ki tarah dek sako (raat mein)?",
        "🤔 *Would you rather:* 1 crore rupay abhi lo ya 10 crore 10 saal baad?",
        "🤔 *Would you rather:* Hamesha sach bolo ya kabhi na bolo (gunga)?",
        "🤔 *Would you rather:* Pani par chal sako ya hawa mein ur sako?",
        "🤔 *Would you rather:* Duniya ka sab se ameer bano ya sab se khush?",
        "🤔 *Would you rather:* Biryani chhor do ya chai? (mushkil sawal! 😅)",
        "🤔 *Would you rather:* Mobile ke baghair 1 hafta ya doston ke baghair 1 mahina?"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'nhie',
    aliases: [],
    category: 'Fun',
    desc: 'Never have I ever statement',
    usage: '.nhie',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🙊 *Never have I ever:* Exam mein naqal ki hai!",
        "🙊 *Never have I ever:* Ammi ke haath ka khana chhup kar khaya hai!",
        "🙊 *Never have I ever:* Barish mein bheeg kar bukhar liya hai!",
        "🙊 *Never have I ever:* Dost ke message ka jawab 1 hafte baad diya hai!",
        "🙊 *Never have I ever:* Khwab mein ur kar gira hun!",
        "🙊 *Never have I ever:* Ghalti se apne ustad ko 'abbu' kaha hai!",
        "🙊 *Never have I ever:* Chai mein biscuit gira kar nikala hai!",
        "🙊 *Never have I ever:* Aaina dekh kar khud se baatein ki hain!"
      ];
      await ctx.reply(`${items[Math.floor(Math.random() * items.length)]}\n\n_Jis ne kiya hai, 👍 bheje!_`);
    }
  },
  {
    cmd: 'secret',
    aliases: [],
    category: 'Fun',
    desc: 'Funny secret confession',
    usage: '.secret',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🤫 *Raaz:* Main nahate waqt gaane gaata hun — aur khud ko singer samajhta hun! 🎤",
        "🤫 *Raaz:* Mujhe ab bhi cartoon dekhna pasand hai! 📺",
        "🤫 *Raaz:* Main fridge khol kar bas dekhta hun, bhook nahi hoti! 🧊",
        "🤫 *Raaz:* Mujhe andhere mein mobile ki roshni mein bhoot wali feeling aati hai! 👻",
        "🤫 *Raaz:* Main apne khilonon se ab bhi baat karta hun! 🧸",
        "🤫 *Raaz:* Mujhe maths se dar lagta hai, lekin kisi ko batata nahi! 🔢😅",
        "🤫 *Raaz:* Main sote waqt takiye se baatein karta hun! 🛏️",
        "🤫 *Raaz:* Mujhe ammi ke haath ki daal sab se zyada pasand hai! 🍛❤️"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'compliment2',
    aliases: [],
    category: 'Fun',
    desc: 'Send a sweet compliment',
    usage: '.compliment <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Tum';
      const items = [
        `🌟 *${name}*, tumhari muskurahat se din roshan ho jata hai!`,
        `💎 *${name}*, tum heere jaise ho — qeemti aur chamakdar!`,
        `🌹 *${name}*, tumhara dil phoolon se bhi naram hai!`,
        `🦁 *${name}*, tum mein sher jaisa hausla hai!`,
        `📚 *${name}*, tum se baat kar ke hamesha kuch naya seekhne ko milta hai!`,
        `☀️ *${name}*, tum jahan jate ho wahan khushiyaan bikhair dete ho!`,
        `🎨 *${name}*, tumhari soch kitni khoobsurat hai!`,
        `🤝 *${name}*, tum jaise dost qismat se milte hain!`,
        `🌙 *${name}*, tum chaand ki tarah roshan ho!`,
        `🔥 *${name}*, tumhari mehnat ek din rang layegi — yaqeen rakho!`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'pickup',
    aliases: [],
    category: 'Fun',
    desc: 'Light friendly pickup lines',
    usage: '.pickup',
    owner: false,
    run: async (ctx) => {
      const items = [
        "😄 Kya tum WiFi ho? Kyunke tum se connect hue baghair raha nahi jata! 📶",
        "🌟 Tum sitara ho ya bijli? Dono hi chamakte ho!",
        "🗺️ Kya tumhare paas map hai? Main tumhari muskurahat mein kho gaya hun!",
        "☕ Tum chai ho ya coffee? Dono hi subah ki zaroorat ho!",
        "📚 Tum kitaab ho to main tumhara sab se wafadaar reader!",
        "🎵 Tum gaana ho to main tumhara fan — repeat par sununga!",
        "🌹 Phool to bahut dekhe, tum jaisa gulab nahi dekha!",
        "💡 Tum bijli ke bulb ho — jahan jao roshni kar do!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'roast2',
    aliases: [],
    category: 'Fun',
    desc: 'Light friendly roast (just for fun)',
    usage: '.roast <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Tum';
      const items = [
        `😜 *${name}*, tum itne shareef ho ke shaitaan bhi tum se mashwara karta hai!`,
        `😄 *${name}*, tumhari neend itni gehri hai ke alarm bhi haar maan leta hai!`,
        `🤣 *${name}*, tum phone itna chalate ho ke charger tumhara best friend hai!`,
        `😜 *${name}*, tumhare jokes sun kar hansna to door, rona aa jata hai!`,
        `😄 *${name}*, tum itne sust ho ke kaachua bhi tum se race jeet jaye!`,
        `🤣 *${name}*, tumhari selfie dekh kar camera ne resign de diya!`,
        `😜 *${name}*, tum bhoolte itna ho ke yaad-dasht tum se naraz hai!`,
        `😄 *${name}*, tumhare khaane ki tareef mein bas itna kahunga — bhook mit jati hai!`
      ];
      await ctx.reply(`${items[Math.floor(Math.random() * items.length)]}\n\n_Mazaak tha, dil par mat lena! 😄_`);
    }
  },
  {
    cmd: 'comeback',
    aliases: [],
    category: 'Fun',
    desc: 'Funny comebacks collection',
    usage: '.comeback',
    owner: false,
    run: async (ctx) => {
      const items = [
        "😎 'Tum se na ho payega!' — 'Tum dekhte jao, main kar ke dikhaunga!'",
        "😜 'Tum pagal ho!' — 'Haan, tumhare pyaar mein!'",
        "🤣 'Tumhe kuch nahi aata!' — 'Tumhein sikhana aata hai? Sikhao phir!'",
        "😄 'Chup karo!' — 'Awaaz to khuda ki nemat hai!'",
        "😎 'Tum haar gaye!' — 'Haar ke jeetne wale ko baazigar kehte hain!'",
        "🤭 'Tum motay ho!' — 'Dil bara hai mera!'",
        "😜 'Tum slow ho!' — 'Slow and steady wins the race! 🐢'",
        "😄 'Tum boring ho!' — 'Tumhein entertain karna mera kaam nahi!' 😎"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'meme',
    aliases: [],
    category: 'Fun',
    desc: 'Random meme caption',
    usage: '.meme',
    owner: false,
    run: async (ctx) => {
      const items = [
        "😂 *Meme:* 'POV: Tum ne kaha dieting shuru, aur ammi ne biryani bana di.' 🍛",
        "😂 *Meme:* 'Exam kal hai, syllabus aaj khola — main hoon legend.' 📚",
        "😂 *Meme:* 'Jab dost kehta hai bas 5 minute mein aaya — 2 ghante ho gaye.' ⏰",
        "😂 *Meme:* 'Salary aayi, khushiyaan aayi, 3 din mein sab gaya.' 💸",
        "😂 *Meme:* 'Ammi: Beta so jao. Main: 5 minute aur. (3 baj gaye)' 🌙",
        "😂 *Meme:* 'Jab teacher kehti hai ye aasan sawal hai — aur tumhein kuch nahi aata.' 😅",
        "😂 *Meme:* 'WiFi slow + important kaam = meri zindagi.' 📶😭",
        "😂 *Meme:* 'Dost: Bhai party de! Main: Pehle udhaar wapas kar!' 🤣"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'dadjoke2',
    aliases: [],
    category: 'Fun',
    desc: 'Classic dad jokes',
    usage: '.dadjoke',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👨 'Beta, main jab tumhari umar ka tha...' — bas yehi sun kar bare hue hum! 😄",
        "👨 Abbu: 'Bijli ka bill itna zyada kyun?' Main: 'Abbu, AC aap hi chalate hain!' ❄️",
        "👨 'Paise ped par nahi ugte!' — lekin abbu, ATM se to nikalte hain! 🏧😄",
        "👨 Abbu ke 3 usool: Jaldi so, jaldi uth, aur mobile kam chala! 📵",
        "👨 'Tumhare zamane mein to hum...' — abbu ki har kahani yahin se shuru hoti hai! 😂",
        "👨 Abbu: 'Result kya aaya?' Main: 'Abbu, aap ko heart attack na ho is liye nahi bata raha!' ❤️😅",
        "👨 'Bahar ka khana mat khao!' — kehne wale abbu khud dhabay par! 🍛😄",
        "👨 Abbu ka pyaar: Daant mein chhupa hota hai! 😄❤️"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'knock',
    aliases: [],
    category: 'Fun',
    desc: 'Knock knock joke',
    usage: '.knock',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🚪 *Knock knock!*\n— Kaun hai?\n— *Amir.*\n— Amir kaun?\n— *Amir hone ke khwab dekhna chhor do, kaam karo!* 😂",
        "🚪 *Knock knock!*\n— Kaun hai?\n— *Chai.*\n— Chai kaun?\n— *Chai pi lo, thandi ho rahi hai!* ☕😄",
        "🚪 *Knock knock!*\n— Kaun hai?\n— *Bijli.*\n— Bijli kaun?\n— *Bijli chali gayi, candle jalao!* 🕯️😂",
        "🚪 *Knock knock!*\n— Kaun hai?\n— *Neend.*\n— Neend kaun?\n— *Neend aa rahi hai, baatein kal karenge!* 😴",
        "🚪 *Knock knock!*\n— Kaun hai?\n— *Biryani.*\n— Biryani kaun?\n— *Biryani kha lo, phir dieting kal se!* 🍛😄",
        "🚪 *Knock knock!*\n— Kaun hai?\n— *Tension.*\n— Tension kaun?\n— *Tension mat lo, sab theek ho jayega!* 😊"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'pun',
    aliases: [],
    category: 'Fun',
    desc: 'Random pun',
    usage: '.pun',
    owner: false,
    run: async (ctx) => {
      const items = [
        "😄 Main ne dariya se dosti ki — woh *behta* achha hai! 🌊",
        "📚 Kitaabon se pyaar karo — woh kabhi *dhoka* nahi detin!",
        "🍋 Zindagi ne lemon diye to *shikanjvi* banao!",
        "⏰ Ghari ko dekho aur *waqt* ki qadar karo!",
        "🌙 Chaand se kaho — *roshni* kam, *khubsurti* zyada!",
        "🐟 Machli ne kaha: 'Main *jal* mein hun, tum *dil* mein!'",
        "🔑 Kamyaabi ki *chabi* mehnat hai — *taala* khud khul jayega!",
        "🌹 Phool *khilte* hain, dil *milte* hain!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'oneline',
    aliases: [],
    category: 'Fun',
    desc: 'Funny one-liner',
    usage: '.oneline',
    owner: false,
    run: async (ctx) => {
      const items = [
        "😂 Zindagi mein do hi gham hain — ek mobile ki battery, doosra WiFi ka signal!",
        "😄 Main ameer to nahi, lekin khwab ameerana dekhta hun!",
        "🤣 Dieting kal se — ye jumla main 3 saal se bol raha hun!",
        "😅 Padhai aur main — door door ka rishta!",
        "😂 Neend mujh se itna pyaar karti hai ke subah chhorti hi nahi!",
        "😄 Ammi kehti hain main bigar gaya — main kehta hun update hua hun!",
        "🤣 Paisa haath ka mail hai — mere haath saaf rehte hain!",
        "😅 Khamoshi bhi ek kala hai — jo mujh se nahi hoti!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'kidjoke',
    aliases: [],
    category: 'Fun',
    desc: 'Funny kids jokes',
    usage: '.kidjoke',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🧒 Bacha: 'Ammi, main bara ho kar pilot banunga!' Ammi: 'Pehle homework to kar lo!' ✈️😂",
        "🧒 Teacher: 'Aam khaane ke fayde batao.' Bacha: 'Miss, gutli phenk kar aam kha sakte hain!' 🥭😄",
        "🧒 Bacha: 'Abbu, mujhe cycle chahiye!' Abbu: 'Pehle number lao!' Bacha: 'Number aaye to aap cycle doge?' Abbu: 'Haan!' Bacha: 'Deal! 🤝😂'",
        "🧒 'Mama, main ne aaj school mein 100 mein se 100 liye!' Mama: 'Wah! Kis mein?' Bacha: '40 maths mein, 30 urdu mein, 30 english mein!' 😂",
        "🧒 Bacha rota hua: 'Ammi, bhai ne mara!' Ammi: 'Tum ne kya kiya tha?' Bacha: 'Bas uska chocolate khaya tha!' 🍫😄",
        "🧒 'Dada abu, aap ke daant kahan hain?' Dada: 'Glass mein!' Bacha: 'To aap seb kaise khate hain?' Dada: 'Juice bana kar!' 🧃😂",
        "🧒 Bachi: 'Ammi, main परी banungi!' Ammi: 'Beta, pehle paron wali frock to pehen lo!' 🧚😄",
        "🧒 Ustad: 'Tumhara homework kahan hai?' Bacha: 'Sir, kutta kha gaya!' Ustad: 'Kutta?' Bacha: 'Haan sir, homework itna boring tha!' 🐕😂"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'doctor',
    aliases: [],
    category: 'Fun',
    desc: 'Funny doctor jokes',
    usage: '.doctor',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👨‍⚕️ Mareez: 'Doctor, mujhe sab kuch do do nazar aata hai!' Doctor: 'To fees bhi double lagegi!' 💸😂",
        "👨‍⚕️ 'Doctor sahab, jab main chai peeta hun to dard hota hai.' 'To coffee piyo!' ☕😄",
        "👨‍⚕️ Mareez: 'Kya main 100 saal jee sakta hun?' Doctor: 'Sharaab peete ho?' 'Nahi.' 'Sigret?' 'Nahi.' 'To jee kar kya karoge!' 😂",
        "👨‍⚕️ Doctor: 'Aap ko aaram ki zaroorat hai.' Mareez: 'Kitne din?' Doctor: 'Jitne din bill na aaye!' 🧾😄",
        "👨‍⚕️ 'Doctor, meri yaadasht kamzor hai.' 'Kab se?' 'Kab se kya?' 🤔😂",
        "👨‍⚕️ Mareez: 'Mujhe neend ki goli chahiye.' Doctor: 'Kitni?' Mareez: 'Bas itni ke khwab mein ameer ban jaun!' 💤💰",
        "👨‍⚕️ 'Tumhein kya hua?' 'Doctor sahab, main bhool jata hun.' 'Fees pehle jama kara do, phir ilaaj!' 😂",
        "👨‍⚕️ Doctor: 'Subah ki sair karo.' Mareez: 'Subah to main sota hun.' Doctor: 'To neend mein sair karo!' 🏃😴"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'teacher',
    aliases: [],
    category: 'Fun',
    desc: 'Funny teacher jokes',
    usage: '.teacher',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👩‍🏫 Teacher: 'Jo bacha homework nahi layega, use saza milegi!' Bacha: 'Miss, saza se pehle ek sawal — homework kya hota hai?' 😂",
        "👩‍🏫 'Beta, tumhara result dekh kar dil khush ho gaya!' Bacha: 'Sach miss?' Teacher: 'Haan, itna bura result pehli baar dekha!' 😅",
        "👩‍🏫 Teacher: 'Kal test hai, sab yaad kar ke aana!' Bacha: 'Miss, yaad karne ke liye dimagh bhi to ho!' 🧠😂",
        "👩‍🏫 'Tum class mein sote kyun ho?' Bacha: 'Miss, aap ki awaaz mein lori jaisa sukoon hai!' 😴😄",
        "👩‍🏫 Teacher: 'A for?' Bacha: 'A for Apple!' Teacher: 'B for?' Bacha: 'B for Bada Apple!' 🍎😂",
        "👩‍🏫 'Tumhare abbu ko bulao!' Bacha: 'Miss, abbu ne kaha hai jo bulaaye khud jaye!' 😄",
        "👩‍🏫 Teacher: 'Ye 144 kya hai?' Bacha: 'Miss, mera weight!' ⚖️😂",
        "👩‍🏫 'Khara ho jao!' Bacha khara hua. 'Beth jao!' Beth gaya. 'Tumhein to bas khara-bethna aata hai!' 😄"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'student',
    aliases: [],
    category: 'Fun',
    desc: 'Funny student life jokes',
    usage: '.student',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🎒 Student life: Raat ko 'kal se parhunga', subah 'aaj chutti kar lete hain'! 😂",
        "📚 Exam se pehle: 'Ya Allah, bas pass kara de!' Result ke baad: 'Shukar hai!' 🤲😄",
        "🎒 Dost: 'Tune parha?' Main: 'Haan, syllabus dekha!' 😅",
        "📝 Exam hall mein: Pehla sawal dekha — paseena. Aakhri sawal dekha — aansu! 😭😂",
        "🎒 Teacher: 'Tum pass kaise hue?' Student: 'Miss, naqal nahi, dua kaam aayi!' 🤲😄",
        "📚 Syllabus itna bara ke dekh kar hi neend aa jaye! 😴",
        "🎒 'Beta, bare ho kar kya banoge?' 'Bara!' 😎",
        "📝 Naqal karne wale ko kehte hain 'helpful', pakre jane wale ko 'bad luck'! 😂"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'husband',
    aliases: [],
    category: 'Fun',
    desc: 'Light husband jokes',
    usage: '.husband',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👨 Shohar: 'Biwi se behas mein jeetna namumkin hai!' Dost: 'Kyun?' Shohar: 'Woh kabhi bhoolti nahi!' 😅",
        "👨 Biwi: 'Tum mujhe samajhte nahi!' Shohar: 'Samajhne ki koshish mein 10 saal ho gaye!' 😂",
        "👨 Shohar bazaar se: 'Kya laun?' Biwi: 'Kuch nahi!' Shohar kuch na laya. Biwi: 'Kuch nahi mein ye bhi tha?!' 🛒😄",
        "👨 'Shaadi ke baad sukoon milta hai!' — ye jumla kunwara kehta hai! 😂",
        "👨 Shohar: 'Aaj khana tum banao ya main?' Biwi: 'Tum!' Shohar: 'Theek, bahar se mangwate hain!' 🍕😄",
        "👨 Biwi ka gussa: Bijli se tez, Shohar ka jawab: Hamesha der se! ⚡😂",
        "👨 'Biwi hamesha sahi hoti hai!' — ye shaadi ka pehla usool hai! 📜😄",
        "👨 Shohar: 'Main ghar ka sher hun!' Biwi: 'Aur main sherkhani!' 🦁😂"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'biwi',
    aliases: [],
    category: 'Fun',
    desc: 'Light wife jokes',
    usage: '.biwi',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👩 Biwi: 'Suniye, main moti lag rahi hun?' Shohar (soch kar): 'Nahi to!' Biwi: 'Socha kyun?!' 😂",
        "👩 Biwi ki 3 taaqaten: Yaadasht, jazbaat, aur shopping! 🛍️😄",
        "👩 'Tum ne meri baat suni?' 'Haan!' 'Kya kaha maine?' '...wohi jo tum hamesha kehti ho!' 😅",
        "👩 Biwi: 'Mujhe gift chahiye!' Shohar: 'Kya?' Biwi: 'Surprise!' Shohar: 'To bata kyun rahi ho!' 🎁😂",
        "👩 Biwi ka pyaar: Daant mein chhupa, khana mein khula! 🍛❤️",
        "👩 'Main naraz hun!' — is jumlay ke baad shohar ki neend ur jati hai! 😴😂",
        "👩 Biwi: 'Tum badal gaye ho!' Shohar: 'Tum ne hi kaha tha sudhar jao!' 😄",
        "👩 Shohar ki salary biwi ke haath — is se bara bharosa kya hoga! 💰❤️"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'office',
    aliases: [],
    category: 'Fun',
    desc: 'Funny office jokes',
    usage: '.office',
    owner: false,
    run: async (ctx) => {
      const items = [
        "💼 Boss: 'Kaam kab khatm hoga?' Main: 'Sir, 5 bajte hi!' (kaam ho ya na ho) 😂",
        "💼 Office mein sab se zyada kaam: Chai banane wala karta hai! ☕😄",
        "💼 'Meeting 10 minute ki hai!' — 2 ghante baad bhi jaari! 🕐😅",
        "💼 Salary aane ki khushi: 1 din. Khatm hone ka gham: 29 din! 💸😂",
        "💼 Boss khush = promotion. Boss naraz = tension. Boss chup = khatra! 😨😄",
        "💼 Friday ki shaam: Duniya ki sab se khoobsurat shaam! 🎉",
        "💼 Monday ko office jana: Sab se bara dare! 😅",
        "💼 Colleague: 'Kaam ho gaya?' Main: 'Haan, soch raha tha!' 🤔😂"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'desi',
    aliases: [],
    category: 'Fun',
    desc: 'Funny desi jokes',
    usage: '.desi',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🇵🇰 Desi mom: 'Beta, khana kha lo!' Beta: 'Bhook nahi!' Mom: 'Bimar ho kya?!' 😂",
        "🇵🇰 Rishtedaar: 'Beta, bare ho kar kya banoge?' Har dafa yehi sawal! 😄",
        "🇵🇰 Bijli jaye to sab chhat par — desi WiFi (hawa) free! 🌀😂",
        "🇵🇰 Shaadi mein khana: Biryani na ho to shaadi adhuri! 🍛😄",
        "🇵🇰 Desi totka: Har bimari ka ilaaj — adrak wali chai! ☕😂",
        "🇵🇰 'Mehmaan aa rahe hain!' — 10 minute mein ghar chamka do! ✨😅",
        "🇵🇰 Barish ho to pakoray lazmi! 🌧️🍘",
        "🇵🇰 Desi dad: 'Hamare zamane mein...' — kahani shuru! 👴😄"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'emojital',
    aliases: [],
    category: 'Fun',
    desc: 'Mini story told in emojis',
    usage: '.emojital',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📖 *Emoji Kahani:*\n🌅😊🚶‍♂️🏞️🦋🌸☕📚🌙😴\n_Subah khushi se utha, sair ki, phool dekhe, chai pi, kitaab parhi, raat ko so gaya!_",
        "📖 *Emoji Kahani:*\n👦❤️👧💐🌧️☂️🍿🎬💍🎉\n_Larka larki mile, barish mein bheegay, film dekhi, shaadi ho gayi!_",
        "📖 *Emoji Kahani:*\n🧑‍🌾🌱☀️🌧️🌾🚜🏠🍛😊\n_Kisaan ne beej boya, fasal hui, ghar aaya, khana khaya, khush!_",
        "📖 *Emoji Kahani:*\n🐱🐟🍽️😋💤🌙\n_Billi ne machli khai, khush hui, so gayi!_",
        "📖 *Emoji Kahani:*\n⚽🏃‍♂️🥅🎉🏆📸\n_Football khela, goal kiya, trophy jeeti!_",
        "📖 *Emoji Kahani:*\n✈️🗺️🏖️🌊🍹📷🏠💭\n_Safar kiya, samandar dekha, tasveeren banayen, yaadein laye!_"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'story',
    aliases: [],
    category: 'Fun',
    desc: 'Short micro story',
    usage: '.story',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📖 *Kahani:* Ek chidiya roz dana chugti thi. Ek din usne dekha ke khet mein jaal bicha hai. Usne sab ko khabardaar kiya. Sab bach gaye! *Sabaq: Hoshiyar dost qeemti hai.* 🐦",
        "📖 *Kahani:* Ek bacha roz ammi se kehta: 'Bari ho kar main duniya badlunga!' Ammi hansti. 20 saal baad woh teacher bana — aur waqai duniya badal di! *Sabaq: Chhote khwab bade kaam karte hain.* 🌟",
        "📖 *Kahani:* Do dost jungle mein thay, bhalu aaya. Ek darakht par charh gaya, doosra murda ban gaya. Bhalu chala gaya. Pehla bola: 'Usne kya kaha?' Doosra: 'Ke museebat mein saath chhorne wala dost nahi!' *Sabaq: Asli dost wahi.* 🐻",
        "📖 *Kahani:* Ek buddha roz samandar se taare utha kar paani mein phenkta. Kisi ne poocha: 'Fayda?' Budha: 'Is ek ke liye to fark para!' *Sabaq: Chhoti neki bhi neki hai.* ⭐",
        "📖 *Kahani:* Kaanch ki gari wala roz cheekhta: 'Bartan le lo!' Ek din bacha bola: 'Tum cheekhte kyun ho?' Woh bola: 'Taake log sunen!' Bacha: 'To dil se bolo, dil sunega!' *Sabaq: Naram lehja asar karta hai.* 🫖",
        "📖 *Kahani:* Ek mor apne paron par naaz karta tha. Barish mein bheeg kar woh sharma gaya. Kauwa bola: 'Khubsurti se zyada kaam aati hai aqal!' *Sabaq: Gharoor ka sir neecha.* 🦚"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'moral',
    aliases: [],
    category: 'Fun',
    desc: 'Short moral story',
    usage: '.moral',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📜 *Sabaq:* Kachua aur khargosh ki dor — *aahista aur mustaqil mizaaj jeet ta hai.* 🐢",
        "📜 *Sabaq:* Lalchi kutta haddi ke liye paani mein kooda — *lalach ka anjaam nuqsaan.* 🐕",
        "📜 *Sabaq:* Pyasa kauwa kankariyan daal kar paani upar laya — *aqal se har mushkil aasaan.* 🐦‍⬛",
        "📜 *Sabaq:* Ekta mein barkat — *tinkon ka gada toot-ta nahi.* 🤝",
        "📜 *Sabaq:* Jhoota charwaha — *jhoot ki aadat aitbaar khatm kar deti hai.* 🐑",
        "📜 *Sabaq:* Mehnati cheenti — *aaj ki mehnat kal ka sukoon.* 🐜"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'kahani',
    aliases: [],
    category: 'Fun',
    desc: 'Urdu mini kahani',
    usage: '.kahani',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📖 Ek gaon mein ek lakad-hara rehta tha. Roz jungle se lakriyan kaat kar bechta. Ek din kulhadi nadi mein gir gayi. Woh rone laga. Nadi se pari nikli, sone ki kulhadi di. Usne kaha: 'Ye meri nahi!' Pari khush hui, teeno kulhadiyan de din! *Sabaq: Imaandaari ka phal meetha.* 🪓",
        "📖 Sheher mein ek mochi tha, gareeb lekin khush. Roz gaata hua kaam karta. Ameer parosi ne dhan diya, mochi ki neend ur gayi! Usne dhan wapas kiya: 'Meri khushi wapas do!' *Sabaq: Sukoon dolat se nahi milta.* 👞",
        "📖 Ek taalib-e-ilm ustad se bola: 'Ilm kya hai?' Ustad ne diya jalaya: 'Roshni phelao!' *Sabaq: Ilm baantne se badhta hai.* 🕯️",
        "📖 Do bhai thay, ek ameer ek gareeb. Ameer ne madad se inkaar kiya. Waqt badla, gareeb ameer bana. Usne bhai ko galay lagaya: 'Waqt sab ka aata hai!' *Sabaq: Gharoor ka anjaam bura.* 🤝",
        "📖 Chidiya ne ghosla banaya, toofan aaya, ghosla toot gaya. Usne phir banaya! *Sabaq: Himmat na haaro.* 🐦",
        "📖 Kisaan ke 4 betay larte thay. Usne lathiyan tor kar dikhayen: ek ek toot gayi, gada na toota! *Sabaq: Ittefaq mein taaqat.* 🌾"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'kahawat',
    aliases: [],
    category: 'Fun',
    desc: 'Urdu kahawat with meaning',
    usage: '.kahawat',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📜 *'Jaisi karni waisi bharni.'*\n_Matlab: Jaise aamaal, waisa sila._",
        "📜 *'Naach na jaane aangan terha.'*\n_Matlab: Apni nakami ka ilzaam doosron par._",
        "📜 *'Oont ke munh mein zeera.'*\n_Matlab: Zaroorat ke muqable mein bahut kam._",
        "📜 *'Jitni chaadar dekho utne paer phelao.'*\n_Matlab: Haisiyat ke mutabiq kharch karo._",
        "📜 *'Doobte ko tinkay ka sahara.'*\n_Matlab: Museebat mein chhoti umeed bhi bari._",
        "📜 *'Neki kar dariya mein daal.'*\n_Matlab: Neki ka sila Allah dega, shukriya na maango._",
        "📜 *'Khuda ki laathi be-aawaaz.'*\n_Matlab: Zulm ka badla zaroor milta hai._",
        "📜 *'Aadha teetar aadha batair.'*\n_Matlab: Na idhar ka na udhar ka._"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'muhawara',
    aliases: [],
    category: 'Fun',
    desc: 'Urdu muhawara with meaning',
    usage: '.muhawara',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📜 *'Aankhon ka taara'* — Bahut pyaara hona. ⭐",
        "📜 *'Bagh bagh hona'* — Bahut khush hona. 😊",
        "📜 *'Dum dabaa kar bhaagna'* — Dar kar bhaag jana. 🏃",
        "📜 *'Nak mein dam karna'* — Bahut tang karna. 😤",
        "📜 *'Chaar chaand lagana'* — Khoobsurti ya izzat barhana. 🌙",
        "📜 *'Aag babula hona'* — Sakht ghusse mein aana. 🔥",
        "📜 *'Eid ka chaand hona'* — Bahut dinon baad nazar aana. 🌙",
        "📜 *'Paani paani hona'* — Sharm se doob jana. 💧"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'proverb',
    aliases: [],
    category: 'Fun',
    desc: 'English proverb',
    usage: '.proverb',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📜 *'Actions speak louder than words.'*",
        "📜 *'A friend in need is a friend indeed.'*",
        "📜 *'Honesty is the best policy.'*",
        "📜 *'Where there is a will, there is a way.'*",
        "📜 *'Slow and steady wins the race.'* 🐢",
        "📜 *'Unity is strength.'* 🤝",
        "📜 *'Time is money.'* ⏰",
        "📜 *'Practice makes perfect.'* 💪"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'idiom',
    aliases: [],
    category: 'Fun',
    desc: 'English idiom with meaning',
    usage: '.idiom',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📜 *'Break the ice'* — Start a conversation. 🧊",
        "📜 *'Hit the nail on the head'* — Say exactly the right thing. 🔨",
        "📜 *'Piece of cake'* — Very easy. 🍰",
        "📜 *'Spill the beans'* — Reveal a secret. 🫘",
        "📜 *'Under the weather'* — Feeling sick. 🤒",
        "📜 *'Cost an arm and a leg'* — Very expensive. 💸",
        "📜 *'Bite the bullet'* — Face difficulty bravely. 😬",
        "📜 *'Let the cat out of the bag'* — Reveal secret accidentally. 🐱"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'twister',
    aliases: [],
    category: 'Fun',
    desc: 'English tongue twister',
    usage: '.twister',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👅 *'She sells seashells by the seashore.'* — 3 baar tez bolo!",
        "👅 *'Peter Piper picked a peck of pickled peppers.'*",
        "👅 *'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'*",
        "👅 *'Betty Botter bought some butter, but she said the butter is bitter!'*",
        "👅 *'Six slippery snails slid slowly seaward.'*",
        "👅 *'Red lorry, yellow lorry, red lorry, yellow lorry!'*",
        "👅 *'Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair!'*",
        "👅 *'I scream, you scream, we all scream for ice cream!'* 🍦"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'uljhan',
    aliases: [],
    category: 'Fun',
    desc: 'Urdu tongue twister',
    usage: '.uljhan',
    owner: false,
    run: async (ctx) => {
      const items = [
        "👅 *'Kachcha papad, pakka papad!'* — 5 baar tez bolo!",
        "👅 *'Chandu ke chacha ne Chandu ki chachi ko chandni raat mein chandi ki chamach se chutney chatai!'*",
        "👅 *'Pake ped par paka papita, paka ped ya paka papita?'*",
        "👅 *'Somvar ko hum ghar jayenge, mangal ko bazaar jayenge!'*",
        "👅 *'Kharak singh ke kharakne se khadakti hain khidkiyan!'*",
        "👅 *'Laal rumaal, peela rumaal!'*",
        "👅 *'Oont uncha, oont ki peeth unchi!'* 🐪",
        "👅 *'Didi ne dahi jamaya, dahi mein makkhan aaya!'*"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'allit',
    aliases: [],
    category: 'Fun',
    desc: 'Fun alliteration lines',
    usage: '.allit',
    owner: false,
    run: async (ctx) => {
      const items = [
        "✨ *Silly Sally sang sweet songs Sunday!*",
        "✨ *Big brown bears bounce by brooks!*",
        "✨ *Chandni chachi ne chamkeela chura churaya!*",
        "✨ *Dildaar dost dildaarana dastaan sunate hain!*",
        "✨ *Tiny tigers tickle timid turtles!* 🐯",
        "✨ *Meethi Meena ne meetha aam khaya!* 🥭"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'rhyme2',
    aliases: [],
    category: 'Fun',
    desc: 'Fun rhyming couplet',
    usage: '.rhyme',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🌙 *Chaand nikla, taare jage,\nNeend aayi, khwab bhaage!*",
        "☕ *Chai pi, dil khush hua,\nGham gaya, sukh mil gaya!*",
        "🌧️ *Barish aayi, chham chham chham,\nBheeg gaye hum, khush hue hum!*",
        "📱 *Phone uthaya, message aaya,\nDost ka tha, dil khush hua!*",
        "🐦 *Chidiya boli cheen cheen,\nDana chuga, ur gayi seen!*",
        "🎂 *Cake kata, khushiyaan baanti,\nDoston ne mil kar taali bajayi!*",
        "🌸 *Phool khile, bahaar aayi,\nTitli urri, khushbu chhaayi!*",
        "⭐ *Taara toota, dua mangi,\nQismat jaagi, khushi chhaayi!*"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'rap',
    aliases: [],
    category: 'Fun',
    desc: 'Funny rap lines',
    usage: '.rap',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🎤 *Yo yo! Main hun desi rapper,\nKhaata hun samosa, peeta hun tapper (chai)!* ☕",
        "🎤 *Gali gali mein shor hoga,\nSalara bot ka daur hoga!* 🔥",
        "🎤 *Subah utha, brush kiya,\nNashta kiya, mauj kiya!* 😎",
        "🎤 *Padhai chhori, khel pakda,\nDost bola — tu to star nikla!* ⭐",
        "🎤 *Biryani khaayi, raita piya,\nPet bhar gaya, dil khush hua!* 🍛",
        "🎤 *Mobile haath mein, duniya saath mein,\nBot mere paas, khushi har baat mein!* 📱"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'geet',
    aliases: [],
    category: 'Fun',
    desc: 'Funny song parody lines',
    usage: '.geet',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🎵 *'Chaiyya chaiyya' se 'Chai ya coffee'...*\nSubah ki chai na mile to din adhura! ☕",
        "🎵 *'Tujhe dekha to ye jaana sanam' se 'Roti dekhi to ye jaana sanam'...*\nBhook mein sab pyaar bhool jata hai! 🍛😄",
        "🎵 *'Mere khwabon mein jo aaye' se 'Mere khwabon mein biryani aaye'...* 🍛💭",
        "🎵 *'Tum hi ho' se 'Neend hi ho'...*\nNeend hi sab kuch hai! 😴",
        "🎵 *'Gerua' se 'Kharbuza'...*\nGarmi mein kharbuza hi gerua hai! 🍈😄",
        "🎵 *'Lungi dance' se 'Biryani dance'...*\nThumke biryani par bante hain! 💃🍛"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'fdialog',
    aliases: [],
    category: 'Fun',
    desc: 'Famous filmy dialogues',
    usage: '.fdialog',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🎬 *'Mogambo khush hua!'* 😈",
        "🎬 *'Rishte mein to hum tumhare baap lagte hain!'* 😎",
        "🎬 *'Kitne aadmi thay?'* 🔫",
        "🎬 *'Don ko pakarna mushkil hi nahi, namumkin hai!'* 🕶️",
        "🎬 *'Pushpa... Pushpa Raj! Jhukega nahi!'* 💪",
        "🎬 *'All is well!'* 😊",
        "🎬 *'Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain!'* 💕",
        "🎬 *'Picture abhi baaki hai mere dost!'* 🎥"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'birthday',
    aliases: [],
    category: 'Fun',
    desc: 'Birthday wish generator',
    usage: '.birthday <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Dost';
      const items = [
        `🎂 *Happy Birthday ${name}!* 🎉\nAllah tumhein lambi umar, sehat aur kamyaabi de! Aaj ka din sirf tumhara! 🥳`,
        `🎈 *Janam Din Mubarak ${name}!* 🎁\nCake kato, khushiyaan baanto — aur hamein bhi khilao! 😄`,
        `🌟 *Happy Birthday ${name}!*\nTum jaisa dost milna qismat hai. Hamesha khush raho! ❤️`,
        `🎊 *${name}, Birthday Mubarak!*\nNaya saal, nayi khushiyaan, naye khwab! 🥂`,
        `💫 *Happy Birthday ${name}!*\nDua hai ke har saal ye din tumhare liye khushiyaan laye! 🤲`,
        `🎁 *Janam Din ki Dheron Mubarak ${name}!*\nParty kab de rahe ho? 😜🎉`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'gm',
    aliases: ['goodmorning'],
    category: 'Fun',
    desc: 'Good morning wishes',
    usage: '.gm',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🌅 *Good Morning!* Naya din, nayi ummeedein, nayi kamyaabi! Utho aur chamko! ✨",
        "☀️ *Subah Bakhair!* Chai piyo, muskuraho, aur din ko apna banao! ☕😊",
        "🌄 *Good Morning!* Aaj ka din tumhare naam — kuch bada karo! 💪",
        "🐦 *Subah Bakhair!* Chidiyon ki tarah khush raho, phoolon ki tarah khilo! 🌸",
        "🌞 *Good Morning!* Kal ki fikar chhoro, aaj ki khushi apnao!",
        "✨ *Subah Bakhair!* Dua hai aaj ka din khushiyon bhara ho! 🤲"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'gn',
    aliases: ['goodnight'],
    category: 'Fun',
    desc: 'Good night wishes',
    usage: '.gn',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🌙 *Good Night!* Meethay khwab dekho, sukoon se so jao! 😴💤",
        "✨ *Shab Bakhair!* Taare tumhari hifazat karen! 🌟",
        "😴 *Good Night!* Kal phir milenge naye josh ke saath!",
        "🌌 *Shab Bakhair!* Chaandni tumhare khwabon ko roshan kare! 🌙",
        "💤 *Good Night!* Mobile rakh do, aankhen band karo! 📵😄",
        "🤲 *Shab Bakhair!* Allah tumhein apni hifz-o-amaan mein rakhe!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'eid',
    aliases: [],
    category: 'Fun',
    desc: 'Eid wishes',
    usage: '.eid',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🌙 *Eid Mubarak!* Allah aap ki ibadatein qabool farmaye aur khushiyaan de! 🤲✨",
        "🐐 *Eid-ul-Adha Mubarak!* Qurbani qabool ho, khushiyaan naseeb hon! 🥩🎉",
        "🍬 *Meethi Eid Mubarak!* Sheer khurma khao, eidi baanto! 😄",
        "🤝 *Eid Mubarak!* Gale milo, gile shikwe bhool jao! ❤️",
        "🌟 *Chand Raat Mubarak!* Kal Eid hai — taiyaariyan poori? 🎊",
        "💰 *Eid Mubarak!* Eidi dena mat bhoolna! 😜"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'shaadi',
    aliases: [],
    category: 'Fun',
    desc: 'Funny wedding wishes',
    usage: '.shaadi <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Dulha/Dulhan';
      const items = [
        `💒 *Shaadi Mubarak ${name}!* 🎉\nNayi zindagi ki shuruaat — khush raho, abaad raho! Ab biryani khilao! 🍛😄`,
        `💍 *Mubarak ho ${name}!*\nDua hai jori salamat rahe, ghar khushiyon se bhar jaye! 🤲❤️`,
        `🎊 *Shaadi ki Dheron Mubarak ${name}!*\nAb zimmedariyan bhi, khushiyaan bhi! 😄`,
        `👰 *${name} ko Shaadi Mubarak!*\nAllah jori ko hamesha khush rakhe! 🌟`,
        `💐 *Mubarak ${name}!*\nValima mein hum sab ko zaroor bulana! 🍽️😜`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'exam',
    aliases: [],
    category: 'Fun',
    desc: 'Exam wishes and motivation',
    usage: '.exam',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📚 *Best of luck for exams!* Mehnat karo, kamyaabi tumhara muqaddar! 💪",
        "✍️ *Exam Mubarak (advance mein)!* Paper aasaan, number zyada! 😄",
        "🎯 *All the best!* Yaad rakho: mehnat ka phal meetha hota hai! 🍬",
        "📖 *Dua hai:* Paper mein wahi aaye jo tum ne parha ho! 🤲😄",
        "💡 *Tip:* Pehle aasaan sawal karo, waqt bachega! ⏰",
        "🌟 *Good luck!* Tum kar sakte ho — yaqeen rakho!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'sorry',
    aliases: [],
    category: 'Fun',
    desc: 'Creative apology messages',
    usage: '.sorry <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Dost';
      const items = [
        `🙏 *${name}, sorry!* Ghalti ho gayi, maaf kar do. Dil se sharminda hun! 😔`,
        `💐 *${name}*, phoolon ki tarah mera sorry qabool karo! Maaf kar do! 🌹`,
        `😅 *${name}, I'm sorry!* Insan hun, ghalti ho jati hai. Ek mauqa aur?`,
        `🤲 *${name}*, Allah ke waste maaf kar do! Wada, phir nahi hoga!`,
        `🍫 *${name}*, sorry ke saath chocolate bhi hazir hai! Maaf? 😄`,
        `❤️ *${name}*, tumhari narazgi se zyada meri ghalti bari nahi. Maaf kar do!`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'thanksmsg',
    aliases: [],
    category: 'Fun',
    desc: 'Thank you messages',
    usage: '.thanksmsg',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🙏 *Shukriya!* Tumhari madad hamesha yaad rahegi! ❤️",
        "💐 *Thank you so much!* Tum jaise log duniya ko khoobsurat banate hain! 🌟",
        "🤲 *Dil se shukriya!* Allah tumhein iska ajar de!",
        "😊 *Thanks a lot!* Tum ne mera din bana diya!",
        "🌹 *Bohat shukriya!* Ye ehsaan kabhi nahi bhoolunga!",
        "✨ *Thank you!* Tumhari wajah se sab aasaan ho gaya!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'missu',
    aliases: [],
    category: 'Fun',
    desc: 'Miss you messages',
    usage: '.missu <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Tumhein';
      const items = [
        `💭 *${name}, miss you!* Tumhari yaad bahut aati hai! 😔`,
        `🌙 *${name}*, chaand dekh kar tumhari yaad aayi! Miss you! ✨`,
        `📞 *${name}*, kab miloge? Bahut miss kar raha hun! 🤗`,
        `💔 *${name} ke baghair din adhura lagta hai!* Miss you!`,
        `🍂 *${name}*, dooriyan sirf faasla hain, dil to paas hai! Miss you! ❤️`,
        `😊 *${name}*, tumhari hansi ki kami mehsoos hoti hai! Miss you!`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'bff',
    aliases: [],
    category: 'Fun',
    desc: 'Best friend messages',
    usage: '.bff <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Dost';
      const items = [
        `🤝 *${name}*, tum mere BFF ho — Best Friend Forever! 🌟`,
        `❤️ *${name}*, dost to bahut hain, lekin tum jaisa koi nahi!`,
        `😄 *${name}*, tumhare saath har pal yaadgaar hai!`,
        `🎉 *${name}*, dosti ka ye rishta hamesha qaim rahe! 🤲`,
        `🌙 *${name}*, raat ke 2 baje bhi jo saath de — wahi sachha dost! 😄`,
        `💪 *${name}*, mushkil waqt mein tum ne saath diya — shukriya BFF!`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'nickname2',
    aliases: [],
    category: 'Fun',
    desc: 'Generate a funny nickname',
    usage: '.nickname <naam>',
    owner: false,
    run: async (ctx) => {
      const name = ctx.text || 'Dost';
      const first = ['Chintu', 'Paglu', 'Hero', 'Bablu', 'Chulbul', 'Dabangg', 'Natkhat', 'Shararti', 'Bhola', 'Tez'];
      const last = ['Khan', 'Bhai', 'Sahab', 'Don', 'Star', 'Champion', 'Rocky', 'Tiger', 'Boss', 'Nawab'];
      const nick = `${first[Math.floor(Math.random() * first.length)]} ${last[Math.floor(Math.random() * last.length)]}`;
      await ctx.reply(`😄 *Nickname Generator*\n\n${name} ka naya naam: *${nick}* 🎉`);
    }
  },
  {
    cmd: 'superpower',
    aliases: [],
    category: 'Fun',
    desc: 'Get a random superpower',
    usage: '.superpower',
    owner: false,
    run: async (ctx) => {
      const items = [
        "⚡ *Bijli ki raftaar!* Tum ab sab se tez ho!",
        "🧠 *Dimagh parhna!* Ab koi raaz chhupa nahi!",
        "🕊️ *Urna!* Aasmaan tumhara hai!",
        "💪 *Super taaqat!* Pahar utha lo!",
        "👻 *Ghaib hona!* Koi tumhein dekh nahi sakta!",
        "🔥 *Aag par qaboo!* Sardiyon mein kaam aayega! 😄",
        "💧 *Paani par chalna!* Dariya paar aasaan!",
        "⏰ *Waqt rokna!* Exam mein sab se kaam ki power! 😂"
      ];
      await ctx.reply(`🦸 *Tumhari superpower:*\n\n${items[Math.floor(Math.random() * items.length)]}`);
    }
  },
  {
    cmd: 'future',
    aliases: [],
    category: 'Fun',
    desc: 'Funny future prediction',
    usage: '.future',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🔮 *Mustaqbil:* Tum ek din bahut bare aadmi banoge — bas mehnat jaari rakho! 🌟",
        "🔮 *Mustaqbil:* Agle mahine koi achi khabar milegi! 📢",
        "🔮 *Mustaqbil:* Tumhari shaadi mein biryani bahut mashhoor hogi! 🍛😄",
        "🔮 *Mustaqbil:* Tum ek din apna business kholo ge — naam hoga 'Kamyabi'! 💼",
        "🔮 *Mustaqbil:* Safar likha hai — naye sheher, naye dost! ✈️",
        "🔮 *Mustaqbil:* Tumhari mehnat rang layegi — bas haar na maano! 💪",
        "🔮 *Mustaqbil:* Koi purana dost wapas aayega! 🤝",
        "🔮 *Mustaqbil:* Sehat ka khayal rakho — baaqi sab theek! 🏃"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'past',
    aliases: [],
    category: 'Fun',
    desc: 'Funny past life prediction',
    usage: '.past',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🕰️ *Pichla janam:* Tum ek shehenshah thay — is liye aaj bhi andaaz nawabi hai! 👑😄",
        "🕰️ *Pichla janam:* Tum ek mashhoor bawarchi thay — is liye khane ke shaukeen ho! 🍛",
        "🕰️ *Pichla janam:* Tum ek parinda thay — is liye azaadi pasand ho! 🕊️",
        "🕰️ *Pichla janam:* Tum ek ustad thay — is liye sab ko samjhate ho! 📚😄",
        "🕰️ *Pichla janam:* Tum ek sayyah thay — ghoomna tumhare khoon mein hai! 🗺️",
        "🕰️ *Pichla janam:* Tum ek shayar thay — is liye baatein dil ko chhuti hain! 🌹",
        "🕰️ *Pichla janam:* Tum ek kisaan thay — mehnat tumhari pehchaan! 🌾",
        "🕰️ *Pichla janam:* Tum ek jasoos thay — is liye har khabar rakhte ho! 🕵️😄"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'dream',
    aliases: [],
    category: 'Fun',
    desc: 'Funny dream meaning',
    usage: '.dream <cheez>',
    owner: false,
    run: async (ctx) => {
      const thing = ctx.text || 'khwab';
      const items = [
        `💭 *Khwab ki tabeer:* '${thing}' dekhna — khushkhabri aane wali hai! 🎉`,
        `💭 *Khwab ki tabeer:* '${thing}' dekhna — safar naseeb hoga! ✈️`,
        `💭 *Khwab ki tabeer:* '${thing}' dekhna — rizq mein barkat hogi! 💰`,
        `💭 *Khwab ki tabeer:* '${thing}' dekhna — koi dost yaad kar raha hai! 🤝`,
        `💭 *Khwab ki tabeer:* '${thing}' dekhna — bas khwab tha, tension na lo! 😄`,
        `💭 *Khwab ki tabeer:* '${thing}' dekhna — neend poori karo, sab theek! 😴`
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'vibe',
    aliases: [],
    category: 'Fun',
    desc: 'Check your vibe percentage',
    usage: '.vibe',
    owner: false,
    run: async (ctx) => {
      const pct = 1 + Math.floor(Math.random() * 100);
      const msg = pct > 85 ? '🔥 Full positive vibes!' : pct > 60 ? '✨ Good vibes!' : pct > 35 ? '😐 Theek thaak vibes.' : '🌧️ Low vibes — chai piyo, theek ho jayega! ☕';
      await ctx.reply(`*Vibe Check:*\n\nTumhari vibe: *${pct}%*\n${msg}`);
    }
  },
  {
    cmd: 'mood',
    aliases: [],
    category: 'Fun',
    desc: 'Mood of the day',
    usage: '.mood',
    owner: false,
    run: async (ctx) => {
      const items = [
        "😊 *Mood:* Khush! Aaj ka din tumhara hai!",
        "😎 *Mood:* Cool! Koi tension nahi!",
        "🤔 *Mood:* Soch mein! Koi bara faisla qareeb hai!",
        "😴 *Mood:* Sust! Chai ki zaroorat hai! ☕",
        "🤩 *Mood:* Excited! Kuch acha hone wala hai!",
        "😌 *Mood:* Sukoon! Zindagi khoobsurat hai!",
        "🤣 *Mood:* Hasi wala! Aaj khoob hanso!",
        "💪 *Mood:* Joshila! Kaam par lag jao!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'color2',
    aliases: [],
    category: 'Fun',
    desc: 'Your lucky color today',
    usage: '.color',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🔴 *Surkh (Red):* Josh aur taaqat ka rang!",
        "🔵 *Neela (Blue):* Sukoon aur bharose ka rang!",
        "🟢 *Sabz (Green):* Khushhali aur umeed ka rang!",
        "🟡 *Peela (Yellow):* Khushi aur roshni ka rang!",
        "🟣 *Jamuni (Purple):* Shaan aur takhleeq ka rang!",
        "🟠 *Narangi (Orange):* Garamjoshi ka rang!",
        "⚪ *Sufaid (White):* Paakizgi aur aman ka rang!",
        "⚫ *Kala (Black):* Waqar aur raaz ka rang!",
        "🌸 *Gulabi (Pink):* Mohabbat aur narmi ka rang!",
        "🟤 *Bhura (Brown):* Mazbooti aur dharti ka rang!"
      ];
      await ctx.reply(`🎨 *Aaj ka lucky color:*\n\n${items[Math.floor(Math.random() * items.length)]}`);
    }
  },
  {
    cmd: 'day',
    aliases: [],
    category: 'Fun',
    desc: 'How will your day go',
    usage: '.day',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🌅 *Aaj ka din:* Behtareen! Koi achi khabar milegi! 🎉",
        "☀️ *Aaj ka din:* Khushgawar! Doston ke saath waqt guzaro! 🤝",
        "🌤️ *Aaj ka din:* Normal, lekin shaam khoobsurat hogi! 🌆",
        "⛅ *Aaj ka din:* Thodi masroofiyat, lekin natija acha! 💪",
        "🌈 *Aaj ka din:* Rang bhara! Koi surprise milega! 🎁",
        "🍃 *Aaj ka din:* Pur-sukoon! Aaram karo! 😌",
        "⚡ *Aaj ka din:* Joshila! Kaam nipta lo! 🔥",
        "🌟 *Aaj ka din:* Qismat wala! Jo chaho mango! 🤲"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'hafta',
    aliases: [],
    category: 'Fun',
    desc: 'Fun week prediction',
    usage: '.hafta',
    owner: false,
    run: async (ctx) => {
      const items = [
        "📅 *Ye hafta:* Kamyaabi ka hafta! Mehnat rang layegi! 🌟",
        "📅 *Ye hafta:* Doston ke saath mauj masti! 🎉",
        "📅 *Ye hafta:* Thoda sabar, phir khushkhabri! ⏳",
        "📅 *Ye hafta:* Naya mauqa milega — pakar lo! 🤝",
        "📅 *Ye hafta:* Sehat ka khayal rakho! 🏃",
        "📅 *Ye hafta:* Kharch par qaboo rakho! 💸😄",
        "📅 *Ye hafta:* Koi purana kaam mukammal hoga! ✅",
        "📅 *Ye hafta:* Muskurahat bikhairte raho! 😊"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'advice2',
    aliases: [],
    category: 'Fun',
    desc: 'Random life advice',
    usage: '.advice',
    owner: false,
    run: async (ctx) => {
      const items = [
        "💡 *Mashwara:* Subah ki chai kabhi miss na karo! ☕",
        "💡 *Mashwara:* Narazgi mein faisla mat karo, khushi mein wada mat karo!",
        "💡 *Mashwara:* Roz thoda hansa karo — sehat ke liye acha hai! 😄",
        "💡 *Mashwara:* Waliden ki qadar karo — woh anmol hain! ❤️",
        "💡 *Mashwara:* Paise bachao, lekin khushiyaan mat bachao!",
        "💡 *Mashwara:* Ghalti se seekho, ghalti par rowo mat!",
        "💡 *Mashwara:* Neend poori karo — dimagh tez rahega! 😴",
        "💡 *Mashwara:* Achay dost chuno — zindagi aasaan ho jayegi! 🤝",
        "💡 *Mashwara:* Waqt ki qadar karo — gaya waqt wapas nahi aata! ⏰",
        "💡 *Mashwara:* Khud par yaqeen rakho — tum kar sakte ho! 💪"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'reminder',
    aliases: [],
    category: 'Fun',
    desc: 'Funny reminder',
    usage: '.reminder',
    owner: false,
    run: async (ctx) => {
      const items = [
        "⏰ *Yaad-dahani:* Paani piyo! Jism ko paani chahiye! 💧",
        "⏰ *Yaad-dahani:* Ammi ko phone karo — woh intezaar kar rahi hain! 📞❤️",
        "⏰ *Yaad-dahani:* Mobile charge kar lo — 10% par mat rona! 🔋😄",
        "⏰ *Yaad-dahani:* Aaj muskurana mat bhoolna! 😊",
        "⏰ *Yaad-dahani:* Khana waqt par khao! 🍛",
        "⏰ *Yaad-dahani:* Kal ka kaam aaj karo — kal naye kaam aayenge! 😅",
        "⏰ *Yaad-dahani:* Thoda tehlo — sehat ke liye! 🚶",
        "⏰ *Yaad-dahani:* Shukriya ada karo — kisi ne tumhare liye kuch kiya hoga! 🙏"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'challenge',
    aliases: [],
    category: 'Fun',
    desc: 'Fun challenge for you',
    usage: '.challenge',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🏋️ *Challenge:* Aaj 10 push-ups lagao! 💪",
        "📚 *Challenge:* Aaj 10 safhay kitaab parho!",
        "😊 *Challenge:* Aaj 3 logon ko muskurane par majboor karo!",
        "📵 *Challenge:* 1 ghanta mobile ke baghair guzaro!",
        "💧 *Challenge:* Aaj 8 glass paani piyo!",
        "🤝 *Challenge:* Kisi ajnabi ki madad karo!",
        "✍️ *Challenge:* Apne 3 khwab likho!",
        "🌅 *Challenge:* Kal subah jaldi utho!"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'game',
    aliases: [],
    category: 'Fun',
    desc: 'List of fun mini games',
    usage: '.game',
    owner: false,
    run: async (ctx) => {
      await ctx.reply(`🎮 *Fun Games Menu:*\n\n🎲 .dice — Dice girayen\n🪙 .coin — Coin uchalen\n✊ .rps — Rock Paper Scissors\n🎰 .slot — Slot machine\n🎟️ .lotto — Lottery numbers\n🔮 .eightball — Sawal poochen\n🧩 .riddle / .paheli — Paheliyan\n❓ .trivia / .quiz — Sawal jawab\n💘 .love — Love calculator\n🤝 .truth / .dare — Truth & Dare`);
    }
  },
  {
    cmd: 'score',
    aliases: [],
    category: 'Fun',
    desc: 'Fun score out of 10',
    usage: '.score <cheez>',
    owner: false,
    run: async (ctx) => {
      const thing = ctx.text || 'yeh';
      const s = 1 + Math.floor(Math.random() * 10);
      const msg = s >= 9 ? '🏆 Kamaal!' : s >= 7 ? '👍 Zabardast!' : s >= 5 ? '😊 Theek hai!' : '😅 Guzara hai!';
      await ctx.reply(`*Score:* '${thing}' ko *${s}/10* milte hain!\n${msg}`);
    }
  },
  {
    cmd: 'rate',
    aliases: [],
    category: 'Fun',
    desc: 'Rate something in percent',
    usage: '.rate <cheez>',
    owner: false,
    run: async (ctx) => {
      const thing = ctx.text || 'yeh';
      const p = 1 + Math.floor(Math.random() * 100);
      await ctx.reply(`*Rating:* '${thing}' — *${p}%* ${p > 80 ? '🔥' : p > 50 ? '👍' : '😐'}`);
    }
  },
  {
    cmd: 'filmy',
    aliases: [],
    category: 'Fun',
    desc: 'Guess the movie from dialogue',
    usage: '.filmy',
    owner: false,
    run: async (ctx) => {
      const items = [
        ["🎬 *Dialogue:* 'Mogambo khush hua!'", "Mr. India 😈"],
        ["🎬 *Dialogue:* 'Kitne aadmi thay?'", "Sholay 🔫"],
        ["🎬 *Dialogue:* 'Don ko pakarna mushkil hi nahi, namumkin hai!'", "Don 🕶️"],
        ["🎬 *Dialogue:* 'All is well!'", "3 Idiots 😊"],
        ["🎬 *Dialogue:* 'Bade bade deshon mein...'", "Dilwale Dulhania Le Jayenge 💕"],
        ["🎬 *Dialogue:* 'Pushpa... jhukega nahi!'", "Pushpa 💪"]
      ];
      const [q, a] = items[Math.floor(Math.random() * items.length)];
      await ctx.reply(`${q}\n\nYe dialogue kis film ka hai?\n\n🔽🔽🔽\n\n✅ *Jawab:* ${a}`);
    }
  },
  {
    cmd: 'chai',
    aliases: [],
    category: 'Fun',
    desc: 'Funny chai lines',
    usage: '.chai',
    owner: false,
    run: async (ctx) => {
      const items = [
        "☕ Chai woh hai jo gham bhoola de, thakan mita de!",
        "☕ Subah ki chai na mile to din adhura lagta hai!",
        "☕ Barish + pakoray + chai = Jannat! 🌧️",
        "☕ Chai pi li? Nahi? To zindagi kya jee rahe ho! 😄",
        "☕ Doston ke saath chai — duniya ki sab se meethi mehfil!",
        "☕ Sar dard ka ilaaj: Kadak chai! 💊😄",
        "☕ Chai banane wala sab ka dost hota hai! 🤝",
        "☕ Ek cup chai, hazaar gham door! ✨"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
  {
    cmd: 'party',
    aliases: [],
    category: 'Fun',
    desc: 'Party and celebration lines',
    usage: '.party',
    owner: false,
    run: async (ctx) => {
      const items = [
        "🎉 *Party time!* Nacho, gao, khushiyaan manao! 💃🕺",
        "🎊 *Celebration!* Dhol bajao, mithai khilao! 🥁🍬",
        "🥳 *Mauj masti!* Aaj ka din jashn ka din hai!",
        "🎈 *Party shuru!* Sab doston ko bulao! 📢",
        "💃 *Dance floor ready!* Thumke lagao! 🕺",
        "🍰 *Cake time!* Meetha khao, meetha bolo! 😄"
      ];
      await ctx.reply(items[Math.floor(Math.random() * items.length)]);
    }
  },
];
