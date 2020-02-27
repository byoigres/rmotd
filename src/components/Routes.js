import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import FullPageLayout from '../containers/FullPageLayout';
import MainLayout from '../containers/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const WhatIsThis = lazy(() => import('../pages/WhatIsThis'));
const About = lazy(() => import('../pages/About'));
console.log('process.env.PUBLIC_PATH', process.env.PUBLIC_PATH.toString());
const Routes = () => (
  <Router basename={process.env.PUBLIC_PATH}>
    <Switch>
      <Route exact path='/'>
        <FullPageLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </FullPageLayout>
      </Route>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path='/what-is-this' component={WhatIsThis} />
          <Route exact path='/about' component={About} />
        </Suspense>
      </MainLayout>
      <Route path="*">
        <h1>404</h1>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
