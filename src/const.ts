export enum AppRoute {
  Favorites = '/favorites',
  SignIn = '/login',
  Main = '/',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const ScreenType = {
  MAIN: 'main',
  FAVORITE: 'favorite',
  OFFER: 'offer',
};
