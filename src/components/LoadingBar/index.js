import React from 'react';
import ReactDOM from 'react-dom';
import LoadingBar from './LoadingBar.Wrapper';

/* eslint-disable react/jsx-filename-extension, class-methods-use-this */
export default new class {
  loadingBar;

  constructor() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(
      <LoadingBar
        ref={(e) => { this.loadingBar = e; }}
      />
      , div,
    );
  }

  start() {
    this.loadingBar.setState({
      status: 'start',
    });
  }

  finish() {
    this.loadingBar.setState({
      status: 'finish',
    });
  }

  error() {
    this.loadingBar.setState({
      status: 'error',
    });
  }

  setHeight(height) {
    this.loadingBar.setState({
      height,
    });
  }
}();
