import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  isFavoriteScreen: boolean;
  onMouseEnter: () => void;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const { offer, isFavoriteScreen, onMouseEnter } = props;
  const { id, isPremium, previewImage, price, rating, title, type, isFavorite } = offer;
  const widthRating = `${(100 * rating) / 5}%`;
  const cardPath = `/offer/${id}`;

  return (
    <article className={`place-card ${isFavoriteScreen ? 'favorites__card' : 'cities__place-card'}`} onMouseEnter={onMouseEnter}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${isFavoriteScreen ? 'favorites__image-wrapper' : 'cities__image-wrapper'}`}>
        <Link to={cardPath}>
          <img className="place-card__image" src={previewImage} width={isFavoriteScreen ? '150' : '260'} height={isFavoriteScreen ? '110' : '200'} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: widthRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={cardPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
