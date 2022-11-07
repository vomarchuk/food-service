import { Box } from '@mui/material';
import { GoogleMaps } from '../GoogleMaps';

import style from './Maps.module.scss';

const MAP_SIZE = {
  small: '113px',
  large: '380px',
};

export const Maps = ({ mapSize, showDelivery }) => {
  return (
    <Box className={style['box-googleMaps']}>
      <p className={style['text-accent']}>Free delivery from 100 zl</p>

      <GoogleMaps
        mapHeight={MAP_SIZE[`${mapSize}`]}
        showDelivery={showDelivery}
      />
    </Box>
  );
};
