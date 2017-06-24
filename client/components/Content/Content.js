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

// <div className="content">
//   <h2 className="content-head is-center">Excepteur sint occaecat cupidatat.</h2>

//   <div className="pure-g">
//     <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

//         <h3 className="content-subhead">
//             <i className="fa fa-rocket"></i>
//             Get Started Quickly
//         </h3>
//         <p>
//             Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
//         </p>
//     </div>
//     <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
//         <h3 className="content-subhead">
//             <i className="fa fa-mobile"></i>
//             Responsive Layouts
//         </h3>
//         <p>
//             Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
//         </p>
//     </div>
//     <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
//         <h3 className="content-subhead">
//             <i className="fa fa-th-large"></i>
//             Modular
//         </h3>
//         <p>
//             Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
//         </p>
//     </div>
//     <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
//         <h3 className="content-subhead">
//             <i className="fa fa-check-square-o"></i>
//             Plays Nice
//         </h3>
//         <p>
//             Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
//         </p>
//     </div>
//   </div>
// </div>