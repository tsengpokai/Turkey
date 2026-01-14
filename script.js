document.addEventListener('DOMContentLoaded', () => {
    
    const path = window.location.pathname;
    
    // 簡單路由判斷
    if (path.includes('detail.html')) {
        initDetailPage();
    } else {
        initHomePage();
    }
});

// --- 首頁邏輯 ---
function initHomePage() {
    // 1. 生成行程卡片
    const grid = document.getElementById('days-grid');
    tripData.days.forEach(day => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <img src="${day.image}" class="day-card-bg" alt="${day.title}">
            <div class="day-card-overlay">
                <span class="day-num">${day.date}</span>
                <h3 class="day-title">${day.title}</h3>
                <p class="day-desc">${day.desc}</p>
                <span class="btn-text">View Details <i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        card.onclick = () => window.location.href = `detail.html?day=${day.id}`;
        grid.appendChild(card);
    });

    // 2. 生成行前備忘錄
    const reminderContainer = document.getElementById('reminder-list');
    tripData.essentials.forEach(item => {
        const div = document.createElement('div');
        div.className = 'reminder-item';
        div.innerHTML = `
            <div class="reminder-title"><i class="fas ${item.icon}"></i> ${item.title}</div>
            <div style="color: #bdc3c7; font-size: 0.95rem;">${item.text}</div>
        `;
        reminderContainer.appendChild(div);
    });

    // 路線圖動畫 (簡單的延遲顯示)
    const points = document.querySelectorAll('.route-point');
    points.forEach((p, index) => {
        setTimeout(() => {
            p.style.opacity = '1'; 
            // 這裡可以加入更多 CSS class 觸發動畫
        }, index * 200);
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
    
    // 設定 Hero 背景 (視差效果基底)
    const hero = document.getElementById('detail-hero');
    hero.style.backgroundImage = `url('${dayData.image}')`;
    
    // 2. 渲染左側：住宿卡片 (Hotel Card)
    const hotelContainer = document.getElementById('hotel-card-container');
    if (dayData.hotel && dayData.hotel.name !== "甜蜜的家") {
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
    }

    // 3. 渲染左側：交通卡片 (Transport Card)
    const transportContainer = document.getElementById('transport-card-container');
    if (dayData.transport) {
        let transportItemsHtml = dayData.transport.items.map(t => `
            <div style="margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:8px;">
                <div style="color:white; font-weight:bold;">${t.label}</div>
                <div style="color:#d4af37; font-size:0.9rem;">${t.value}</div>
                <div style="color:#bdc3c7; font-size:0.8rem; font-style:italic;">${t.note}</div>
            </div>
        `).join('');

        transportContainer.innerHTML = `
            <div class="info-card" style="border-color: #c0392b;">
                <span class="info-label" style="color:#c0392b;"><i class="fas fa-plane"></i> Transport Info</span>
                <div style="margin-top:10px;">
                    ${transportItemsHtml}
                </div>
            </div>
        `;
    }

    // 4. 渲染右側：時間軸
    const timelineContainer = document.getElementById('timeline-content');
    let timelineHtml = '';
    dayData.timeline.forEach(item => {
        timelineHtml += `
            <div class="timeline-item">
                <span class="time-badge">${item.time}</span>
                <h4 class="event-title"><i class="fas fa-${item.icon}" style="width:20px; text-align:center; margin-right:5px; color:#d4af37;"></i> ${item.title}</h4>
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