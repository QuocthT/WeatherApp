import React, { useEffect, useState } from 'react';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 52.3555, lng: -1.1743 },
        zoom: 6,
      });
      setMap(mapInstance);
    }
  }, [map]);

  return (
    <div className="map-container" id="map" style={{ height: '600px', width: '100%' }}>
      {/* Map will be rendered here */}
    </div>
  );
};

export default Map;
