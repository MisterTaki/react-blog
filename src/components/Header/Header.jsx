import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { blog } from '@/router';
import {
  HeaderWrapper,
  FixedContainer,
  NavWrapper,
  LogoLink,
  Logo,
  LogoText,
  NavList,
  TitleWrapper,
  Title,
  SubTitle,
} from './Header.styled';

export default class extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    pathname: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line max-len
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 60) {
        this.setState({
          fixed: true,
        });
      } else if (scrollTop === 0) {
        this.setState({
          fixed: false,
        });
      }
    });
  }

  render() {
    const {
      path,
      isExact,
      pathname,
      className,
    } = this.props;
    const router = blog(path);
    const activeRouter = router[pathname];
    const title = activeRouter ? activeRouter.label : '';
    const subTitle = activeRouter ? activeRouter.description : '';

    return (
      <HeaderWrapper className={className} home={isExact}>
        <FixedContainer home={isExact} fixed={this.state.fixed}>
          <NavWrapper>
            <LogoLink to={path}>
              <Logo />
              <LogoText home={isExact} fixed={this.state.fixed}>Blog</LogoText>
            </LogoLink>
            <NavList home={isExact} fixed={this.state.fixed}>
              {Object.keys(router).map(item => (
                <NavLink
                  className="nav-link"
                  key={item}
                  to={item}
                  exact={router[item].isExact}
                >
                  { router[item].label }
                </NavLink>
              ))}
            </NavList>
          </NavWrapper>
        </FixedContainer>
        {!isExact &&
          <TitleWrapper>
            <Title>{ title }</Title>
            <SubTitle>{ subTitle }</SubTitle>
          </TitleWrapper>
        }
      </HeaderWrapper>
    );
  }
}
