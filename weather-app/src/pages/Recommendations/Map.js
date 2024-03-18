import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    const apiKey = '9dd77ed418cc13a9dea204f8b91aaf61';
    const op = 'TA2';
    const z = '{z}';
    const x = '{x}';
    const y = '{y}';
    const fillBound = true;
    const opacity = 0.6;
    const palette = '-65:821692;-55:821692;-45:821692;-40:821692;-30:8257db;-20:208cec;-10:20c4e8;0:23dddd;10:c2ff28;20:fff028;25:ffc228;30:fc8014';
    const mapUrl = `http://maps.openweathermap.org/maps/2.0/weather/${op}/${z}/${x}/${y}?appid=${apiKey}&fill_bound=${fillBound}&opacity=${opacity}&palette=${palette}`;
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
