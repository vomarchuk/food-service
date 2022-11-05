import { Box } from '@mui/material';
import { Title } from '../Title';

import style from './CartOfProducts.module.scss';
export const CartOfProducts = () => {
  return (
    <section className={style.cart}>
      <Title text="Cart" />

      <Box className={style['total__box']}>
        <h2 className={style['total__title']}>Total</h2>
        <ul className={style['total__list']}>
          <li className={style['total__item']}>
            <p className={style['total__text']}>1 products</p>
            <p className={style['total__text--bold']}>100 zl</p>
          </li>
          <li className={style['total__item']}>
            <p className={style['total__text']}>Discount</p>
            <p className={style['total__text--bold']}>0 zl</p>
          </li>
          <li className={style['total__item']}>
            <p className={style['total__text']}>Delivery</p>
            <p className={style['total__text--bold']}>Free</p>
          </li>
        </ul>
      </Box>
    </section>
  );
};
