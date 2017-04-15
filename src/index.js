/* eslint react/no-danger: 0 */
import { h, render } from 'preact';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

const renderApp = () => {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.body);
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', () => renderApp());
}

renderApp();
