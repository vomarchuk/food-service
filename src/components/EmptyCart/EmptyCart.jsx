import { Box } from '@mui/material';
import { GoogleMaps } from '../GoogleMaps';

import style from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <Box className={style.box}>
      <h2 className={style.title}>Your shopping cart is empty.</h2>
      <p className={style.text}>Add something faster!</p>
    </Box>
  );
};
