import React, { Component } from 'react'; 
import { TweenMax } from 'gsap';
import styles from './Splash.css';

class Splash extends Component {
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

  componentDidUpdate(prevProps, prevState) {
    const el = this.container;
    let prevShow = prevProps.show;
    let currShow = this.props.show;
    console.log(prevShow, currShow);
    if (!prevShow && currShow) {
      TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1});
    } 
    if (prevShow && !currShow) {
      TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0});
    }
  }

  render() {
    return (
      <div className={styles.container} ref={c => this.container = c}>
          <div className={styles.splash}>
              <h1 className={styles.splashHead}>michaeltutt.io</h1>
              <p className={styles.splashSubhead}>
                scroll down or just <a className={styles.resume} href="">view my resume</a>
              </p>
          </div>
      </div>
    );
  }
}

export default Splash;