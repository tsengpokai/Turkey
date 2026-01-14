document.addEventListener('DOMContentLoaded', () => {
    
    // 判斷目前在哪個頁面
    const path = window.location.pathname;
    const isDetailPage = path.includes('detail.html');

    if (!isDetailPage) {
        initHomePage();
    } else {
        initDetailPage();
    }
});

// --- 首頁邏輯 ---
function initHomePage() {
    const grid = document.getElementById('days-grid');
    const tipsContainer = document.getElementById('tips-container');

    // 生成每日卡片
    tripData.days.forEach(day => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <div class="day-card-img" style="background-image: url('${day.image}');"></div>
            <div class="day-card-content">
                <div class="day-card-date">${day.date}</div>
                <h3 class="day-card-title">${day.title}</h3>
                <p class="day-card-desc">${day.summary}</p>
            </div>
        `;
        card.onclick = () => window.location.href = `detail.html?day=${day.id}`;
        grid.appendChild(card);
    });

    // 生成注意事項
    tripData.tips.forEach((tip, index) => {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                ${tip.title} <i class="fas fa-chevron-down"></i>
            </div>
            <div class="accordion-content" id="tip-${index}">
                ${tip.content}
            </div>
        `;
        tipsContainer.appendChild(item);
    });
}

// 摺疊選單開關
function toggleAccordion(index) {
    const content = document.getElementById(`tip-${index}`);
    content.classList.toggle('active');
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

    // 填充導航日期
    document.getElementById('nav-date').innerText = dayData.date;

    // 填充主要內容
    const container = document.getElementById('detail-content');
    
    let htmlContent = `
        <div class="detail-hero" style="background-image: linear-gradient(to top, #0B1026, transparent), url('${dayData.image}');">
            <div class="detail-hero-content">
                <h2>${dayData.title}</h2>
                <p style="color: #Aab2cd;">${dayData.summary}</p>
            </div>
        </div>
        <div class="container">
    `;

    // 飯店資訊 (如果有)
    if (dayData.hotel) {
        htmlContent += `
            <div class="hotel-box" onclick="openMap('${dayData.hotel.name}')">
                <div class="hotel-name"><i class="fas fa-bed"></i> ${dayData.hotel.name}</div>
                <div class="hotel-loc">${dayData.hotel.location} <i class="fas fa-external-link-alt" style="font-size:0.7em; margin-left:5px;"></i></div>
            </div>
        `;
    }

    // 時間軸
    htmlContent += `<div class="timeline">`;
    
    dayData.details.forEach(item => {
        // 判斷類型以給予不同 icon
        let icon = 'circle';
        if(item.type === 'flight') icon = 'plane';
        if(item.type === 'transport') icon = 'bus';
        if(item.type === 'food') icon = 'utensils';
        if(item.type === 'spot') icon = 'camera';
        if(item.type === 'shop') icon = 'shopping-bag';

        htmlContent += `
            <div class="timeline-item">
                <span class="time-tag">${item.time}</span>
                <div style="margin-top: 5px;">
                    <strong style="font-size: 1.1rem; color: #F4F4F9;">
                        <i class="fas fa-${icon}" style="color: #D4AF37; width: 20px;"></i> ${item.title}
                    </strong>
                    <p style="color: #Aab2cd; margin-top: 5px;">${item.desc}</p>
                    ${item.image ? `<img src="${item.image}" class="spot-image" alt="${item.title}">` : ''}
                    ${item.type === 'transport' || item.type === 'flight' ? 
                        `<div class="transport-box">
                            <div class="transport-title"><i class="fas fa-info-circle"></i> 交通詳情</div>
                            <div class="transport-info">請務必提早抵達，檢查護照/車票。</div>
                        </div>` : ''}
                </div>
            </div>
        `;
    });

    htmlContent += `</div>`; // End Timeline

    // 下一天按鈕
    const nextDayId = dayId + 1;
    if (nextDayId <= tripData.days.length) {
        htmlContent += `
            <div class="next-day-container">
                <a href="detail.html?day=${nextDayId}" class="btn-next">
                    下一天行程 <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
    } else {
        htmlContent += `
            <div class="next-day-container">
                <a href="index.html" class="btn-next">
                    <i class="fas fa-home"></i> 返回首頁
                </a>
            </div>
        `;
    }

    htmlContent += `</div>`; // End Container
    container.innerHTML = htmlContent;
}

// 開啟地圖功能
function openMap(query) {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
}