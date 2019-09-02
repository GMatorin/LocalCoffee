// Call the google maps callback function initMap

function initMap() {
  // Map options
  let options = {
    zoom: 17,
    center: { lat: 40.775199, lng: -73.945009 }
  };
  // New map
  let map = new google.maps.Map(document.getElementById('map'), options);

  // Add marker
  let marker = new google.maps.Marker({
    position: { lat: 40.775199, lng: -73.945009 },
    map: map
  });
}
