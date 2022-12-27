import { useSelector } from 'react-redux';
import { categoriesSelectors } from 'redux/categories';
import { Grid } from '@mui/material';

import { CategoryItem } from 'components/CategoryItem';
import { SkeletonCategoriesList } from 'components/Skeleton';

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
              <CategoryItem
                key={categoryId}
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
