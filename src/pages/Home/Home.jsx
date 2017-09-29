import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';
import { common } from '@/style/colors';

const Body = styled.div`
  height: 100%;
  background-color: ${common.white};
  color: ${common.black};
  text-align: center;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: ${rem('400px')};
  height: ${rem('400px')};
  border-radius: 50%;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5), 2px 0 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.6), 1px 0 2px rgba(0, 0, 0, 0.2);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const Name = styled.h1`
  font-size: ${rem('48px')};
  cursor: default;
`;

const LinkList = styled.div`
  margin-top: ${rem('20px')};
`;

const WhiteLink = styled(Link)`
  display: inline-block;
  margin: 0 ${rem('12px')};
  font-size: ${rem('18px')};
  color: ${common.black};

  &:hover {
    text-decoration: underline;
  }
`;

export default function () {
  return (
    <Body>
      <Container>
        <Wrapper>
          <Name>Gao Qi</Name>
          <LinkList>
            <WhiteLink to="/resume">Resume</WhiteLink>
            <WhiteLink to="/articles">Articles</WhiteLink>
            <WhiteLink to="/projects">Projects</WhiteLink>
          </LinkList>
        </Wrapper>
      </Container>
    </Body>
  );
}
