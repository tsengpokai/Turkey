document.addEventListener('DOMContentLoaded', () => {
    // 1. 初始化首頁 Meta 資訊
    if (document.getElementById('main-title')) {
        document.getElementById('main-title').textContent = tripData.meta.title;
        document.getElementById('main-dates').textContent = tripData.meta.dates;
    }

    // 2. 渲染經理報告 (Report)
    const reportContainer = document.getElementById('report-container');
    if (reportContainer) {
        tripData.report.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'report-card animate-up';
            card.style.animationDelay = `${index * 0.1}s`; // 階梯式動畫
            card.innerHTML = `
                <div class="report-icon">${item.icon}</div>
                <div class="report-title">${item.title}</div>
                <div style="font-size:0.9rem; color:#555;">${item.content}</div>
            `;
            reportContainer.appendChild(card);
        });
    }

    // 3. 渲染每日行程卡片 (Days)
    const daysContainer = document.getElementById('days-container');
    if (daysContainer) {
        tripData.days.forEach((day, index) => {
            const link = document.createElement('a');
            link.href = `detail.html?day=${day.id}`;
            link.className = 'day-card animate-up';
            link.style.animationDelay = `${0.3 + (index * 0.1)}s`;
            
            link.innerHTML = `
                <img src="${day.image}" alt="${day.title}" class="day-img">
                <div class="day-content">
                    <div class="day-date">${day.date}</div>
                    <div class="day-title">${day.title}</div>
                    <div class="day-summary">${day.summary}</div>
                    <div style="margin-top:1rem; color:var(--primary); font-size:0.85rem; font-weight:bold;">
                        查看詳細交通與攻略 ➔
                    </div>
                </div>
            `;
            daysContainer.appendChild(link);
        });
    }
});