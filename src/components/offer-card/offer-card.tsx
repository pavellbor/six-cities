import { Link } from 'react-router-dom';
import { ScreenType } from '../../const';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  screenType: string;
  onHoverHandler: () => void;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const { offer, screenType, onHoverHandler } = props;
  const { id, isPremium, previewImage, price, rating, title, type, isFavorite } = offer;
  const widthRating = `${(100 * rating) / 5}%`;
  const cardPath = `/offer/${id}`;

  let placeCardClassName = '';
  let placeCardImageWrapperClassName = '';
  let placeCardImageWidth = '';
  let placeCardImageHeight = '';

  switch (screenType) {
    case ScreenType.MAIN:
      placeCardClassName = 'cities__place-card';
      placeCardImageWrapperClassName = 'cities__image-wrapper';
      placeCardImageWidth = '260';
      placeCardImageHeight = '200';
      break;
    case ScreenType.FAVORITE:
      placeCardClassName = 'favorites__card';
      placeCardImageWrapperClassName = 'favorites__image-wrapper';
      placeCardImageWidth = '150';
      placeCardImageHeight = '110';
      break;
    case ScreenType.OFFER:
      placeCardClassName = 'near-places__card';
      placeCardImageWrapperClassName = 'near-places__image-wrapper';
      placeCardImageWidth = '260';
      placeCardImageHeight = '200';
  }


  return (
    <article className={`place-card ${placeCardClassName}`} onMouseEnter={onHoverHandler}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`place-card__image-wrapper ${placeCardImageWrapperClassName}`}>
        <Link to={cardPath}>
          <img className="place-card__image" src={previewImage} width={placeCardImageWidth} height={placeCardImageHeight} alt="Place image" />
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
