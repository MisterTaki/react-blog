import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Main, Footer } from '@/components/Blog';
import { blog } from '@/router';

const Blog = ({ match, location, className }) => {
  const { path, isExact } = match;
  const { pathname } = location;
  const blogRouter = blog(path);

  return (
    <div className={className}>
      <Header path={path} isExact={isExact} pathname={pathname} />
      <Main>
        <Switch>
          {
            Object.keys(blog(path)).map(item => (
              <Route
                key={item}
                path={item}
                component={blogRouter[item].component}
                exact={blogRouter[item].isExact}
              />
            ))
          }
          <Redirect to="/404" />
        </Switch>
      </Main>
      <Footer />
    </div>
  );
};

Blog.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    isExact: PropTypes.bool,
  }).isRequired,

  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,

  className: PropTypes.string.isRequired,
};

export default styled(Blog)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
