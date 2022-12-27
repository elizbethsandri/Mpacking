let map;

const Mpacking = { lat: -23.420751674581638, lng: -46.39421029340493 };

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 11,
  center: Mpacking,
});

  const marker = new google.maps.Marker({
    map: map,
    draggable: true,
    label: "Mpacking",
    title: "Mpacking",
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



