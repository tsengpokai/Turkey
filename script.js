// script.js

// Open Google Maps
function openMap(query) {
    if(!query) return;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
}

// 1. Render Index Page Content
function renderIndex() {
    const flightList = document.getElementById('flight-list');
    const hotelList = document.getElementById('hotel-list');
    const daysContainer = document.getElementById('days-container');
    const tipsContainer = document.getElementById('tips-container');

    if (!flightList) return; 

    // Flights
    travelData.flights.forEach(f => {
        flightList.innerHTML += `
            <div class="flight-row">
                <div style="flex:1">
                    <span class="route">${f.route}</span>
                    <small style="color:#e67e22">${f.flight}</small>
                </div>
                <div style="text-align: right;">
                    <span style="font-weight:700">${f.date}</span>
                    <small>${f.time}</small>
                </div>
            </div>
        `;
    });

    // Hotels
    travelData.hotels.forEach(h => {
        hotelList.innerHTML += `
            <div class="hotel-row" onclick="openMap('${h.mapQuery}')">
                <div style="flex:1">
                    <span class="name"><i class="fas fa-map-marker-alt"></i> ${h.name}</span>
                    <small>${h.location}</small>
                </div>
                <div style="text-align: right;">
                    <small style="background:#f0f0f0; padding:2px 6px; border-radius:4px;">${h.dates}</small>
                </div>
            </div>
        `;
    });

    // Daily Cards
    travelData.itinerary.forEach((day) => {
        daysContainer.innerHTML += `
            <div class="day-card" onclick="window.location.href='detail.html?day=${day.day}'">
                <div class="day-img" style="background-image: url('${day.image}')"></div>
                <div class="day-content">
                    <div class="day-date">DAY ${day.day} | ${day.date}</div>
                    <h3 class="day-title">${day.title}</h3>
                    <div class="day-link">查看詳細行程 <i class="fas fa-long-arrow-alt-right"></i></div>
                </div>
            </div>
        `;
    });

    // Tips (Expanded)
    travelData.tips.forEach(tip => {
        tipsContainer.innerHTML += `
            <div class="tip-box">
                <h4><i class="fas fa-check-circle"></i> ${tip.title}</h4>
                <p>${tip.content}</p>
            </div>
        `;
    });
}

// 2. Render Detail Page Content
function loadDayDetail() {
    const params = new URLSearchParams(window.location.search);
    const dayIndex = parseInt(params.get('day'));
    const contentDiv = document.getElementById('detail-content');
    const nextBtn = document.getElementById('next-day-btn');

    if (!dayIndex || !contentDiv) return;

    const dayData = travelData.itinerary.find(d => d.day === dayIndex);

    if (!dayData) {
        contentDiv.innerHTML = "<h2 style='text-align:center; padding:50px;'>查無此行程資料</h2>";
        return;
    }

    // Scroll to top
    window.scrollTo(0, 0);

    let html = `
        <div class="detail-header" style="background-image: url('${dayData.image}')">
            <div class="header-text">
                <span style="background: var(--gold); padding: 4px 10px; font-size: 0.8rem; font-weight: 700; color: white; border-radius: 2px; text-transform: uppercase;">Day ${dayData.day}</span>
                <h2>${dayData.title}</h2>
                <p style="font-size: 1.1rem; opacity: 0.9; margin-top:5px;"><i class="far fa-calendar"></i> ${dayData.date}</p>
            </div>
        </div>
        <div class="container">
            <div class="daily-timeline">
    `;

    dayData.details.forEach(item => {
        const isTransport = item.action.includes("搭乘") || item.action.includes("航班") || item.action.includes("接駁") || item.action.includes("移動") || item.action.includes("巴士");
        const transportClass = isTransport ? "transport" : "";
        
        let icon = '';
        if (item.action.includes("航班") || item.action.includes("飛往")) icon = '<i class="fas fa-plane"></i> ';
        else if (item.action.includes("巴士") || item.action.includes("接駁")) icon = '<i class="fas fa-bus"></i> ';
        else if (item.action.includes("火車")) icon = '<i class="fas fa-train"></i> ';
        else if (item.action.includes("餐")) icon = '<i class="fas fa-utensils"></i> ';

        html += `
            <div class="time-block ${transportClass}">
                <span class="time-display">${item.time}</span>
                <h3 class="time-action">${icon}${item.action}</h3>
                <p class="time-desc">${item.desc}</p>
            </div>
        `;
    });

    html += `</div></div>`;
    contentDiv.innerHTML = html;

    // Next Button Logic
    if (dayIndex < travelData.itinerary.length) {
        nextBtn.href = `detail.html?day=${dayIndex + 1}`;
        nextBtn.style.display = "inline-flex";
    } else {
        nextBtn.style.display = "none";
    }
}

// Initialize
if (document.getElementById('days-container')) {
    renderIndex();
}