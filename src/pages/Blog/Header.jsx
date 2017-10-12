import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { rem, clearFix } from 'polished';
import geopattern from 'geopattern';
import { common } from '@/style/colors';
import { zIndex } from '@/style/variables';
import { blog } from '@/router';
import logo from '@/assets/logo.png';

const Header = ({
  path,
  isExact,
  pathname,
  className,
}) => {
  const router = blog(path);
  const activeRouter = router[pathname];
  const title = activeRouter ? activeRouter.label : '';
  const subTitle = activeRouter ? activeRouter.description : '';

  return (
    <header className={className}>
      <div className="fixed-container">
        <section className="header-wrapper">
          <Link className="logo-link" to="path">
            <div className="logo" />
            <span className="logo-text">Blog</span>
          </Link>
          <nav className="nav-list">
            {
              Object.keys(router).map(item => (
                <NavLink
                  className="nav-link"
                  key={item}
                  to={item}
                  exact={router[item].isExact}
                >
                  { router[item].label }
                </NavLink>
              ))
            }
          </nav>
        </section>
      </div>
      { !isExact &&
        <div className="title-wrapper">
          <h2 className="title">{ title }</h2>
          <h5 className="sub-title">{ subTitle }</h5>
        </div>
      }
    </header>
  );
};

Header.propTypes = {
  path: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default styled(Header)`
  position: relative;
  height: ${({ isExact }) => (isExact ? rem('60px') : '')};
  padding: ${({ isExact }) => (isExact ? '' : '80px 20px 25px 20px')};
  flex: 0 0 auto;
  background-image: ${({ isExact }) => (isExact ? '' : geopattern.generate(window.location.href).toDataUrl())};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;

  .fixed-container {
    position: ${({ isExact, fixedHeader }) => (isExact || fixedHeader ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ isExact, fixedHeader }) => (isExact || fixedHeader ? common.white : '')};
    box-shadow: ${({ isExact, fixedHeader }) => (isExact || fixedHeader ? '0 0 3px rgba(14, 14, 14, 0.26)' : '')};
    transition: ${({ fixedHeader }) => (fixedHeader ? 'background 0.4s' : '')};
    z-index: ${zIndex.header};
  }

  .header-wrapper {
    max-width: 1200px;
    height: ${rem('60px')};
    margin: 0 auto;
    padding: 0 ${rem('10px')};
    ${clearFix()};
  }

  .logo-link {
    float: left;
    height: ${rem('60px')};
    display: flex;
    align-items: center;
  }

  .logo {
    height: ${rem('46px')};
    width: ${rem('46px')};
    margin-right: 6px;
    background: url(${logo}) no-repeat center;
    background-size: contain;
  }

  .logo-text {
    font-size: ${rem('24px')};
    color: ${({ isExact, fixedHeader }) => (isExact || fixedHeader ? common.theme : common.white)};
  }

  .nav-list {
    float: right;
    height: ${rem('60px')};
    display: flex;
    align-items: center;
  }

  .nav-link {
    display: block;
    height: ${'36px'};
    line-height: ${'36px'};
    margin: 0 ${rem('10px')};
    font-size: ${rem('16px')};
    color: ${({ isExact, fixedHeader }) => (isExact || fixedHeader ? common.darkBlack : common.white)};

    &:hover {
      border-bottom: 3px solid ${common.theme};
    }

    &.active {
      border-bottom: 3px solid ${common.theme};
    }
  }

  .title {
    font-size: ${rem('36px')};
    color: ${common.white};
    text-shadow: 0 0 40px #34495e;
  }

  .sub-title {
    margin: 10px 0 20px;
    font-size: ${rem('16px')};
    color: ${common.white};
  }
`;
