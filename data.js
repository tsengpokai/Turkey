// data.js
const travelData = {
    traveler: "Tseng",
    dates: "2026/01/21 - 2026/01/31",
    totalDistance: "19,500 km",
    flights: [
        { date: "1/21", route: "台北 TPE ➔ 曼谷 BKK", flight: "TG635", time: "18:20 - 21:45", note: "泰航直掛，免入境" },
        { date: "1/21", route: "曼谷 BKK ➔ 伊斯坦堡 IST", flight: "TG900", time: "23:45 - 06:05(+1)", note: "同航廈轉機" },
        { date: "1/25", route: "伊斯坦堡 SAW ➔ 開塞利 ASR", flight: "VF3170", time: "07:15 - 08:40", note: "注意：SAW為亞洲岸機場" },
        { date: "1/30", route: "伊士麥 ADB ➔ 伊斯坦堡 IST", flight: "TK2313", time: "10:40 - 12:05", note: "國內線" },
        { date: "1/30", route: "伊斯坦堡 IST ➔ 曼谷 BKK", flight: "TG901", time: "16:30 - 05:20(+1)", note: "需備妥泰國簽證" },
        { date: "1/31", route: "曼谷 BKK ➔ 台北 TPE", flight: "JX742", time: "13:45 - 18:25", note: "需入境領行李重掛" }
    ],
    hotels: [
        { dates: "1/22-24", name: "Hotel Evsen", location: "伊斯坦堡 (舊城)", note: "Sirkeci 區，步行至 T1 電車站僅 2 分鐘", mapQuery: "Hotel Evsen Istanbul" },
        { dates: "1/24-25", name: "Kaya Hotel", location: "伊斯坦堡 (亞洲)", note: "鄰近 SAW 機場，早班機專用", mapQuery: "Kaya Hotel Istanbul" },
        { dates: "1/25-27", name: "Elegance Cave Suites", location: "格雷梅 (卡帕多奇亞)", note: "道地洞穴飯店，設有觀景露台", mapQuery: "Elegance Cave Suites Cappadocia" },
        { dates: "1/27-28", name: "豪華夜間巴士", location: "移動中", note: "Kamil Koç / Flixbus (寬敞 2+1 座位)", mapQuery: "" },
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
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop",
            details: [
                { time: "15:30", action: "抵達桃園機場第一航廈", desc: "前往泰國航空櫃台報到，確認行李直掛伊斯坦堡 (IST)。" },
                { time: "18:20", action: "搭乘 TG635 飛往曼谷", desc: "飛行時間約 3.5 小時，機上享用晚餐。" },
                { time: "21:45", action: "抵達曼谷蘇凡納布 (BKK)", desc: "下機後請循「Transfer」指標走轉機通道，無需辦理入境簽證。" },
                { time: "23:45", action: "搭乘 TG900 飛往伊斯坦堡", desc: "長途飛行約 11 小時，建議在機上充分休息。" }
            ]
        },
        {
            day: 2,
            date: "2026/01/22 (四)",
            title: "舊城初見與蘇非儀式",
            image: "https://images.unsplash.com/photo-1545459720-aacaf5090831?q=80&w=2535&auto=format&fit=crop",
            details: [
                { time: "06:05", action: "抵達伊斯坦堡 (IST)", desc: "入境後於機場換匯 (€50)、購買 Istanbulkart 交通卡。" },
                { time: "07:30", action: "機場巴士移動", desc: "搭乘 Havaist 巴士 (HVIST-12) 前往 Aksaray，轉乘 T1 電車至 Sirkeci。" },
                { time: "09:30", action: "Check-in: Hotel Evsen", desc: "寄放行李，享用土耳其式早餐。飯店位置極佳，步行至電車站僅2分鐘。" },
                { time: "11:00", action: "地下水宮殿 Basilica Cistern", desc: "探訪梅杜莎頭像與淚柱，感受千年神祕氛圍。" },
                { time: "12:30", action: "午餐：Sultanahmet Köftecisi", desc: "品嚐著名的百年烤肉丸老店。" },
                { time: "14:00", action: "藍色清真寺 & 廣場", desc: "欣賞六根宣禮塔與內部精美的伊茲尼克藍磁磚。" },
                { time: "19:00", action: "Hodjapasha 旋轉苦行僧", desc: "觀賞蘇非主義修行的神聖儀式 (UNESCO 文化遺產)。" }
            ]
        },
        {
            day: 3,
            date: "2026/01/23 (五)",
            title: "帝國榮耀與大巴扎",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2538&auto=format&fit=crop",
            details: [
                { time: "09:00", action: "托普卡帕皇宮 Topkapi Palace", desc: "參觀鄂圖曼帝國權力中心。重點：后宮 (Harem) 與帝國寶庫。" },
                { time: "11:30", action: "聖索菲亞大教堂 Hagia Sophia", desc: "見證宗教融合的建築奇蹟，宏偉圓頂與鑲嵌畫。" },
                { time: "14:30", action: "大巴扎 Grand Bazaar", desc: "迷失在4000家店舖中，購買紀念品與體驗殺價樂趣。" },
                { time: "17:00", action: "獨立大街 & 塔克西姆", desc: "搭乘 T1 轉 F1 纜車上山，體驗伊斯坦堡現代心臟與復古電車。" }
            ]
        },
        {
            day: 4,
            date: "2026/01/24 (六)",
            title: "海峽遊船與跨洲移動",
            image: "https://images.unsplash.com/photo-1622587678768-3e4b779a5563?q=80&w=2574&auto=format&fit=crop",
            details: [
                { time: "11:00", action: "博斯普魯斯海峽遊船", desc: "搭乘 Eminönü 碼頭出發的遊船，行駛於歐亞分界，欣賞跨海大橋。" },
                { time: "14:00", action: "埃及香料市集 Spice Bazaar", desc: "沈浸在番紅花與土耳其咖啡的香氣中，採買果乾與軟糖。" },
                { time: "15:30", action: "跨洲移動 (前往亞洲區)", desc: "搭乘 Marmaray 鐵路穿越海底隧道，轉地鐵 M4 線前往機場方向。" },
                { time: "18:00", action: "Check-in: Kaya Hotel", desc: "入住鄰近 SAW 機場飯店，早點休息，準備明日早班機。" }
            ]
        },
        {
            day: 5,
            date: "2026/01/25 (日)",
            title: "飛向奇岩：卡帕多奇亞",
            image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2670&auto=format&fit=crop",
            details: [
                { time: "07:15", action: "搭乘 VF3170 飛往開塞利", desc: "從 SAW 機場起飛，約 1 小時 25 分抵達。" },
                { time: "09:10", action: "機場接駁巴士", desc: "搭乘 HAVAŞ 或預約接駁車前往格雷梅 (Göreme)，車程約 1 小時。" },
                { time: "13:00", action: "格雷梅露天博物館", desc: "參觀岩窟教堂，務必進入「黑暗教堂 (Dark Church)」欣賞保存最完整的濕壁畫。" },
                { time: "15:00", action: "Galerie Ikman 地毯店", desc: "網美必訪地毯店，拍攝極具視覺張力的照片 (需付費)。" },
                { time: "17:00", action: "入住洞穴飯店", desc: "Check-in: Elegance Cave Suites，在露台享受日落美景。" }
            ]
        },
        {
            day: 6,
            date: "2026/01/26 (一)",
            title: "熱氣球夢幻飛行 & 紅線之旅",
            image: "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=2672&auto=format&fit=crop",
            details: [
                { time: "05:00", action: "熱氣球飛行 (視天氣)", desc: "清晨接送，高空俯瞰月球般地貌，人生必解鎖清單。" },
                { time: "09:30", action: "紅線之旅：烏奇沙城堡", desc: "攀登地區最高點，360度全景俯瞰卡帕多奇亞。" },
                { time: "11:00", action: "仙女煙囪 & 帕夏貝", desc: "觀賞戴著帽子的奇特岩石與僧侶谷。" },
                { time: "13:00", action: "想像谷 (Devrent Valley)", desc: "尋找駱駝岩石，發揮想像力。" },
                { time: "15:00", action: "阿瓦諾斯陶藝", desc: "體驗紅河泥土製作的傳統腳踢拉胚工藝。" }
            ]
        },
        {
            day: 7,
            date: "2026/01/27 (二)",
            title: "綠線探險與夜間巴士",
            image: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?q=80&w=2574&auto=format&fit=crop", // 已確認為 Ihlara Valley
            details: [
                { time: "09:30", action: "代林庫尤地下城", desc: "深入地下 85 米的避難所，嘆為觀止的通風井與生活空間。" },
                { time: "11:30", action: "厄赫拉拉谷健行 (Ihlara)", desc: "漫步溪谷，參觀溪畔岩石教堂，享受綠意盎然。" },
                { time: "13:00", action: "貝利斯爾瑪午餐", desc: "在溪水上的涼亭享用特色鱒魚午餐。" },
                { time: "15:00", action: "塞利梅修道院", desc: "星際大戰場景靈感來源，依山而建的巨大岩石建築群。" },
                { time: "20:10", action: "夜間巴士移動", desc: "前往巴士站，搭乘 Kamil Koç 或 Flixbus 前往 Denizli (省下一晚住宿)。" }
            ]
        },
        {
            day: 8,
            date: "2026/01/28 (三)",
            title: "雪白棉堡與遺跡",
            image: "https://images.unsplash.com/photo-1558254881-22964e52d3f9?q=80&w=2670&auto=format&fit=crop",
            details: [
                { time: "07:30", action: "抵達 Denizli", desc: "於巴士站寄放行李 (注意：只收里拉現金)，搭乘小巴前往棉堡入口。" },
                { time: "08:30", action: "棉堡 (Pamukkale)", desc: "赤腳走在潔白石灰岩梯田，體驗溫暖的藍色溫泉水。" },
                { time: "10:00", action: "希拉波里斯古城", desc: "參觀古羅馬圓形劇場、大型墓地與阿波羅神廟。" },
                { time: "14:28", action: "搭乘火車前往 Selçuk", desc: "享受土耳其舒適的鐵道風光，車程約 3 小時。" },
                { time: "17:40", action: "抵達塞爾丘克", desc: "入住 Urkmez Hotel，就在火車站對面，交通極度便利。" }
            ]
        },
        {
            day: 9,
            date: "2026/01/29 (四)",
            title: "重返羅馬：以弗所",
            image: "https://images.unsplash.com/photo-1576483582498-84242637f909?q=80&w=2669&auto=format&fit=crop",
            details: [
                { time: "09:30", action: "以弗所遺跡 (Ephesus)", desc: "搭小巴前往南門。漫步庫里特斯大道，仰望塞爾蘇斯圖書館。" },
                { time: "11:30", action: "古羅馬大劇院", desc: "可容納 25,000 人的震撼建築，曾是聖保羅傳教處。" },
                { time: "14:00", action: "聖約翰大教堂", desc: "拜訪使徒約翰長眠之地，俯瞰阿亞索魯克城堡。" },
                { time: "18:00", action: "最後的晚餐", desc: "在塞爾丘克小鎮享用愛琴海風味晚餐，度過悠閒夜晚。" }
            ]
        },
        {
            day: 10,
            date: "2026/01/30 (五)",
            title: "告別與返程",
            image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2598&auto=format&fit=crop",
            details: [
                { time: "08:00", action: "前往 ADB 機場", desc: "搭乘火車或 HAVAŞ 接駁車前往伊士麥機場。" },
                { time: "10:40", action: "搭乘 TK2313 飛往伊斯坦堡", desc: "返回伊斯坦堡 IST 機場。" },
                { time: "16:30", action: "搭乘 TG901 飛往曼谷", desc: "辦理出境手續，告別美麗的土耳其。" },
                { time: "Note", action: "曼谷轉機提醒", desc: "抵達後需入境領行李，請備妥泰國簽證。" }
            ]
        },
        {
            day: 11,
            date: "2026/01/31 (六)",
            title: "抵達溫暖的家",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop",
            details: [
                { time: "05:20", action: "抵達曼谷 BKK", desc: "入境領取行李，前往星宇航空 (JX) 櫃台重新報到。" },
                { time: "13:45", action: "搭乘 JX742 飛往台北", desc: "體驗星宇航空服務，返回台灣。" },
                { time: "18:25", action: "抵達桃園機場 TPE", desc: "平安歸賦，期待下一次旅程。" }
            ]
        }
    ]
};