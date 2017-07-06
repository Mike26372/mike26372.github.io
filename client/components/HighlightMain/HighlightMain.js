import styles from './HighlightMain.css';

import FullStackSVG from '../SVGs/FullStackSVG/FullStackSVG.js';
import PureGrid from '../../../node_modules/purecss/build/grids-responsive-min.css';


const HighlightMain = (props) => {

  let row1Column = `${PureGrid['pure-u-1']} ${styles.row}`;
  // let row2Column = `pure-u-1-1 ${styles.row}`;

  return (
    <div>    
      <div className={ row1Column }>
        <h2 className={ styles.largeText }>a bit about me...</h2>
      </div>
      <div className={ styles.icon }>
        <FullStackSVG />
      </div>
      <div className={ row1Column }>
        <p className={ styles.smallText }>I'm Michael Tutt, a full-stack software engineer living in Northern California</p>
        <p className={ styles.smallText }>
          I develop web applications with significant 
          experience in both the front and back-end, 
          specializing in meticulously crafted user experiences
        </p>
        <p></p>
      </div>
    </div>
  )
}

export default HighlightMain;