import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import styles from './Projects.css';

class Projects extends Component {
  constructor() {
    super();
  }

  // componentWillEnter(cb) {
  //   const el = this.container;
  //   TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: cb});
  // }

  // componentWillLeave(cb) {
  //   const el = this.container;
  //   TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: cb});
  // }

  render() {

    let rowsStyle = `pure-g ${styles.rows}`;
    let rowStyle = `pure-u-1 ${styles.row}`;
    let titleStyle = `${styles.largeText}`;

    return (
      <section className={styles.container} ref={ c => this.container = c }>
        <div className={styles.content}>
          <div className={rowsStyle}>
            <div className={rowStyle}>
              <h2 className={titleStyle}>past projects...</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;