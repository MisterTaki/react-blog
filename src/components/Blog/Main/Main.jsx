import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.main`
  position: relative;
  flex: 1 0 auto;
`;

const MainWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

const Main = ({ children }) => (
  <MainContainer>
    <MainWrapper>
      {children}
    </MainWrapper>
  </MainContainer>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
