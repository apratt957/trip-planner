const mapboxgl = require('mapbox-gl');

const buildMarker = function(type, coord) {
  const locationType = {
    hotel: 'url(http://i.imgur.com/D9574Cu.png)',
    activity: 'url(http://i.imgur.com/WbMOfMl.png)',
    restaurant: 'url(http://i.imgur.com/cqR6pUI.png)'
  }

  const newElement = document.createElement("div");
  newElement.style.width = "32px";
  newElement.style.height = "39px";
  newElement.style.backgroundImage = locationType[type];
  return new mapboxgl.Marker(newElement).setLngLat(coord);
};

module.exports = buildMarker;
