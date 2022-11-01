import { ReviewItem } from '../ReviewItem';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </>
  );
};
