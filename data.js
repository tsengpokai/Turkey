const travelData = {
    traveler: "Tseng",
    dates: "2026/01/21 - 2026/01/31",
    totalDistance: "19,500 km",
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
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
            stay: "Hotel Evsen",
            stayLink: "Hotel Evsen Sirkeci",
            details: [
                { time: "06:05", title: "抵達伊斯坦堡 (IST)", icon: "fa-plane-arrival", desc: "換匯 €50，B2 購買 Istanbulkart。", type: "info" },
                { 
                    time: "07:30", title: "機場移動至飯店", icon: "fa-bus", type: "transport",
                    transportSteps: ["搭 Havaist (HVIST-12) 往 Beyazıt。", "步行至電車站，轉 T1 往 Eminönü。", "Gülhane 站下車，步行 2 分鐘。"]
                },
                { time: "11:00", title: "地下水宮殿", icon: "fa-water", desc: "必看：淚柱、梅杜莎頭像。", link: "Basilica Cistern", type: "sight" },
                { time: "12:30", title: "午餐：百年烤肉丸", icon: "fa-utensils", desc: "Sultanahmet Köftecisi。", link: "Sultanahmet Köftecisi", type: "food" },
                { time: "14:00", title: "藍色清真寺", icon: "fa-mosque", desc: "六根宣禮塔，需脫鞋。", link: "Blue Mosque", type: "sight" },
                { time: "15:30", title: "飯店 Check-in & 補眠", icon: "fa-bed", desc: "調整時差，重要休息。", type: "rest" },
                { time: "19:00", title: "旋轉苦行僧表演", icon: "fa-music", desc: "Hodjapasha 文化中心。", link: "Hodjapasha", type: "sight" },
                { time: "20:30", title: "晚餐", icon: "fa-utensils", desc: "Hodjapasha 街區用餐。", type: "food" }
            ]
        },
        {
            day: 3,
            date: "2026/01/23 (五)",
            title: "帝國榮耀與大巴扎",
            location: "Istanbul",
            image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800&auto=format&fit=crop",
            stay: "Hotel Evsen",
            stayLink: "Hotel Evsen Sirkeci",
            details: [
                { time: "09:00", title: "托普卡帕皇宮", icon: "fa-crown", desc: "優先參觀后宮 (Harem) 與海景露台。", link: "Topkapi Palace Museum", type: "sight" },
                { time: "11:30", title: "聖索菲亞大教堂", icon: "fa-church", desc: "參觀二樓畫廊鑲嵌畫。", link: "Hagia Sophia", type: "sight" },
                { time: "14:30", title: "大巴扎 (Grand Bazaar)", icon: "fa-shopping-bag", type: "transport", desc: "搭 T1 至 Beyazıt 站。任務：換匯、殺價。", link: "Grand Bazaar Istanbul" },
                { time: "17:00", title: "獨立大街 & 塔克西姆", icon: "fa-tram", desc: "T1 至 Kabataş 轉 F1 纜車。體驗紅色復古電車。", link: "Taksim Square", type: "sight" }
            ]
        },
        {
            day: 4,
            date: "2026/01/24 (六)",
            title: "海峽遊船與跨洲移動",
            location: "Istanbul (Asia Side)",
            image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?q=80&w=800&auto=format&fit=crop",
            stay: "Kaya Hotel (SAW)",
            stayLink: "Kaya Hotel Istanbul",
            details: [
                { time: "09:30", title: "退房 & 寄行李", icon: "fa-suitcase", desc: "行李寄放 Hotel Evsen。", type: "info" },
                { time: "11:00", title: "博斯普魯斯遊船", icon: "fa-ship", desc: "Eminönü 碼頭出發 (Marine Travel Agency)。", link: "Eminönü Pier", type: "sight" },
                { time: "13:00", title: "午餐：烤魚三明治", icon: "fa-fish", desc: "碼頭邊享用 Balık Ekmek。", type: "food" },
                { time: "14:00", title: "埃及香料市集", icon: "fa-leaf", desc: "採購土耳其軟糖。", link: "Spice Bazaar", type: "sight" },
                { 
                    time: "15:30", title: "跨洲移動至亞洲區", icon: "fa-subway", type: "transport",
                    transportSteps: ["Sirkeci 火車站搭 Marmaray 至 Ayrılık Çeşmesi。", "轉乘地鐵 M4 線至 Sabiha Gökçen Airport。", "轉計程車至 Kaya Hotel。"]
                },
                { time: "18:30", title: "入住飯店", icon: "fa-bed", desc: "早點休息，明日早班機。", type: "rest" }
            ]
        },
        {
            day: 5,
            date: "2026/01/25 (日)",
            title: "飛向奇岩：卡帕多奇亞",
            location: "Cappadocia",
            image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800&auto=format&fit=crop",
            stay: "Elegance Cave Suites",
            stayLink: "Elegance Cave Suites Cappadocia",
            details: [
                { time: "05:00", title: "前往機場", icon: "fa-taxi", desc: "搭計程車至 SAW 機場。", type: "transport" },
                { time: "07:15", title: "VF3170 起飛", icon: "fa-plane", desc: "前往開塞利 (ASR)。", type: "flight" },
                { 
                    time: "08:40", title: "抵達機場 & 計程車", icon: "fa-taxi", type: "transport", 
                    desc: "搭乘計程車前往 Kayseri Şehir Terminali (Bus Station)。約 15 分鐘。" 
                },
                { 
                    time: "09:10", title: "轉乘巴士至格雷梅", icon: "fa-bus", type: "transport",
                    transportSteps: ["抵達 Kayseri 巴士總站。", "轉乘前往 Göreme 的巴士 (如 RH Turizm)。", "車程約 60-70 分鐘。"]
                },
                { time: "11:00", title: "飯店 Check-in", icon: "fa-suitcase", desc: "寄放行李。", type: "info" },
                { time: "13:00", title: "格雷梅露天博物館", icon: "fa-mountain", desc: "參觀岩窟教堂濕壁畫。", link: "Göreme Open Air Museum", type: "sight" },
                { time: "15:00", title: "Galerie Ikman", icon: "fa-camera", desc: "網美地毯店拍照。", link: "Galerie Ikman", type: "sight" },
                { time: "18:00", title: "晚餐", icon: "fa-utensils", desc: "Goreme 市區自由覓食 (推薦陶甕料理)。", type: "food" }
            ]
        },
        {
            day: 6,
            date: "2026/01/26 (一)",
            title: "熱氣球與紅線之旅",
            location: "Cappadocia",
            image: null,
            stay: "Elegance Cave Suites",
            stayLink: "Elegance Cave Suites Cappadocia",
            details: [
                { time: "05:00", title: "熱氣球飛行", icon: "fa-parachute-box", desc: "飯店接送，一生一次的體驗。", type: "highlight" },
                { time: "09:30", title: "紅線之旅：烏奇沙城堡", icon: "fa-chess-rook", desc: "地區制高點。", link: "Uchisar Castle", type: "sight" },
                { time: "11:00", title: "仙女煙囪", icon: "fa-mountain", desc: "獨特地質奇觀。", type: "sight" },
                { time: "13:00", title: "帕夏貝 (Paşabağ)", icon: "fa-magic", desc: "蘑菇狀岩石群。", link: "Paşabağları Müze Ören Yeri", type: "sight" },
                { time: "14:30", title: "想像谷 (Devrent)", icon: "fa-camel", desc: "尋找駱駝形狀岩石。", type: "sight" },
                { time: "15:30", title: "阿瓦諾斯陶藝", icon: "fa-fill-drip", desc: "參觀紅河畔手拉胚工藝。", link: "Avanos", type: "sight" },
                { time: "17:00", title: "Zelve 露天博物館", icon: "fa-dungeon", desc: "古老的穴居社區遺跡。", link: "Zelve Open Air Museum", type: "sight" },
                { time: "18:30", title: "行程結束", icon: "fa-flag-checkered", desc: "返回飯店休息。", type: "info" }
            ]
        },
        {
            day: 7,
            date: "2026/01/27 (二)",
            title: "綠線冒險與夜間巴士",
            location: "Cappadocia -> Denizli",
            image: null,
            stay: "夜間巴士 (Night Bus)",
            stayLink: "Goreme Bus Station",
            details: [
                { time: "09:00", title: "退房", icon: "fa-suitcase", desc: "行李寄放飯店或隨車。", type: "info" },
                { time: "09:30", title: "綠線：格雷梅全景台", icon: "fa-binoculars", desc: "俯瞰小鎮全貌。", type: "sight" },
                { time: "10:30", title: "代林庫尤地下城", icon: "fa-dungeon", desc: "深達85米的地下防禦城市。", link: "Derinkuyu Underground City", type: "sight" },
                { time: "12:30", title: "厄赫拉拉谷", icon: "fa-hiking", desc: "沿河谷健行 (Ihlara Valley)。", link: "Ihlara Valley", type: "sight" },
                { time: "13:30", title: "午餐：Belisırma", icon: "fa-utensils", desc: "河畔享用午餐。", type: "food" },
                { time: "15:00", title: "烏魯爾馬克修道院", icon: "fa-jedi", desc: "Selime Monastery (星際大戰場景)。", link: "Selime Monastery", type: "sight" },
                { time: "16:30", title: "鴿子谷", icon: "fa-dove", desc: "觀賞岩壁鴿舍。", type: "sight" },
                { time: "18:30", title: "行程結束 & 晚餐", icon: "fa-utensils", desc: "回到鎮上，快速享用晚餐或外帶。", type: "food" },
                { 
                    time: "20:10", title: "夜間巴士", icon: "fa-bus-alt", type: "transport",
                    transportSteps: ["前往 Goreme 巴士站。", "搭乘 Kamil Koç / Flixbus 往 Denizli。", "車程 10 小時 (備頸枕/保暖)。"]
                }
            ]
        },
        {
            day: 8,
            date: "2026/01/28 (三)",
            title: "雪白棉堡與古羅馬遺跡",
            location: "Pamukkale -> Selçuk",
            image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop",
            stay: "Urkmez Hotel",
            stayLink: "Urkmez Hotel Selcuk",
            details: [
                { time: "06:15", title: "抵達 Denizli", icon: "fa-map-marker-alt", desc: "行李寄放 B1 Emanetçi (只收現金)。", type: "info" },
                { time: "07:00", title: "小巴前往棉堡", icon: "fa-bus", desc: "76 號月台搭車。問：Pamukkale minibüsü?", type: "transport" },
                { time: "07:30", title: "棉堡 & 希拉波里斯", icon: "fa-water", desc: "北門下車 -> 古羅馬劇場 -> 石灰棚 (赤腳) -> 南門。", link: "Hierapolis & Pamukkale", type: "sight" },
                { 
                    time: "12:30", title: "返回 Denizli", icon: "fa-bus", desc: "搭乘小巴返回巴士總站。", type: "transport" 
                },
                { 
                    time: "14:28", title: "火車前往 Selçuk", icon: "fa-train", type: "transport",
                    transportSteps: ["走到巴士站對面火車站。", "搭乘 GÜLLER EKSPRESİ。", "17:40 抵達 Selçuk 火車站。"]
                },
                { time: "18:00", title: "飯店 Check-in", icon: "fa-hotel", desc: "Urkmez Hotel (火車站對面)。", type: "info" },
                { time: "19:00", title: "晚餐", icon: "fa-utensils", desc: "Selçuk 小鎮悠閒用餐。", type: "food" }
            ]
        },
        {
            day: 9,
            date: "2026/01/29 (四)",
            title: "漫步千年：以弗所",
            location: "Selçuk (Ephesus)",
            image: null,
            stay: "Urkmez Hotel",
            stayLink: "Urkmez Hotel Selcuk",
            details: [
                { time: "09:00", title: "前往以弗所", icon: "fa-taxi", desc: "搭計程車直達『南門』(Magnesia Gate) 省力。", link: "Ephesus South Gate", type: "transport" },
                { time: "09:30", title: "以弗所遺跡", icon: "fa-landmark", desc: "一路下坡：圖拉真噴泉 -> 塞爾蘇斯圖書館 -> 大劇院。", link: "Ephesus Archaeological Museum", type: "sight" },
                { time: "12:30", title: "返回市區", icon: "fa-bus", desc: "從『北門』出口搭乘 Dolmus 小巴。", type: "transport" },
                { time: "14:00", title: "聖約翰大教堂", icon: "fa-cross", desc: "使徒約翰安息之地。", link: "Basilica of St. John", type: "sight" },
                { time: "15:30", title: "伊薩貝清真寺", icon: "fa-mosque", desc: "古老的塞爾柱建築。", link: "Isa Bey Mosque", type: "sight" },
                { time: "17:00", title: "小鎮漫遊", icon: "fa-coffee", desc: "參觀古羅馬水道橋，享受土耳其紅茶。", type: "rest" },
                { time: "19:00", title: "晚餐", icon: "fa-utensils", desc: "嘗試當地 Pide (土耳其披薩)。", type: "food" }
            ]
        },
        {
            day: 10,
            date: "2026/01/30 (五)",
            title: "再會土耳其：踏上歸途",
            location: "Izmir -> Istanbul -> Bangkok",
            image: null,
            details: [
                { time: "07:30", title: "退房 & 出發", icon: "fa-walking", desc: "步行至 Selçuk 火車站。", type: "info" },
                { 
                    time: "08:00", title: "前往機場 (ADB)", icon: "fa-train", type: "transport",
                    transportSteps: ["搭 İZBAN 輕軌 (往 Tepeköy)。", "08:22 抵達 Tepeköy，換月台轉乘 (往 Alsancak)。", "09:10 抵達 ADB 機場站。"]
                },
                { time: "10:40", title: "TK2313 起飛", icon: "fa-plane", desc: "飛往伊斯坦堡 (IST)。", type: "flight" },
                { time: "12:05", title: "抵達 IST & 轉機", icon: "fa-exchange-alt", desc: "領行李 -> 出境大廳 -> 泰航 Check-in -> 出境。", type: "info" },
                { time: "16:30", title: "TG901 起飛", icon: "fa-plane-departure", desc: "飛往曼谷 (BKK)。", type: "flight" }
            ]
        },
        {
            day: 11,
            date: "2026/01/31 (六)",
            title: "抵達溫暖的家",
            location: "Bangkok -> Taipei",
            image: null,
            details: [
                { time: "05:20", title: "抵達曼谷 (BKK)", icon: "fa-passport", desc: "辦理入境 -> 領行李 -> 星宇櫃檯 Check-in -> 出境。", type: "info" },
                { time: "08:00", title: "轉機等待", icon: "fa-coffee", desc: "機場早餐/休息。", type: "rest" },
                { time: "13:45", title: "JX742 起飛", icon: "fa-plane", desc: "星宇航空，飛往台北。", type: "flight" },
                { time: "18:25", title: "抵達桃園機場", icon: "fa-home", desc: "歡迎回家！Travel Complete.", type: "highlight" }
            ]
        }
    ],
    reminders: [
        { title: "詐騙防範", text: "擦鞋童刷子不要撿、遠離主動搭訕的酒吧邀約。叫車請用 BiTaksi / Uber。" },
        { title: "冬季裝備", text: "卡帕多奇亞必穿『防滑防水靴』。棉堡需赤腳，請帶乾襪子保暖。" },
        { title: "轉機注意", text: "回程曼谷轉機需『入境』，請備妥泰簽。" },
        { title: "電壓", text: "220V 雙圓孔 (歐規 Type F)。" }
    ]
};