import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem, clearFix } from 'polished';
import { common } from '@/style/colors';
import { zIndex } from '@/style/variables';
import logo from '@/assets/logo.png';
import NavLink from './NavLink';

const HeaderContainer = styled.header`
  position: relative;
  height: ${rem('60px')};
  flex: 0 0 auto;
`;

const Header = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0 0 3px rgba(14, 14, 14, 0.26);
  z-index: ${zIndex.header};
`;

const HeaderWrapper = styled.section`
  max-width: 1200px;
  height: ${rem('60px')};
  margin: 0 auto;
  ${clearFix()};
`;

const LogoLink = styled(Link)`
  float: left;
  height: ${rem('60px')};
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: ${rem('46px')};
  width: ${rem('46px')};
  margin-right: 6px;
  background: url(${logo}) no-repeat center;
  background-size: contain;
`;

const LogoText = styled.span`
  font-size: ${rem('24px')};
  color: ${common.theme};
`;

const NavList = styled.nav`
  float: right;
  height: ${rem('60px')};
  display: flex;
  align-items: center;
`;

export default function () {
  return (
    <HeaderContainer>
      <Header>
        <HeaderWrapper>
          <LogoLink to="/">
            <Logo />
            <LogoText>Blog</LogoText>
          </LogoLink>
          <NavList>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/archives">Archives</NavLink>
            <NavLink to="/tags">Tags</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/comments">Comments</NavLink>
            <NavLink to="/About">About</NavLink>
          </NavList>
        </HeaderWrapper>
      </Header>
    </HeaderContainer>
  );
}