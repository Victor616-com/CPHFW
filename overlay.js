

window.addEventListener('DOMContentLoaded', (event) => {

  // Get the button that opens the overlay
  const subscribeBtn = document.getElementById('subscribe-btn');
  
  // Get the overlay and the close button
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('close-btn');
  
  function closeOverlay() {
    overlay.style.display = 'none';
  }

  // When the user clicks the subscribe button, open the overlay
  if (subscribeBtn) {
    subscribeBtn.onclick = function() {
      overlay.style.display = 'block';
    }
  } else {
    console.error("Error: Could not find the subscribe button with id 'subscribe-btn'");
  }

  // When the user clicks the close button, close the overlay
  if (closeBtn) {
    closeBtn.onclick = function() {
      overlay.style.display = 'none';
    }
  } else {
    console.error("Error: Could not find the close button with id 'close-btn'");
  }

  // Optional: When the user clicks anywhere outside the modal, close it
  window.onclick = function(event) {
    if (event.target === overlay) {
      overlay.style.display = 'none';
    }
  }

  const emailForm = document.getElementById("email-form");
  const thankYouOverlay = document.getElementById("thank-you-overlay");

  if (emailForm) {
    emailForm.addEventListener("submit", function(event) {
      event.preventDefault();
      closeOverlay();
      thankYouOverlay.style.display = 'block'; 
    });
  } else {
    console.error("Error: Could not find the form element with id 'email-form'");
  }
});

function closeThankYouOverlay() {
  const thankYouOverlay = document.getElementById("thank-you-overlay");
  if (thankYouOverlay) {
    thankYouOverlay.style.display = 'none'; 
  } else {
    console.error("Error: Could not find the thank you overlay with id 'thank-you-overlay'");
  }
}

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