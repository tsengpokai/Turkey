/* script.js */

// Helper: Open Google Maps
function getMapLink(query) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ' Turkey')}`;
}

// 1. Render Index Page
function renderIndex() {
    const list = document.getElementById('day-list');
    if (!list) return;

    travelData.itinerary.forEach(day => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.onclick = () => window.location.href = `detail.html?day=${day.day}`;
        
        card.innerHTML = `
            <div class="day-date">${day.date.split(' ')[0]}</div>
            <img src="${day.image}" alt="${day.title}">
            <div class="day-card-content">
                <div class="day-num">DAY ${day.day}</div>
                <h2 class="day-title">${day.title}</h2>
                <div class="day-loc"><i class="fas fa-map-marker-alt"></i> ${day.location}</div>
            </div>
        `;
        list.appendChild(card);
    });

    // Append General Reminders at bottom of index
    const reminderSection = document.createElement('div');
    reminderSection.className = 'reminders';
    let remindersHTML = '<h2><i class="fas fa-exclamation-circle"></i> 重要提醒</h2>';
    travelData.reminders.forEach(r => {
        remindersHTML += `<div class="reminder-item"><strong>${r.title}</strong>${r.text}</div>`;
    });
    reminderSection.innerHTML = remindersHTML;
    list.appendChild(reminderSection);
}

// 2. Render Detail Page
function renderDetail(dayNum) {
    const dayData = travelData.itinerary.find(d => d.day === dayNum);
    const container = document.getElementById('detail-content');
    
    if (!dayData) {
        container.innerHTML = "<p style='padding:20px'>行程載入錯誤。</p>";
        return;
    }

    // Header Image & Title
    let html = `
        <div class="detail-hero" style="background-image: url('${dayData.image}')">
            <div class="detail-header">
                <div class="day-num" style="color:white; text-shadow: 1px 1px 5px rgba(0,0,0,0.5)">${dayData.date}</div>
                <h1 style="font-family:'Playfair Display'; font-size:2rem; text-shadow: 1px 1px 5px rgba(0,0,0,0.5)">${dayData.title}</h1>
                <p><i class="fas fa-map-pin"></i> ${dayData.location}</p>
            </div>
        </div>
        
        <div class="timeline">
    `;

    // Accommodation Info (if exists)
    if (dayData.stay) {
        html += `
            <div style="background:#fff; border-bottom:1px solid #eee; padding-bottom:15px; margin-bottom:20px;">
                <span style="color:#888; font-size:0.8rem;">TONIGHT'S STAY</span><br>
                <a href="${getMapLink(dayData.stayLink || dayData.stay)}" target="_blank" style="color:var(--primary-blue); font-weight:bold; text-decoration:none; font-size:1.1rem; display:flex; align-items:center;">
                    <i class="fas fa-bed" style="margin-right:8px;"></i> ${dayData.stay}
                    <i class="fas fa-external-link-alt" style="margin-left:5px; font-size:0.8rem; color:#aaa;"></i>
                </a>
            </div>
        `;
    }

    // Timeline Items
    dayData.details.forEach(item => {
        let transportHTML = '';
        if (item.transportSteps) {
            transportHTML = `<div class="transport-box"><h4><i class="fas fa-bus"></i> 交通詳情</h4>`;
            item.transportSteps.forEach((step, idx) => {
                transportHTML += `<div class="transport-step"><div class="step-num">${idx+1}.</div><div>${step}</div></div>`;
            });
            transportHTML += `</div>`;
        }

        let linkHTML = '';
        if (item.link) {
            linkHTML = `<a href="${getMapLink(item.link)}" target="_blank" class="location-link"><i class="fas fa-location-arrow"></i> 導航至此</a>`;
        }

        html += `
            <div class="timeline-item">
                <div class="type-icon"><i class="fas ${item.icon}"></i></div>
                <div class="timeline-content">
                    <span class="time-tag">${item.time}</span>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    ${transportHTML}
                    ${linkHTML}
                </div>
            </div>
        `;
    });

    html += `</div>`; // End timeline
    container.innerHTML = html;

    // Next Day Button logic
    const nextBtnContainer = document.getElementById('next-day-container');
    if (dayNum < travelData.itinerary.length) {
        nextBtnContainer.innerHTML = `
            <a href="detail.html?day=${dayNum + 1}" class="fab-next">
                Day ${dayNum + 1} <i class="fas fa-chevron-right"></i>
            </a>
        `;
    } else {
         nextBtnContainer.innerHTML = `
            <a href="index.html" class="fab-next" style="background:#2ecc71">
                回首頁 <i class="fas fa-home"></i>
            </a>
        `;
    }
}