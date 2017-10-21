import React from 'react';
import ReactDOM from 'react-dom';

import LoadingBar from './LoadingBar';

/* eslint-disable react/jsx-filename-extension */
export default new class {
  ref;
  timer = null;
  percent = 0;

  constructor() {
    const div = document.createElement('div');
    div.id = 'loading-bar';
    document.body.appendChild(div);
    ReactDOM.render(
      <LoadingBar
        ref={(e) => {
          this.ref = e;
        }}
      />,
      div,
    );
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  hide() {
    window.setTimeout(() => {
      this.ref.setState({
        show: false,
      });
    }, 500);
  }

  start() {
    this.ref.setState({
      show: true,
      status: 'start',
      percent: 0,
    });
    this.timer = setInterval(() => {
      this.percent += Math.floor(Math.random() * 3 + 5);
      if (this.percent > 95) {
        this.clearTimer();
      }
      this.ref.setState({
        status: 'loading',
        percent: this.percent,
      });
    }, 300);
  }

  success() {
    this.clearTimer();
    this.ref.setState({
      status: 'success',
      percent: 100,
    });
    this.hide();
  }

  error() {
    this.clearTimer();
    this.ref.setState({
      status: 'error',
      percent: 100,
    });
    this.hide();
  }
}();
