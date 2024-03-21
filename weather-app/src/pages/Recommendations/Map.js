import React, { useEffect, useState } from 'react';

const Map = () => {
  // State variables to hold the map instance and weather overlay instance
  const [map, setMap] = useState(null);
  const [weatherOverlay, setWeatherOverlay] = useState(null);

  // Effect hook to initialize the map instance
  useEffect(() => {
    // Check if the map instance doesn't exist
    if (!map) {
      // Create a new Google Maps instance and set it to state
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.3555, lng: -1.1743 },
        zoom: 6,
      });
      setMap(mapInstance);
    }
  }, [map]); // Dependency array ensures this effect runs only when map state changes

  // Effect hook to add the weather overlay to the map
  useEffect(() => {
    // Check if both map instance and weather overlay instance exist
    if (map && !weatherOverlay) {
      // API key for OpenWeatherMap
      const apiKey = '82a5bdefb47889cf36ac199b655b5d38';
      // URL for fetching weather tiles
      const weatherTileUrl = `http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?date=1552861800&appid=$82a5bdefb47889cf36ac199b655b5d38`;
      // Define the bounds for the weather overlay
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(85, -180),
        new window.google.maps.LatLng(-85, 180)
      );
      // Create a new GroundOverlay instance for weather tiles
      const weatherOverlayInstance = new window.google.maps.GroundOverlay(
        weatherTileUrl,
        bounds
      );
      // Set the weather overlay on the map
      weatherOverlayInstance.setMap(map);
      // Set the weather overlay instance to state
      setWeatherOverlay(weatherOverlayInstance);
    }
  }, [map, weatherOverlay]); // Dependency array ensures this effect runs when map or weatherOverlay state changes

  return (
    <div className="map-container" id="map" style={{ height: '600px', width: '100%' }}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;
