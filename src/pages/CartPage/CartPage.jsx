import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { isObject } from '../../helpers';
import { Container } from '../../components/Container';
import { EmptyCart } from '../../components/EmptyCart';
import { Maps } from '../../components/Maps/Maps';
import { CartOfProducts } from '../../components/CartOfProducts';

import { colors } from '../../constants';

import style from './CartPage.module.scss';

export const CartPage = () => {
  const order = useSelector((state) => state.products);
  const delivery = useSelector((state) => state.delivery);

  return (
    <Container>
      {order.length === 0 ? <EmptyCart /> : <CartOfProducts order={order} />}
      {!isObject(delivery) ? (
        <>
          <Maps mapSize="small" />
          <Link sx={styles.forLink} to="/checkout">
            <Button sx={styles.forButton} variant="contained">
              Make an order
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Maps mapSize="large" showDelivery={true} />
          <Link sx={styles.forLink} to="/checkout">
            <Button sx={styles.forButton} variant="contained">
              See menu
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
};

const styles = {
  forLink: {
    textDecoration: 'none',
  },
  forButton: {
    mt: '20px',
    minWidth: '330px',
    textTransform: 'none',
    backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    padding: '5px 65px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: colors.MAIN_ACCENT_COLOR,
    },
  },
};
