import { useRef, useState } from 'react';

import { MarkerIcon, ClockIcon } from '../Icons';

import { Box, Skeleton, IconButton, Button } from '@mui/material';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { colors } from '../../constants';

import style from './GoogleMaps.module.scss';

export const GoogleMaps = () => {
  const ourCoordinates = { lat: 52.252692, lng: 21.0336633 };
  const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
  const [map, setMap] = useState<any>(/** @type google.maps.Map */ null);

  const [directionsResponse, setDirectionsResponse] = useState<any>(null);
  const [distance, setDistance] = useState<any>('');
  const [duration, setDuration] = useState<any>('');
  const [getInfo, setGetInfo] = useState<boolean>(false);

  const handleChange = () => {
    if (getInfo) {
      return;
    }
    setGetInfo(!getInfo);
  };

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef<any>();

  // buttonTextRef.current.value = 'Make an order';

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

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance?.text);
    setDuration(results.routes[0].legs[0].duration?.text);
  }

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    destinationRef.current.value = '';
  };

  return (
    <Box
      position="relative"
      // zIndex="modal"
    >
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

      <IconButton
        sx={styles.forIconButton}
        onClick={() => map.panTo(ourCoordinates)}
      >
        <MarkerIcon />
      </IconButton>

      {getInfo ? (
        <>
          <Box>
            <Box className={style['Box-destination']}>
              <label className={style['destination__label']}>
                Enter an address
                <Autocomplete>
                  <input
                    className={style['destination__input']}
                    type="text"
                    placeholder="Destination"
                    ref={destinationRef}
                  />
                </Autocomplete>
              </label>
              <Box className={style['destination__duration']}>
                <ClockIcon />
                <Box className={style['destination__text']}>
                  <p>{duration || 'no destination'}</p>
                  <p>Min. order - 50 zl</p>
                </Box>
              </Box>
            </Box>
            <button type="button" onClick={calculateRoute}>
              Click
            </button>
            <button type="button" onClick={clearRoute}>
              clear
            </button>
          </Box>

          {/* <Button
            sx={styles.forButton}
            variant="contained"
            onClick={handleChange}
          >
            See menu
          </Button> */}
        </>
      ) : (
        <>
          <h2 className={style.title}>Enter your address</h2>
          <p className={style.text}>And know the delivery time</p>

          {/* <Button
            sx={styles.forButton}
            variant="contained"
            onClick={handleChange}
          >
            Make an order
          </Button> */}
        </>
      )}
    </Box>
  );
};

const styles = {
  forButton: {
    marginTop: '20px',
    textTransform: 'none',
    backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    padding: '5px 65px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: colors.MAIN_ACCENT_COLOR,
    },
  },
  forIconButton: {
    transform: 'translate(0, -50%)',
  },
};
