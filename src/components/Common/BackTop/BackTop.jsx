import React, { Component } from 'react';
import PropTypes from 'prop-types';

import detectPassiveEvents from './detect-passive-events';
import TweenFunctions from './tween-functions';
import { BackTopWrapper, DefaultChildren } from './BackTop.styled';

export default class extends Component {
  static propTypes = {
    children: PropTypes.node,
    visibilityHeight: PropTypes.number,
    topPosition: PropTypes.number,
    duration: PropTypes.number,
    easing: PropTypes.string,
  }

  static defaultProps = {
    children: <DefaultChildren />,
    visibilityHeight: 400,
    topPosition: 0,
    duration: 450,
    easing: 'easeInOutCubic',
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.data = {
      startValue: 0,
      currentTime: 0,
      startTime: null,
      rafId: null,
    };
  }

  componentDidMount() {
    this.handleScroll(); // initialize state

    // Add all listeners which can start scroll
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('wheel', this.stopScrolling, detectPassiveEvents.hasSupport ? { passive: true } : false);
    window.addEventListener('touchstart', this.stopScrolling, detectPassiveEvents.hasSupport ? { passive: true } : false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.show !== this.state.show;
  }

  componentWillUnmount() {
    // Remove all listeners which was registered
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('wheel', this.stopScrolling, false);
    window.removeEventListener('touchstart', this.stopScrolling, false);
  }

  // eslint-disable-next-line max-len
  getCurrentScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  handleScroll = () => {
    if (this.getCurrentScrollTop() > this.props.visibilityHeight) {
      if (!this.state.show) {
        this.setState({
          show: true,
        });
      }
    } else if (this.state.show) {
      this.setState({
        show: false,
      });
    }
  }

  scrollStep = (timestamp) => {
    if (!this.data.startTime) {
      this.data.startTime = timestamp;
    }

    this.data.currentTime = timestamp - this.data.startTime;

    const position = TweenFunctions[this.props.easing](
      this.data.currentTime,
      this.data.startValue,
      this.props.topPosition,
      this.props.duration,
    );

    if (this.getCurrentScrollTop() <= this.props.topPosition) {
      this.stopScrolling();
    } else {
      document.body.scrollTop = position;
      document.documentElement.scrollTop = position;
      this.data.rafId = window.requestAnimationFrame(this.scrollStep);
    }
  }

  stopScrolling = () => {
    if (this.data.rafId) {
      window.cancelAnimationFrame(this.data.rafId);
    }
  }

  handleClick = () => {
    this.stopScrolling();
    this.data.startValue = this.getCurrentScrollTop();
    this.data.currentTime = 0;
    this.data.startTime = null;
    this.data.rafId = window.requestAnimationFrame(this.scrollStep);
  }

  render() {
    const { className, children } = this.props;

    return (
      <BackTopWrapper
        className={className}
        show={this.state.show}
        role="button"
        tabIndex="-1"
        onClick={this.handleClick}
      >
        { children }
      </BackTopWrapper>
    );
  }
}
