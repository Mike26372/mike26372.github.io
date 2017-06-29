import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import styles from '../../stylesheets/sectionStyles.css';

import projectInfo from './projectInfo.js';
import ProjectSub from '../ProjectSub/ProjectSub.js';

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

    let containerStyle = `${styles.container} ${styles.lightBackground}`
    let rowsStyle = `pure-g ${styles.rows}`;
    let rowStyle = `pure-u-1 ${styles.row}`;
    let titleStyle = `${styles.largeText}`;

    return (
      <section className={containerStyle} ref={ c => this.container = c }>
        <div className={styles.content}>
          <div className={rowsStyle}>
            <div className={rowStyle}>
              <h2 className={titleStyle}>past projects...</h2>
            </div>
            {projectInfo.map(project => React.createElement(ProjectSub, {...project}))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;