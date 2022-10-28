// import { Container } from '../../components/Container';

import { useRef, useState } from 'react';

import { Box, Skeleton } from '@mui/material';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

interface IGoogleMaps {
  getInfo?: boolean;
}

export const GoogleMaps = ({ getInfo }: IGoogleMaps) => {
  const ourCoordinates = { lat: 52.252692, lng: 21.0336633 };
  const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
  const [map, setMap] = useState(/** @type google.maps.Map */ null);

  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [distance, setDistance] = useState<any>(null);
  const [duration, setDuration] = useState<any>(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef<any>();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <Skeleton />;
  }

  async function calculateRoute() {
    const coordinates = '52.252692 21.0336633';

    if (destinationRef.current.value === '') {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: coordinates,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDistance(results.routes[0].legs[0].distance?.text);
    setDuration(results.routes[0].legs[0].duration?.text);
    setDirectionsResponse(results);
  }

  return (
    <Box position="relative">
      <Box
        // position="absolute"
        width="100%"
        height="100%"
        zIndex="modal"
      >
        {/* {Google Maps Box} */}

        <GoogleMap
          center={ourCoordinates}
          zoom={16}
          mapContainerStyle={{ width: '100%', height: '300px' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map: any) => setMap(map)}
        >
          <Marker position={ourCoordinates} />

          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      {getInfo && (
        <Box>
          <Autocomplete>
            <input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
          <button type="button" onClick={calculateRoute}>
            Click
          </button>
        </Box>
      )}
    </Box>
  );
};
