/* eslint react/no-danger: 0 */
import { h } from 'preact';
import {
  HashRouter as Router,
} from 'react-router-dom';
import {
  IntlProvider,
} from 'react-intl';
import './styles';

import routes from '../../Routes';
import messages from '../../Messages';

const LOCAL_STORAGE_LOCALE_KEY = '__minutes_display_locale__';

const App = () => (
  <IntlProvider
    locale={navigator.language}
    messages={messages[localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || 'en']}
  >
    <Router hashType="hashbang">
      {routes}
    </Router>
  </IntlProvider>
);

export default App;
