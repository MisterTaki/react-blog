import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = ({ children, className }) => (
  <main className={className}>
    <div className="main-wrapper">
      { children }
    </div>
  </main>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Main)`
  position: relative;
  flex: 1 0 auto;

  .main-wrapper {
    max-width: 750px;
    margin: 0 auto;
  }
`;
