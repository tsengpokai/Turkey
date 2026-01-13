// data.js
const travelData = {
    traveler: "Tseng",
    dates: "2026/01/21 - 2026/01/31",
    totalDistance: "19,500 km",
    flights: [
        { date: "1/21", route: "台北 ➔ 曼谷", flight: "TG635", time: "18:20 - 21:45", note: "泰航直掛，免入境" },
        { date: "1/21", route: "曼谷 ➔ 伊斯坦堡", flight: "TG900", time: "23:45 - 06:05(+1)", note: "同航廈轉機" },
        { date: "1/25", route: "伊斯坦堡 ➔ 開塞利", flight: "VF3170", time: "07:15 - 08:40", note: "SAW機場出發" },
        { date: "1/30", route: "伊士麥 ➔ 伊斯坦堡", flight: "TK2313", time: "10:40 - 12:05", note: "ADB機場出發" },
        { date: "1/30", route: "伊斯坦堡 ➔ 曼谷", flight: "TG901", time: "16:30 - 05:20(+1)", note: "需備妥泰國簽證" },
        { date: "1/31", route: "曼谷 ➔ 台北", flight: "JX742", time: "13:45 - 18:25", note: "需入境領行李重掛" }
    ],
    hotels: [
        { dates: "1/22-24", name: "Hotel Evsen", location: "伊斯坦堡 (舊城)", note: "Sirkeci 區，步行至 T1 電車站僅 2 分鐘", mapQuery: "Hotel Evsen Istanbul" },
        { dates: "1/24-25", name: "Kaya Hotel", location: "伊斯坦堡 (亞洲)", note: "鄰近 SAW 機場，早班機專用", mapQuery: "Kaya Hotel Istanbul" },
        { dates: "1/25-27", name: "Elegance Cave Suites", location: "格雷梅 (卡帕多奇亞)", note: "道地洞穴飯店，設有觀景露台", mapQuery: "Elegance Cave Suites Cappadocia" },
        { dates: "1/27-28", name: "夜間巴士", location: "移動中", note: "Kamil Koç / Flixbus 豪華大巴體驗", mapQuery: "" },
        { dates: "1/28-30", name: "Urkmez Hotel", location: "塞爾丘克", note: "火車站對面，旁邊即是古羅馬水道橋", mapQuery: "Urkmez Hotel Selcuk" }
    ],
    tips: [
        { title: "安全與防詐", content: "小心路邊擦鞋童掉刷子陷阱；拒絕塔克西姆區陌生人的『喝一杯』邀請；搭計程車請務必使用 BiTaksi 或 Uber。" },
        { title: "生活文化", content: "公廁多需收費 (5-10里拉)；自來水不可生飲；進入清真寺需脫鞋，女性需戴頭巾；伊斯坦堡是對貓友善的城市。" },
        { title: "氣候裝備", content: "卡帕多奇亞冬季極冷且泥濘，強烈建議穿著深紋防滑登山靴；棉堡需赤腳，建議自備塑膠袋裝鞋與厚襪保暖。" },
        { title: "交通簽證", content: "回程曼谷轉機接星宇航空(JX)需入境，請務必提前辦理泰國簽證；Denizli 巴士站寄放行李只收現金。" }
    ],
    itinerary: [
        {
            day: 1,
            date: "2026/01/21 (三)",
            title: "啟程：飛向星月國度",
            image: "https://images.unsplash.com/photo-1518182170546-07fa6eb2937e?q=80&w=2520&auto=format&fit=crop",
            details: [
                { time: "15:30", action: "抵達桃園機場 T1", desc: "確認行李直掛伊斯坦堡 (IST)" },
                { time: "18:20", action: "搭乘 TG635", desc: "飛往曼谷，機上休息" },
                { time: "21:45", action: "抵達曼谷轉機", desc: "走 Transfer 通道，無須入境" },
                { time: "23:45", action: "搭乘 TG900", desc: "前往伊斯坦堡，準備迎接長途飛行" }
            ]
        },
        {
            day: 2,
            date: "2026/01/22 (四)",
            title: "舊城初見與蘇非儀式",
            image: "https://images.unsplash.com/photo-1545459720-aacaf5090831?q=80&w=2535&auto=format&fit=crop", // Istanbul
            details: [
                { time: "06:05", action: "抵達伊斯坦堡 (IST)", desc: "入境後換匯 (€50)、買 Istanbulkart。搭乘 Havaist 巴士轉 T1 電車。" },
                { time: "09:30", action: "Check-in: Hotel Evsen", desc: "寄放行李，享用早餐，位置極佳。" },
                { time: "11:00", action: "地下水宮殿", desc: "探訪梅杜莎頭像與淚柱，感受千年神祕氛圍。" },
                { time: "14:00", action: "藍色清真寺 & 廣場", desc: "欣賞六根宣禮塔與伊茲尼克藍磁磚。" },
                { time: "19:00", action: "Hodjapasha 旋轉苦行僧", desc: "觀賞蘇非主義修行的神聖儀式 (UNESCO 文化遺產)。" }
            ]
        },
        {
            day: 3,
            date: "2026/01/23 (五)",
            title: "帝國榮耀與大巴扎",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2538&auto=format&fit=crop", // Hagia Sophia
            details: [
                { time: "09:00", action: "托普卡帕皇宮", desc: "參觀鄂圖曼帝國權力中心、后宮與帝國寶庫。" },
                { time: "11:30", action: "聖索菲亞大教堂", desc: "見證宗教融合的建築奇蹟，宏偉圓頂與鑲嵌畫。" },
                { time: "14:30", action: "大巴扎 (Grand Bazaar)", desc: "迷失在4000家店舖中，感受土耳其商業活力。" },
                { time: "17:00", action: "獨立大街 & 塔克西姆", desc: "搭乘紅色復古電車，體驗伊斯坦堡現代心臟。" }
            ]
        },
        {
            day: 4,
            date: "2026/01/24 (六)",
            title: "海峽遊船與跨洲移動",
            image: "https://images.unsplash.com/photo-1622587678768-3e4b779a5563?q=80&w=2574&auto=format&fit=crop", // Bosphorus
            details: [
                { time: "11:00", action: "博斯普魯斯海峽遊船", desc: "行駛於歐亞分界，欣賞跨海大橋與海邊皇宮。" },
                { time: "14:00", action: "埃及香料市集", desc: "沈浸在番紅花與咖啡香氣中。" },
                { time: "15:30", action: "跨洲移動 (前往亞洲區)", desc: "搭乘 Marmaray 鐵路轉地鐵 M4 線前往 SAW 機場附近飯店。" },
                { time: "18:00", action: "Check-in: Kaya Hotel", desc: "早點休息，準備明日早班機。" }
            ]
        },
        {
            day: 5,
            date: "2026/01/25 (日)",
            title: "飛向奇岩：卡帕多奇亞",
            image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2670&auto=format&fit=crop", // Cappadocia
            details: [
                { time: "07:15", action: "航班 VF3170", desc: "飛往開塞利 (Kayseri)。" },
                { time: "09:10", action: "抵達並轉乘巴士", desc: "搭乘 HAVAŞ 巴士前往格雷梅 (Göreme)。" },
                { time: "13:00", action: "格雷梅露天博物館", desc: "參觀岩窟教堂，重點：黑暗教堂 (Dark Church) 濕壁畫。" },
                { time: "15:00", action: "Galerie Ikman", desc: "網美地毯店，拍攝極具視覺張力的照片 (需付費)。" },
                { time: "17:00", action: "Check-in: Elegance Cave", desc: "入住道地洞穴飯店，享受露台景色。" }
            ]
        },
        {
            day: 6,
            date: "2026/01/26 (一)",
            title: "熱氣球夢幻飛行 & 紅線之旅",
            image: "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=2672&auto=format&fit=crop", // Balloons
            details: [
                { time: "05:00", action: "熱氣球飛行", desc: "高空俯瞰月球般地貌 (視天氣而定)。" },
                { time: "09:30", action: "烏奇沙城堡", desc: "攀登地區最高點，360度全景。" },
                { time: "11:00", action: "仙女煙囪 & 帕夏貝", desc: "觀賞戴著帽子的奇特岩石與僧侶谷。" },
                { time: "13:00", action: "想像谷 (Devrent)", desc: "尋找駱駝岩石，發揮想像力。" },
                { time: "15:00", action: "阿瓦諾斯陶藝", desc: "體驗紅河泥土製作的傳統拉胚工藝。" }
            ]
        },
        {
            day: 7,
            date: "2026/01/27 (二)",
            title: "綠線探險與夜間巴士",
            image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?q=80&w=2574&auto=format&fit=crop", // Ihlara Valley
            details: [
                { time: "09:30", action: "代林庫尤地下城", desc: "深入地下 85 米的避難所，嘆為觀止。" },
                { time: "11:30", action: "厄赫拉拉谷健行", desc: "漫步溪谷，參觀溪畔岩石教堂。" },
                { time: "13:00", action: "貝利斯爾瑪午餐", desc: "在溪水上的涼亭享用特色午餐。" },
                { time: "15:00", action: "塞利梅修道院", desc: "星際大戰場景靈感來源，巨大岩石建築群。" },
                { time: "20:10", action: "夜間巴士移動", desc: "搭乘 Kamil Koç / Flixbus 前往 Denizli (省下一晚住宿)。" }
            ]
        },
        {
            day: 8,
            date: "2026/01/28 (三)",
            title: "雪白棉堡與遺跡",
            image: "https://images.unsplash.com/photo-1558254881-22964e52d3f9?q=80&w=2670&auto=format&fit=crop", // Pamukkale
            details: [
                { time: "07:30", action: "抵達棉堡 (Pamukkale)", desc: "赤腳走在潔白石灰岩梯田，體驗藍色溫泉水。" },
                { time: "09:00", action: "希拉波里斯古城", desc: "參觀古羅馬圓形劇場與阿波羅神廟。" },
                { time: "14:28", action: "搭乘火車", desc: "前往 Selçuk (塞爾丘克)，享受土耳其鐵道風光。" },
                { time: "17:40", action: "抵達 Selçuk", desc: "入住 Urkmez Hotel，就在火車站對面。" }
            ]
        },
        {
            day: 9,
            date: "2026/01/29 (四)",
            title: "重返羅馬：以弗所",
            image: "https://images.unsplash.com/photo-1576483582498-84242637f909?q=80&w=2669&auto=format&fit=crop", // Ephesus
            details: [
                { time: "09:30", action: "以弗所遺跡 (Ephesus)", desc: "漫步庫里特斯大道，仰望塞爾蘇斯圖書館。" },
                { time: "11:30", action: "古羅馬大劇院", desc: "可容納 25,000 人的震撼建築。" },
                { time: "14:00", action: "聖約翰大教堂", desc: "拜訪使徒約翰長眠之地，昔日宏偉遺跡。" },
                { time: "18:00", action: "最後晚餐", desc: "在塞爾丘克小鎮享受悠閒的最後一晚。" }
            ]
        },
        {
            day: 10,
            date: "2026/01/30 (五)",
            title: "告別與返程",
            image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2598&auto=format&fit=crop", // Turkey Flag/General
            details: [
                { time: "08:00", action: "前往 ADB 機場", desc: "搭乘火車或接駁車前往伊士麥機場。" },
                { time: "10:40", action: "航班 TK2313", desc: "飛往伊斯坦堡 (IST)。" },
                { time: "16:30", action: "航班 TG901", desc: "飛往曼谷，告別美麗的土耳其。" },
                { time: "Note", action: "轉機提醒", desc: "抵達曼谷後需備妥泰國簽證。" }
            ]
        },
         {
            day: 11,
            date: "2026/01/31 (六)",
            title: "抵達溫暖的家",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop", // Plane wing
            details: [
                { time: "05:20", action: "抵達曼谷", desc: "入境領行李，辦理星宇航空 (JX) 登機手續。" },
                { time: "13:45", action: "航班 JX742", desc: "飛往台北。" },
                { time: "18:25", action: "抵達桃園機場", desc: "平安歸賦，期待下一次旅程。" }
            ]
        }
    ]
};