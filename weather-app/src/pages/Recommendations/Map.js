import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    const apiKey = '9dd77ed418cc13a9dea204f8b91aaf61';
    const op = 'clouds_new';
    const z = 10;
    const x = 0;
    const y = 0;
    const mapUrl = `http://maps.openweathermap.org/maps/2.0/weather/${op}/${z}/${x}/${y}?appid=${apiKey}`;
    setMapUrl(mapUrl);
  }, []);

  return (
    <div className="map-container">
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url={mapUrl} />
      </MapContainer>
    </div>
  );
};

export default Map;
