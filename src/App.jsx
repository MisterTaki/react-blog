import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Home, Articles } from './pages';
import './style/global';

const Blog = styled.div`
  height: 100%;
`;

export default function () {
  return (
    <Router>
      <Blog>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
      </Blog>
    </Router>
  );
}
