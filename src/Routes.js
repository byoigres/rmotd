import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import ScrollToTop from './containers/ScrollToTop';
import MainLayout from './containers/MainLayout';
import AsyncComponent from './containers/AsyncComponent';

export default (
  <ScrollToTop>
    <Switch>
      <Route
        exact
        path="/"
        component={AsyncComponent(() => System.import('./pages/Home').then(module => module.default))}
      />
      <MainLayout>
        <Route
          exact
          path="/what-is-this"
          component={AsyncComponent(() => System.import('./pages/WhatIsThis').then(module => module.default))}
        />
        <Route
          exact
          path="/about"
          component={AsyncComponent(() => System.import('./pages/About').then(module => module.default))}
        />
        {/*<Route component={() => (<h1><FormattedMessage id="app.not-found" /></h1>)} />*/}
      </MainLayout>
    </Switch>
  </ScrollToTop>
);
