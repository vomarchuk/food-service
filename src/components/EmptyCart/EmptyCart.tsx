import { Box, Link } from '@mui/material';
import { GoogleMaps } from '../../components/GoogleMaps';
import { CustomButton } from '../CustomButton';
import { colors } from '../../constants';
import style from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <Box className={style.box}>
      <h2 className={style.title}>Your shopping cart is empty.</h2>
      <p className={style.text}>Add something faster!</p>
      <p className={style['text-accent']}>Free delivery from 100 zl</p>

      <Box>
        <input type="text" />
      </Box>

      <Box className={style['Box-googleMaps']}>
        <GoogleMaps />
      </Box>
      {/* <h2 className={style.title}>Enter your address</h2> */}
      {/* <p className={style.text}>And know the delivery time</p> */}
      {/* <Link href="/checkout" sx={styles.forLink}> */}
      {/* <CustomButton text="Make an order" style={styles.forButton} /> */}
      {/* </Link> */}
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
  forLink: {
    textDecoration: 'none',
  },
};
