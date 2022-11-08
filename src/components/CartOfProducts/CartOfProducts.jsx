import { Box, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import { Title } from '../Title';

import { colors } from '../../constants';

import style from './CartOfProducts.module.scss';
export const CartOfProducts = ({ order }) => {
  const totalOrder = order.length;
  const totalAmount = order.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <section className={style.cart}>
      <Title text="Cart" />
      {order.map(({ productId, smallImage, productName }) => {
        return (
          <div className={style['product']} key={productId}>
            <img
              key={productId}
              src={smallImage.x1}
              alt={productName}
              width="90"
              srcSet={`${smallImage.x1} 1x, ${smallImage.x2} 2x`}
            />
            <Box className={style['product__description']}>
              <p className={style['text']}>{productName}</p>
              <div className={style['wrapper']}>
                <Box className={style['amount__box']}>
                  <IconButton
                    aria-label="remove product"
                    sx={{ color: colors.MAIN_DARK_COLOR }}
                  >
                    <RemoveIcon fontSize="inherit" />
                  </IconButton>
                  <span>1</span>
                  <IconButton
                    aria-label="add product"
                    sx={{ color: colors.ACTIVE_ACCENT_COLOR }}
                  >
                    <AddCircleIcon fontSize="inherit" />
                  </IconButton>
                </Box>

                <span className={style['product__summ']}>310 zl</span>
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

// const style ={}
