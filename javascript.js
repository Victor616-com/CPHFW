let imageHolder = document.getElementById('events-image');
let eventTitle = document.getElementById('event-title');
let nextBtn = document.getElementById('events-next-btn');
let dots = document.querySelectorAll('.circle');

let images = ['event_1.png', 'event_2.png', 'event_3.png', 'event_4.png'];
let titles = [
    'Copenhagen Fashion Week : OpéraSport',
    'Copenhagen Fashion Week : Baum und Pferdgarten',
    'Copenhagen Fashion Week : Gestuz',
    'Copenhagen Fashion Week : Munthe'
]
let i = 0;
// Preload images
let preloadedImages = images.map(src => {
    const img = new Image();
    img.src = `resources/${src}`;
    return img;
});


// Create an h3 element for the title and append it initially
let titleElement = document.createElement('h3');
titleElement.textContent = titles[i];
eventTitle.appendChild(titleElement);
// Initialize content
imageHolder.style.backgroundImage = `url('resources/${images[i]}')`;
let circleArray = [];
dots.forEach((dot, index) => {
    circleArray.push(dot);
    if (index === i) {
        dot.classList.add('active');
    }
});
// Handle next button click
function next() {
    circleArray[i].classList.remove('active');
    i = (i + 1) % images.length;  
    circleArray[i].classList.add('active');
    imageHolder.style.backgroundImage = `url('resources/${images[i]}')`;
    titleElement.textContent = titles[i];
}




