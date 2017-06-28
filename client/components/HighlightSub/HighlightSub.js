import styles from './HighlightSub.css';

import highlights from '../Highlight/highlights.js';
import Highlight from '../Highlight/Highlight.js';


const HighlightSub = (props) => {

  let titleStyle = `pure-u-1`;

  return (
    <div>
      <div className={titleStyle}> 
        <h2 className={styles.largeText}>how I work...</h2>
      </div>
      {highlights.map(hl => <Highlight title={hl.title} text={hl.text} icon={hl.icon} />)}
    </div>
  )
}

export default HighlightSub;