import { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import { beckEnd } from '../../goods';
import { CardMenu } from '../CardMenu';
import { SkeletonCardMenu } from '../Skeleton';
// import style from './CategoriesList.module.scss';

export const CategoriesList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
          <Grid
            key={`${categoryId}-${categoryName}`}
            item
            xs={doubleCard ? 12 : 6}
            container
            spacing={0}
          >
            {isLoading ? (
              <SkeletonCardMenu />
            ) : (
              <CardMenu
                key={`${categoryId}-${categoryName}`}
                categoryId={categoryId}
                categoryName={categoryName}
                smallImage={smallImage}
                fullName={fullName}
                soon={soon}
                doubleCard={doubleCard}
              />
            )}
          </Grid>
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
