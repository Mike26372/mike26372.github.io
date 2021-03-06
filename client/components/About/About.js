import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import styles from '../../stylesheets/sectionStyles.css';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

import HighlightMain from '../HighlightMain/HighlightMain.js';
import HighlightSub from '../HighlightSub/HighlightSub.js';

class About extends Component {
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

    let containerStyle = `${styles.container} ${styles.whiteBackground}`;
    let rowsStyle = `${PureGrid['pure-g']} ${styles.rows}`;

    return (
      <section className={containerStyle} ref={ c => this.container = c }>
        <div className={styles.content}>
          <div className={rowsStyle}>
            <HighlightMain />
          </div>
        </div>
      </section>
    );
  }
}

export default About;