mapboxgl.accessToken = 'pk.eyJ1IjoidmlsbGV3aWxzb24iLCJhIjoiY2plZnpzeDFwMGt0dTJ3bnMyNGtwYmJ2bSJ9.OiSIqI2_gVYobgR395JCcw';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/villewilson/ckylnlbyv030614tf77qxuy1s', // style URL
    center: [16.23, 48.22], // starting position [lng, lat]
    zoom: 4 // starting zoom
});

map.addControl(new mapboxgl.FullscreenControl()); // adding fullscreen control in the upper right corner
map.addControl(new mapboxgl.NavigationControl()); // adding zoom and compass buttons

const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
    'This is the first pop-up I tried to add to the map.'
);

const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
    'And this is the second one.'
);

const marker1 = new mapboxgl.Marker({ color: '#961d20' })
.setLngLat([12.554729, 55.70651])
.setPopup(popup1) // sets a popup on this marker
.addTo(map);

const marker2 = new mapboxgl.Marker({ color: '#961d20' })
.setLngLat([16.239, 48.22])
.setPopup(popup2) // sets a popup on this marker
.addTo(map);