import React, { Component } from 'react';
import { TweenMax } from 'gsap';

import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

import styles from '../../stylesheets/sectionStyles.css';
import infoStyles from './Info.css';

class Info extends Component {
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
    let containerStyle = `${styles.container} ${styles.darkBackground}`;
    let contentStyle = `${styles.content} ${styles.lightFont}`;
    let rowsStyle = `${PureGrid['pure-g']} ${styles.rows}`;
    let rowStyle = `${PureGrid['pure-u-1']} ${styles.row}`;
    let row2ColumnsStyle = `${PureGrid['pure-u-1']} ${
      PureGrid['pure-u-md-1-2']
    } ${styles.leftAligned} ${styles.lightFont}`;
    let titleStyle = `${styles.largeText} ${styles.lightFont}`;

    let mailIcon = `fa fa-envelope-o ${infoStyles.icon} ${styles.smallIcon}`;
    let githubIcon = `fa fa-github-square ${infoStyles.icon} ${
      styles.smallIcon
    }`;
    let linkedInIcon = `fa fa-linkedin-square ${infoStyles.icon} ${
      styles.smallIcon
    }`;
    let angelListIcon = `fa fa-angellist ${infoStyles.icon} ${
      styles.smallIcon
    }`;
    let documentIcon = `fa fa-file-text-o ${infoStyles.icon} ${
      styles.smallIcon
    }`;

    let infoContainerStyle = `${styles.infoContainer}`;
    let infoStyle = `${styles.smallText}`;

    return (
      <section className={containerStyle} ref={c => (this.container = c)}>
        <div className={contentStyle}>
          <div className={rowsStyle}>
            <div className={rowStyle}>
              <h2 className={titleStyle}>stalking is encouraged...</h2>
            </div>
            <div className={row2ColumnsStyle}>
              <a
                className={infoContainerStyle}
                href="mailto:tutt.michael@gmail.com"
              >
                <i className={mailIcon} aria-hidden="true" />
                <span className={infoStyle}>Email Me</span>
              </a>
              <a
                className={infoContainerStyle}
                href="https://github.com/Mike26372"
                target="_blank"
              >
                <i className={githubIcon} aria-hidden="true" />
                <span className={infoStyle}>GitHub</span>
              </a>
              <a
                className={infoContainerStyle}
                href="https://www.linkedin.com/in/michaeltutt/"
                target="_blank"
              >
                <i className={linkedInIcon} aria-hidden="true" />
                <span className={infoStyle}>LinkedIn</span>
              </a>
              <a
                className={infoContainerStyle}
                href="https://angel.co/michael-tutt"
                target="_blank"
              >
                <i className={angelListIcon} aria-hidden="true" />
                <span className={infoStyle}>AngelList</span>
              </a>
              <a
                className={infoContainerStyle}
                href="https://drive.google.com/file/d/0B9bs3mf0dai2M1NfaFZxOF93SlU/view?usp=sharing"
                target="_blank"
              >
                <i className={documentIcon} aria-hidden="true" />
                <span className={infoStyle}>View My Résumé</span>
              </a>
            </div>
            <div className={row2ColumnsStyle} />
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
