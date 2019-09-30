const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiYXByYXR0OTU3IiwiYSI6ImNrMTZsN3F3ZzAxMTIzbnBhM3Fzd3FkcDgifQ.lrWWIKNuxouuUAX9NMpung';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', [-87.638860, 41.895450]);
marker.addTo(map);
