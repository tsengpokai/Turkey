// script.js
document.addEventListener('DOMContentLoaded', () => {
    renderFlights();
    renderHotels();
    renderItineraryGrid();
    renderTips();
});

function renderFlights() {
    const tbody = document.querySelector('#flight-list tbody');
    let html = '';
    travelData.flights.forEach(f => {
        html += `
            <tr>
                <td><strong>${f.date}</strong></td>
                <td>${f.route}</td>
                <td style="color: var(--secondary); font-weight: bold;">${f.code}</td>
                <td>${f.time}</td>
                <td>${f.note}</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

function renderHotels() {
    const grid = document.getElementById('hotel-grid');
    let html = '';
    travelData.hotels.forEach(h => {
        html += `
            <div class="card" style="border-left-color: var(--secondary);">
                <div class="card-date">${h.period} | ${h.city}</div>
                <h3 class="card-title">${h.name}</h3>
                <p class="card-desc">${h.desc}</p>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderItineraryGrid() {
    const grid = document.getElementById('itinerary-grid');
    let html = '';
    travelData.itinerary.forEach(day => {
        html += `
            <div class="card" onclick="window.location.href='detail.html?day=${day.day}'">
                <div class="card-date">DAY ${day.day} - ${day.date}</div>
                <h3 class="card-title">${day.title}</h3>
                <p class="card-desc">${day.summary}</p>
                <div style="margin-top: 1rem; color: var(--primary); font-weight: bold; font-size: 0.9rem;">
                    查看詳情 ➔
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderTips() {
    const container = document.getElementById('tips-container');
    let html = '';
    travelData.tips.forEach(tip => {
        html += `
            <div class="tip-box">
                <div class="tip-header">${tip.category}</div>
                <div class="tip-content">${tip.content}</div>
            </div>
        `;
    });
    container.innerHTML = html;
}