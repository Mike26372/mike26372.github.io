import React, { Component } from 'react';

import styles from './Content.css';

class Content extends Component {
  constructor() {
    super();
  }

  componentWillEnter(cb) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: cb});
  }

  componentWillLeave(cb) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: cb});
  }

  render() {
    return (
      <div className={styles.container} ref={ c => this.container = c }>
        <div className={styles.content}>
          <div>IS THIS WORKING????</div>
        </div>
      </div>
    );
  }
}

export default Content;