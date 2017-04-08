import { h, render, Component } from 'preact';
import styles from 'styles';
import MinutesContainer from './containers/MinutesContainer.js';

// Enable devtools. You can reduce the size of your app by only including this
// module in development builds. eg. In Webpack, wrap this with an `if (module.hot) {...}`
// check.
if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

const App = () => (
  <div className={styles.content}>
    <MinutesContainer />
  </div>
);

render(<App />, document.body);
