const tripData = {
    traveler: "Tseng",
    summary: {
        dates: "2026/01/21 - 2026/01/31",
        distance: "19,500 km"
    },
    // 統整後的注意事項
    essentials: [
        { icon: "fa-shield-alt", title: "安全與防騙", text: "伊斯坦堡觀光區(尤其獨立大街)嚴拒陌生人搭訕酒吧邀約。遇到擦鞋童掉刷子請直接繞過。計程車務必使用 BiTaksi 或 Uber。" },
        { icon: "fa-passport", title: "簽證與文件", text: "回程曼谷轉機(星宇)需入境領行李，請預先備妥泰國簽證。土耳其免簽。" },
        { icon: "fa-snowflake", title: "冬季裝備", text: "卡帕多奇亞1月極冷且有雪，必須穿深紋防滑防水靴(精靈煙囪泥濘)。棉堡需赤腳，建議帶塑膠袋裝鞋+乾厚襪子。" },
        { icon: "fa-mosque", title: "文化禮儀", text: "清真寺入內脫鞋、女性包頭巾。公廁多收費(5-10里拉)，請備零錢。" },
        { icon: "fa-plug", title: "電子電源", text: "電壓220V，歐規雙圓孔插座(Type F)。Denizli巴士站寄放行李只收現金。" }
    ],
    days: [
        {
            id: 1,
            date: "1/21 (三)",
            title: "啟程：飛向星月國度",
            subtitle: "Taipei ➔ Bangkok ➔ Istanbul",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
            desc: "準備好心情，展開長途飛行。在曼谷短暫轉機後直飛伊斯坦堡。",
            transport: {
                title: "航班資訊 (Flight)",
                items: [
                    { label: "台北 - 曼谷", value: "TG635 (18:20 - 21:45)", note: "泰航直掛，免入境" },
                    { label: "曼谷 - 伊斯坦堡", value: "TG900 (23:45 - 06:05+1)", note: "機上過夜，長途飛行" }
                ]
            },
            hotel: null, // 機上過夜
            timeline: [
                { time: "15:30", title: "桃園機場第一航廈", desc: "辦理登機手續，確認行李直掛伊斯坦堡 (IST)。", icon: "passport" },
                { time: "18:20", title: "起飛：TG635", desc: "前往曼谷。飛行時間約 3.5 小時，機上享用晚餐。", icon: "plane" },
                { time: "21:45", title: "抵達曼谷 (BKK)", desc: "跟隨「Transfer」指標，通過安檢前往登機門，無需辦理入境。", icon: "walking" },
                { time: "23:45", title: "起飛：TG900", desc: "前往伊斯坦堡。建議在機上多喝水、敷面膜，爭取睡眠時間調整時差。", icon: "plane" }
            ]
        },
        {
            id: 2,
            date: "1/22 (四)",
            title: "拜占庭初見 & 蘇非旋轉",
            subtitle: "Istanbul Old City",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200",
            desc: "抵達伊斯坦堡舊城區，探訪地下水宮殿與藍色清真寺，夜賞神秘旋轉舞。",
            transport: {
                title: "市區移動 (Local)",
                items: [
                    { label: "機場 - 市區", value: "Havaist 巴士 ➔ T1 電車", note: "需買 Istanbulkart" }
                ]
            },
            hotel: { name: "Hotel Evsen", area: "Sirkeci Old City", link: "Hotel Evsen Istanbul" },
            timeline: [
                { time: "06:05", title: "抵達伊斯坦堡 (IST)", desc: "入境流程。於機場換匯(€50備用)、購買交通卡 Istanbulkart。", icon: "plane-arrival" },
                { time: "09:30", title: "飯店 Check-in / 寄放行李", desc: "前往 Hotel Evsen。享用第一頓土耳其早餐(Cigkofte/紅茶)。", icon: "hotel" },
                { time: "11:00", title: "地下水宮殿 (Basilica Cistern)", desc: "探索336根大理石柱的地下奇蹟。必找：梅杜莎頭像、淚柱。", image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800", icon: "landmark" },
                { time: "12:30", title: "午餐：Sultanahmet Köftecisi", desc: "百年的美味烤肉丸店，必點 Ayran (鹹優格)。", icon: "utensils" },
                { time: "14:00", title: "藍色清真寺 & 廣場", desc: "欣賞六根宣禮塔與內部絕美的伊茲尼克藍磁磚。", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800", icon: "mosque" },
                { time: "15:30", title: "飯店休憩", desc: "回房稍作梳洗，調整長途飛行後的疲憊。", icon: "bed" },
                { time: "19:00", title: "Hodjapasha 旋轉苦行僧", desc: "觀賞 Mevlevi Sema 儀式，感受靈魂淨化與真主合一的過程。", image: "https://images.unsplash.com/photo-1588602677274-1234567890ab?q=80&w=800", icon: "ticket-alt" }, // Placeholder ID
                { time: "21:00", title: "舊城區散策", desc: "漫步夜晚的 Sirkeci 街道，品嘗街頭烤栗子。", icon: "moon" }
            ]
        },
        {
            id: 3,
            date: "1/23 (五)",
            title: "帝國榮耀 & 大巴扎殺價戰",
            subtitle: "Hagia Sophia & Grand Bazaar",
            image: "https://images.unsplash.com/photo-1564594736624-def7a109967b?q=80&w=1200",
            desc: "見證聖索菲亞的宗教融合，深入大巴扎體驗千年的商業活力，晚間前往新城區。",
            transport: { title: "市區移動", items: [{ label: "舊城 - 新城", value: "T1 電車 ➔ 紅色復古電車", note: "體驗經典路線" }] },
            hotel: { name: "Hotel Evsen", area: "Sirkeci Old City", link: "Hotel Evsen Istanbul" },
            timeline: [
                { time: "09:00", title: "托普卡帕皇宮 (Topkapi Palace)", desc: "參觀蘇丹的居所與神秘后宮(Harem)。俯瞰金角灣美景。", image: "https://images.unsplash.com/photo-1599588696773-5182068e4a9e?q=80&w=800", icon: "crown" },
                { time: "11:30", title: "聖索菲亞大教堂 (Hagia Sophia)", desc: "基督教鑲嵌畫與伊斯蘭書法的並存。感受巨大的圓頂震撼。", image: "https://images.unsplash.com/photo-1545459720-aacaf5090831?q=80&w=800", icon: "place-of-worship" },
                { time: "14:30", title: "大巴扎 (Grand Bazaar)", desc: "世界最大有頂市集。購買瓷盤、燈飾。切記：殺價從3折開始。", image: "https://images.unsplash.com/photo-1596425988185-3e284f68697c?q=80&w=800", icon: "shopping-bag" },
                { time: "17:00", title: "塔克西姆廣場 & 獨立大街", desc: "伊斯坦堡香榭大道。搭乘紅色電車，逛時尚品牌與甜點店。", image: "https://images.unsplash.com/photo-1574602528996-0374e2d83f4f?q=80&w=800", icon: "train" },
                { time: "19:30", title: "晚餐：土耳其烤肉 (Kebab)", desc: "在獨立大街巷弄尋找評價高的烤肉餐廳。", icon: "utensils" }
            ]
        },
        {
            id: 4,
            date: "1/24 (六)",
            title: "橫跨歐亞 & 機場移動",
            subtitle: "Bosphorus Cruise & Asian Side",
            image: "https://images.unsplash.com/photo-1622545597405-2d64098939c0?q=80&w=1200",
            desc: "搭船暢遊博斯普魯斯海峽，下午跨越至亞洲區，入住機場飯店準備早班機。",
            transport: { 
                title: "跨洲移動 (Cross-Continental)", 
                items: [
                    { label: "歐洲 - 亞洲", value: "Marmaray 鐵路 ➔ 地鐵 M4", note: "前往 SAW 機場飯店" }
                ] 
            },
            hotel: { name: "Kaya Hotel", area: "Near SAW Airport", link: "Kaya Hotel Istanbul" },
            timeline: [
                { time: "11:00", title: "博斯普魯斯海峽遊船", desc: "Marine Travel Agency。左手歐洲、右手亞洲，欣賞沿岸皇宮。", icon: "ship" },
                { time: "14:00", title: "埃及香料市集 (Spice Bazaar)", desc: "充滿異國香氣的L型市集。購買番紅花、無花果乾的最佳地點。", image: "https://images.unsplash.com/photo-1541249339316-2d1748281358?q=80&w=800", icon: "leaf" },
                { time: "15:30", title: "跨洲大移動", desc: "提領行李，搭乘 Marmaray 海底鐵路轉地鐵 M4 線前往亞洲區。", icon: "subway" },
                { time: "18:00", title: "Check-in: Kaya Hotel", desc: "鄰近 SAW 機場。晚餐於飯店附近簡單解決，早點休息。", icon: "suitcase" }
            ]
        },
        {
            id: 5,
            date: "1/25 (日)",
            title: "飛向異星球：卡帕多奇亞",
            subtitle: "Fly to Cappadocia",
            image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=1200",
            desc: "搭乘國內線抵達奇岩怪石的世界。入住真正的洞穴飯店，參觀露天博物館。",
            transport: { 
                title: "國內線班機 (Flight)", 
                items: [
                    { label: "伊斯坦堡 - 開塞利", value: "VF3170 (07:15 - 08:40)", note: "SAW 機場出發" },
                    { label: "機場接駁", value: "HAVAŞ 巴士", note: "開塞利機場 ➔ 格雷梅" }
                ] 
            },
            hotel: { name: "Elegance Cave Suites", area: "Goreme", link: "Elegance Cave Suites" },
            timeline: [
                { time: "05:00", title: "前往 SAW 機場", desc: "飯店退房，搭計程車前往機場(車程短)。", icon: "taxi" },
                { time: "07:15", title: "起飛：VF3170", desc: "飛往土耳其心臟地帶。", icon: "plane" },
                { time: "09:10", title: "抵達並轉乘", desc: "抵達 ASR 機場，搭乘接駁車前往格雷梅 (Goreme)。窗外風景開始變成黃土與奇岩。", icon: "bus" },
                { time: "13:00", title: "格雷梅露天博物館", desc: "世界遺產。參觀岩壁中的教堂。重點必看：黑暗教堂 (色彩最鮮豔)。", image: "https://images.unsplash.com/photo-1570533560790-a7d08c1a2f64?q=80&w=800", icon: "landmark" },
                { time: "15:00", title: "Galerie Ikman", desc: "網美地毯店。滿地堆疊的基里姆地毯，付費拍攝專業大片。", icon: "camera" },
                { time: "18:30", title: "陶甕料理晚餐 (Testi Kebab)", desc: "需敲碎陶罐才能吃的在地特色料理。", icon: "fire" }
            ]
        },
        {
            id: 6,
            date: "1/26 (一)",
            title: "夢幻熱氣球 & 紅線奇岩",
            subtitle: "Hot Air Balloon & Red Tour",
            image: "https://images.unsplash.com/photo-1507029372199-56c6f6e80b85?q=80&w=1200",
            desc: "清晨的重頭戲：熱氣球！隨後進行紅線之旅，探索像駱駝、精靈煙囪的岩石。",
            transport: { title: "當地包車/跟團", items: [{ label: "紅線之旅", value: "Local Tour Bus", note: "飯店接送" }] },
            hotel: { name: "Elegance Cave Suites", area: "Goreme", link: "Elegance Cave Suites" },
            timeline: [
                { time: "05:00", title: "熱氣球飛行 (Hot Air Balloon)", desc: "一生必體驗一次。在日出中俯瞰如月球般的地貌 (視天氣許可)。", image: "https://images.unsplash.com/photo-1498967909384-91891b94d187?q=80&w=800", icon: "hot-air-balloon" },
                { time: "09:30", title: "烏奇沙城堡 (Uchisar Castle)", desc: "紅線之旅起點。巨大的多孔岩石要塞，該區最高點。", image: "https://images.unsplash.com/photo-1669280961833-25586682664d?q=80&w=800", icon: "chess-rook" },
                { time: "11:00", title: "帕夏貝 (Paşabağ)", desc: "又稱僧侶谷，最標準的「精靈煙囪」聚集地。", icon: "tree" },
                { time: "12:30", title: "想像谷 (Devrent Valley)", desc: "發揮想像力，尋找那是駱駝、那是拿破崙帽子的岩石。", icon: "brain" },
                { time: "14:00", title: "阿瓦諾斯陶藝", desc: "紅河流經的小鎮，體驗腳踢式拉胚。", icon: "paint-brush" },
                { time: "19:00", title: "自由時間/休息", desc: "早起太累，今晚建議在飯店露台看夜景放鬆。", icon: "wine-glass" }
            ]
        },
        {
            id: 7,
            date: "1/27 (二)",
            title: "綠線探險 & 夜間巴士",
            subtitle: "Green Tour & Night Bus",
            image: "https://images.unsplash.com/photo-1596395729780-60b573d4d388?q=80&w=1200",
            desc: "深入地下城探險，在峽谷溪流旁午餐。晚上搭乘長途夜巴前往棉堡。",
            transport: { 
                title: "長途移動 (Long Distance)", 
                items: [
                    { label: "夜間巴士", value: "Kamil Koç / Flixbus (20:10)", note: "前往 Denizli，車程約 9 小時" }
                ] 
            },
            hotel: { name: "夜間巴士", area: "On the Road", link: "Goreme Bus Station" },
            timeline: [
                { time: "09:30", title: "格雷梅全景台", desc: "綠線之旅出發。拍攝整個格雷梅鎮的最佳角度。", icon: "camera" },
                { time: "10:30", title: "代林庫尤地下城 (Derinkuyu)", desc: "深達85公尺的避難所。參觀地下釀酒廠、教堂、學校。", image: "https://images.unsplash.com/photo-1652097985396-856c3619277d?q=80&w=800", icon: "dungeon" },
                { time: "13:00", title: "厄赫拉拉谷 (Ihlara Valley)", desc: "峽谷健行。午餐在貝利斯爾瑪 (Belisırma) 的溪上涼亭享用。", icon: "hiking" },
                { time: "16:00", title: "塞利梅修道院 (Selime)", desc: "依山而建的巨大岩石建築群，星際大戰場景靈感。", icon: "jedi" },
                { time: "17:30", title: "鴿子谷 (Pigeon Valley)", desc: "觀賞岩壁上密密麻麻的古代鴿舍。", icon: "dove" },
                { time: "20:10", title: "搭乘夜間巴士", desc: "前往巴士總站 (Otogar)。準備長途移動至 Denizli。車上有水與點心。", icon: "bus" }
            ]
        },
        {
            id: 8,
            date: "1/28 (三)",
            title: "雪白棉堡 & 鐵道行",
            subtitle: "Pamukkale & Train to Selcuk",
            image: "https://images.unsplash.com/photo-1524195171736-2313620e7914?q=80&w=1200",
            desc: "在清晨抵達棉堡，赤腳走在白色石灰棚。下午搭火車前往古城塞爾丘克。",
            transport: { 
                title: "火車移動 (Train)", 
                items: [
                    { label: "Denizli - Selçuk", value: "TCDD 火車 (14:28)", note: "舒適便宜，約 3.5 小時" }
                ] 
            },
            hotel: { name: "Urkmez Hotel", area: "Selçuk City Center", link: "Urkmez Hotel Selcuk" },
            timeline: [
                { time: "07:30", title: "抵達 Denizli", desc: "在巴士站 B1 (Emanetçi) 寄放行李。轉搭小巴上棉堡。", icon: "suitcase" },
                { time: "08:00", title: "棉堡 (Pamukkale)", desc: "趁遊客還少時進入。藍色溫泉水與白色石灰岩梯田交織的夢幻景色。", image: "https://images.unsplash.com/photo-1614088053676-904d9c7595c4?q=80&w=800", icon: "water" },
                { time: "09:30", title: "希拉波里斯古城 (Hierapolis)", desc: "古羅馬溫泉療養聖地。參觀圓形劇場與埃及豔后池(Cleopatra Pool)。", icon: "landmark" },
                { time: "12:30", title: "午餐/取行李", desc: "下山回到巴士站，簡單午餐並取回行李。", icon: "utensils" },
                { time: "14:28", title: "搭乘火車", desc: "前往 Selçuk。火車沿途欣賞土耳其鄉村風光。", icon: "train" },
                { time: "18:00", title: "抵達 Selçuk & Check-in", desc: "Urkmez Hotel。飯店位於古羅馬水道橋旁，充滿歷史感。", icon: "hotel" }
            ]
        },
        {
            id: 9,
            date: "1/29 (四)",
            title: "穿越時空：以弗所",
            subtitle: "Ancient City Ephesus",
            image: "https://images.unsplash.com/photo-1555992828-ea35b5ce3d4f?q=80&w=1200",
            desc: "漫步在保存最完整的古羅馬城市，感受千年前的繁華。最後的土耳其晚餐。",
            transport: { title: "當地移動", items: [{ label: "Selçuk - Ephesus", value: "小巴 (Dolmus) 或 步行", note: "距離很近" }] },
            hotel: { name: "Urkmez Hotel", area: "Selçuk City Center", link: "Urkmez Hotel Selcuk" },
            timeline: [
                { time: "09:30", title: "以弗所遺跡 (Ephesus)", desc: "地中海東部保存最完整的古城。必看：塞爾蘇斯圖書館、2.5萬人大劇場。", image: "https://images.unsplash.com/photo-1520502752179-88094054a1a6?q=80&w=800", icon: "columns" },
                { time: "12:00", title: "庫里特斯大道", desc: "走在大理石鋪成的街道上，兩旁是神廟與富豪住宅遺跡。", icon: "road" },
                { time: "14:00", title: "聖約翰大教堂", desc: "使徒約翰的長眠之地，昔日宏偉的拜占庭教堂。", image: "https://images.unsplash.com/photo-1565096570390-57f202305599?q=80&w=800", icon: "cross" },
                { time: "16:00", title: "伊薩貝清真寺 (Isa Bey)", desc: "塞爾柱土耳其時期的建築傑作。", icon: "mosque" },
                { time: "19:00", title: "告別晚宴", desc: "在 Selçuk 小鎮挑選一家氣氛好的餐廳，享用最後的土耳其之夜。", icon: "glass-cheers" }
            ]
        },
        {
            id: 10,
            date: "1/30-31",
            title: "滿載而歸",
            subtitle: "Izmir ➔ Istanbul ➔ Taipei",
            image: "https://images.unsplash.com/photo-1569389397653-c0353237ee32?q=80&w=1200",
            desc: "經由伊士麥飛往伊斯坦堡，再轉機曼谷回台北。旅程的終點，回憶的起點。",
            transport: { 
                title: "回程航班 (Return Flights)", 
                items: [
                    { label: "伊士麥 - 伊斯坦堡", value: "TK2313 (10:40 - 12:05)", note: "ADB ➔ IST" },
                    { label: "伊斯坦堡 - 曼谷", value: "TG901 (16:30 - 05:20+1)", note: "需泰簽" },
                    { label: "曼谷 - 台北", value: "JX742 (13:45 - 18:25)", note: "星宇航空" }
                ] 
            },
            hotel: { name: "甜蜜的家", area: "Taipei", link: "" },
            timeline: [
                { time: "08:00", title: "前往伊士麥機場 (ADB)", desc: "搭乘火車或接駁車前往 Izmir 機場。", icon: "train" },
                { time: "10:40", title: "起飛：TK2313", desc: "國內線飛往伊斯坦堡。", icon: "plane" },
                { time: "12:05", title: "抵達 IST / 轉機", desc: "領取行李(若無直掛)，重新辦理國際線登機。最後逛一次免稅店。", icon: "shopping-bag" },
                { time: "16:30", title: "起飛：TG901", desc: "再見土耳其！前往曼谷。", icon: "plane-departure" },
                { time: "05:20 (+1)", title: "抵達曼谷 / 入境", desc: "入境泰國領行李，重新掛星宇航空 (JX742)。", icon: "passport" },
                { time: "13:45", title: "起飛：JX742", desc: "星宇航空飛往台北。", icon: "plane" },
                { time: "18:25", title: "抵達桃園機場", desc: "歡迎回家！", icon: "home" }
            ]
        }
    ]
};