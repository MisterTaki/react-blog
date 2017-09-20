import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './assets/logo.svg';
import './style/global';


const Title = styled.h1`
  font-size: 28px;
`;

const Header = styled.div`
  background-color: black;
  height: 150px;
  padding: 20px;
  color: white;
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
      <Title>Welcome to React-Blog</Title>
    </Header>
  );
}
