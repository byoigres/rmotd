import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import load from 'little-loader';


import ScrollToTop from './containers/ScrollToTop';
import MainLayout from './containers/MainLayout';
import AsyncComponent from './containers/AsyncComponent';

if (!window.Intl) {
  load('https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.es', (err) => {
    if (err) {
      console.log(err); /* eslint no-console: 0 */
    }
  });
}

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
      </MainLayout>
    </Switch>
  </ScrollToTop>
);
