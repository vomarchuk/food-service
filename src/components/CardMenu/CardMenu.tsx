import { Grid, Link, Paper, styled, Box } from '@mui/material';

import style from './CardMenu.module.scss';

export const CardMenu = ({
  categoryName,
  fullName,
  smallImage,
  soon,
  doubleCard,
}: any) => {
  if (doubleCard === false)
    return (
      <Grid item xs={6} container spacing={0}>
        <Link sx={styles.forLink} href={`/menu/${categoryName}`}>
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
      </Grid>
    );
  return (
    <Grid item xs={12} container spacing={0}>
      <Link sx={styles.forLink} href={`/menu/${categoryName}`}>
        <img
          className={style.cardImage}
          src={smallImage.x1}
          alt={fullName}
          srcSet={`${smallImage.x1} 1x,
      ${smallImage.x2}2x `}
        />
        <Box>
          <h2 className={style.cardPromoTitle}>{fullName}</h2>
          <p>{soon}</p>
        </Box>
      </Link>
    </Grid>
  );
};

const styles = {
  forLink: {
    position: 'relative',
    // backgroundColor: 'tomato',
  },
};
