import { ReviewItem } from '../ReviewItem';
import { IReview } from '../../interfaces/goods.interface';

interface IReviews {
  reviews: IReview[];
}

export const ReviewsList = ({ reviews }: IReviews) => {
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </>
  );
};
