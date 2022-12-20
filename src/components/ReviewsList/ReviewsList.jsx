import { Box } from '@mui/material';

import style from './ReviewsList.module.scss';

export const ReviewsList = ({ reviews, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>LOADING...</> //need spinner or skeleton
      ) : (
        reviews.length > 0 &&
        reviews.map((review) => (
          <Box key={review['_id']} sx={styles.forBox}>
            <p className={style.author}>
              {review.author} <span className={style.date}>{review.date}</span>
            </p>
            <p className={style.description}>{review.description}</p>
          </Box>
        ))
      )}
    </>
  );
};

const styles = {
  forBox: {
    mt: '10px',
    p: '10px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
};
