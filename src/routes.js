import { h } from 'preact';
import styles from 'styles';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import MainLayout from './components/Layouts/MainLayout';
import AsyncComponent from './components/AsyncComponent';

export default (
  <ScrollToTop className={styles.content}>
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
