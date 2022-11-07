import { useSelector } from 'react-redux';
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
import { isObject } from '../../helpers';
import style from './GoogleMaps.module.scss';

export const GoogleMaps = ({ mapHeight, showDelivery }) => {
  const ourCoordinates = { lat: 52.252692, lng: 21.0336633 };
  const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [libraries] = useState(['places']);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();
  const delivery = useSelector((state) => state.delivery);

  // buttonTextRef.current.value = 'Make an order';

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_KEY,
    libraries,
  });

  if (!isLoaded) {
    return <Skeleton />;
  }

  async function calculateRoute() {
    const coordinates = '52.252692 21.0336633';

    if (destinationRef.current.value === '') {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: coordinates,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
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
        mapContainerStyle={{ width: '100%', height: mapHeight }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
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

      {showDelivery ? (
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
                    defaultValue={
                      isObject(delivery)
                        ? `${delivery.street} ${delivery.house}, ${delivery.city}, Poland`
                        : ''
                    }
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
        </>
      ) : (
        <>
          <h2 className={style.title}>Enter your address</h2>
          <p className={style.text}>And know the delivery time</p>
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
