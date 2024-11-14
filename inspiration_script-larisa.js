
/* Drag action for the overlay.
     It reads the mouse position and toggles the overlay based on that. If the mouse clicks (finger touches) the overlay toggle button element and then moves up, the state of the overlay changes to "expanded". If it moves down then the "expanded" state is being removed. */

const overlay = document.getElementById("overlay");
const handle = document.getElementById("overlayHandle");
let overlayExpanded = false;
let startY = 0;

function toggleOverlay(deltaY) {
  if (deltaY < -50 && !overlayExpanded) {
    overlay.classList.add("expanded");
    overlayExpanded = true;
  } else if (deltaY > 50 && overlayExpanded) {
    overlay.classList.remove("expanded");
    overlayExpanded = false;
  }
}

handle.addEventListener("touchstart", (event) => {
  startY = event.touches[0].clientY;
});

handle.addEventListener("touchmove", (event) => {
  const currentY = event.touches[0].clientY;
  const deltaY = currentY - startY;
  toggleOverlay(deltaY);
});

handle.addEventListener("mousedown", (event) => {
  startY = event.clientY;
  event.preventDefault();

  function onMouseMove(event) {
    const deltaY = event.clientY - startY;
    toggleOverlay(deltaY);
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});


/* Designers posts json file handle */

fetch("designers-larisa.json")
    .then(response => response.json())
    .then(designersData => { 
        const designersContainer = document.getElementById("overlayContent");
        let htmlContent = "";

        designersData.forEach(designer => {
            htmlContent += `
                <div class="designer-post">
                  <div class="designer-post-head">
                    <img src="${designer.pfp}" alt="Profile picture of ${designer.name}">
                    <div class="designer-post-text">
                      <h1>${designer.name}</h1>
                      <h2>${designer.handle}</h2>
                    </div>
                  </div>      
                    <p>${designer.post}</p>
                </div>
            `;
        });

        designersContainer.innerHTML = htmlContent;
    })
    .catch(error => console.error('Error loading designer posts:', error));
