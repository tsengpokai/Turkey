const tripData = {
    traveler: "Tseng",
    dates: "2026/01/21 - 2026/01/31",
    days: [
        {
            id: 1,
            date: "1/21 (三)",
            title: "啟程：飛向星月國度",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
            summary: "台北 ➔ 曼谷 ➔ 伊斯坦堡",
            details: [
                { time: "15:30", title: "桃園機場 T1", desc: "確認行李直掛伊斯坦堡 (IST)。", type: "info" },
                { time: "18:20", title: "航班 TG635", desc: "前往曼谷。飛行時間約 3.5 小時。", type: "flight" },
                { time: "21:45", title: "抵達曼谷 (BKK)", desc: "走「Transfer」轉機通道，無需入境。", type: "transit" },
                { time: "23:45", title: "航班 TG900", desc: "前往伊斯坦堡。準備長途飛行。", type: "flight" }
            ]
        },
        {
            id: 2,
            date: "1/22 (四)",
            title: "伊斯坦堡：舊城初見",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop",
            summary: "地下水宮殿、藍色清真寺、旋轉苦行僧",
            hotel: { name: "Hotel Evsen", location: "Sirkeci 區 (步行至 T1 電車站 2 分鐘)", link: "Hotel Evsen Istanbul" },
            details: [
                { time: "06:05", title: "抵達伊斯坦堡 (IST)", desc: "入境後換匯 (€50)、買 Istanbulkart。搭乘 Havaist 巴士前往市區轉 T1 電車。", type: "transport" },
                { time: "09:30", title: "Check-in / 寄放行李", desc: "Hotel Evsen。享用早餐。", type: "hotel" },
                { time: "11:00", title: "地下水宮殿 (Basilica Cistern)", desc: "神祕幽暗的地下蓄水池。必看：梅杜莎頭像、淚柱。", image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800", type: "spot" },
                { time: "12:30", title: "午餐：Sultanahmet Köftecisi", desc: "必吃百年烤肉丸。", type: "food" },
                { time: "14:00", title: "藍色清真寺 & 廣場", desc: "六根宣禮塔的奇蹟。入內需脫鞋、女性需包頭巾。", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800", type: "spot" },
                { time: "19:00", title: "Hodjapasha 旋轉苦行僧", desc: "蘇非主義靈修儀式，靈魂與真主合一。", type: "show" }
            ]
        },
        {
            id: 3,
            date: "1/23 (五)",
            title: "帝國榮耀 & 大巴扎",
            image: "https://images.unsplash.com/photo-1564594736624-def7a109967b?q=80&w=800&auto=format&fit=crop",
            summary: "聖索菲亞、托普卡帕皇宮、獨立大街",
            hotel: { name: "Hotel Evsen", location: "Sirkeci 區", link: "Hotel Evsen Istanbul" },
            details: [
                { time: "09:00", title: "托普卡帕皇宮", desc: "鄂圖曼帝國政治中心。重點：后宮 (Harem)、帝國寶庫。", image: "https://images.unsplash.com/photo-1599588696773-5182068e4a9e?q=80&w=800", type: "spot" },
                { time: "11:30", title: "聖索菲亞大教堂", desc: "基督教與伊斯蘭教的融合奇蹟。", image: "https://images.unsplash.com/photo-1545459720-aacaf5090831?q=80&w=800", type: "spot" },
                { time: "14:30", title: "大巴扎 (Grand Bazaar)", desc: "世界最大市集。殺價請從 30-40% 開始。", type: "shop" },
                { time: "17:00", title: "塔克西姆 & 獨立大街", desc: "搭乘紅色復古電車，感受現代伊斯坦堡。", image: "https://images.unsplash.com/photo-1574602528996-0374e2d83f4f?q=80&w=800", type: "spot" }
            ]
        },
        {
            id: 4,
            date: "1/24 (六)",
            title: "橫跨歐亞 & 機場移動",
            image: "https://images.unsplash.com/photo-1622545597405-2d64098939c0?q=80&w=800&auto=format&fit=crop",
            summary: "博斯普魯斯遊船、香料市集、移動至亞洲區",
            hotel: { name: "Kaya Hotel", location: "鄰近 SAW 機場 (早班機專用)", link: "Kaya Hotel Istanbul" },
            details: [
                { time: "11:00", title: "博斯普魯斯海峽遊船", desc: "行駛於歐亞分界線，欣賞跨海大橋與海景宮殿。", type: "spot" },
                { time: "14:00", title: "埃及香料市集", desc: "購買香料、果乾的好地方。", type: "shop" },
                { time: "15:30", title: "前往 SAW 機場飯店", desc: "Marmaray 鐵路 轉 地鐵 M4 線。避開塞車。", type: "transport" },
                { time: "18:00", title: "Check-in", desc: "Kaya Hotel，準備明日早班機。", type: "hotel" }
            ]
        },
        {
            id: 5,
            date: "1/25 (日)",
            title: "飛向異星球：卡帕多奇亞",
            image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800&auto=format&fit=crop",
            summary: "國內線班機、露天博物館、地毯店",
            hotel: { name: "Elegance Cave Suites", location: "格雷梅 (Goreme) 洞穴飯店", link: "Elegance Cave Suites" },
            details: [
                { time: "07:15", title: "航班 VF3170", desc: "SAW 飛往 開塞利 (ASR)。", type: "flight" },
                { time: "09:10", title: "抵達並轉乘", desc: "搭乘 HAVAŞ 巴士前往格雷梅鎮。", type: "transport" },
                { time: "13:00", title: "格雷梅露天博物館", desc: "參觀岩窟教堂與濕壁畫。重點：黑暗教堂。", image: "https://images.unsplash.com/photo-1570533560790-a7d08c1a2f64?q=80&w=800", type: "spot" },
                { time: "15:00", title: "Galerie Ikman", desc: "網美地毯店，需付費拍攝，極具視覺張力。", type: "shop" }
            ]
        },
        {
            id: 6,
            date: "1/26 (一)",
            title: "熱氣球 & 紅線奇岩",
            image: "https://images.unsplash.com/photo-1507029372199-56c6f6e80b85?q=80&w=800&auto=format&fit=crop",
            summary: "熱氣球飛行、精靈煙囪、阿瓦諾斯陶藝",
            hotel: { name: "Elegance Cave Suites", location: "格雷梅", link: "Elegance Cave Suites" },
            details: [
                { time: "05:00", title: "熱氣球飛行", desc: "上帝視角俯瞰月球地貌 (視天氣而定)。", image: "https://images.unsplash.com/photo-1498967909384-91891b94d187?q=80&w=800", type: "spot" },
                { time: "09:30", title: "紅線之旅 (Red Tour)", desc: "烏奇沙城堡、帕夏貝仙女煙囪、想像谷。", type: "spot" },
                { time: "14:00", title: "阿瓦諾斯陶藝", desc: "體驗傳統紅河黏土製陶。", type: "activity" }
            ]
        },
        {
            id: 7,
            date: "1/27 (二)",
            title: "綠線探險 & 夜間移動",
            image: "https://images.unsplash.com/photo-1596395729780-60b573d4d388?q=80&w=800&auto=format&fit=crop",
            summary: "地下城、峽谷健行、夜間巴士",
            hotel: { name: "夜間巴士", location: "Kamil Koç / Flixbus", link: "Goreme Bus Station" },
            details: [
                { time: "09:30", title: "綠線之旅 (Green Tour)", desc: "代林庫尤地下城 (深85米)、厄赫拉拉峽谷健行。", image: "https://images.unsplash.com/photo-1652097985396-856c3619277d?q=80&w=800", type: "spot" },
                { time: "16:00", title: "烏魯爾馬克 / 鴿子谷", desc: "參觀星際大戰靈感場景。", type: "spot" },
                { time: "20:10", title: "夜間巴士", desc: "前往 Denizli (棉堡)。車程約 9 小時。", type: "transport" }
            ]
        },
        {
            id: 8,
            date: "1/28 (三)",
            title: "雪白棉堡 & 鐵道行",
            image: "https://images.unsplash.com/photo-1524195171736-2313620e7914?q=80&w=800&auto=format&fit=crop",
            summary: "棉堡石灰棚、希拉波里斯古城、火車往塞爾丘克",
            hotel: { name: "Urkmez Hotel", location: "Selçuk 火車站對面", link: "Urkmez Hotel Selcuk" },
            details: [
                { time: "07:30", title: "抵達 Denizli / 寄放行李", desc: "行李寄放於巴士站 B1 Emanetçi (只收現金)。轉小巴上棉堡。", type: "transport" },
                { time: "08:00", title: "棉堡 (Pamukkale)", desc: "夢幻的白色石灰岩梯田。需赤腳進入 (請備厚襪)。", image: "https://images.unsplash.com/photo-1614088053676-904d9c7595c4?q=80&w=800", type: "spot" },
                { time: "09:00", title: "希拉波里斯古城", desc: "古羅馬圓形劇場、阿波羅神廟。", type: "spot" },
                { time: "14:28", title: "火車：前往 Selçuk", desc: "舒適且便宜的交通方式。", type: "transport" },
                { time: "18:00", title: "Check-in", desc: "Urkmez Hotel。位於古羅馬水道橋旁。", type: "hotel" }
            ]
        },
        {
            id: 9,
            date: "1/29 (四)",
            title: "穿越時空：以弗所",
            image: "https://images.unsplash.com/photo-1555992828-ea35b5ce3d4f?q=80&w=800&auto=format&fit=crop",
            summary: "以弗所遺跡、塞爾蘇斯圖書館、聖約翰教堂",
            hotel: { name: "Urkmez Hotel", location: "Selçuk", link: "Urkmez Hotel Selcuk" },
            details: [
                { time: "09:30", title: "以弗所 (Ephesus)", desc: "地中海保存最完整的古羅馬城市。必看：圖書館、大劇院。", image: "https://images.unsplash.com/photo-1520502752179-88094054a1a6?q=80&w=800", type: "spot" },
                { time: "14:00", title: "聖約翰大教堂", desc: "使徒約翰埋葬地，昔日宏偉的拜占庭建築。", type: "spot" },
                { time: "18:00", title: "晚餐時光", desc: "在 Selçuk 小鎮享受最後的土耳其之夜。", type: "food" }
            ]
        },
        {
            id: 10,
            date: "1/30-31",
            title: "滿載而歸",
            image: "https://images.unsplash.com/photo-1569389397653-c0353237ee32?q=80&w=800&auto=format&fit=crop",
            summary: "伊士麥飛伊斯坦堡 ➔ 曼谷 ➔ 台北",
            details: [
                { time: "10:40", title: "航班 TK2313", desc: "伊士麥 (ADB) ➔ 伊斯坦堡。", type: "flight" },
                { time: "16:30", title: "航班 TG901", desc: "伊斯坦堡 ➔ 曼谷。需備妥泰國簽證。", type: "flight" },
                { time: "13:45 (+1)", title: "航班 JX742", desc: "曼谷 ➔ 台北。需入境領行李重掛。", type: "flight" },
                { time: "18:25", title: "抵達溫暖的家", desc: "旅程圓滿結束。", type: "home" }
            ]
        }
    ],
    tips: [
        { title: "🔴 安全防範", content: "小心擦鞋童掉刷子陷阱；拒絕陌生人邀請去酒吧；計程車請用 BiTaksi 或 Uber，勿路邊攔車。" },
        { title: "🟢 簽證與交通", content: "回程曼谷轉機搭星宇需入境，務必辦理泰簽。Denizli 寄放行李只收現金。插座為 220V 歐規雙圓孔。" },
        { title: "🟡 穿著與裝備", content: "卡帕多奇亞寒冷可能有雪，務必穿深紋防滑靴。棉堡水冷，請帶塑膠袋裝鞋與乾厚襪子。" },
        { title: "🔵 文化禮儀", content: "清真寺需脫鞋，女性需包頭巾。廁所多需收費，請備零錢。可以摸貓，但請尊重牠們。" }
    ]
};