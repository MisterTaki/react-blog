import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Main, Footer } from '@/components/Blog';
import { Home, Archives, Tags, Projects, Comments, About } from '@/containers/Blog';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Blog = ({ match }) => (
  <BlogContainer>
    <Header />
    <Main>
      <Switch>
        <Route exact path={match.path} component={Home} />
        <Route path={`${match.path}/archives`} component={Archives} />
        <Route path={`${match.path}/tags`} component={Tags} />
        <Route path={`${match.path}/Projects`} component={Projects} />
        <Route path={`${match.path}/comments`} component={Comments} />
        <Route path={`${match.path}/about`} component={About} />
        <Redirect to="/404" />
      </Switch>
    </Main>
    <Footer />
  </BlogContainer>
);

Blog.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Blog;
