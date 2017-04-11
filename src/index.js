import { h, render, Component } from 'preact';
import styles from 'styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MinutesContainer from './containers/MinutesContainer.js';
import WhatIsThisContainer from './containers/WhatIsThisContainer.js';
import About from './containers/About.js';
import MainLayout from './components/Layouts/MainLayout';

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

const App = () => (
  <Router>
    <div className={styles.content}>
      <Switch>
        <Route
          exact
          path="/"
          component={MinutesContainer}
        />
        <MainLayout>
          <Route
            exact
            path="/what-is-this"
            component={WhatIsThisContainer}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
        </MainLayout>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.body);
