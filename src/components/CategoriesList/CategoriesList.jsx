import { useSelector } from 'react-redux';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import { Grid } from '@mui/material';

import { CardMenu } from '../CardMenu';
import { SkeletonCategoriesList } from '../Skeleton';
// import style from './CategoriesList.module.scss';

export const CategoriesList = () => {
  const categories = useSelector(categoriesSelectors.getCategories);
  const categoriesIsLoading = useSelector(
    categoriesSelectors.categoriesIsLoading
  );
  const sortingCategories = [];
  if (categories.length > 0) {
    sortingCategories.push(...categories);
    sortingCategories.sort((first, last) => first.doubleCard - last.doubleCard);
  }

  return (
    <Grid
      sx={styles.forGrid}
      container
      spacing={1}
      justifyContent="space-between"
    >
      {categoriesIsLoading ? (
        <SkeletonCategoriesList />
      ) : (
        sortingCategories &&
        sortingCategories.map((category) => {
          const {
            _id: categoryId,
            categoryName,
            fullName,
            image: smallImage,
            soon,
            doubleCard,
          } = category;

          return (
            <Grid
              key={categoryId}
              item
              xs={doubleCard ? 12 : 6}
              container
              spacing={0}
            >
              <CardMenu
                // key={categoryId}
                categoryId={categoryId}
                categoryName={categoryName}
                smallImage={smallImage}
                fullName={fullName}
                soon={soon}
                doubleCard={doubleCard}
              />
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

const styles = {
  forGrid: {
    marginTop: '20px',
  },
};
