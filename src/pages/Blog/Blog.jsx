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

const Blog = ({ match }) => {
  const { path, isExact } = match;
  return (
    <BlogContainer>
      <Header path={path} isExact={isExact} />
      <Main>
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/archives`} component={Archives} />
          <Route path={`${path}/tags`} component={Tags} />
          <Route path={`${path}/Projects`} component={Projects} />
          <Route path={`${path}/comments`} component={Comments} />
          <Route path={`${path}/about`} component={About} />
          <Redirect to="/404" />
        </Switch>
      </Main>
      <Footer />
    </BlogContainer>
  );
};

Blog.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    isExact: PropTypes.bool,
  }).isRequired,
};

export default Blog;
