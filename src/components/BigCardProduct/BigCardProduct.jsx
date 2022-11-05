import { useDispatch } from 'react-redux';
import { addProductInCart } from '../../redux/cart/actions';

import { Button } from '@mui/material';

import { Container } from '../Container';
import { Title } from '../Title';
import { colors } from '../../constants';
import style from './BigCardProduct.module.scss';

export const BigCardProduct = ({ product }) => {
  const { largeImage, productName, chunks, weight, price } = product;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProductInCart(product));
  };

  return (
    <Container>
      <div className={style.card}>
        <img
          src={largeImage.x1}
          srcSet={`${largeImage.x1} 1x,
        ${largeImage.x2} 2x`}
          alt={`${productName}`}
          width="300px"
        />
        <Title text={productName} />
        <p className={style.text}>
          {weight} grams, {chunks} chunks
        </p>
        <div className={style.wrapper}>
          <p className={style.price}>{price} zl</p>
          <Button
            variant="contained"
            sx={styles.forButton}
            onClick={handleClick}
          >
            I want!
          </Button>
        </div>
      </div>
    </Container>
  );
};

const styles = {
  forButton: {
    textTransform: 'none',
    backgroundColor: colors.MAIN_ACCENT_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    padding: '5px 65px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    },
  },
};
