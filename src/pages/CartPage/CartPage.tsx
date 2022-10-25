import { Container } from '../../components/Container';

import { Box, Skeleton } from '@mui/material';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';

const ourCoordinates = { lat: 52.252692, lng: 21.0336633 };

export const CartPage = () => {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [distance, setDistance] = useState<any>(null);
  const [duration, setDuration] = useState<any>(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef<any | undefined>();
  // originRef.current.value = '52.252692 21.0336633';
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef<any | undefined>();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDULHU7YeW9Tj_j6c57bpLw3snpA0rL5Y0',
    libraries: ['places'],
  });

  if (!isLoaded) {
    return (
      <Container>
        <Skeleton />
      </Container>
    );
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

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance(null);
    setDuration(null);
    originRef.current.value = '';
    destinationRef.current.value = '';
  };

  return (
    <Container>
      <Box position="relative">
        <h2>Your shopping cart is empty.</h2>
        <p>Add something faster!</p>
        <p>Free delivery from 100 zl</p>

        <Box
          // position="absolute"
          width="100%"
          height="100%"
          zIndex="modal"
        >
          {/* {Google Maps Box} */}
          <GoogleMap
            center={ourCoordinates}
            zoom={15}
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
        <Box>
          {/* <Autocomplete>
            <input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete> */}
          <Autocomplete>
            <input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
          <button type="button" onClick={calculateRoute}>
            Click
          </button>
        </Box>
      </Box>
    </Container>
  );
};
