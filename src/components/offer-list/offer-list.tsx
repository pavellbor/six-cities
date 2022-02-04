import { useState } from 'react';
import { ScreenType } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  screenType: string;
  listItemHoverHandler?: (offer: Offer) => void;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, screenType, listItemHoverHandler } = props;

  const [activeOffer, setActiveOffer] = useState(offers[0].id);

  const pointToOffer = (activeCard: number, offer: Offer) => {
    setActiveOffer(offer.id);

    const currentPoint = offers.find((point) => point.id === activeCard);

    if (listItemHoverHandler) {
      listItemHoverHandler(currentPoint as Offer);
    }
  };

  let offerListClassName = '';

  switch (screenType) {
    case ScreenType.MAIN:
      offerListClassName = 'cities__places-list places__list tabs__content';
      break;
    case ScreenType.FAVORITE:
      offerListClassName = 'favorites__places';
      break;
    case ScreenType.OFFER:
      offerListClassName = 'near-places__list places__list';
      break;
  }

  return (
    <div className={offerListClassName}>
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} screenType={screenType} onHoverHandler={() => pointToOffer(activeOffer, offer)} />)}
    </div>
  );
}

export default OfferList;
