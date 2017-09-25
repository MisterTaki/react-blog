import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Articles } from './pages';
import './style/global';

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
      </div>
    </Router>
  );
}
