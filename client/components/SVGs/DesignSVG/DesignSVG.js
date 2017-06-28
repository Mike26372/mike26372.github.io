import React, { Component } from 'react';

import svgStyles from '../SvgStyles.css';

const DesignSVG = (props) => {

  let svgStyle = `pure-u-1 ${svgStyles.medium}`;
  return (
    <div className={svgStyle}>
      <svg width="100%" height="100%" viewBox="0 0 1280 800" version="1.1" 
      xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      xmlSpace="preserve" 
      style={{'fillRule':'evenodd','clipRule':'evenodd','strokeLinecap':'square','strokeLinejoin':'round','strokeMiterlimit':'1.5'}}>
        <g>
          <clipPath id="_clip1">
            <rect x="130.918" y="10.995" width="942.352" height="592.335"/>
          </clipPath>
          <g clipPath="url(#_clip1)">
            <path d="M1052.01,184.09l0,-123.71c0,-17.871 -14.509,-32.38 -32.38,-32.38l-833.662,0c-17.871,0 -32.38,14.509 -32.38,32.38l0,598.429" 
            style={{'fill':'none','stroke':'#262626','strokeWidth':'25px'}}/>
          </g>
          <clipPath id="_clip2">
            <rect x="70.692" y="601.913" width="792.142" height="114.783"/>
          </clipPath>
          <g clipPath="url(#_clip2)">
            <path d="M1134.91,621.845c0,-11 -8.932,-19.932 -19.932,-19.932l-1024.36,0c-11.001,0 -19.932,8.932 -19.932,19.932l0,39.43c0,30.588 24.833,55.421 55.421,55.421l953.587,0c30.472,0 55.212,-24.739 55.212,-55.211l0,-39.64Z" 
            style={{'fill':'#262626',}}/>
          </g>
          <g id="Phone">
            <path d="M1159.93,793.218l-215.841,0c-27.251,0 -49.375,-22.124 -49.375,-49.375l0,-465.245c0,-27.25 22.124,-49.374 49.375,-49.374l215.841,0c27.25,0 49.374,22.124 49.374,49.374l0,465.245c0,27.25 -22.123,49.374 -49.374,49.375Zm-107.921,-62.351c12.123,0 21.965,9.842 21.965,21.964c0,12.123 -9.842,21.965 -21.965,21.965c-12.122,0 -21.964,-9.842 -21.964,-21.965c0,-12.122 9.842,-21.964 21.964,-21.964Zm121.868,-430.79l-243.736,0l0,405.282l243.736,0l0,-405.282Zm-71.916,-38.969l-99.904,0c-0.977,0 -1.771,0.794 -1.771,1.771l0,3.543c0,0.978 0.794,1.771 1.771,1.771l99.904,0c0.977,0 1.771,-0.793 1.771,-1.771l0,-3.543c0,-0.977 -0.794,-1.771 -1.771,-1.771Z" 
            style={{'fill':'#262626',}}/>
          </g>
        </g>
        <clipPath id="_clip3">
          <rect x="306.5" y="133" width="665" height="418"/>
        </clipPath>
        <g clipPath="url(#_clip3)">
          <path d="M322.5,590.15c0,12.611 10.239,22.85 22.85,22.85l588.3,0c12.611,0 22.85,-10.239 22.85,-22.85" 
          style={{'fill':'none','stroke':'#000',strokeWidth: '25px', strokeLinecap: 'round'}}/>
        </g>
      </svg>
    </div>
  )
}

export default DesignSVG;