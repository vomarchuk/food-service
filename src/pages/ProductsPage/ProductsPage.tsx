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

const sortProduct = (goods: IProducts[], typeSort: string) => {
  switch (typeSort) {
    case BY_NAME:
      return goods.sort((a, b) => a.productName.localeCompare(b.productName));

    case PRICE_LOW_TO_HIGH:
      return goods.sort((a, b) => a.price - b.price);

    case PRICE_HIGH_TO_LOW:
      return goods.sort((a, b) => b.price - a.price);

    case NUMBER_OF_PIECES:
      return goods.sort((a, b) => a.chunks - b.chunks);

    default:
      console.log(typeSort);
  }
};

// const sorting = (currentProducts: IProducts[], typeSort: string) => {
//   if (typeSort === BY_NAME) {
//     const result = sortByName(currentProducts);
//     return result;
//   }
//   if (typeSort === PRICE_LOW_TO_HIGH || PRICE_HIGH_TO_LOW || NUMBER_OF_PIECES) {
//     const result = sortByPrice(currentProducts, typeSort);
//     return result;
//   }
// };

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

  //
  // sortProduct(currentProducts, BY_NAME);

  const x = sortProduct(currentProducts, PRICE_HIGH_TO_LOW);

  console.log(x);

  //
  // const sortProducts = sorting(currentProducts, sortType);
  // if (sortProducts) setProducts(sortProducts);

  const onChangeSortType = (value: string) => {
    setSortType(value);
  };

  useEffect(() => {
    setProducts(JSON.stringify(currentProducts));

    // const sortProducts = sorting(currentProducts, sortType);
    // if (sortProducts) setProducts(sortProducts);
    // setProducts('products', currentProducts);
    // console.log('second render products', sortProducts);
    // console.log(sortType);
  }, [sortType]);

  return (
    <Container>
      <h2 className={style.titleCategory}>{categoryName}</h2>
      <Sorting onChangeSortType={onChangeSortType} sortType={sortType} />
      <ul className={style.productsList}>
        {JSON.parse(products) &&
          JSON.parse(products).map((filteredProducts: IProducts) => {
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
