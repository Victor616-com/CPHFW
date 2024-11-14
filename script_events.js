// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal(event) {
    var modalTitle = document.getElementById("modalTitle");
    modalTitle.innerText = event.title || '';
    document.getElementById("modalLocation").innerText = event.location || '';
    document.getElementById("modalTime").innerText = event.time || '';
    document.getElementById("modalDateNumber").innerText = event.dateNumber || '';
    document.getElementById("modalMonth").innerText = event.month || '';
    document.getElementById("modalWeekday").innerText = event.weekday || '';
    document.getElementById("modalDescription").innerText = event.description || '';
    var modalContent = document.querySelector(".modal-content");
    var backgroundImage = event.background;
    
    // Check if the screen width is 390px or less
    if (window.innerWidth <= 390) {
        // Change the background image for mobile
        if (event.title === "OPÉRASPORT") {
            backgroundImage = "./resources/bgopera.png";
        } else if (event.title === "Forza Collective") {
            backgroundImage = "./resources/bgforza.png";
        } else if (event.title === "Joao Marashin") {
            backgroundImage = "./resources/bgjaop.png";
        } else if (event.title === "Lovechild 1979") {
            backgroundImage = "./resources/bg1979.png";
        }
       else if (event.title === "Baum und Pferdgarten") {
            backgroundImage = "./resources/bgbaum.png";
        }
        else if (event.title === "Gestuz") {
            backgroundImage = "./resources/bggestuz.png";
        }
        else if (event.title ===  "Munthe") {
            backgroundImage = "./resources/bgmunthe.png";
        }
        // Add more conditions as needed for other events
    }

    modalContent.style.backgroundImage = backgroundImage ? `url(${backgroundImage})` : '';
    document.getElementById("modalLocationIcon").src = event.icon || '';

    // Adjust font size based on the length of the event title
    if (window.innerWidth <= 390) {
        if (event.title.length >= 20) { // Adjust the length threshold as needed
            modalTitle.style.setProperty('font-size', '45px', 'important'); // Adjust the font size as needed
        } 
        else if (event.title.length === 14) { // Specific condition for "lovechild 1979"
            modalTitle.style.setProperty('font-size', '60px', 'important'); // Adjust the font size as needed
        } 
        else if (event.title.length >= 15) { // Adjust the length threshold as needed
            modalTitle.style.setProperty('font-size', '60px', 'important'); // Adjust the font size as needed
        } 
        else {
            modalTitle.style.setProperty('font-size', '75px', 'important'); // Default font size
        }
    } else {
        if (event.title.length >= 20) { // Adjust the length threshold as needed
            modalTitle.style.setProperty('font-size', '90px', 'important'); // Adjust the font size as needed
        } 
        else if (event.title.length >= 15) { // Adjust the length threshold as needed
            modalTitle.style.setProperty('font-size', '115px', 'important'); // Adjust the font size as needed
        } 
        else {
            modalTitle.style.setProperty('font-size', '135px', 'important'); // Default font size
        }
    }

    modal.style.display = "block";
    disableScroll();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    enableScroll();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Fetch the JSON data
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        // Add event listeners to "More info" buttons
        document.querySelectorAll('.more-info').forEach((button, index) => {
            button.setAttribute('data-event-id', index);
            button.addEventListener('click', function() {
                const eventId = this.getAttribute('data-event-id');
                const event = events[eventId];
                if (event) {
                    openModal(event);
                } else {
                    console.error(`Event with ID ${eventId} not found`);
                }
            });
        });
    })
    .catch(error => console.error('Error fetching events:', error));

function openMap() {
    window.location.href = "map.html";
}

function disableScroll() {
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventArrowKeys);
}

function enableScroll() {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
    window.removeEventListener('keydown', preventArrowKeys);
}
function preventScroll(e) {
    e.preventDefault();
}

function preventArrowKeys(e) {
    if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.key)) {
        e.preventDefault();
    }
}