import React from 'react';
import styled, { keyframes } from 'styled-components';
import { common } from './style/colors';
import logo from './assets/logo.svg';
import './style/global';

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
    <Header>
      <Logo src={logo} alt="logo" />
      <h1>Welcome to React-Blog</h1>
    </Header>
  );
}
