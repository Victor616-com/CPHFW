const mapWrapper = document.getElementById('map-wrapper')
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

function initMap() {
    let zoom = 0
    let positioOnStart = []
    if (window.innerWidth <= 390) {
        zoom = 13
        positioOnStart = [55.6563366, 12.5715];
    } else if (window.innerWidth <= 1100) {
        zoom = 13;
        positioOnStart = [55.6533366, 12.6015];
    } else {
        zoom = 13.5;
        positioOnStart = [55.6563366, 12.6015];
    }
    

    const centerMap = { lat: positioOnStart[0], lng: positioOnStart[1] }
    const mapOptions = {
        center: centerMap,
        zoom: zoom,
        disableDefaultUI: true,
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
    
    markers.forEach((markerData) => {
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

       

        const markerDet = document.createElement('div');
        markerDet.classList.add('marker_det');
        markerDet.innerHTML = `
            <div class="marker-top">
                <h2>${markerData.locationName}</h2>
                <img class="exit" src="resources/x.svg" alt="x">
            </div>
            <p>${markerData.description}</p>
            <button class="events-btn">Events</button>
        `;

        if (window.innerWidth > 400) {
            const overlay = new google.maps.OverlayView();
            overlay.onAdd = function () {
                const panes = this.getPanes();
                panes.overlayMouseTarget.appendChild(markerDet);
        
             // Exit button functionality
                const exitBtn = markerDet.querySelector('.exit');
                exitBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    markerDet.classList.remove('show');
                });
            };
        
            overlay.draw = function () {
                const projection = this.getProjection();
                const position = projection.fromLatLngToDivPixel(marker.getPosition());
                markerDet.style.left = position.x + 40 + 'px';
                markerDet.style.top = position.y - 10 + 'px';
            };
        
            overlay.setMap(map);
        
            // Click event to toggle marker details visibility
            marker.addListener('click', () => {
                // Hide all other marker details
                document.querySelectorAll('.marker_det').forEach((el) => el.classList.remove('show'));
        
                // Show the current marker detail
                markerDet.classList.add('show');
            });
        
         // Update overlay position when the map is idle
            google.maps.event.addListener(map, 'idle', () => overlay.draw());

        } else {
            mapWrapper.appendChild(markerDet);
            // Ensure the marker details are toggled on click
            marker.addListener('click', () => {
                // Toggle the visibility of the marker details for mobile
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
   

    displayCurrentLocation(map);
    // Prevent touch zoom and gesture zoom on mobile devices
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });

    document.addEventListener('gesturestart', (e) => e.preventDefault());
}

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

                overlay.draw = function () {
                    const projection = this.getProjection();
                    const position = projection.fromLatLngToDivPixel(userMarker.getPosition());
                    labelDiv.style.left = position.x + 10 + 'px';
                    labelDiv.style.top = position.y - 10 +'px'; // Adjust for positioning above the marker
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




document.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
        e.preventDefault();  // Prevent pinch zoom
    }
}, { passive: false });

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();  // Prevent gesture zoom
});