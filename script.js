// 確認 DOM 載入
document.addEventListener('DOMContentLoaded', () => {
    // 判斷是否為首頁
    if(document.getElementById('days-list')) {
        renderHomePage();
    }
});

function renderHomePage() {
    // 1. 渲染每日行程 (手機卡片版)
    const listContainer = document.getElementById('days-list');
    
    tripData.days.forEach(day => {
        const div = document.createElement('div');
        div.className = 'day-card-mobile';
        div.onclick = () => window.location.href = `detail.html?day=${day.id}`;
        
        // 預設圖片處理
        const imgSrc = day.image || 'https://images.unsplash.com/photo-1527609593297-51b3a0c6790c?q=80&w=600';
        
        div.innerHTML = `
            <div class="card-img-box">
                <img src="${imgSrc}" alt="${day.title}" loading="lazy">
                <span class="day-badge">${day.date.split(' ')[0]}</span>
            </div>
            <div class="card-body">
                <span class="card-sub"><i class="fas fa-map-pin"></i> ${day.subtitle}</span>
                <h3 class="card-title">${day.title}</h3>
                <p class="card-desc">${day.desc}</p>
                <div class="card-footer">
                    <span class="btn-read">View Detail <i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
        `;
        listContainer.appendChild(div);
    });

    // 2. 渲染行前須知 (橫向捲動版)
    const reminderContainer = document.getElementById('reminder-scroll');
    tripData.essentials.forEach(item => {
        const div = document.createElement('div');
        div.className = 'reminder-card-snap';
        div.innerHTML = `
            <div class="icon-box"><i class="fas ${item.icon}"></i></div>
            <div class="remind-text">
                <h4>${item.title}</h4>
                <p>${item.text}</p>
            </div>
        `;
        reminderContainer.appendChild(div);
    });
}