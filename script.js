document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('detail.html')) {
        initDetailPage();
    } else {
        initHomePage();
    }
});

// --- 首頁邏輯 ---
function initHomePage() {
    // 1. 生成每日行程卡片 (滿版視覺)
    const grid = document.getElementById('days-grid');
    tripData.days.forEach(day => {
        const card = document.createElement('div');
        card.className = 'day-card';
        // 如果沒有圖片，使用一個奢華的漸層背景
        const bgStyle = day.image ? `background: url('${day.image}') center/cover no-repeat;` : 'background: linear-gradient(135deg, var(--bg-dark), var(--accent-turquoise));';
        
        card.style.cssText = bgStyle;
        card.innerHTML = `
            <div class="day-card-overlay">
                <span class="day-num">${day.date}</span>
                <h3 class="day-title">${day.title}</h3>
                <p class="day-desc">${day.desc}</p>
                <span class="btn-text">Explore <i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        card.onclick = () => window.location.href = `detail.html?day=${day.id}`;
        grid.appendChild(card);
    });

    // 2. 生成行前備忘錄 (雙欄卡片結構)
    const reminderContainer = document.getElementById('reminder-list');
    tripData.essentials.forEach(item => {
        const div = document.createElement('div');
        div.className = 'reminder-card-item';
        div.innerHTML = `
            <div class="reminder-icon-box"><i class="fas ${item.icon}"></i></div>
            <div class="reminder-content-box">
                <h4>${item.title}</h4>
                <p>${item.text}</p>
            </div>
        `;
        reminderContainer.appendChild(div);
    });
}

// --- 詳細頁邏輯 ---
function initDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const dayId = parseInt(params.get('day'));
    const dayData = tripData.days.find(d => d.id === dayId);

    if (!dayData) {
        window.location.href = 'index.html';
        return;
    }

    // 1. 填充 Header 資訊
    document.getElementById('nav-date').innerText = dayData.date;
    document.getElementById('detail-title').innerText = dayData.title;
    document.getElementById('detail-subtitle').innerText = dayData.subtitle;
    
    // 設定 Hero 背景
    const hero = document.getElementById('detail-hero');
    hero.style.backgroundImage = `url('${dayData.image}')`;
    
    // 2. 渲染住宿卡片
    const hotelContainer = document.getElementById('hotel-card-container');
    if (dayData.hotel && dayData.hotel.name !== "溫暖的家" && dayData.hotel.name !== "夜間巴士") {
        hotelContainer.innerHTML = `
            <div class="info-card">
                <span class="info-label"><i class="fas fa-bed"></i> Accommodation</span>
                <div class="info-main">${dayData.hotel.name}</div>
                <div class="info-sub">${dayData.hotel.area}</div>
                <a href="#" class="btn-map" onclick="openMap('${dayData.hotel.name} ${dayData.hotel.area}')">
                    <i class="fas fa-map-marker-alt"></i> 查看地圖
                </a>
            </div>
        `;
    } else if (dayData.hotel && dayData.hotel.name === "夜間巴士") {
         hotelContainer.innerHTML = `
            <div class="info-card" style="border-color: var(--accent-amethyst);">
                <span class="info-label" style="color: var(--accent-amethyst);"><i class="fas fa-bus"></i> Overnight Transport</span>
                <div class="info-main">夜間巴士移動中</div>
                <div class="info-sub">省下一晚住宿，體驗公路旅行</div>
            </div>
        `;
    }

    // 3. 渲染交通卡片
    const transportContainer = document.getElementById('transport-card-container');
    if (dayData.transport) {
        let transportItemsHtml = dayData.transport.items.map(t => `
            <div style="margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
                <div style="color:var(--text-light); font-weight:600; font-size: 0.95rem;">${t.label}</div>
                <div style="color:var(--accent-gold); font-size:1.1rem; font-family:var(--font-deco);">${t.value}</div>
                <div style="color:var(--text-dim); font-size:0.85rem; font-style:italic; margin-top:4px;"><i class="fas fa-info-circle" style="font-size:0.8em"></i> ${t.note}</div>
            </div>
        `).join('');

        transportContainer.innerHTML = `
            <div class="info-card" style="border-color: var(--accent-pomegranate);">
                <span class="info-label" style="color:var(--accent-pomegranate);"><i class="fas fa-plane-departure"></i> Key Transport Info</span>
                <div style="margin-top:15px;">
                    ${transportItemsHtml}
                </div>
            </div>
        `;
    }

    // 4. 渲染時間軸
    const timelineContainer = document.getElementById('timeline-content');
    let timelineHtml = '';
    dayData.timeline.forEach(item => {
        timelineHtml += `
            <div class="timeline-item">
                <span class="time-badge">${item.time}</span>
                <h4 class="event-title"><i class="fas fa-${item.icon}" style="width:25px; text-align:center; margin-right:8px;"></i> ${item.title}</h4>
                <p class="event-desc">${item.desc}</p>
                ${item.image ? `<img src="${item.image}" class="event-img" alt="${item.title}" loading="lazy">` : ''}
            </div>
        `;
    });
    timelineContainer.innerHTML = timelineHtml;

    // 5. 設定「下一天」按鈕
    const nextBtn = document.getElementById('next-day-btn');
    const nextDayId = dayId + 1;
    if (nextDayId <= tripData.days.length) {
        nextBtn.href = `detail.html?day=${nextDayId}`;
    } else {
        nextBtn.innerHTML = '<i class="fas fa-home"></i> 返回首頁';
        nextBtn.href = 'index.html';
    }
}

function openMap(query) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
}