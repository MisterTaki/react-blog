import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { blog } from '@/router';
import { size } from '@/style/variables';
import {
  HeaderWrapper,
  FixedContainer,
  NavWrapper,
  LogoLink,
  Logo,
  LogoText,
  NavIcon,
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
      showMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line max-len
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > size.header) {
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

  toggleShowMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
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
      <HeaderWrapper
        className={className}
        home={isExact}
      >
        <FixedContainer
          home={isExact}
          fixed={this.state.fixed}
          showMenu={this.state.showMenu}
        >
          <NavWrapper>
            <LogoLink to={path}>
              <Logo />
              <LogoText
                home={isExact}
                fixed={this.state.fixed}
                showMenu={this.state.showMenu}
              >
                Blog
              </LogoText>
            </LogoLink>
            <NavIcon
              home={isExact}
              fixed={this.state.fixed}
              showMenu={this.state.showMenu}
              onClick={this.toggleShowMenu}
            />
            <NavList
              home={isExact}
              fixed={this.state.fixed}
              showMenu={this.state.showMenu}
              onClick={() => this.state.showMenu && this.toggleShowMenu()}
            >
              {Object.keys(router).map(item => (
                <NavLink
                  className="nav-link"
                  key={item}
                  to={item}
                  exact={router[item].isExact}
                  onClick={() => this.state.showMenu && this.toggleShowMenu()}
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
