import { useEffect } from 'react';
import { useLocalStorage } from '../../Hooks';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { Sorting } from '../../components/Sorting';

import { colors } from '../../constants';
import { Button } from '@mui/material';

import { sortProduct } from '../../helpers';
import { beckEnd } from '../../goods';
import { IProducts } from '../../interfaces/goods.interface';
import { typesSort } from '../../goods';

import style from './ProductsPage.module.scss';
const { DEFAULT } = typesSort;

export const ProductsPage = () => {
  const { pathname } = useLocation();
  const { categoryName } = useParams();

  const currentCategory = beckEnd.categories.find(
    (c) => c.categoryName === categoryName
  );
  const currentProducts = beckEnd.products.filter(
    (p) => p.categoryId === currentCategory?.categoryId
  );

  const [sortType, setSortType] = useLocalStorage('sortType', DEFAULT);
  const [products, setProducts] = useLocalStorage(
    'products',
    JSON.stringify(currentProducts)
  );

  const result = sortProduct(JSON.parse(products), sortType);

  const onChangeSortType = (value: string) => {
    setSortType(value);
  };

  useEffect(() => {
    setProducts(JSON.stringify(currentProducts));
  }, [sortType]);

  return (
    <Container>
      <h2 className={style.titleCategory}>{categoryName}</h2>
      <Sorting onChangeSortType={onChangeSortType} sortType={sortType} />
      <ul className={style.productsList}>
        {result &&
          result.map((filteredProducts: IProducts) => {
            const {
              productId,
              productName,
              // categoryId,
              weight,
              chunks,
              price,
              smallImage,
            } = filteredProducts;

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
                      // onClick={handleClick}
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
