import { useSelector, useDispatch } from 'react-redux';
import { useLocalStorage } from 'Hooks';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { isObject } from 'helpers';
import { Container } from 'components/Container';
import { EmptyCart } from 'components/EmptyCart';
import { Maps } from 'components/Maps/Maps';
import { CartOfProducts } from 'components/CartOfProducts';

import { colors } from 'constants';
import { useEffect } from 'react';
import { addDeliveryInfo } from 'redux/delivery/actions';
import { cartSelectors } from '../../redux/cart';

export const CartPage = () => {
  const [deliveryStorage, setDeliveryStorage] = useLocalStorage(
    'delivery',
    null
  );
  const order = useSelector(cartSelectors.getCartOfProducts);
  const delivery = useSelector((state) => state.delivery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.stringify(delivery) === deliveryStorage) {
      return;
    }
    if (!isObject(delivery) && JSON.parse(deliveryStorage)) {
      dispatch(addDeliveryInfo(JSON.parse(deliveryStorage)));
    }
    if (isObject(delivery)) {
      setDeliveryStorage(JSON.stringify(delivery));
    }
  }, []);

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
          <Link sx={styles.forLink} to="/">
            {order.length === 0 ? (
              <Button sx={styles.forButton} variant="contained">
                See menu
              </Button>
            ) : (
              <Button sx={styles.forButton} variant="contained">
                Send an order
              </Button>
            )}
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
