import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from '../../components/Container';
import style from './ProductsPage.module.scss';

import { beckEnd } from '../../goods';
import { colors } from '../../constants';
import { Button } from '@mui/material';

export const ProductsPage = () => {
  const [products, setProducts] = useState<any[] | null>(null);

  const { pathname } = useLocation();

  useEffect(() => {
    setProducts(beckEnd.products);
  }, []);

  return (
    <Container>
      <ul className={style.productsList}>
        {products &&
          products.map((product) => {
            const {
              productId,
              productName,
              categoryId,
              weight,
              chunks,
              price,
              smallImage,
            } = product;

            return (
              <li key={productId} className={style.productItem}>
                <img
                  src={smallImage.x1}
                  srcSet={`${smallImage.x1} 1x,
                          ${smallImage.x2} 2x`}
                  alt={`${productName}`}
                />
                <div className={style.description}>
                  <Link
                    to={`${pathname}/${productId}`}
                    className={style.productLink}
                  >
                    <p className={style.title}> {productName}</p>
                  </Link>
                  <p className={style.text}>
                    {weight} grams, {chunks} chunks
                  </p>
                  <div className={style.wrapper}>
                    <p className={style.price}>{price} zl</p>
                    <Button
                      variant="contained"
                      type="button"
                      sx={styles.forButton}
                    >
                      I want!
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </Container>
  );
};

const styles = {
  forButton: {
    textTransform: 'none',
    backgroundColor: colors.MAIN_ACCENT_COLOR,
    padding: '2px 26px',
    '&:hover': {
      backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    },
  },
};
