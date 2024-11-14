
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

    $(document).ready(function () {
      var mousetimeout;
      var screensaver_active = false;
      var idletime = 60;
      var minWidth = 900;
      var maxWidth = 1920;
      var minHeight = 680;
      var maxHeight = 1080;
      console.log("Window size: " + window.innerWidth + "x" + window.innerHeight); // Debugging
      function show_screensaver() {
        // Check if the screen size is within the desired range before showing the screensaver
        if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth &&
            window.innerHeight >= minHeight && window.innerHeight <= maxHeight) {
          $('#screensaver').fadeIn();
          const video = document.getElementById('screensaver');
          video.play();
          screensaver_active = true;
        }
      }
      function stop_screensaver() {
          $('#screensaver').fadeOut();
          const video = document.getElementById('screensaver');
          video.pause();
          video.currentTime = 0; 
          screensaver_active = false;
      }
    
      function resetScreensaverTimeout() {
          clearTimeout(mousetimeout);
          
          if (screensaver_active) {
              stop_screensaver();
          }
    
          mousetimeout = setTimeout(function () {
              show_screensaver();
          }, 1000 * idletime);  
      }
    
      document.getElementById("screensaver").addEventListener('click', function() {
        stop_screensaver();
        resetScreensaverTimeout();
      });
    
      $(document).mousemove(resetScreensaverTimeout);
      $(document).click(resetScreensaverTimeout);
    
      resetScreensaverTimeout();
  });