import React from 'react';
import styles from './TechSub.css';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

import svgMapping from '../SVGs/svgMapping.js';

const TechSub = props => {
  // let row1Column = `pure-u-1 ${styles.row}`;
  // let row5Columns = `pure-u-1 pure-u-md-1-5 ${styles.row}`;
  let row1Column = `${PureGrid['pure-u-1']} ${styles.row}`;
  let row5Columns = `${PureGrid['pure-u-1']} ${PureGrid['pure-u-md-1-5']} ${
    styles.row
  }`;
  let { title, mainSkills, subSkills, icon } = props;

  //Styles
  let iconStyle = `${styles.icon}`;
  let titleStyle = `${styles.title}`;
  let mainStyle = `${styles.main}`;
  let subStyle = `${styles.sub}`;

  return (
    <div className={row5Columns}>
      <div className={iconStyle}>{React.createElement(svgMapping[icon])}</div>
      <h3 className={titleStyle}>{title}</h3>
      <div className={mainStyle}>
        {mainSkills.map(skill => (
          <div>{skill}</div>
        ))}
      </div>
      <div className={subStyle}>
        {subSkills.map(sub => (
          <div className={styles.subItem}>{sub}</div>
        ))}
      </div>
    </div>
  );
};

export default TechSub;
