const mapWrapper = document.getElementById('map-wrapper')

// --- Markers data ---
const markers = [
    {
        locationName: 'Copenhagen City Hall',
        lat: 55.6752863,
        lng: 12.5675883,
        address: 'Rådhuspladsen 1, 1553 København',
        iconUrl: 'resources/Copenhagen City Hall.svg',
        description: 'The main building of Copenhagen Fashion Week hosts runway shows, presentations, and events, showcasing the latest Nordic fashion trends.',
        link: ''
    },
    {
        locationName: 'Bella Center on Amager',
        lat: 55.6380111,
        lng: 12.5638636,
        address: 'Center Blvd. 5, 2300 København',
        iconUrl: 'resources/Bella Center on Amager.svg',
        description: 'CIFF showcases global fashion at Copenhagen Fashion Week, while CIFF RAVEN highlights emerging talent and avant-garde designs.',
        link: ''
    },
    {
        locationName: 'Forum Copenhagen',
        lat: 55.6812158,
        lng: 12.547633,
        address: 'Julius Thomsens Pl. 1, 1925 Frederiksberg',
        iconUrl: 'resources/Forum Copenhagen.svg',
        description: "CIFF KIDS at Copenhagen Fashion Week showcases the latest trends in children's fashion, bringing together top brands and designers in a playful, vibrant setting.",
        link: ''
    },
    {
        locationName: 'Øksnehallen',
        lat: 55.6694754,
        lng: 12.5595265,
        address: 'Halmtorvet 11, 1700 København',
        iconUrl: 'resources/Øksnehallen.svg',
        description: 'Revolver Copenhagen showcases Scandinavian and international fashion, connecting brands and buyers in a curated space at Copenhagen Fashion Week.',
        link: ''
    }
    
];

function openEventsLink() {
    window.location.href = "https://www.example.com";
}

// --- Function for the map --- 
function initMap() {

    // -- positioning the map on load based on the screen size 
    let zoom = 0;
    let positioOnStart = [];
    let zoomControls = false;
    if (window.innerWidth <= 390) {
        zoom = 13
        positioOnStart = [55.6563366, 12.5715];
    } else if (window.innerWidth <= 1100) {
        zoom = 13;
        positioOnStart = [55.6533366, 12.6015];
    } else {
        zoom = 13.5;
        positioOnStart = [55.6563366, 12.6015];
        zoomControls = true;
    }
    
    const centerMap = { lat: positioOnStart[0], lng: positioOnStart[1] }
    const mapOptions = {
        center: centerMap,
        zoom: zoom,
        disableDefaultUI: true, // Disable the google maps controls 
        zoomControl: zoomControls,

        // Styling for the map from SnazzyMaps
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#5bbbe1"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    }

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    

    // --- Displaying the markers and the pop-up boxes ---
    markers.forEach((markerData) => {

        // Displaying the markers on the map
        const marker = new google.maps.Marker({
            position: { lat: markerData.lat, lng: markerData.lng },
            map: map,
            icon: {
                url: markerData.iconUrl,
                scaledSize: new google.maps.Size(30, 30),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(0, 0)
            }
        });

       
        // --- Creating the marker details box ---

        // Creating the html for each one
        const markerDet = document.createElement('div');
        markerDet.classList.add('marker_det');
        markerDet.innerHTML = `
            <div class="marker-top">
                <h2>${markerData.locationName}</h2>
                <img class="exit" src="resources/x.svg" alt="x">
            </div>
            <p>${markerData.description}</p>
            <button class="events-btn" onclick="openEventsLink()">Events</button>
        `;

        

        // Modifying the interaction based on the screen size
        if (window.innerWidth > 400) {
            const overlay = new google.maps.OverlayView();
            overlay.onAdd = function () {
                const panes = this.getPanes();
                panes.overlayMouseTarget.appendChild(markerDet); // Adding to the panes of google API so they stay next to the markers
        
                // Exit button functionality
                const exitBtn = markerDet.querySelector('.exit');
                exitBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    markerDet.classList.remove('show');
                });
            };
            
            // Updating the position of the box based on the position of the marker
            overlay.draw = function () {
                const projection = this.getProjection();
                const position = projection.fromLatLngToDivPixel(marker.getPosition());
                markerDet.style.left = position.x + 40 + 'px';
                markerDet.style.top = position.y - 10 + 'px';
            };
        
            overlay.setMap(map);
        
            // Click event to toggle marker details box visibility
            marker.addListener('click', () => {
                // Hide all other marker details when one is clicked
                document.querySelectorAll('.marker_det').forEach((el) => el.classList.remove('show'));

                // Show the current marker detail (the class show has the final scale and the css animation)
                markerDet.classList.add('show');
            });
        
         // Update overlay position when the map is idle
            google.maps.event.addListener(map, 'idle', () => overlay.draw());

        } else {

            // --- Behaviour on the mobile version ---

            // Add the marker details box to the mapWrapper div so it can have fixed position
            mapWrapper.appendChild(markerDet);

            // Ensure the marker details are toggled on click
            marker.addListener('click', () => {

                // Toggle the visibility of the marker details box for mobile
                const isVisible = markerDet.classList.contains('show-mobile');
                document.querySelectorAll('.marker_det').forEach((el) => el.classList.remove('show-mobile'));
                if (!isVisible) {
                    markerDet.classList.add('show-mobile');
                }
            });

            // Exit button for mobile
            const exitBtn = markerDet.querySelector('.exit');
            exitBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                markerDet.classList.remove('show-mobile');
            });
        }
        
        
    });
   
    // To display the current position with a different kind of marker
    displayCurrentLocation(map);

    // Prevent touch zoom and gesture zoom on mobile devices
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });

    document.addEventListener('gesturestart', (e) => e.preventDefault());
}




