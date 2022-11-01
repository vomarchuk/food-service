import { Button, Link } from '@mui/material';
import { Container } from '../../components/Container';
import { EmptyCart } from '../../components/EmptyCart';

import { colors } from '../../constants';

export const CartPage = () => {
  return (
    <Container>
      {/* <EmptyCart /> */}
      <Link sx={styles.forLink} href="/checkout">
        <Button sx={styles.forButton} variant="contained">
          Make an order
        </Button>
      </Link>
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
