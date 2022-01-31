import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import LoginScreen from '../login-screen/login-screen';
import MainScreen from '../main-screen/main-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import OfferScreen from '../offer-screen/offer-screen';
import { Offer } from '../../types/offer';

type AppScreenProps = {
  offerCount: number;
  offers: Offer[];
};

function App({ offerCount, offers }: AppScreenProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            offerCount={offerCount}
            offers={offers}
          />
        </Route>
        <PrivateRoute exact path={AppRoute.Favorites} render={() => <FavoritesScreen offers={favoriteOffers} />} authorizationStatus={AuthorizationStatus.Auth} />
        <Route exact path={AppRoute.SignIn}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.Room}>
          <OfferScreen offers={offers} />
        </Route>
        <Route render={() => <NotFoundScreen />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