// --- To display the current position with a different kind of marker ---
function displayCurrentLocation(map) {

    // Check if the browser supports Geolocation API
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                // Define a custom marker icon for the user's location
                const userMarkerIcon = {
                    url: 'resources/location.svg', // Custom icon URL
                    scaledSize: new google.maps.Size(30, 30), // Adjust the size
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(15, 15) // Center the icon
                };

                // Create a marker for the user's current location
                const userMarker = new google.maps.Marker({
                    position: { lat: userLat, lng: userLng },
                    map: map,
                    icon: userMarkerIcon,
                    title: 'You are here'
                });

                // Styling for the text
                const labelDiv = document.createElement('div');
                labelDiv.style.position = 'absolute';
                labelDiv.style.background = 'transparent';
                labelDiv.style.padding = '2px 5px';
                labelDiv.style.borderRadius = '3px';
                labelDiv.style.fontSize = '14px';
                labelDiv.style.fontWeight = 'bold';
                labelDiv.style.color = '#333';
                labelDiv.textContent = 'You are here';

                // Create an OverlayView for positioning the text
                const overlay = new google.maps.OverlayView();
                overlay.onAdd = function () {
                    const panes = this.getPanes();
                    panes.overlayLayer.appendChild(labelDiv);
                };

                // Updating the position of the text so it stays next to the marker
                overlay.draw = function () {
                    const projection = this.getProjection();
                    const position = projection.fromLatLngToDivPixel(userMarker.getPosition());
                    labelDiv.style.left = position.x + 10 + 'px';
                    labelDiv.style.top = position.y - 10 +'px'; // Adjust for positioning next to the marker
                };

                overlay.setMap(map);

                // Update the label position when the map is panned or zoomed
                google.maps.event.addListener(map, 'idle', () => {
                    overlay.draw();
                });
                
            },
            (error) => {
                console.error('Geolocation failed: ', error);
            }
            
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}


// --- Changing the back-btn based on the screen size
function updateBackBtnImg() {
    const image = document.getElementById("back-btn");
    if (window.innerWidth > 400) {
        image.src = 'resources/back-btn.svg';
    } else {
        image.src = 'resources/back-btn-mobile.svg';
    }
}
// Update the image source when the page loads
window.onload = updateBackBtnImg;
// Update the image source on window resize
window.onresize = updateBackBtnImg;



// --- Preventing gesture zoom ---
document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();  // Prevent pinch zoom
    }
}, { passive: false });

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();  // Prevent gesture zoom
});

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