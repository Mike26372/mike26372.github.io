
import { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import styles from './Nav.css';

class Nav extends Component {
  constructor() {
    super();
  }


  render() {
    let menuStyle = `${styles.navMenu} pure-menu pure-menu-horizontal pure-menu-fixed`;
    let titleStyle = `${styles.title} pure-menu-heading`;
    return (
      <div className="header">
        <div className={menuStyle}>
          <CSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionName = {
            {appear: `${styles.titleAppear}`,
             appearActive: `${styles.titleAppearActive}`}
          }
          >
            <a className={titleStyle} href="">michaeltutt.io</a>
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Nav;

// <ul className="pure-menu-list">
//     <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link"></a></li>
//     <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
//     <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
// </ul>