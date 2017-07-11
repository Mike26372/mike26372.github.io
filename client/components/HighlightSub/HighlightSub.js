import genStyles from '../../stylesheets/sectionStyles.css';
import styles from './HighlightSub.css';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';

import highlights from '../Highlight/highlights.js';
import Highlight from '../Highlight/Highlight.js';


const HighlightSub = (props) => {

  let titleStyle = `${PureGrid['pure-u-1']}`;

  return (
    <div>
      <div className={titleStyle}> 
        <h2 className={genStyles.largeText}>how I work...</h2>
      </div>
      {highlights.map(hl => <Highlight title={hl.title} text={hl.text} icon={hl.icon} />)}
    </div>
  )
}

export default HighlightSub;