import svgStyles from '../SvgStyles.css';

const ToolSVG = props => {
  let svgStyle = `pure-u-1 ${svgStyles.small}`;

  return (
    <div className={svgStyle}>
      <svg
        height="100%"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: '1.5'
        }}
        width="100%"
        version="1.1"
        viewBox="0 0 800 800"
        xmlSpace="preserve"
      >
        <g>
          <path
            style={{ fill: '#ebebeb', stroke: '#262626', strokeWidth: '100px' }}
            d="M737.04,722.046c9.577,-10.308 8.984,-26.452 -1.323,-36.029l-468.509,-435.331c-10.308,-9.578 -26.452,-8.985 -36.029,1.322c-9.578,10.308 -8.985,26.452 1.322,36.029l468.51,435.331c10.307,9.578 26.451,8.985 36.029,-1.322Z"
          />
          <path
            style={{ fill: '#262626' }}
            d="M120.989,34.09c22.433,-9.478 47.086,-14.719 72.953,-14.719c103.646,0 187.794,84.148 187.794,187.794c0,103.647 -84.148,187.794 -187.794,187.794c-103.647,0 -187.794,-84.147 -187.794,-187.794c0,-18.933 2.807,-37.215 8.029,-54.452l69.468,64.592c32.282,30.016 82.859,28.177 112.876,-4.105c29.967,-32.229 28.13,-82.724 -4.099,-112.691l-71.433,-66.419Zm75.532,179.11l0,0l0,0l0,0Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default ToolSVG;
