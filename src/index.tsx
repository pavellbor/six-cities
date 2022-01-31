import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';

const Settings = {
  OFFER_COUNT: 317,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offerCount={Settings.OFFER_COUNT}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
