import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Blog, NotFound } from './pages';

import './style/global';

export default function () {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/blog" />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
