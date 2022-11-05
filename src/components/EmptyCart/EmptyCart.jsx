import { Box } from '@mui/material';
import { GoogleMaps } from '../GoogleMaps';
import { colors } from '../../constants';
import style from './EmptyCart.module.scss';

// const styles = {
//   forButton: {
//     marginTop: '20px',
//     textTransform: 'none',
//     backgroundColor: colors.ACTIVE_ACCENT_COLOR,
//     color: colors.SECONDARY_LIGHT_COLOR,
//     padding: '5px 65px',
//     fontSize: '20px',
//     '&:hover': {
//       backgroundColor: colors.MAIN_ACCENT_COLOR,
//     },
//   },
//   forLink: {
//     textDecoration: 'none',
//   },
// };

export const EmptyCart = () => {
  return (
    <Box className={style.box}>
      <h2 className={style.title}>Your shopping cart is empty.</h2>
      <p className={style.text}>Add something faster!</p>
      <p className={style['text-accent']}>Free delivery from 100 zl</p>

      <Box className={style['Box-googleMaps']}>
        <GoogleMaps />
      </Box>
    </Box>
  );
};
