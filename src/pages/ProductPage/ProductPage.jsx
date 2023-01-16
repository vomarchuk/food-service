import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Container } from '../../components/Container';

import { BigCardProduct } from '../../components/BigCardProduct';
// import { Carousel } from '../../components/Carousel';

import { productsSelectors, productsOperations } from '../../redux/products';
// import style from './ProductPage.module.scss';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector(productsSelectors.getProducts);
  // const getCompositionProduct = (product) => {
  //   return product.compositionId.map((id) => {
  //     return backEnd.products.find((product) => {
  //       return product.productId === id;
  //     });
  //   });
  // };

  useEffect(() => {
    dispatch(productsOperations.fetchProductById(productId));
  }, [dispatch]);

  return (
    <>
      <BigCardProduct product={product} />
      {/* {product?.compositionId && ( */}
      {/* <Carousel products={getCompositionProduct(product)} /> */}
      {/* )} */}
      {/* {product?.compositionId && (
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {getCompositionProduct(product).map((i) => {
            return <SwiperSlide>Slide 1</SwiperSlide>;
          })}
        </Swiper>
      )} */}
    </>
  );
};
