///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'jliang.4ef9ff2e'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiamxpYW5nIiwiYSI6Ik5rV3lKOVUifQ.FsnLJyXTqXws2Ke0CjvrHw'; //<- this is my token, use yours.


//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);

var dataFileToAdd = 'data/bike_routes.geojson';

var featureLayer = L.mapbox.featureLayer().loadURL(dataFileToAdd).addTo(map)

featureLayer.on('ready',function(){
  this.setStyle({
    'color':'#ec008c',
    'fileColor':'#ec008c',
    'weight':4,
    'opacity':.7
  });
  map.fitBounds(featureLayer.getBounds());
});
