import { useDispatch, useSelector } from 'react-redux';
import {
  addProductInCart,
  updateProductInCart,
} from '../../redux/cart/reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';

import { Container } from '../Container';
import { Title } from '../Title';
import { Image } from '../Image';
import { colors } from '../../constants';
import style from './BigCardProduct.module.scss';

export const BigCardProduct = ({ product }) => {
  const notify = () => {
    toast.success('You have added the product to the cart!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const productOfCart = useSelector((state) => state.products);
  const { largeImage, productName, chunks, weight, price } = product;

  const currentProduct = { ...product, quantity: 1 };

  const dispatch = useDispatch();

  const handleClick = () => {
    const isDuplicate = productOfCart.filter(
      (product) => product.productId === currentProduct.productId
    );
    isDuplicate.length === 0
      ? dispatch(addProductInCart(currentProduct))
      : dispatch(updateProductInCart(currentProduct));

    notify();
  };

  return (
    <Container>
      <div className={style.card}>
        <Image src={largeImage} alt={productName} width="300px" />

        <Title text={productName} />
        <p className={style.text}>
          {weight} grams, {chunks} chunks
        </p>
        <div className={style.wrapper}>
          <p className={style.price}>{price} zl</p>
          <Button
            variant="contained"
            sx={styles.forButton}
            onClick={handleClick}
          >
            I want!
          </Button>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

const styles = {
  forButton: {
    textTransform: 'none',
    backgroundColor: colors.MAIN_ACCENT_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    padding: '5px 65px',
    fontSize: '20px',
    '&:hover': {
      backgroundColor: colors.ACTIVE_ACCENT_COLOR,
    },
  },
};
