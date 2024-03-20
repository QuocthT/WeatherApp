import React, { useEffect, useState } from 'react';

const Map = () => {
  const [map, setMap] = useState(null);
  const [weatherOverlay, setWeatherOverlay] = useState(null);

  useEffect(() => {
    if (!map) {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.3555, lng: -1.1743 },
        zoom: 6,
      });
      setMap(mapInstance);
    }
  }, [map]);

  useEffect(() => {
    if (map && !weatherOverlay) {
      // Add weather overlay here
      const apiKey = '82a5bdefb47889cf36ac199b655b5d38';
      const weatherTileUrl = `http://maps.openweathermap.org/maps/2.0/weather/PA0/{z}/{x}/{y}?date=1552861800&appid=$82a5bdefb47889cf36ac199b655b5d38`;
      const bounds = new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(85, -180),
        new window.google.maps.LatLng(-85, 180)
      );
      const weatherOverlayInstance = new window.google.maps.GroundOverlay(
        weatherTileUrl,
        bounds
      );
      weatherOverlayInstance.setMap(map);
      setWeatherOverlay(weatherOverlayInstance);
    }
  }, [map, weatherOverlay]);

  return (
    <div className="map-container" id="map" style={{ height: '600px', width: '100%' }}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;
