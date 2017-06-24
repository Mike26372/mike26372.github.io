import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import styles from './About.css';
import highlights from '../Highlight/highlights.js';
import HighlightMain from '../HighlightMain/HighlightMain.js';
import Highlight from '../Highlight/Highlight.js';

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

    let gridStyle = `pure-g ${styles.rows}`;

    return (
      <div className={styles.container} ref={ c => this.container = c }>
        <div className={styles.content}>
          <div className={gridStyle}>
            <HighlightMain />
            {highlights.map(hl => <Highlight title={hl.title} text={hl.text} icon={hl.icon} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default About;