import React from 'react';

import styles from './Highlight.css';
import svgMapping from './svgMapping.js';

const Highlight = (props) => {
  let { title, text, icon } = props;
  let highlightRow = `pure-u-1 pure-u-md-1-2 ${styles.row}`;


  return (
    <div className={ highlightRow }>
      <div className= { styles.icon }>
        {React.createElement(svgMapping[icon])}
      </div>
      <h3 className={ styles.title }>
        { title }
      </h3>
      <p className={ styles.text }>
        { text }
      </p>
      <span></span>
    </div>
  )
}

export default Highlight;