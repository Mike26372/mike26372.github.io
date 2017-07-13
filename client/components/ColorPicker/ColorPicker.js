import React, { Component } from 'react';
import _ from 'underscore';

import styles from './ColorPicker.css';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

class ColorPicker extends Component {
  
  constructor() {
    super();
    this.state = {
      hidden: true
    }
    this.handleColor = this.handleColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){

  }

  componentWillUnmount() {

  }

  handleColor(e) {
    console.log(e.target.value);
    document.documentElement.style.setProperty(`--base`, e.target.value);
    // this.input.setProperty('value', e.target.value);
  }

  handleClick() {
    let { hidden } = this.state;
    this.setState({
      hidden: !hidden
    });
  }

  render() {

    let { hidden } = this.state;

    let colorContainer = `${styles.colorPicker}`;
    let inputStyle = `${styles.colorInput}`;
    let labelStyle = `${styles.colorLabel} ${styles.iconContainer} fa fa-paint-brush`;
    let undoContainer = `${styles.iconContainer}`;
    let undoStyle = `${styles.icon} ${styles.undo} fa fa-undo`;
    let caretStyle = `${styles.icon} ${styles.caret} fa fa-caret-down`;

    let togglePosition = hidden ? {top: '-70px'} : {};
    let caretRotation = hidden ? {} : {transform: 'rotate(180deg)'};

    return (
      <div className={ colorContainer } style={togglePosition}>
        <div>
          <span className={styles.iconContainer}>
            <input ref={ (i) => this.input = i } 
              id="base" type="color" name="base" 
              onChange={this.handleColor} 
              className={inputStyle}/>
          </span>
          <label htmlFor="base" 
            className={labelStyle}>
          </label>
          <span className={undoContainer} onClick={this.handleColor}>
            <i className={undoStyle} aria-hidden="true"></i>
          </span>
        </div>
        <div className={styles.text}>
          Fun with colors!
        </div>
        <div onClick={this.handleClick}>
          <i className={caretStyle} aria-hidden="true" style={caretRotation}></i>
        </div>
      </div>
    )
  }
}

export default ColorPicker;
