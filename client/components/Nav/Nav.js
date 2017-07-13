
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import ColorPicker from '../ColorPicker/ColorPicker.js';

import styles from './Nav.css';
import Pure from '../../../node_modules/purecss/build/pure-min.css';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

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
    
    let { updateColor } = this.props;
    // UPDATE FOR PURECSS MODULES
    let headerStyle = `${styles.headerStyle} header`;
    let menuStyle = `${styles.navMenu}`;
    let titleStyle = `${styles.title} pure-menu-heading`;
    // let transitionClasses = {appear: `${styles.titleAppear}`, appearActive: `${styles.titleAppearActive}`};
    
    return (
      <header className={headerStyle}>
        <div className={menuStyle}>
          <ColorPicker 
          updateColor={updateColor} />
        </div>
      </header>
    )
  }
}

export default Nav;
