import { RouteProps } from 'react-router-dom';
import { AuthorizationStatus } from '../const';

export type AppScreenProps = {
  placesCount: number;
};

export type MainScreenProps = {
  placesCount: number;
};

export type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: AuthorizationStatus;
};