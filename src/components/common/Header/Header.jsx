import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { rem, clearFix } from 'polished';
import { common } from '@/style/colors';
import logo from '@/assets/logo.png';

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

const StyledNavLink = styled(NavLink)`
  display: block;
  height: ${'36px'};
  line-height: ${'36px'};
  margin: 0 ${rem('10px')};
  font-size: ${rem('16px')};
  color: ${common.darkBlack};

  &:hover {
    border-bottom: 3px solid ${common.theme};
  }

  &.active {
    border-bottom: 3px solid ${common.theme};
  }
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
            <StyledNavLink to="/" exact>Home</StyledNavLink>
            <StyledNavLink to="/archives">Archives</StyledNavLink>
            <StyledNavLink to="/tags">Tags</StyledNavLink>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
            <StyledNavLink to="/comments">Comments</StyledNavLink>
            <StyledNavLink to="/About">About</StyledNavLink>
          </LinkWrapper>
        </HeaderWrapper>
      </FixedHeader>
    </RelativeHeader>
  );
}
