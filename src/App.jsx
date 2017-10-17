import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import router from './router';

import './style/global';

export default function () {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/blog" />
        {router.map(item => (
          <Route
            key={item.label}
            path={item.path ? item.path : ''}
            component={item.component}
            exact={item.isExact}
          />
        ))}
      </Switch>
    </Router>
  );
}
