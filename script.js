// script.js

// Helper to open Google Maps
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

    if (!flightList) return; // Not on index page

    // Flights
    travelData.flights.forEach(f => {
        flightList.innerHTML += `
            <div class="flight-row">
                <div>
                    <span class="route">${f.route}</span><br>
                    <small>${f.flight}</small>
                </div>
                <div style="text-align: right;">
                    <span>${f.date}</span><br>
                    <small>${f.time}</small>
                </div>
            </div>
        `;
    });

    // Hotels
    travelData.hotels.forEach(h => {
        hotelList.innerHTML += `
            <div class="hotel-row" onclick="openMap('${h.mapQuery}')">
                <div>
                    <span class="name">${h.name}</span> <i class="fas fa-map-marker-alt" style="font-size: 0.7rem;"></i><br>
                    <small>${h.location}</small>
                </div>
                <div style="text-align: right;">
                    <small>${h.dates}</small>
                </div>
            </div>
        `;
    });

    // Daily Cards
    travelData.itinerary.forEach((day, index) => {
        daysContainer.innerHTML += `
            <div class="day-card" onclick="window.location.href='detail.html?day=${day.day}'">
                <div class="day-img" style="background-image: url('${day.image}')"></div>
                <div class="day-content">
                    <div class="day-date">Day ${day.day} | ${day.date}</div>
                    <h3 class="day-title">${day.title}</h3>
                    <p class="day-desc">查看詳細行程 &rarr;</p>
                </div>
            </div>
        `;
    });

    // Tips
    travelData.tips.forEach(tip => {
        tipsContainer.innerHTML += `
            <div class="tip-box">
                <h4><i class="fas fa-info-circle"></i> ${tip.title}</h4>
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

    // Find data (Day 1 is index 0 in logic, but let's match day number)
    const dayData = travelData.itinerary.find(d => d.day === dayIndex);

    if (!dayData) {
        contentDiv.innerHTML = "<h2 style='text-align:center; padding:50px;'>查無此行程資料</h2>";
        return;
    }

    // Render Header
    let html = `
        <div class="detail-header" style="background-image: url('${dayData.image}')">
            <div class="header-text">
                <span style="background: var(--gold); padding: 5px 10px; font-size: 0.8rem; font-weight: bold; color: white;">DAY ${dayData.day}</span>
                <h2 style="font-size: 3rem; color: white; margin-top: 10px;">${dayData.title}</h2>
                <p style="font-size: 1.2rem; opacity: 0.9;">${dayData.date}</p>
            </div>
        </div>
        <div class="container">
            <div class="daily-timeline">
    `;

    // Render Timeline Items
    dayData.details.forEach(item => {
        // Check if it's a transport item for special styling
        const isTransport = item.action.includes("搭乘") || item.action.includes("航班") || item.action.includes("接駁") || item.action.includes("移動");
        const transportClass = isTransport ? "transport-highlight" : "";
        const icon = isTransport ? '<i class="fas fa-bus"></i> ' : '';

        html += `
            <div class="time-block ${transportClass}">
                <span class="time-display">${item.time}</span>
                <h3 class="time-action">${icon}${item.action}</h3>
                <p>${item.desc}</p>
            </div>
        `;
    });

    html += `</div></div>`; // Close containers
    contentContent = html;
    contentDiv.innerHTML = html;

    // Setup Next Button
    if (dayIndex < travelData.itinerary.length) {
        nextBtn.href = `detail.html?day=${dayIndex + 1}`;
        nextBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "none"; // Last day
    }
}

// Initialize
if (document.getElementById('days-container')) {
    renderIndex();
}