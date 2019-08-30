require('dotenv').config({
  path: '.env'
});
// Call the google maps callback function initMap
const API_key = process.env.API_key;
const mapSource = `https://maps.googleapis.com/maps/api/js?key=${API_key}&callback=initMap`;
const mapElement = document.getElementById('map');
const mapScript = document.getElementById('mapScript');

mapScript.setAttribute('src', mapSource);

function initMap() {
  // Map options
  let options = {
    zoom: 15,
    center: { lat: 40.775199, lng: -73.945009 }
  };
  // New map
  let map = new google.maps.Map(mapElement, options);

  // Add marker
  let marker = new google.maps.Marker({
    position: { lat: 40.775199, lng: -73.945009 },
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
