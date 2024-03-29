import { useDispatch } from 'react-redux';
import { Box, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { Title } from 'components/Title';
import { notify } from 'components/Toast';
import { colors } from 'constants';

import { cartActions } from 'redux/cart';
import style from './CartOfProducts.module.scss';

export const CartOfProducts = ({ order }) => {
  const dispatch = useDispatch();
  const totalOrder = order.reduce((total, product) => {
    return (total += product.quantity);
  }, 0);
  const totalAmount = order.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);

  const addProductOnClick = (product) => {
    dispatch(cartActions.updateProductInCart(product));
    notify('You have added the product to the cart!');
  };
  const removeProductOnClick = (product) => {
    dispatch(cartActions.removeProductInCart(product));
  };

  return (
    <section className={style.cart}>
      <Title text="Cart" />
      {order.map((product) => {
        const {
          _id: productId,
          productName,
          productImageUrl,
          quantity,
          price,
        } = product;
        return (
          <div className={style['product']} key={productId}>
            <img
              src={`https://food-service-api.herokuapp.com/${productImageUrl}`}
              alt={productName}
              width="90px"
            />
            <Box className={style['product__description']}>
              <p className={style['text']}>{productName}</p>
              <div className={style['wrapper']}>
                <Box className={style['amount__box']}>
                  <IconButton
                    aria-label="remove product"
                    sx={{ color: colors.MAIN_DARK_COLOR }}
                    onClick={() => removeProductOnClick(product)}
                  >
                    <RemoveIcon fontSize="inherit" />
                  </IconButton>
                  <span>{quantity}</span>
                  <IconButton
                    aria-label="add product"
                    sx={{ color: colors.ACTIVE_ACCENT_COLOR }}
                    onClick={() => addProductOnClick(product)}
                  >
                    <AddCircleIcon fontSize="inherit" />
                  </IconButton>
                </Box>

                <span className={style['product__sum']}>
                  {quantity * price} zl
                </span>
              </div>
            </Box>
          </div>
        );
      })}

      <Box className={style['total__box']}>
        <h2 className={style['total__title']}>Total</h2>
        <ul className={style['total__list']}>
          <li className={style['total__item']}>
            <p className={style['text']}>{totalOrder} products</p>
            <p className={style['total__text--bold']}>{totalAmount} zl</p>
          </li>
          <li className={style['total__item']}>
            <p className={style['text']}>Discount</p>
            <p className={style['total__text--bold']}>0 zl</p>
          </li>
          <li className={style['total__item']}>
            <p className={style['text']}>Delivery</p>
            <p className={style['total__text--bold']}>Free</p>
          </li>
        </ul>
      </Box>
    </section>
  );
};
