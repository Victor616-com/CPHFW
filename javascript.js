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

    const centerMap = { lat: 55.6603366, lng: 12.6015 }
    const mapOptions = {
        center: centerMap,
        zoom: 12.2,
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
    
    for(let i = 0; i < markers.length; i++) {
        const marker = new google.maps.Marker({
            position: {lat: markers[i]['lat'], lng: markers[i]['lng']},
            map: map,
            icon: {
                url: markers[i]['iconUrl'],
                scaledSize: new google.maps.Size(25, 25), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            }
        });
    }
    displayCurrentLocation(map);
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




