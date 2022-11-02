import { useEffect } from 'react';
import { useLocalStorage } from '../../Hooks';
import { Link, useLocation, useParams } from 'react-router-dom';

import { Container } from '../../components/Container';
import { Sorting } from '../../components/Sorting';

import { colors } from '../../constants';
import { Button } from '@mui/material';

import { sortProduct, getCurrentProductsCategory } from '../../helpers';
import { backEnd } from '../../goods';
import { typesSort } from '../../goods';

import style from './ProductsPage.module.scss';
////////////////////////////////////////////////////////////////
import { addProduct } from '../../redux/cart/actions';
import { useSelector, useDispatch } from 'react-redux';
const { DEFAULT } = typesSort;

const getProduct = (product) => {
  return console.log(product);
};

export const ProductsPage = () => {
  const { pathname } = useLocation();
  const { categoryName } = useParams();

  const productsInCart = useSelector((state) => state.products);

  const CurrentProductsCategory = getCurrentProductsCategory(
    backEnd,
    categoryName
  );
  const [sortType, setSortType] = useLocalStorage('sortType', DEFAULT);
  const [products, setProducts] = useLocalStorage(
    'products',
    JSON.stringify(CurrentProductsCategory)
  );

  const result = sortProduct(JSON.parse(products), sortType);

  const dispatch = useDispatch();
  const onChangeSortType = (value) => {
    setSortType(value);
  };

  console.log(productsInCart);
  const handleClick = (product) => {
    // getProduct(product);
    dispatch(addProduct(product));
  };

  useEffect(() => {
    setProducts(JSON.stringify(CurrentProductsCategory));
  }, [sortType]);

  return (
    <Container>
      <h1 className={style.titleCategory}>{categoryName}</h1>
      <Sorting onChangeSortType={onChangeSortType} sortType={sortType} />
      <ul className={style.productsList}>
        {result &&
          result.map((filteredProducts) => {
            const {
              productId,
              productName,
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
                      onClick={() => handleClick(filteredProducts)}
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
