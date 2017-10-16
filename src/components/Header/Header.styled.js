import geopattern from 'geopattern';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { rem, clearFix } from 'polished';

import { media } from '@/style/mixins';
import { common, grey } from '@/style/colors';
import { size, zIndex } from '@/style/variables';
import logo from '@/assets/logo.png';

const HeaderWrapper = styled.header`
  height: ${({ home }) => (home ? rem(size.header) : '')};
  padding: ${({ home }) => (home ? '' : '80px 20px 25px 20px')};
  background-image: ${({ home }) => (home ? '' : geopattern.generate(window.location.href).toDataUrl())};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
`;

const FixedContainer = styled.div`
  position: ${({ home, fixed }) => (home || fixed ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ home, fixed }) => (home || fixed ? common.white : '')};
  box-shadow: ${({ home, fixed }) => (home || fixed ? '0 0 3px rgba(14, 14, 14, 0.26)' : '')};
  transition: ${({ fixed }) => (fixed ? 'background 0.4s' : '')};
  z-index: ${zIndex.header};
`;

const NavWrapper = styled.section`
  position: relative;
  max-width: 1200px;
  height: ${rem(size.header)};
  margin: 0 auto;
  padding: 0 ${rem('10px')};
  ${clearFix()};
`;

const LogoLink = styled(Link)`
  float: left;
  height: ${rem(size.header)};
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
  color: ${({ home, fixed }) => (home || fixed ? common.theme : common.white)};
`;

const NavIcon = styled.div.attrs({
  className: 'iconfont icon-nav',
})`
  display: none;
  position: absolute;
  top: ${rem((size.header - 24) / 2)};
  right: ${rem((size.header - 24) / 2)};
  width: ${rem('24px')};
  height: ${rem('24px')};
  font-size: ${rem('24px')};
  line-height: ${rem('24px')};
  color: ${grey[500]};
  ${media.phone(css`
    display: block;
  `)}
`;

const NavList = styled.nav`
  float: right;
  height: ${rem(size.header)};
  display: flex;
  align-items: center;
  ${media.phone(css`
    display: none;
  `)}

  .nav-link {
    display: block;
    height: ${'36px'};
    line-height: ${'36px'};
    margin: 0 ${rem('10px')};
    font-size: ${rem('16px')};
    color: ${({ home, fixed }) => (home || fixed ? common.darkBlack : common.white)};
    ${media.phone(css`
      width: 100%;
    `)}

    &:hover {
      border-bottom: 3px solid ${common.theme};
    }

    &.active {
      border-bottom: 3px solid ${common.theme};
    }
  }
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const Title = styled('h2')`
  font-size: ${rem('36px')};
  color: ${common.white};
  text-shadow: 0 0 40px #34495e;
`;

const SubTitle = styled('h5')`
  margin: 10px 0 20px;
  font-size: ${rem('16px')};
  color: ${common.white};
`;

export {
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
};
