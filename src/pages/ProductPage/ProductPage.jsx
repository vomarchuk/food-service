import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../Hooks';
import { useParams } from 'react-router-dom';

import { Container } from '../../components/Container';

import { BigCardProduct } from '../../components/BigCardProduct';

import style from './ProductPage.module.scss';

export const ProductPage = () => {
  const [products] = useLocalStorage('products', '');
  const [card, setCard] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const currentProductById = JSON.parse(products).find(
      (p) => p.productId === productId
    );
    setCard(currentProductById);
  }, [productId, products]);

  return <>{card?.largeImage && <BigCardProduct product={card} />}</>;
};
