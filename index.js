
const Mpacking = { lat: -23.420751674581638, lng: -46.39421029340493 };
 

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
  zoom: 11,
  center: Mpacking,
});

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: Mpacking,
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


window.initMap = initMap;
