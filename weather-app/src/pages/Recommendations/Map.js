import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    const apiKey = '9dd77ed418cc13a9dea204f8b91aaf61';
    const op = 'PA0';
    const z = '{z}';
    const x = '{x}';
    const y = '{y}';
    const date = '1552861800'; // Example date, you can change it as needed
    const mapUrl = `http://maps.openweathermap.org/maps/2.0/weather/${op}/${z}/${x}/${y}?date=${date}&appid=${apiKey}`;
    setMapUrl(mapUrl);
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[52.3555, -1.1743]} zoom={6} style={{ height: '600px', width: '100%' }}>
        <TileLayer url={mapUrl} />
      </MapContainer>
    </div>
  );
};

export default Map;
