import React, { Component } from 'react';
import _ from 'underscore';

import styles from '../../stylesheets/sectionStyles.css';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

class ColorPicker extends Component {
  
  constructor() {
    super();

    this.handleColor = this.handleColor.bind(this);
  }

  componentDidMount(){

  }

  componentDidUnmount() {

  }

  handleColor(e) {
    // console.log(e.target.value);
    document.documentElement.style.setProperty(`--base`, e.target.value);
  }

  render() {

    let colorContainer = `${styles.colorPicker}`;

    return (
      <div className={ colorContainer }>
        <div>
          <input ref={ (i) => this.input = i } 
            id="base" type="color" name="base" 
            value="#262626"
            onChange={this.handleColor} />
        </div>
      </div>
    )
  }
}

export default ColorPicker;
