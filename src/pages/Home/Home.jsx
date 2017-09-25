import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { common } from '@/style/colors';
import logo from '@/assets/logo.svg';

const Header = styled.div`
  background-color: ${common.black};
  height: 200px;
  padding: 20px;
  color: ${common.white};
  text-align: center;
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 80px;
`;

export default function () {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="logo" />
        <h1>Welcome to React-Blog</h1>
      </Header>
      <Link to="/">Home</Link>
      <Link to="/article">Article</Link>
    </div>
  );
}
