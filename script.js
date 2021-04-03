mapboxgl.accessToken = 'pk.eyJ1IjoiaXNtYXlpbDIwMjEiLCJhIjoiY2tuMjZkM25wMTRsNTJ2bzM4MjloNnoyYiJ9.AK7PJmY5TaBImEC4oM9CaQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true 
    })


    function successLocation(position) {
        setupMap([position.coords.longitude, position.coords.latitude])
      }
      
      function errorLocation() {
         setupMap([-2.24, 53.48])
      }

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 16 
      })
      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav)
    
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
      map.addControl(directions, "top-left")

          // Add geolocate control to the map.
    map.addControl(  
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
        );
    
    
}
