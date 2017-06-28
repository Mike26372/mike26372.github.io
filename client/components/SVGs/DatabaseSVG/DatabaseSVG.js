 
import svgStyles from '../SvgStyles.css';

const DatabaseSVG = (props) => {

  let svgStyle = `pure-u-1 ${svgStyles.small}`;

  return (
    <div className={svgStyle}>
      <svg height="100%" style={{"fillRule":"evenodd","clipRule":"evenodd","strokeLinejoin":"round","strokeMiterlimit":"1.41421"}} width="100%" version="1.1" viewBox="0 0 800 800" xmlSpace="preserve">
        <ellipse style={{"fill":"#262626"}} cx="400" cy="128.014" rx="389" ry="82.014"/>
        <path style={{"fill":"#262626"}} d="M789,303.327c0,45.264 -174.305,82.013 -389,82.013c-214.695,0 -389,-36.749 -389,-82.013l0,-136.188c0,45.265 174.305,82.014 389,82.014c214.695,0 389,-36.749 389,-82.014l0,136.188"/>
        <path style={{"fill":"#262626"}} d="M789,653.954c0,45.264 -174.305,82.013 -389,82.013c-214.695,0 -389,-36.749 -389,-82.013l0,-136.188c0,45.264 174.305,82.013 389,82.013c214.695,0 389,-36.749 389,-82.013l0,136.188"/>
        <path style={{"fill":"#262626"}} d="M789,478.64c0,45.265 -174.305,82.014 -389,82.014c-214.695,0 -389,-36.749 -389,-82.014l0,-136.187c0,45.264 174.305,82.013 389,82.013c214.695,0 389,-36.749 389,-82.013l0,136.187"/>
      </svg>
    </div>
  )
}

export default DatabaseSVG;