import React, { Component } from 'react';
import LoadingBar from './LoadingBar';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      height: 4,
    };
  }

  render() {
    return (
      <LoadingBar
        status={this.state.status}
        height={this.state.height}
      />
    );
  }
}
