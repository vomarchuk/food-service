import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Container } from '../../components/Container';
import { EmptyCart } from '../../components/EmptyCart';
import { CartOfProducts } from '../../components/CartOfProducts';

import { colors } from '../../constants';

export const CartPage = () => {
  const order = useSelector((state) => state.products);
  if (order.length > 0) {
    console.log(order);
  }

  return (
    <Container>
      {order.length > 0 ? (
        <CartOfProducts order={order} />
      ) : (
        <>
          <EmptyCart />
          <Link sx={styles.forLink} to="/checkout">
            <Button sx={styles.forButton} variant="contained">
              Make an order
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
