const question = [
    {
        question: "Pakistan ka capital kya hai?",
        options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
        answer: "Islamabad"
    },
    {
        question: "Quaid-e-Azam ka asal naam kya tha?",
        options: ["Ali Jinnah", "Muhammad Ali", "Muhammad Ali Jinnah", "Jinnah Muhammad"],
        answer: "Muhammad Ali Jinnah"
    },
    {
        question: "Pakistan kis saal azaad hua?",
        options: ["1945", "1946", "1947", "1950"],
        answer: "1947"
    },
    {
        question: "Urdu kis type ki zuban hai?",
        options: ["Romance", "Germanic", "Indo-Aryan", "Slavic"],
        answer: "Indo-Aryan"
    },
    {
        question: "Allama Iqbal ko kya kaha jata hai?",
        options: ["Poet of the East", "Leader of the Nation", "Quaid", "Father of Pakistan"],
        answer: "Poet of the East"
    },
    {
        question: "Lahore kis province mein hai?",
        options: ["Sindh", "Punjab", "KPK", "Balochistan"],
        answer: "Punjab"
    },
    {
        question: "Pakistan ka national sport kya hai?",
        options: ["Cricket", "Hockey", "Football", "Kabaddi"],
        answer: "Hockey"
    },
    {
        question: "Independence Day kab manaya jata hai?",
        options: ["14 August", "15 August", "23 March", "25 December"],
        answer: "14 August"
    },
    {
        question: "Pakistan ka sabse bara sheher kaunsa hai?",
        options: ["Lahore", "Islamabad", "Faisalabad", "Karachi"],
        answer: "Karachi"
    },
    {
        question: "Who was the first Prime Minister of Pakistan?",
        options: ["Liaquat Ali Khan", "Zulfikar Ali Bhutto", "Benazir Bhutto", "Imran Khan"],
        answer: "Liaquat Ali Khan"
    },
    {
        question: "Roza kis pillar of Islam mein aata hai?",
        options: ["First", "Second", "Third", "Fourth"],
        answer: "Third"
    },
    {
        question: "Namaz din mein kitni martaba farz hai?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "Eid ul Fitr kab hoti hai?",
        options: ["Ramzan ke baad", "Zil Hajj ke baad", "Muharram ke baad", "Shaban ke baad"],
        answer: "Ramzan ke baad"
    },
    {
        question: "Hajj kis city mein perform hota hai?",
        options: ["Madina", "Riyadh", "Jeddah", "Makkah"],
        answer: "Makkah"
    },
    {
        question: "Pakistani currency ka naam kya hai?",
        options: ["Rupee", "Dollar", "Dinar", "Taka"],
        answer: "Rupee"
    },
    {
        question: "Pakistani flag mein kitne rang hain?",
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "Jinnah ne Pakistan ka tasawur kab diya?",
        options: ["1930", "1940", "1947", "1928"],
        answer: "1940"
    },
    {
        question: "Zakat Islam ke kis pillar mein aati hai?",
        options: ["First", "Second", "Third", "Fourth"],
        answer: "Third"
    },
    {
        question: "Ramzan Islam ka kaunsa mahina hai?",
        options: ["Pehla", "Doosra", "Nauwaan", "Daswaan"],
        answer: "Nauwaan"
    },
    {
        question: "Quran kis zuban mein nazil hua?",
        options: ["Urdu", "Arabic", "Persian", "Turkish"],
        answer: "Arabic"
    },
    {
        question: "Islam mein pehla Nabi kaun tha?",
        options: ["Ibrahim", "Musa", "Adam", "Isa"],
        answer: "Adam"
    },
    {
        question: "Pakistan mein total provinces kitne hain?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Imran Khan kis team ke captain rah chuke hain?",
        options: ["India", "Australia", "Pakistan", "England"],
        answer: "Pakistan"
    },
    {
        question: "Pakistan ka National Anthem kis zuban mein hai?",
        options: ["Urdu", "Arabic", "Persian", "Sindhi"],
        answer: "Persian"
    },
    {
        question: "Islam mein kitni farz namazen hain?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "Roza kis mahine mein rakha jata hai?",
        options: ["Ramzan", "Shaban", "Muharram", "Rabi-ul-Awal"],
        answer: "Ramzan"
    },
    {
        question: "Subah ki namaz ka naam kya hai?",
        options: ["Asr", "Maghrib", "Fajr", "Isha"],
        answer: "Fajr"
    },
    {
        question: "Duniya ka sabse bara samundar kaunsa hai?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Mount Everest kis continent mein hai?",
        options: ["Asia", "Europe", "Africa", "Australia"],
        answer: "Asia"
    },
    {
        question: "Computer ka brain kise kehte hain?",
        options: ["Monitor", "Mouse", "CPU", "Keyboard"],
        answer: "CPU"
    },
    {
        question: "Islamabad kis saal capital bana?",
        options: ["1960", "1967", "1971", "1959"],
        answer: "1960"
    },
    {
        question: "Zameen gol hai ya choukoni?",
        options: ["Gol", "Choukoni", "Teen kona", "Seedhi"],
        answer: "Gol"
    },
    {
        question: "Duniya ka sabse thanda maqam?",
        options: ["Antarctica", "Siberia", "Alaska", "Greenland"],
        answer: "Antarctica"
    },
    {
        question: "Pakistan kis continent mein hai?",
        options: ["Europe", "Asia", "Africa", "Australia"],
        answer: "Asia"
    },
    {
        question: "Water ka chemical formula kya hai?",
        options: ["CO2", "H2O", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Human body mein kitni haddiyan hoti hain?",
        options: ["206", "201", "210", "196"],
        answer: "206"
    },
    {
        question: "Heart kis system ka part hai?",
        options: ["Digestive", "Circulatory", "Respiratory", "Nervous"],
        answer: "Circulatory"
    },
    {
        question: "Urdu ka pehla shaayar kaun tha?",
        options: ["Mir Taqi Mir", "Allama Iqbal", "Faiz", "Ghalib"],
        answer: "Mir Taqi Mir"
    },
    {
        question: "Ghalib kis zuban ke shaayar thay?",
        options: ["Punjabi", "Pashto", "Urdu", "Sindhi"],
        answer: "Urdu"
    },
    {
        question: "Quaid-e-Azam ka janam din kab hai?",
        options: ["25 December", "14 August", "23 March", "11 September"],
        answer: "25 December"
    },
    {
        question: "Pakistan ka national flower kya hai?",
        options: ["Lily", "Rose", "Jasmine", "Sunflower"],
        answer: "Jasmine"
    },
    {
        question: "Urdu ka matlab kya hai?",
        options: ["Logon ki zaban", "Lashkar", "School", "Kitab"],
        answer: "Lashkar"
    },
    {
        question: "Pakistani flag ka white part kisay represent karta hai?",
        options: ["Muslims", "Minorities", "Peace", "Sky"],
        answer: "Minorities"
    },
    {
        question: "Bait-ul-Maqdas kis shehar mein hai?",
        options: ["Jerusalem", "Makkah", "Madina", "Damascus"],
        answer: "Jerusalem"
    },
    {
        question: "Namaz kis taraf mooh kar ke parhi jati hai?",
        options: ["North", "South", "East", "Qibla"],
        answer: "Qibla"
    },
    {
        question: "Alif Bay Pay kis cheez ka hissa hai?",
        options: ["Urdu Alphabet", "Math", "Science", "Geography"],
        answer: "Urdu Alphabet"
    },
    {
        question: "Sabse pehle wahi kis Nabi par nazil hui?",
        options: ["Isa", "Musa", "Muhammad", "Ibrahim"],
        answer: "Muhammad"
    },
    {
        question: "Roza kholne ko kya kehte hain?",
        options: ["Iftar", "Suhoor", "Namaz", "Zakat"],
        answer: "Iftar"
    },
    {
        question: "Harf-e-Tahajji mein pehla harf kya hai?",
        options: ["Alif", "Bay", "Jeem", "Seen"],
        answer: "Alif"
    }
    
];

export default question;