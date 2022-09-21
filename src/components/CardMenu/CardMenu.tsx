import { Grid, Box, Skeleton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './CardMenu.module.scss';

type SmallImage = {
  x1: string;
  x2: string;
};
interface ICardMenu {
  categoryId: string;
  categoryName: string;
  fullName: string;
  smallImage: SmallImage;
  soon: boolean;
  doubleCard: boolean;
}

export const CardMenu = ({
  categoryName,
  fullName,
  smallImage,
  soon,
  doubleCard,
}: ICardMenu) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const rendering = (size: number) => {
    return (
      <Grid item xs={size} container spacing={0}>
        {isLoading ? (
          <Skeleton
            sx={styles.forSkeleton}
            variant="rectangular"
            animation="wave"
            width="158px"
            height="175px"
          />
        ) : (
          <Link className={style.link} to={`/category/${categoryName}`}>
            <img
              className={style.cardImage}
              src={smallImage.x1}
              alt={fullName}
              srcSet={`${smallImage.x1} 1x,
                ${smallImage.x2}2x `}
            />
            <Box>
              <h2 className={style.cardTitle}>{fullName}</h2>
              {soon && <p className={style.cardCoon}>Soon</p>}
            </Box>
          </Link>
        )}
      </Grid>
    );
  };
  return doubleCard ? rendering(12) : rendering(6);
};

const styles = {
  forSkeleton: {
    borderRadius: '5px',
  },
};
