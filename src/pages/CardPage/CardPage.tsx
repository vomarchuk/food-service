import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProducts } from '../../interfaces/goods.interface';
import { Container } from '../../components/Container';

import { beckEnd } from '../../goods';

import style from './CardPage.module.scss';

export const CardPage = () => {
  const [card, setCard] = useState<IProducts | undefined | null>(null);
  const { categoryName, productId } = useParams();

  useEffect(() => {
    const currentCategory = beckEnd.categories.find(
      (c) => c.categoryName === categoryName
    );
    setCard(
      beckEnd.products
        .filter((p) => p.categoryId === currentCategory?.categoryId)
        .find((p) => p.productId === productId)
    );
  }, []);

  return (
    <Container>
      {card && (
        <div className={style.card}>
          <img
            src={card.smallImage.x1}
            srcSet={`${card.smallImage.x1} 1x,
             ${card.smallImage.x2} 2x`}
            alt={`${card.productName}`}
            width="100px"
          />
        </div>
      )}
    </Container>
  );
};
