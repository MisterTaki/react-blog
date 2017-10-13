import React, { Component } from 'react';
import styled from 'styled-components';
import { common, red } from '@/style/colors';
import { zIndex } from '@/style/variables';

const LoadingBar = styled('div')`
  position: fixed;
  top: ${({ show, height }) => (show ? 0 : -height)}px;
  left: 0;
  width: ${({ percent }) => percent}%;
  height: ${({ height }) => height}px;
  background-color: ${({ status }) => (status === 'error' ? red[500] : common.theme)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: ${({ percent }) => (percent ? 'all 0.3s' : '')};
  z-index: ${zIndex.loadingBar};
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      percent: 0,
      status: 'start',
      height: 2,
    };
  }

  render() {
    return (
      <LoadingBar {...this.state} />
    );
  }
}
