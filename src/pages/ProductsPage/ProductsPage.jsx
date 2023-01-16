import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartSelectors } from 'redux/cart';
import { categoriesSelectors } from 'redux/categories';
import { productsOperations, productsSelectors } from 'redux/products';

import { Button } from '@mui/material';
import { Container } from 'components/Container';
// import { Sorting } from 'components/Sorting';
import { notify } from 'components/Toast';
import { colors } from 'constants';

// import { sortProduct, getCurrentProductsCategory } from 'helpers';
// import { typesSort } from 'goods';

import style from './ProductsPage.module.scss';
////////////////////////////////////////////////////////////////

// const { DEFAULT } = typesSort;

export const ProductsPage = () => {
  // const { pathname } = useLocation();
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  const productOfCart = useSelector(cartSelectors.getCartOfProducts);

  const products = useSelector(productsSelectors.getProducts);
  const categories = useSelector(categoriesSelectors.getCategories);
  const category = categories.find(
    (category) => category['_id'] === categoryId
  );

  // const onChangeSortType = (value) => {
  //   setSortType(value);
  // };

  const handleClick = (currentProduct) => {
    const isDuplicate = productOfCart.filter((product) => {
      return product['_id'] === currentProduct['_id'];
    });

    isDuplicate.length === 0
      ? dispatch(cartActions.addProductInCart(currentProduct))
      : dispatch(cartActions.updateProductInCart(currentProduct));
    notify('You have added the product to the cart!');
  };

  useEffect(() => {
    dispatch(productsOperations.fetchProductsByCategoryId(categoryId));
  }, [categoryId, dispatch]);
  return (
    <Container>
      {category && (
        <h1 className={style.titleCategory}>{category.categoryName}</h1>
      )}
      {/* {typesSort && (
        <Sorting onChangeSortType={onChangeSortType} sortTypes={typesSort} />
      )} */}
      <ul className={style.productsList}>
        {products.length > 0 &&
          products.map((filteredProduct) => {
            const {
              _id: productId,
              productName,
              productImage,
              weight,
              chunks,
              price,
            } = filteredProduct;
            const currentProduct = { ...filteredProduct, quantity: 1 };

            return (
              <li key={productId} className={style.productItem}>
                <img src={productImage} alt={`${productName}`} width="100px" />

                <div className={style.description}>
                  <Link
                    to={`/${categoryId}/${productId}`}
                    className={style.productLink}
                  >
                    <p className={style.title}> {productName}</p>
                  </Link>
                  {weight !== null && chunks !== null && (
                    <p className={style.text}>
                      {weight} grams, {chunks} chunks
                    </p>
                  )}

                  <div className={style.wrapper}>
                    <p className={style.price}>{price} zl</p>
                    <Button
                      variant="contained"
                      type="button"
                      sx={styles.forButton}
                      onClick={() => handleClick(currentProduct)}
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
