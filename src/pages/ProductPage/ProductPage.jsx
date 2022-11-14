import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../Hooks';
import { useParams } from 'react-router-dom';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Container } from '../../components/Container';

import { BigCardProduct } from '../../components/BigCardProduct';
// import { Carousel } from '../../components/Carousel';

// import { backEnd } from '../../goods';

// import style from './ProductPage.module.scss';

export const ProductPage = () => {
  const [products] = useLocalStorage('products', '');
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  // const getCompositionProduct = (product) => {
  //   return product.compositionId.map((id) => {
  //     return backEnd.products.find((product) => {
  //       return product.productId === id;
  //     });
  //   });
  // };

  useEffect(() => {
    const currentProductById = JSON.parse(products).find(
      (p) => p.productId === productId
    );
    setProduct(currentProductById);
  }, [productId, products]);

  return (
    <>
      {product?.largeImage && <BigCardProduct product={product} />}
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
