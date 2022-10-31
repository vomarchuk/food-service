import { Button } from '@mui/material';

import { beckEnd } from '../../goods';
import { Container } from '../../components/Container';
import { ReviewsList } from '../../components/ReviewsList';

import { colors } from '../../constants';
import style from './FeedbackPage.module.scss';

export const FeedbackPage = () => {
  const reviews = beckEnd.reviews;

  return (
    <Container>
      <h2 className={style.title}>Reviews</h2>
      <ReviewsList reviews={reviews} />
      <Button variant="contained" type="button" sx={styles.forButton}>
        + Add a review
      </Button>
    </Container>
  );
};

const styles = {
  forBox: {
    mt: '10px',
    p: '10px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  forButton: {
    mt: '20px',
    minWidth: '330px',
    textTransform: 'none',
    backgroundColor: colors.MAIN_DARK_COLOR,
    color: colors.SECONDARY_LIGHT_COLOR,
    fontFamily: 'DIN Pro',

    fontSize: '18px',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: colors.MAIN_ACCENT_COLOR,
    },
  },
};
