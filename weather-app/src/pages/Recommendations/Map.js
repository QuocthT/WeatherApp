import React, { useEffect, useState } from 'react';

const Map = () => {
  // Declares the state variables and its setter functions
  // These are state variables for map and weather overlay
  const [map, setMap] = useState(null);
  const [weatherOverlay, setWeatherOverlay] = useState(null);

  // This initializes the map instance
  useEffect(() => {
    // This checks if the map instance doesn't exist
    if (!map) {
      // This create a new Google Maps instance
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.3555, lng: -1.1743 },
        zoom: 6,
      });
      setMap(mapInstance);
    }
  }, [map]);

  // This puts a weather overlay on the map instance
  useEffect(() => {
    if (map && !weatherOverlay) {
      const apiKey = '82a5bdefb47889cf36ac199b655b5d38';
      const weatherTileUrl = `http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?date=1552861800&appid=$82a5bdefb47889cf36ac199b655b5d38`;
      // This defines the bounds for the weather overlay
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(85, -180),
        new window.google.maps.LatLng(-85, 180)
      );
      const weatherOverlayInstance = new window.google.maps.GroundOverlay(
        weatherTileUrl,
        bounds
      );
      // This puts the weather overlay on the map
      weatherOverlayInstance.setMap(map);
      setWeatherOverlay(weatherOverlayInstance);
    }
  }, [map, weatherOverlay]);

  return (
    <div className="map-container" id="map" style={{ height: '600px', width: '100%' }}>
      {/* Map will be shown here */}
    </div>
  );
};

export default Map;
