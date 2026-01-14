document.addEventListener('DOMContentLoaded', () => {
    // 檢查目前是在首頁還是詳細頁
    if(document.getElementById('days-list')) {
        renderHomePage();
    } else if (document.getElementById('detail-app')) {
        renderDetailPage();
    }
});

function renderHomePage() {
    // 1. 滿版風景卡片渲染
    const listContainer = document.getElementById('days-list');
    
    tripData.days.forEach(day => {
        const div = document.createElement('div');
        div.className = 'day-card-mobile';
        div.onclick = () => window.location.href = `detail.html?day=${day.id}`;
        
        // 圖片處理：如果有圖片用圖片，沒圖片用色塊
        let bgContent = '';
        if (day.image) {
            bgContent = `<img src="${day.image}" class="card-bg-img" alt="${day.title}" loading="lazy">`;
        } else {
            bgContent = `<div class="card-bg-fallback"></div>`;
        }
        
        div.innerHTML = `
            ${bgContent}
            <div class="day-badge">DAY ${day.id}</div>
            <div class="card-overlay">
                <span class="card-sub"><i class="fas fa-map-marker-alt"></i> ${day.subtitle}</span>
                <h3 class="card-title">${day.title}</h3>
                <p class="card-desc">${day.desc}</p>
            </div>
        `;
        listContainer.appendChild(div);
    });

    // 2. 行前須知渲染
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

function renderDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const dayId = parseInt(params.get('day'));
    const day = tripData.days.find(d => d.id === dayId);
    
    if(!day) { window.location.href = 'index.html'; return; }

    // 生成時間軸 HTML
    let timelineHTML = day.timeline.map(t => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <span class="time-label">${t.time}</span>
            <div class="event-card">
                <h4><i class="fas fa-${t.icon}" style="width:20px; text-align:center;"></i> ${t.title}</h4>
                <p>${t.desc}</p>
                ${t.image ? `<img src="${t.image}" style="width:100%; border-radius:8px; margin-top:10px; display:block;" loading="lazy">` : ''}
            </div>
        </div>
    `).join('');

    // 計算下一天 ID
    const nextDayId = dayId + 1;
    const hasNextDay = tripData.days.find(d => d.id === nextDayId);
    
    // 生成底部按鈕 HTML
    let nextBtnHTML = '';
    if (hasNextDay) {
        nextBtnHTML = `
            <div class="next-day-btn-container">
                <a href="detail.html?day=${nextDayId}" class="btn-next-journey">
                    前往 Day ${nextDayId} <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
    } else {
        nextBtnHTML = `
            <div class="next-day-btn-container">
                <a href="index.html" class="btn-next-journey btn-home">
                    <i class="fas fa-check"></i> 行程結束・返回首頁
                </a>
            </div>
        `;
    }

    // 渲染詳細頁主體
    const appContainer = document.getElementById('detail-app');
    appContainer.innerHTML = `
        <div class="detail-hero" style="height: 45vh; position: relative;">
            <img src="${day.image || 'https://images.unsplash.com/photo-1545153970-8ea10234f2a7'}" style="width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; bottom:0; left:0; width:100%; height:150px; background:linear-gradient(to top, var(--primary-dark), transparent);"></div>
            <a href="index.html" style="position:absolute; top:20px; left:20px; background:rgba(0,0,0,0.5); width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white;"><i class="fas fa-arrow-left"></i></a>
        </div>
        
        <div class="detail-content" style="padding: 0 25px; position:relative; z-index:2; margin-top:-60px;">
            <span style="color:var(--secondary-blue); font-weight:bold; letter-spacing:1px; font-size:0.9rem;">${day.date}</span>
            <h1 style="font-family:var(--font-heading); font-size:2.2rem; color:var(--primary-gold); margin:5px 0 20px; line-height:1.2;">${day.title}</h1>
            
            ${day.hotel ? `
            <div style="background:rgba(255,255,255,0.05); padding:15px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); margin-bottom:30px; display:flex; gap:15px; align-items:center;">
                <div style="background:rgba(212,175,55,0.2); color:var(--primary-gold); width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-bed"></i></div>
                <div>
                    <div style="color:#aaa; font-size:0.8rem;">Accommodation</div>
                    <div style="font-weight:bold;">${day.hotel.name}</div>
                </div>
            </div>` : ''}

            <div class="timeline" style="border-left:2px solid rgba(255,255,255,0.1); padding-left:20px; margin-left:10px;">
                ${timelineHTML}
            </div>
            
            ${nextBtnHTML}
        </div>
    `;
}