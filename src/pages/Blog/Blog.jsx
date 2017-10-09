import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { blog } from '@/router';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Blog extends Component {
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
    this.state = {
      fixedHeader: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 60) {
        this.setState({
          fixedHeader: true,
        });
      } else if (scrollTop === 0) {
        this.setState({
          fixedHeader: false,
        });
      }
    });
  }

  render() {
    const { match, location, className } = this.props;
    const { path, isExact } = match;
    const { pathname } = location;
    const router = blog(path);

    return (
      <div className={className}>
        <Header
          path={path}
          isExact={isExact}
          pathname={pathname}
          fixedHeader={this.state.fixedHeader}
        />
        <Main>
          <Switch>
            {
              Object.keys(blog(path)).map(item => (
                <Route
                  key={item}
                  path={item}
                  component={router[item].component}
                  exact={router[item].isExact}
                />
              ))
            }
            <Redirect to="/404" />
          </Switch>
        </Main>
        <Footer />
      </div>
    );
  }
}

export default styled(Blog)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
