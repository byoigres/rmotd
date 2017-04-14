/* eslint react/no-danger: 0 */
import { h, render } from 'preact';
import {
  HashRouter as Router,
} from 'react-router-dom';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';

import {
  addLocaleData,
  IntlProvider,
} from 'react-intl';
import routes from './routes';
import enLocaleMessages from './locales/en';
import esLocaleMessages from './locales/es';

// Markdown
import markdownWhatIsThisEn from './markdown/what-is-this.en.md';
import markdownWhatIsThisEs from './markdown/what-is-this.es.md';
import markdownAboutEn from './markdown/about.en.md';
import markdownAboutEs from './markdown/about.es.md';

const LOCAL_STORAGE_LOCALE_KEY = '__minutes_display_locale__';

enLocaleMessages['content.what-is-this'] = markdownWhatIsThisEn;
enLocaleMessages['content.about'] = markdownAboutEn;

esLocaleMessages['content.what-is-this'] = markdownWhatIsThisEs;
esLocaleMessages['content.about'] = markdownAboutEs;

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);

const messages = {
  en: enLocaleMessages,
  es: esLocaleMessages,
};

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

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

render(<App />, document.body);
