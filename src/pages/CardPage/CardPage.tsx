import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProducts } from '../../interfaces/goods.interface';
import { Container } from '../../components/Container';

import { Button } from '@mui/material';
import { beckEnd } from '../../goods';

import { colors } from '../../constants';
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
      {card?.largeImage && (
        <div className={style.card}>
          <img
            src={card.largeImage.x1}
            srcSet={`${card.largeImage.x1} 1x,
             ${card.largeImage.x2} 2x`}
            alt={`${card.productName}`}
            width="300px"
          />
          <h2 className={style.title}>{card.productName}</h2>
          <p className={style.text}>
            {card.weight} grams, {card.chunks} chunks
          </p>
          <div className={style.wrapper}>
            <p className={style.price}>{card.price} zl</p>
            <Button variant="contained" type="button" sx={styles.forButton}>
              I want!
            </Button>
          </div>
        </div>
      )}
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
