import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartSelectors } from 'redux/cart';

import { Button } from '@mui/material';

import { Container } from 'components/Container';
import { Title } from 'components/Title';
import { notify } from 'components/Toast';
import { IsLoading } from 'components/isLoading/IsLoading';

import { colors } from 'constants';

import style from './BigCardProduct.module.scss';

export const BigCardProduct = ({ product }) => {
  const productOfCart = useSelector(cartSelectors.getCartOfProducts);
  const { productName, chunks, weight, price, productImageUrl } = product;
  console.log(productImageUrl);
  const dispatch = useDispatch();
  const handleClick = (currentProduct) => {
    const isDuplicate = productOfCart.filter(({ _id: productId }) => {
      return productId === currentProduct['_id'];
    });

    isDuplicate.length === 0
      ? dispatch(
          cartActions.addProductInCart({ ...currentProduct, quantity: 1 })
        )
      : dispatch(cartActions.updateProductInCart(currentProduct));
    notify('You have added the product to the cart!');
  };

  return (
    <Container>
      <div className={style.card}>
        {product.productImageUrl ? (
          <img
            src={`https://food-service-api.herokuapp.com/${productImageUrl}`}
            alt={productName}
            width="300px"
          />
        ) : (
          <IsLoading />
        )}

        <Title text={productName} />
        {weight !== null && chunks !== null && (
          <p className={style.text}>
            {weight} grams, {chunks} chunks
          </p>
        )}
        <div className={style.wrapper}>
          <p className={style.price}>{price} zl</p>
          <Button
            variant="contained"
            sx={styles.forButton}
            onClick={() => handleClick(product)}
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
