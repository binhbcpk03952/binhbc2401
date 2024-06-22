// let x = document.querySelector('#show');
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

var map = L.map('mapContainer').setView([12.710624, 108.073495], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('show').innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    document.getElementById('show').innerText = "Latitude: " + lat + ", Longitude: " + lng;

    var myLatLng = [lat, lng];

    // If marker already exists, update its position
    if (marker) {
        marker.setLatLng(myLatLng);
    } else {
        marker = L.marker(myLatLng).addTo(map);
    }

    // Center the map at the new location
    map.setView(myLatLng, 20);
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('show').innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('show').innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('show').innerText = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('show').innerText = "An unknown error occurred.";
            break;
    }
}

function dlNone() {
    document.getElementById('navbarSupportedContent').classList.remove('show');
}