import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { blog } from '@/router';
import {
  BlogWrapper,
  Header,
  MainContainer,
  MainWrapper,
  Footer,
  BackTop,
} from './Blog.styled';

export default class extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string,
      isExact: PropTypes.bool,
    }).isRequired,

    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    const div = document.createElement('div');
    div.id = 'back-top';
    document.body.appendChild(div);
    ReactDOM.render(
      <BackTop />,
      div,
    );
  }

  render() {
    const { match, location } = this.props;
    const { path, isExact } = match;
    const { pathname } = location;
    const router = blog(path);

    return (
      <BlogWrapper>
        <Header
          path={path}
          isExact={isExact}
          pathname={pathname}
        />
        <MainContainer>
          <MainWrapper>
            <Switch>
              {Object.keys(router).map(item => (
                <Route
                  key={item}
                  path={item}
                  component={router[item].component}
                  exact={router[item].isExact}
                />
              ))}
              <Redirect to="/404" />
            </Switch>
          </MainWrapper>
        </MainContainer>
        <Footer />
      </BlogWrapper>
    );
  }
}
