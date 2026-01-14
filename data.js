/* data.js - 核心行程數據庫 */
const tripData = {
    traveler: "Mr. Tseng",
    dates: "2026/01/21 - 2026/01/31",
    summary: {
        flights: [
            { date: "1/21", route: "TPE ➔ BKK", code: "TG635", time: "18:20 - 21:45" },
            { date: "1/21", route: "BKK ➔ IST", code: "TG900", time: "23:45 - 06:05(+1)" },
            { date: "1/25", route: "SAW ➔ ASR", code: "VF3170", time: "07:15 - 08:40" },
            { date: "1/30", route: "ADB ➔ IST", code: "TK2313", time: "10:40 - 12:05" },
            { date: "1/30", route: "IST ➔ BKK", code: "TG901", time: "16:30 - 05:20(+1)" },
            { date: "1/31", route: "BKK ➔ TPE", code: "JX742", time: "13:45 - 18:25" }
        ],
        hotels: [
            { name: "Hotel Evsen", loc: "Istanbul (Old City)", nights: "1/22-24" },
            { name: "Kaya Hotel", loc: "Istanbul (Asia/SAW)", nights: "1/24-25" },
            { name: "Elegance Cave Suites", loc: "Cappadocia", nights: "1/25-27" },
            { name: "Urkmez Hotel", loc: "Selçuk", nights: "1/28-30" }
        ]
    },
    itinerary: [
        {
            day: 1,
            date: "2026/01/21 (Wed)",
            title: "Departure & Transit",
            location: "Taipei ➔ Bangkok",
            imageQuery: "Bangkok Suvarnabhumi Airport modern interior",
            highlights: [
                { time: "15:30", title: "TPE Check-in", desc: "第一航廈，確認行李直掛伊斯坦堡 (IST)。" },
                { time: "18:20", title: "TG635 起飛", desc: "前往曼谷，飛行時間約 3.5 小時。" },
                { time: "21:45", title: "抵達曼谷轉機", desc: "走「Transfer」通道，不需入境，直接前往 TG900 登機門。" }
            ],
            transport: {
                type: "Flight",
                details: "TG635 / TG900",
                note: "轉機時間 2小時，行李直掛。"
            }
        },
        {
            day: 2,
            date: "2026/01/22 (Thu)",
            title: "Imperial Echoes",
            location: "Istanbul (Old City)",
            imageQuery: "Basilica Cistern Medusa head dramatic lighting",
            highlights: [
                { time: "06:05", title: "抵達伊斯坦堡", desc: "入境後先換匯 (€50)、買 Istanbulkart 交通卡。" },
                { time: "08:00", title: "機場交通", desc: "搭乘 Havaist 巴士前往舊城區，轉 T1 電車至 Sirkeci。" },
                { time: "11:00", title: "地下水宮殿", desc: "拜占庭儲水池，必看梅杜莎頭像與淚柱。", link: "Basilica Cistern" },
                { time: "14:00", title: "藍色清真寺", desc: "蘇丹艾哈邁德廣場，六根宣禮塔與伊茲尼克藍磁磚。", link: "Blue Mosque Istanbul" },
                { time: "19:00", title: "旋轉苦行僧", desc: "Hodjapasha 文化中心，蘇非主義靈修儀式。", link: "Hodjapasha Cultural Centre" }
            ],
            transport: {
                type: "Bus/Tram",
                details: "IST Airport ➔ Havaist Bus ➔ T1 Tram (Sirkeci Stop)",
                note: "步行至 Hotel Evsen 僅 2 分鐘。"
            }
        },
        {
            day: 3,
            date: "2026/01/23 (Fri)",
            title: "The Heart of Empires",
            location: "Istanbul",
            imageQuery: "Hagia Sophia interior grand dome gold mosaics",
            highlights: [
                { time: "09:00", title: "托普卡帕皇宮", desc: "鄂圖曼蘇丹居所，參觀後宮與帝國寶庫。", link: "Topkapi Palace Museum" },
                { time: "11:30", title: "聖索菲亞大教堂", desc: "1500年歷史建築奇蹟，宗教融合的見證。", link: "Hagia Sophia" },
                { time: "14:30", title: "大巴扎", desc: "世界最大室內市集，感受商業活力。", link: "Grand Bazaar Istanbul" },
                { time: "17:00", title: "獨立大街", desc: "搭乘復古紅色電車，漫步塔克西姆廣場。", link: "Istiklal Avenue" }
            ],
            transport: {
                type: "Tram/Walk",
                details: "全日主要步行或搭乘 T1 電車",
                note: "前往獨立大街需搭 T1 至 Kabataş 轉 F1 纜車。"
            }
        },
        {
            day: 4,
            date: "2026/01/24 (Sat)",
            title: "Crossing Continents",
            location: "Istanbul ➔ Asia Side",
            imageQuery: "Bosphorus strait ferry view istanbul",
            highlights: [
                { time: "11:00", title: "博斯普魯斯遊船", desc: "行駛於歐亞分界，欣賞跨海大橋與海景皇宮。" },
                { time: "14:00", title: "埃及香料市集", desc: "購買果乾、香料與土耳其軟糖的最佳地點。", link: "Spice Bazaar" },
                { time: "15:30", title: "跨洲移動", desc: "前往亞洲區 SAW 機場飯店，準備明日早班機。" }
            ],
            transport: {
                type: "Marmaray/Metro",
                details: "Sirkeci (Marmaray) ➔ Ayrılık Çeşmesi (轉 M4 地鐵) ➔ SAW Airport",
                note: "避開晚高峰，提早出發。"
            }
        },
        {
            day: 5,
            date: "2026/01/25 (Sun)",
            title: "Lunar Landscape",
            location: "Cappadocia",
            imageQuery: "Goreme open air museum caves",
            highlights: [
                { time: "07:15", title: "飛往開塞利", desc: "VF3170 航班，08:40 抵達 ASR 機場。" },
                { time: "09:30", title: "機場接駁", desc: "搭乘 HAVAŞ 巴士前往格雷梅 (Göreme)。" },
                { time: "13:00", title: "格雷梅露天博物館", desc: "世界遺產，參觀黑暗教堂濕壁畫。", link: "Goreme Open Air Museum" },
                { time: "15:00", title: "Galerie Ikman", desc: "網美地毯店，需付費拍攝極具張力的照片。", link: "Galerie Ikman" }
            ],
            transport: {
                type: "Plane/Bus",
                details: "SAW ➔ ASR (VF3170) / HAVAŞ Bus to Göreme",
                note: "入住 Elegance Cave Suites 洞穴飯店。"
            }
        },
        {
            day: 6,
            date: "2026/01/26 (Mon)",
            title: "Red Valley & Balloons",
            location: "Cappadocia",
            imageQuery: "Cappadocia hot air balloons sunrise winter snow",
            highlights: [
                { time: "05:00", title: "熱氣球飛行", desc: "視天氣而定，高空俯瞰白雪覆蓋的奇岩地貌。" },
                { time: "09:30", title: "紅線之旅 (Red Tour)", desc: "烏奇沙城堡、帕夏貝 (精靈煙囪)、阿瓦諾斯陶藝。" },
                { time: "14:00", title: "想像谷", desc: "Devrent Valley，尋找駱駝形狀的岩石。" }
            ],
            transport: {
                type: "Tour Van",
                details: "當地紅線一日遊包車/拼車",
                note: "冬季路滑，建議穿著防滑靴。"
            }
        },
        {
            day: 7,
            date: "2026/01/27 (Tue)",
            title: "Underground & Night Bus",
            location: "Cappadocia ➔ Denizli",
            imageQuery: "Derinkuyu underground city tunnels",
            highlights: [
                { time: "09:30", title: "綠線之旅 (Green Tour)", desc: "代林庫尤地下城 (深入地下85米)、厄赫拉拉峽谷健行。" },
                { time: "13:00", title: "溪谷午餐", desc: "在 Belisırma 的水上涼亭用餐。" },
                { time: "16:00", title: "星球大戰取景地", desc: "塞利梅修道院 (Selime Monastery)。" },
                { time: "20:10", title: "夜間巴士", desc: "搭乘 Kamil Koç 或 Flixbus 前往 Denizli (棉堡)。" }
            ],
            transport: {
                type: "Night Bus",
                details: "Göreme Bus Station ➔ Denizli Otogarı",
                note: "車程約 9-10 小時，車上有供水與點心。"
            }
        },
        {
            day: 8,
            date: "2026/01/28 (Wed)",
            title: "Cotton Castle",
            location: "Pamukkale ➔ Selçuk",
            imageQuery: "Pamukkale thermal pools white travertines",
            highlights: [
                { time: "07:30", title: "抵達與寄放行李", desc: "Denizli 巴士站 B1 寄放行李 (備里拉現金)。" },
                { time: "08:30", title: "棉堡 (Pamukkale)", desc: "夢幻白石灰棚與藍色溫泉水，冬季需忍受赤腳冰冷。", link: "Pamukkale Travertines" },
                { time: "10:00", title: "希拉波里斯古城", desc: "古羅馬劇場與阿波羅神廟遺跡。", link: "Hierapolis Archaeology Museum" },
                { time: "14:28", title: "火車移動", desc: "搭乘 TCDD 火車前往 Selçuk (以弗所)。" }
            ],
            transport: {
                type: "Train",
                details: "Denizli Station ➔ Selçuk Station",
                note: "入住 Urkmez Hotel，位於火車站對面。"
            }
        },
        {
            day: 9,
            date: "2026/01/29 (Thu)",
            title: "Roman Glory",
            location: "Ephesus",
            imageQuery: "Library of Celsus Ephesus sunny",
            highlights: [
                { time: "09:30", title: "以弗所古城", desc: "地中海保存最完整的羅馬城市。必看塞爾蘇斯圖書館、大劇院。", link: "Ephesus Archaeological Site" },
                { time: "14:00", title: "聖約翰大教堂", desc: "使徒約翰長眠之地，拜占庭時期的宏偉遺跡。", link: "Basilica of St. John Selcuk" },
                { time: "16:00", title: "庫里特斯大道", desc: "漫步大理石街道，感受千年前的繁華。" }
            ],
            transport: {
                type: "Minibus/Walk",
                details: "Selçuk 市區搭小巴 (Dolmuş) 至 Ephesus 北門",
                note: "回程可由南門搭車。"
            }
        },
        {
            day: 10,
            date: "2026/01/30 (Fri)",
            title: "Farewell Turkey",
            location: "Izmir ➔ Istanbul ➔ Bangkok",
            imageQuery: "Izmir Adnan Menderes Airport",
            highlights: [
                { time: "07:30", title: "前往機場", desc: "搭乘火車 (IZBAN) 或 HAVAŞ 至伊士麥機場 (ADB)。" },
                { time: "10:40", title: "國內線起飛", desc: "TK2313 飛往伊斯坦堡 (IST)。" },
                { time: "16:30", title: "國際線返程", desc: "TG901 飛往曼谷，需備妥泰國簽證入境重掛行李。" }
            ],
            transport: {
                type: "Plane",
                details: "ADB ➔ IST ➔ BKK",
                note: "兩段機票分開，注意轉機時間。"
            }
        },
        {
            day: 11,
            date: "2026/01/31 (Sat)",
            title: "Home Sweet Home",
            location: "Bangkok ➔ Taipei",
            imageQuery: "Starlux Airlines aircraft wing",
            highlights: [
                { time: "05:20", title: "抵達曼谷", desc: "入境領行李，辦理星宇航空 (JX) 報到。" },
                { time: "13:45", title: "JX742 起飛", desc: "帶著滿滿回憶返回台北。" },
                { time: "18:25", title: "抵達桃園", desc: "旅程圓滿結束。" }
            ],
            transport: {
                type: "Plane",
                details: "BKK ➔ TPE (JX742)",
                note: "歡迎回家！"
            }
        }
    ]
};