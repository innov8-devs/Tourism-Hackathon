import React, { useMemo } from 'react';

import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';

/* global google */

export type LatLngLiteral = google.maps.LatLngLiteral;
export type DirectionResult = google.maps.DirectionsResult;
export type PlaceResult = google.maps.places.PlaceResult;
export type MapMouseEvent = google.maps.MapMouseEvent;

type Props = {
  onDrag?: Function;
  center2: {
    lat: number;
    lng: number;
  };
  direction?: DirectionResult;
};

//type MapOptions = google.maps.MapOptions;

const containerStyle = {
  width: '100%',
  height: '100%',
};
const GoogleMapcomponent: React.FC<Props> = ({ children, center2, direction }) => {
  const centerPass = useMemo(() => center2, [center2]);

  // const onLoad = React.useCallback(function callback() {}, []);

  // type MapDrag = {
  //   geocode: LatLngLiteral | null;
  //   onMouseHover: (event: MapMouseEvent) => void;
  //   onTilesloaded: () => void;
  // };

  // const options = useMemo<MapOptions>(
  //   () => ({ mapId: `${process.env.NEXT_PUBLIC_GOOGLE_API}`, disableDefaultUI: true }),
  //   [],
  // );

  return (
    <GoogleMap
      center={centerPass}
      mapContainerStyle={containerStyle}
      zoom={16}
      // onLoad={(map) => onLoad(map)}
      // options={options}
    >
      {direction && (
        <DirectionsRenderer
          directions={direction}
          options={{
            polylineOptions: {
              zIndex: 50,
              strokeColor: '#1976D2',
              strokeWeight: 5,
            },
          }}
        />
      )}
      {children}
    </GoogleMap>
  );
};

export default GoogleMapcomponent;
