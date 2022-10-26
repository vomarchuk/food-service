import { Box } from '@mui/material';
import { GoogleMaps } from '../../components/GoogleMaps';

import style from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <Box className={style.box}>
      <h2 className={style.title}>Your shopping cart is empty.</h2>
      <p className={style.text}>Add something faster!</p>
      <p className={style['text-accent']}>Free delivery from 100 zl</p>
      <Box sx={styles.forBox}>
        <GoogleMaps />
      </Box>
    </Box>
  );
};

const styles = {
  forBox: { marginTop: '20px' },
};
