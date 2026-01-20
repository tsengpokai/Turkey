/* data.js */
const travelData = {
    traveler: "Tseng",
    dates: "2026/01/21 - 2026/01/31",
    totalDistance: "19,500 km",
    weather: {
        istanbul: { temp: "5°C ~ 12°C", desc: "海風強勁，體感 0°C" },
        cappadocia: { temp: "-5°C ~ 5°C", desc: "可能降雪，需防滑靴" },
        pamukkale: { temp: "2°C ~ 10°C", desc: "早晚溫差大" }
    },
    itinerary: [
        {
            day: 1,
            date: "2026/01/21 (三)",
            title: "啟程：飛向歐亞交界",
            location: "Taipei -> Bangkok -> Istanbul",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
            details: [
                { time: "15:30", title: "抵達桃園機場 T1", icon: "fa-plane-departure", desc: "泰航 Check-in，確認行李直掛 IST。", type: "flight" },
                { time: "18:20", title: "TG635 起飛", icon: "fa-plane", desc: "前往曼谷 (BKK)", type: "flight" },
                { time: "21:45", title: "抵達曼谷轉機", icon: "fa-walking", desc: "循 Transfer 指標，無須入境。前往 TG900 登機門。", type: "info" },
                { time: "23:45", title: "TG900 起飛", icon: "fa-plane", desc: "前往伊斯坦堡 (IST)", type: "flight" }
            ]
        },
        {
            day: 2,
            date: "2026/01/22 (四)",
            title: "舊城初見與蘇非儀式",
            location: "Istanbul (Old City)",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop", // Hagia Sophia
            stay: "Hotel Evsen",
            stayLink: "Hotel Evsen Sirkeci",
            details: [
                { time: "06:05", title: "抵達伊斯坦堡 (IST)", icon: "fa-plane-arrival", desc: "換匯 €50，B2 購買 Istanbulkart。", type: "info" },
                { 
                    time: "07:30", 
                    title: "機場移動至飯店", 
                    icon: "fa-bus", 
                    type: "transport",
                    transportSteps: [
                        "搭乘 Havaist 巴士 (HVIST-12) 往 Beyazıt Meydanı (終點)。",
                        "步行至 Beyazıt 電車站。",
                        "轉乘 T1 電車 (往 Eminönü 方向)。",
                        "在 Gülhane 站下車，步行 2 分鐘抵達 Hotel Evsen。"
                    ]
                },
                { time: "11:00", title: "地下水宮殿", icon: "fa-water", desc: "必看：淚柱、梅杜莎頭像。", link: "Basilica Cistern", type: "sight" },
                { time: "14:00", title: "藍色清真寺", icon: "fa-mosque", desc: "六根宣禮塔，需脫鞋。", link: "Blue Mosque", type: "sight" },
                { time: "19:00", title: "旋轉苦行僧表演", icon: "fa-music", desc: "Hodjapasha 文化中心 (非物質文化遺產)。", link: "Hodjapasha", type: "sight" }
            ]
        },
        {
            day: 3,
            date: "2026/01/23 (五)",
            title: "帝國榮耀與大巴扎",
            location: "Istanbul",
            image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800&auto=format&fit=crop", // Topkapi
            stay: "Hotel Evsen",
            stayLink: "Hotel Evsen Sirkeci",
            details: [
                { time: "09:00", title: "托普卡帕皇宮", icon: "fa-crown", desc: "優先參觀后宮 (Harem) 與海景露台。", link: "Topkapi Palace Museum", type: "sight" },
                { time: "11:30", title: "聖索菲亞大教堂", icon: "fa-church", desc: "參觀二樓畫廊鑲嵌畫。", link: "Hagia Sophia", type: "sight" },
                { 
                    time: "14:30", 
                    title: "大巴扎 (Grand Bazaar)", 
                    icon: "fa-shopping-bag", 
                    type: "transport",
                    desc: "搭 T1 至 Beyazıt 站。任務：Zeki Döviz 換匯、殺價購物。",
                    link: "Grand Bazaar Istanbul"
                },
                { time: "17:00", title: "獨立大街 & 塔克西姆", icon: "fa-tram", desc: "T1 至 Kabataş 轉 F1 纜車。體驗紅色復古電車。", link: "Taksim Square", type: "sight" }
            ]
        },
        {
            day: 4,
            date: "2026/01/24 (六)",
            title: "海峽遊船與跨洲移動",
            location: "Istanbul (Asia Side)",
            image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?q=80&w=800&auto=format&fit=crop", // Bosphorus
            stay: "Kaya Hotel (SAW)",
            stayLink: "Kaya Hotel Istanbul",
            details: [
                { time: "11:00", title: "博斯普魯斯遊船", icon: "fa-ship", desc: "Eminönü 碼頭 (Marine Travel Agency)。", link: "Eminönü Pier", type: "sight" },
                { time: "14:00", title: "埃及香料市集", icon: "fa-leaf", desc: "購買土耳其軟糖、香料。", link: "Spice Bazaar", type: "sight" },
                { 
                    time: "15:30", 
                    title: "移動至亞洲區飯店", 
                    icon: "fa-subway", 
                    type: "transport",
                    transportSteps: [
                        "Sirkeci 火車站搭 Marmaray 鐵路至 Ayrılık Çeşmesi。",
                        "站內轉乘地鐵 M4 線至 Sabiha Gökçen Airport (終點)。",
                        "轉乘計程車至 Kaya Hotel。"
                    ]
                }
            ]
        },
        {
            day: 5,
            date: "2026/01/25 (日)",
            title: "飛向奇岩：卡帕多奇亞",
            location: "Cappadocia",
            image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800&auto=format&fit=crop", // Cappadocia
            stay: "Elegance Cave Suites",
            stayLink: "Elegance Cave Suites Cappadocia",
            details: [
                { time: "07:15", title: "VF3170 起飛", icon: "fa-plane", desc: "Ajet 航空，前往開塞利 (ASR)。", type: "flight" },
                { 
                    time: "09:10", 
                    title: "機場移動至格雷梅", 
                    icon: "fa-bus", 
                    type: "transport",
                    transportSteps: ["出機場搭乘 HAVAŞ 巴士直達 Goreme 巴士站 (約 70 分鐘)。"]
                },
                { time: "13:00", title: "格雷梅露天博物館", icon: "fa-mountain", desc: "岩窟教堂濕壁畫。", link: "Göreme Open Air Museum", type: "sight" },
                { time: "15:00", title: "Galerie Ikman", icon: "fa-camera", desc: "網美地毯店。", link: "Galerie Ikman", type: "sight" }
            ]
        },
        {
            day: 6,
            date: "2026/01/26 (一)",
            title: "熱氣球與紅線之旅",
            location: "Cappadocia",
            image: "https://images.unsplash.com/photo-1570183186221-5f2183e89c65?q=80&w=800&auto=format&fit=crop", // Balloons
            stay: "Elegance Cave Suites",
            stayLink: "Elegance Cave Suites Cappadocia",
            details: [
                { time: "05:00", title: "熱氣球飛行", icon: "fa-parachute-box", desc: "飯店接送，一生一次的體驗。", type: "highlight" },
                { 
                    time: "09:30", 
                    title: "紅線之旅 (Red Tour)", 
                    icon: "fa-map-signs", 
                    type: "sight",
                    desc: "烏奇沙城堡、精靈煙囪、帕夏貝、想像谷、阿瓦諾斯陶藝。",
                    link: "Uchisar Castle"
                }
            ]
        },
        {
            day: 7,
            date: "2026/01/27 (二)",
            title: "綠線冒險與夜間巴士",
            location: "Cappadocia -> Denizli",
            image: "https://images.unsplash.com/photo-1598345719889-49775084931a?q=80&w=800&auto=format&fit=crop", // Ihlara Valley
            stay: "夜間巴士 (Night Bus)",
            stayLink: "Goreme Bus Station",
            details: [
                { 
                    time: "09:30", 
                    title: "綠線之旅 (Green Tour)", 
                    icon: "fa-hiking", 
                    type: "sight",
                    desc: "代林庫尤地下城 (深85米)、厄赫拉拉谷健行、星際大戰修道院。",
                    link: "Derinkuyu Underground City"
                },
                { 
                    time: "20:10", 
                    title: "夜間巴士前往 Denizli", 
                    icon: "fa-bus-alt", 
                    type: "transport",
                    transportSteps: [
                        "前往 Goreme 巴士站。",
                        "搭乘 Kamil Koç / Flixbus。",
                        "車程約 10 小時，準備頸枕與保暖衣物。"
                    ]
                }
            ]
        },
        {
            day: 8,
            date: "2026/01/28 (三)",
            title: "雪白棉堡與古羅馬遺跡",
            location: "Pamukkale -> Selçuk",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop", // Pamukkale
            stay: "Urkmez Hotel",
            stayLink: "Urkmez Hotel Selcuk",
            details: [
                { time: "06:15", title: "抵達 Denizli", icon: "fa-map-marker-alt", desc: "行李寄放 B1 Emanetçi (只收現金)。", type: "info" },
                { time: "07:00", title: "小巴前往棉堡", icon: "fa-bus", desc: "76 號月台搭車。問：Pamukkale minibüsü?", type: "transport" },
                { time: "07:30", title: "棉堡 & 希拉波里斯", icon: "fa-water", desc: "北門下車 -> 古羅馬劇場 -> 石灰棚 (赤腳) -> 南門。", link: "Hierapolis & Pamukkale", type: "sight" },
                { 
                    time: "14:28", 
                    title: "火車前往 Selçuk", 
                    icon: "fa-train", 
                    type: "transport",
                    transportSteps: [
                        "搭小巴回 Denizli 巴士站。",
                        "走到對面火車站。",
                        "搭乘 GÜLLER EKSPRESİ。",
                        "17:40 抵達 Selçuk。"
                    ]
                }
            ]
        },
        {
            day: 9,
            date: "2026/01/29 (四)",
            title: "漫步千年：以弗所",
            location: "Selçuk (Ephesus)",
            image: "https://images.unsplash.com/photo-1544955254-2070c7764d8a?q=80&w=800&auto=format&fit=crop", // Ephesus
            stay: "Urkmez Hotel",
            stayLink: "Urkmez Hotel Selcuk",
            details: [
                { time: "09:00", title: "前往以弗所", icon: "fa-taxi", desc: "搭計程車直達『南門』(Magnesia Gate) 省力。", link: "Ephesus South Gate", type: "transport" },
                { time: "09:30", title: "以弗所遺跡", icon: "fa-landmark", desc: "一路下坡：圖拉真噴泉 -> 塞爾蘇斯圖書館 -> 大劇院。", link: "Ephesus Archaeological Museum", type: "sight" },
                { time: "12:30", title: "返回市區", icon: "fa-bus", desc: "北門出口搭乘 Dolmus 小巴。", type: "transport" },
                { time: "14:00", title: "聖約翰大教堂", icon: "fa-cross", desc: "探索使徒約翰的安息之地。", link: "Basilica of St. John", type: "sight" }
            ]
        },
        {
            day: 10,
            date: "2026/01/30 (五)",
            title: "再會土耳其：踏上歸途",
            location: "Izmir -> Istanbul -> Bangkok",
            image: "https://images.unsplash.com/photo-1565039320828-e97535c88274?q=80&w=800&auto=format&fit=crop", // Izmir Airport/Train
            details: [
                { 
                    time: "08:00", 
                    title: "前往機場 (ADB)", 
                    icon: "fa-train", 
                    type: "transport",
                    transportSteps: [
                        "Selçuk 火車站搭 İZBAN 輕軌 (往 Tepeköy)。",
                        "Tepeköy 站下車，換月台轉乘 (往 Alsancak/Menemen)。",
                        "09:10 抵達 ADB 機場站。"
                    ]
                },
                { time: "10:40", title: "TK2313 起飛", icon: "fa-plane", desc: "前往伊斯坦堡 (IST)。", type: "flight" },
                { time: "16:30", title: "TG901 起飛", icon: "fa-plane-departure", desc: "前往曼谷 (BKK)。需備妥泰簽。", type: "flight" }
            ]
        },
        {
            day: 11,
            date: "2026/01/31 (六)",
            title: "抵達溫暖的家",
            location: "Bangkok -> Taipei",
            image: "https://images.unsplash.com/photo-1556623696-fa5362e3d368?q=80&w=800&auto=format&fit=crop", // Taipei
            details: [
                { time: "05:20", title: "抵達曼谷", icon: "fa-passport", desc: "入境泰國 -> 領行李 -> 星宇 Check-in -> 出境。", type: "info" },
                { time: "13:45", title: "JX742 起飛", icon: "fa-plane", desc: "星宇航空，飛往台北。", type: "flight" },
                { time: "18:25", title: "抵達桃園機場", icon: "fa-home", desc: "歡迎回家！Travel Complete.", type: "highlight" }
            ]
        }
    ],
    reminders: [
        { title: "詐騙防範", text: "掉刷子的擦鞋童、主動搭訕喝一杯的人，絕對遠離。計程車請用 BiTaksi / Uber。" },
        { title: "冬季裝備", text: "卡帕多奇亞會積雪！必穿『防滑防水靴』。棉堡水溫低，請帶乾襪子。" },
        { title: "泰國簽證", text: "回程 1/31 在曼谷轉機需入境重掛行李，務必提前辦好泰簽。" },
        { title: "電壓", text: "220V 雙圓孔 (歐規 Type F)。" }
    ]
};