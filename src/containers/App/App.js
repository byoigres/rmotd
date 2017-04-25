/* eslint react/no-danger: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import {
  IntlProvider,
} from 'react-intl';
import './styles';

const App = props => (
  <Provider store={props.store}>
    <IntlProvider
      locale={props.locale}
      messages={props.messages[props.locale]}
    >
      <Router basename="/minutes">
        {props.routes}
      </Router>
    </IntlProvider>
  </Provider>
);

function mapStateToProps(state) {
  const { locale } = state.language;

  return { locale };
}

export default connect(mapStateToProps, {})(App);
