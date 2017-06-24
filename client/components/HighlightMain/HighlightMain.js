import styles from './HighlightMain.css';

const HighlightMain = (props) => {

  let highlightMainRow = `pure-u-1 ${styles.row}`;


  return (
    <div className={ highlightMainRow }>
      <p className={ styles.largeText }>Hello, my name is Michael.</p>
      <p className={ styles.smallText }>I'm a full-stack software engineer living in Northern California. </p>
      <p className={ styles.smallText }>
        I develop web applications with significant 
        experience in both the front and back-end, 
        specializing in meticulously crafted user experiences.
      </p>
      <p></p>
    </div>
  )
}

export default HighlightMain;