import { Grid, Link, Paper, styled } from '@mui/material';
import { beckEnd } from '../../goods';
import { CardMenu } from '../CardMenu';
import style from './CategoriesList.module.scss';

export const CategoriesList = () => {
  return (
    <Grid
      sx={styles.forGrid}
      container
      spacing={1}
      justifyContent="space-between"
    >
      {beckEnd.categories.map((category) => {
        const {
          categoryId,
          categoryName,
          fullName,
          smallImage,
          soon,
          doubleCard,
        } = category;
        return (
          <CardMenu
            key={`${categoryId}-${categoryName}`}
            id={categoryId}
            categoryName={categoryName}
            smallImage={smallImage}
            fullName={fullName}
            soon={soon}
            doubleCard={doubleCard}
          />
        );
      })}
    </Grid>
  );
};

const styles = {
  forGrid: {
    marginTop: '20px',
  },
};
