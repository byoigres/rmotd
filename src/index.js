/* eslint react/no-danger: 0 */
import { h, render, Component } from 'preact';
import styles from 'styles';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MinutesContainer from './containers/MinutesContainer.js';
import MainLayout from './components/Layouts/MainLayout';

// Markdown
import whatIsThis from './markdown/what-is-this.md';
import about from './markdown/about.md';

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

const App = () => (
  <Router hashType="hashbang">
    <div className={styles.content}>
      <Switch>
        <MainLayout>
          <Route
            exact
            path="/"
            component={MinutesContainer}
          />
          <Route
            exact
            path="/what-is-this"
            component={() => <div dangerouslySetInnerHTML={{ __html: whatIsThis }} />}
          />
          <Route
            exact
            path="/about"
            component={() => <div dangerouslySetInnerHTML={{ __html: about }} />}
          />
        </MainLayout>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.body);
