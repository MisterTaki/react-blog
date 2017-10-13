import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zIndex } from '@/style/variables';

class LoadingBar extends Component {
  // static propTypes = {
  //   height: PropTypes.number.isRequired, // eslint-disable-line react/no-unused-prop-types
  //   status: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
  // }
  //
  // static defaultProps = {
  //   height: 4,
  // };

  constructor(props) {
    super(props);
    this.state = {
      // show: false,
    };
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className} />
    );
  }
}

export default styled(LoadingBar)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ status }) => (status === 'error' ? 'red' : 'blue')};
  z-index: ${zIndex.loadingBar};
`;
