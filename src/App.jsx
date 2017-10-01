import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/common';
import { Home, Archives, Tags, Projects, Comments, About } from './containers';

import './style/global';

const Blog = styled.div`
  height: 100%;
`;

export default function () {
  return (
    <Router>
      <Blog>
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/archives" component={Archives} />
          <Route path="/tags" component={Tags} />
          <Route path="/projects" component={Projects} />
          <Route path="/comments" component={Comments} />
          <Route path="/about" component={About} />
        </div>
      </Blog>
    </Router>
  );
}
