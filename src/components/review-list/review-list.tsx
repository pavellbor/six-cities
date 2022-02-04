import { Review } from '../../types/types';
import ReviewItem from '../review-item/review-item';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewList(props: ReviewsListProps): JSX.Element {
  const { reviews } = props;

  return (
    <ul className='reviews__list'>
      {reviews.map((review) => <ReviewItem review={review} key={review.id} />)}
    </ul>
  );
}

export default ReviewList;
