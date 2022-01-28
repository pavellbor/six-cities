import { Redirect, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRouteProps } from '../../types/types';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render, authorizationStatus } = props;

  return (
    <Route exact={exact} path={path} render={() => (
      authorizationStatus === AuthorizationStatus.Auth
        ? render()
        : <Redirect to={AppRoute.SignIn} />
    )}
    />
  );
}

export default PrivateRoute;
