
import React from 'react';
import styles from './ProjectSub.css';
import PureGrid from '../../../node_modules/purecss/build/grids-min.css';
import PureGridRes from '../../../node_modules/purecss/build/grids-responsive-min.css';


import svgMapping from '../SVGs/svgMapping.js';


const ProjectSub = (props) => {

  let row1Column = `${PureGrid['pure-u-1']} ${styles.row}`;
  let row2Columns = `${PureGridRes['pure-u-md-1-2']} ${PureGrid['pure-u-1']} ${styles.row}`;
  let { title, description, url, github, style } = props;

  //Styles
  let iconStyle = `${styles.icon}`;
  let titleStyle = `${styles.title}`;
  let descriptionStyle = `${styles.description}`;
  let subStyle = `${styles.sub}`;
  let projectStyle = `${styles.project}`;
  let linkStyle = `${styles.link}`;
  let gitHubStyle = `${styles.fontawesome} fa fa-github`;
  let urlStyle = `${styles.fontawesome} fa fa-arrow-circle-o-right`;



  return (
    <div className={row2Columns} >
      <div className={ projectStyle } style={style}>
        <h3 className={ titleStyle }>
          {title}  
        </h3>
        <p className={ descriptionStyle }>
          {description}
        </p>
        <div className={iconStyle}>
          {
            url ? 
            <a href={url} target="_blank" className={linkStyle} >
              <i className={urlStyle} aria-hidden="true" style={{'color': style.color}}></i>
            </a>
            : ''
          }
          <a href={github} target="_blank" className={linkStyle} >
            <i className={gitHubStyle} aria-hidden="true" style={{'color': style.color}}></i>
          </a>
        </div>     
      </div>
    </div>
  )
}

export default ProjectSub;