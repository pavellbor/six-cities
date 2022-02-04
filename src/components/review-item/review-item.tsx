import dayjs from 'dayjs';
import { Review } from '../../types/types';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem(props: ReviewItemProps): JSX.Element {
  const { comment, rating, user, date } = props.review;
  const { avatarUrl, name } = user;

  const ratingWidth = `${(rating / 5) * 100}%`;
  const parsedDate = dayjs(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={parsedDate.format('DD/MM/YYYY')}>{parsedDate.format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
