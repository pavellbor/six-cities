import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  isFavoriteScreen: boolean;
};

function OfferList(props: OfferListProps): JSX.Element {
  const { offers, isFavoriteScreen } = props;
  const [, setActiveOffer] = useState(offers[0].id);

  return (
    <div className={isFavoriteScreen ? 'favorites__places' : 'cities__places-list places__list tabs__content'}>
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} isFavoriteScreen={isFavoriteScreen} onMouseEnter={() => setActiveOffer(offer.id)} />)}
    </div>
  );
}

export default OfferList;
