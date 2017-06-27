
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import styles from './Nav.css';

class Nav extends Component {
  constructor() {
    super();

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  componentDidMount() {
    let title = this.title;
    // title.addEventListener('transitionend', this.handleTransitionEnd)
    setTimeout(this.handleTransitionEnd, 500);
  }

  componentWillUnmount() {
    // title.removeEventListener('transitionend', this.handleTransitionEnd);
  }

  handleTransitionEnd(e) {
    this.props.toggleShow();
  }

  render() {
    let menuStyle = `${styles.navMenu} pure-menu pure-menu-horizontal pure-menu-fixed`;
    let titleStyle = `${styles.title} pure-menu-heading`;
    let transitionClasses = {appear: `${styles.titleAppear}`, appearActive: `${styles.titleAppearActive}`}
    
    return (
      <header className="header">
        <div className={menuStyle}>
          
        </div>
      </header>
    )
  }
}

export default Nav;

// <ul className="pure-menu-list">
//     <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link"></a></li>
//     <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
//     <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
// </ul>

// <CSSTransitionGroup
// transitionAppear={true}
// transitionAppearTimeout={1000}
// transitionName={ transitionClasses }>
//   <a className={titleStyle} href="" ref={c => this.title = c}>michaeltutt.io</a>
// </CSSTransitionGroup>