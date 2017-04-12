/* eslint react/no-danger: 0 */
import { h, render, Component } from 'preact';
import styles from 'styles';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  addLocaleData,
  IntlProvider,
  FormattedHTMLMessage,
} from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleMessages from './locales/en';
import esLocaleMessages from './locales/es';
import MinutesContainer from './containers/MinutesContainer';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/Layouts/MainLayout';
import FullPageLayout from './components/Layouts/FullPageLayout';

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
  <IntlProvider locale={navigator.language} messages={messages[localStorage.getItem(LOCAL_STORAGE_LOCALE_KEY) || 'en']}>
    <Router hashType="hashbang">
      <ScrollToTop className={styles.content}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <FullPageLayout>
                <MinutesContainer />
              </FullPageLayout>
            )}
          />
          <MainLayout>
            <Route
              exact
              path="/what-is-this"
              component={() => <FormattedHTMLMessage id="content.what-is-this" />}
            />
            <Route
              exact
              path="/about"
              component={() => <FormattedHTMLMessage id="content.about" />}
            />
          </MainLayout>
        </Switch>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

render(<App />, document.body);
