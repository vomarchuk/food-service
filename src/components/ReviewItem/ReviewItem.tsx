import { Box } from '@mui/material';
import { IReview } from '../../interfaces/goods.interface';

import style from './ReviewItem.module.scss';

type Props = {
  review: IReview;
};
export const ReviewItem = ({ review }: Props) => {
  return (
    <Box key={review.id} sx={styles.forBox}>
      <p className={style.name}>
        {review.name} <span className={style.date}>{review.date}</span>
      </p>
      <p className={style.description}>{review.description}</p>
    </Box>
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
