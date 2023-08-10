import React from 'react';

import GoogleMapReact from 'google-map-react';

// Component đại diện cho marker trên bản đồ

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker: React.FC<MarkerProps> = ({ lat, lng }) => (
  <div className="marker" data-lat={lat} data-lng={lng}>
    Marker
  </div>
);
export const MapConponent = () => {
  const markerLocation = { lat: 10.855557444109884, lng: 106.78511244434563 };
  return (
    <div className='container w-[80%] h-[500px]'>
      <GoogleMapReact
        defaultCenter={{ lat: 10.855557444109884, lng: 106.78511244434563 }}
        defaultZoom={12}
      >
        <Marker lat={10.855557444109884} lng={106.78511244434563 } />
      </GoogleMapReact>
    </div>
  );
};
