import React, { Component } from 'react';

import styles from './ComputerSVG.css';

const ComputerSVG = (props) => {

  let svgStyle = `pure-u-1 ${styles.container}`;
  return (
    <div className={svgStyle}>
      <svg width="100%" height="100%" viewBox="0 0 800 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" 
      style={{'fill-rule':'evenodd','clip-rule':'evenodd','stroke-linecap':'square','stroke-miterlimit':1.5}}>
        <path d="M713.5,498l-627,0l0,-396l627,0l0,396Zm-623,-392l0,388l619,0l0,-388l-619,0Z" 
        style={{'fill':'#262626'}}/>
        <path d="M88.5,104l623,0l0,24l-623,0l0,-24Zm13.5,6c3.311,0 6,2.689 6,6c0,3.311 -2.689,6 -6,6c-3.311,0 -6,-2.689 -6,-6c0,-3.311 2.689,-6 6,-6Zm29,0c3.311,0 6,2.689 6,6c0,3.311 -2.689,6 -6,6c-3.311,0 -6,-2.689 -6,-6c0,-3.311 2.689,-6 6,-6Zm-14.5,0c3.311,0 6,2.689 6,6c0,3.311 -2.689,6 -6,6c-3.311,0 -6,-2.689 -6,-6c0,-3.311 2.689,-6 6,-6Z" 
        style={{'fill':'#262626'}}/>
        <g transform="matrix(2.40506,0,0,2.40506,-346.586,-399.916)">
          <path d="M239.123,294.405l0,-6.184l35.742,-15.092l0,6.589l-28.344,11.632l28.344,11.742l0,6.589l-35.742,-15.276Z" 
          style={{'fill':'none'}}/>
          <path d="M320.914,318.92l15.644,-55.803l5.301,0l-15.607,55.803l-5.338,0Z" 
          style={{'fill':'none'}}/>
          <path d="M381.724,294.405l-35.742,15.276l0,-6.589l28.306,-11.742l-28.306,-11.632l0,-6.589l35.742,15.092l0,6.184Z" 
          style={{'fill':'none'}}/>
          <path d="M239.123,294.405l0,-6.184l35.742,-15.092l0,6.589l-28.344,11.632l28.344,11.742l0,6.589l-35.742,-15.276Z" 
          style={{'fill':'#262626','fill-rule':'nonzero'}}/>
          <path d="M320.914,318.92l15.644,-55.803l5.301,0l-15.607,55.803l-5.338,0Z" 
          style={{'fill':'#262626','fill-rule':'nonzero'}}/>
          <path d="M381.724,294.405l-35.742,15.276l0,-6.589l28.306,-11.742l-28.306,-11.632l0,-6.589l35.742,15.092l0,6.184Z" 
          style={{'fill':'#262626','fill-rule':'nonzero'}}/>
        </g>
        <rect x="355" y="336" width="50" height="14" 
        style={{fill:'#262626', stroke:'#262626', 'stroke-width':'1px'}}/>
      </svg>
    </div>
  )
}

export default ComputerSVG;
