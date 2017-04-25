/* eslint react/no-danger: 0 */
import React from 'react';
import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';

import configureStore from './store';

import messages from './Messages';
import routes from './Routes';
import App from './containers/App';

const store = configureStore();

/*
const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.body);
};

// This is needed for Hot Module Replacement

if (module.hot) {
  module.hot.accept('./containers/App', () => renderApp());
}

renderApp();
*/

render(
  <App
    store={store}
    routes={routes}
    messages={messages}
  />,
  document.getElementById('app'),
);
