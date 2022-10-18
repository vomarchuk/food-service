import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../Hooks';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { Sorting } from '../../components/Sorting';
import { IProducts } from '../../interfaces/goods.interface';
import { beckEnd } from '../../goods';
import { colors } from '../../constants';
import { Button } from '@mui/material';

import { typesSort } from '../../goods';

import style from './ProductsPage.module.scss';
const {
  DEFAULT,
  BY_NAME,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  NUMBER_OF_PIECES,
  WEIGHT,
} = typesSort;

interface Props {
  array: IProducts[];
  typeSort?: string;
}

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

  const [products, setProducts] = useState<IProducts[] | null>(currentProducts);
  const [filteredProducts, setFilteredProducts] = useState<IProducts[] | null>(
    null
  );

  const sortByName = (array: IProducts[], typeSort?: string) =>
    array.sort((a, b) => a.productName.localeCompare(b.productName));

  const sortByPrice = (array: IProducts[], typeSort: string) => {
    if (typeSort === PRICE_HIGH_TO_LOW) {
      return array.sort((a, b): any => b.price - a.price);
    }
    if (typeSort === PRICE_LOW_TO_HIGH) {
      return array.sort((a, b): any => a.price - b.price);
    }
    if (typeSort === NUMBER_OF_PIECES) {
      return array.sort((a, b): any => a.chunks - b.chunks);
    }
  };

  const sorting = (currentProducts: IProducts[], typeSort: string) => {
    if (typeSort === BY_NAME) {
      const result = sortByName(currentProducts);
      return result;
    }
    if (
      typeSort === PRICE_LOW_TO_HIGH ||
      PRICE_HIGH_TO_LOW ||
      NUMBER_OF_PIECES
    ) {
      const result = sortByPrice(currentProducts, typeSort);
      return result;
    }
  };
  // console.log(sortType);

  sorting(currentProducts, sortType);

  // useEffect(() => {
  // setFilteredProducts(products);
  // console.log(sortType);
  // }, [sortType]);

  return (
    <Container>
      <h2 className={style.titleCategory}>{categoryName}</h2>
      <Sorting />
      <ul className={style.productsList}>
        {currentProducts &&
          currentProducts.map((filteredProducts) => {
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
