import { useState, useEffect } from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { Sorting } from '../../components/Sorting';
import { IProducts } from '../../interfaces/goods.interface';
import { beckEnd } from '../../goods';
import { colors } from '../../constants';
import { Button } from '@mui/material';

import style from './ProductsPage.module.scss';

export const ProductsPage = () => {
  const [products, setProducts] = useState<IProducts[] | null>(null);

  const { pathname } = useLocation();
  const { categoryName } = useParams();

  useEffect(() => {
    const currentCategory = beckEnd.categories.find(
      (c) => c.categoryName === categoryName
    );
    setProducts(
      beckEnd.products.filter(
        (p) => p.categoryId === currentCategory?.categoryId
      )
    );
  }, []);

  return (
    <Container>
      <Sorting />
      <h2 className={style.titleCategory}>{categoryName}</h2>
      <ul className={style.productsList}>
        {products &&
          products.map((product) => {
            const {
              productId,
              productName,
              // categoryId,
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
                  width="100px"
                />
                <div className={style.description}>
                  <Link
                    to={`${pathname}/${productId}`}
                    className={style.productLink}
                  >
                    <p className={style.title}> {productName}</p>
                  </Link>
                  {chunks ? (
                    <p className={style.text}>
                      {weight} grams, {chunks} chunks
                    </p>
                  ) : (
                    <p className={style.text}>{weight} sm</p>
                  )}
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
    color: colors.SECONDARY_LIGHT_COLOR,
    padding: '2px 26px',
    '&:hover': {
      backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    },
  },
};
