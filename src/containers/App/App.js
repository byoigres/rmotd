/* eslint react/no-danger: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  IntlProvider,
} from 'react-intl';
import './styles';

const LOCAL_STORAGE_LOCALE_KEY = '__minutes_display_locale__';

const App = props => (
  <Provider store={props.store}>
    <IntlProvider
      locale={navigator.language}
      messages={props.messages[localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || 'en']}
    >
      <Router basename="/minutes">
        {props.routes}
      </Router>
    </IntlProvider>
  </Provider>
);

export default App;
