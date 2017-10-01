import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem, clearFix } from 'polished';
import { common } from '@/style/colors';
import logo from '@/assets/logo.png';
import NavLink from './NavLink';

const RelativeHeader = styled.header`
  position: relative;
  height: 60px;
`;

const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${common.darkWhite};
  box-shadow: 0 0 3px rgba(14, 14, 14, 0.26);
`;

const HeaderWrapper = styled.div`
  max-width: 1200px;
  height: 60px;
  margin: 0 auto;
  ${clearFix()};
`;

const LogoLink = styled(Link)`
  float: left;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 6px;
  background: url(${logo}) no-repeat center;
  background-size: contain;
`;

const LogoText = styled.span`
  font-size: ${rem('24px')};
  color: ${common.theme};
`;

const LinkWrapper = styled.div`
  float: right;
  height: 60px;
  display: flex;
  align-items: center;
`;

export default function () {
  return (
    <RelativeHeader>
      <FixedHeader>
        <HeaderWrapper>
          <LogoLink to="/">
            <Logo />
            <LogoText>Blog</LogoText>
          </LogoLink>
          <LinkWrapper>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/archives">Archives</NavLink>
            <NavLink to="/tags">Tags</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/comments">Comments</NavLink>
            <NavLink to="/About">About</NavLink>
          </LinkWrapper>
        </HeaderWrapper>
      </FixedHeader>
    </RelativeHeader>
  );
}
