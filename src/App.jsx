import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import router from './router';
import store from './store';

import './style/global';

export default function () {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
