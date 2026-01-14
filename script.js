/* script.js - 頁面渲染邏輯 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Day Parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    let dayId = parseInt(urlParams.get('day'));

    if (!dayId) dayId = 1; // Default to Day 1

    // 2. Find Data
    const dayData = tripData.itinerary.find(d => d.day === dayId);

    if (!dayData) {
        document.body.innerHTML = "<h1 style='color:white; text-align:center; margin-top:50px;'>Day not found</h1><a href='index.html' style='color:gold; display:block; text-align:center;'>Return Home</a>";
        return;
    }

    // 3. Render Hero Section
    document.getElementById('day-number').textContent = `DAY ${dayData.day}`;
    document.getElementById('nav-date').textContent = dayData.date.split(' ')[0]; // Short date
    document.getElementById('day-title').textContent = dayData.title;
    document.getElementById('day-loc').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${dayData.location}`;

    // Image Placeholder Logic (Simulation)
    // In a real app, you would use the unsplash API or local assets.
    // Here we define a mapping or use a generic search URL logic for the demo.
    // Providing a visual cue for where the image tag goes:
    const heroSection = document.getElementById('day-hero');
    // Using a reliable placeholder service with keywords for demo purposes
    const bgKeyword = dayData.imageQuery.split(' ').join(',');
    heroSection.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${bgKeyword}')`;
    // Fallback since source.unsplash is sometimes slow, use specific IDs for stability if needed
    // For this demo, we assume the CSS background set in HTML is overridden here.
    
    // *Important*: Triggering the image tag text for the AI context as requested
    console.log(``); 


    // 4. Render Transport
    document.getElementById('transport-detail').textContent = dayData.transport.details;
    document.getElementById('transport-note').textContent = dayData.transport.note ? `⚠ ${dayData.transport.note}` : '';

    // 5. Render Timeline
    const timelineContainer = document.getElementById('timeline-container');
    dayData.highlights.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        
        let linkHtml = '';
        if (item.link) {
            // Create a Google Maps Search Link
            const mapQuery = encodeURIComponent(`${item.link} ${dayData.location.split(' ')[0]} Turkey`);
            linkHtml = `<a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" style="color:var(--accent-gold); font-size:0.8rem; text-decoration:none; margin-left:10px;"><i class="fas fa-map"></i> View Map</a>`;
        }

        div.innerHTML = `
            <div class="time">${item.time}</div>
            <h4 style="margin: 5px 0;">${item.title} ${linkHtml}</h4>
            <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">${item.desc}</p>
        `;
        timelineContainer.appendChild(div);
    });

    // 6. Next Day Logic
    const nextBtn = document.getElementById('next-day-btn');
    if (dayId < 11) {
        nextBtn.href = `detail.html?day=${dayId + 1}`;
        nextBtn.innerHTML = `Day ${dayId + 1}: ${tripData.itinerary[dayId].title} <i class="fas fa-arrow-right"></i>`;
    } else {
        nextBtn.href = 'index.html';
        nextBtn.innerHTML = `Back to Overview <i class="fas fa-home"></i>`;
        nextBtn.style.backgroundColor = '#1e293b'; // Change color for finish
    }
});