import { Component } from 'react'; 
import styles from './Splash.css';
// import styles from './Splash.scss';

class Splash extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.splashContainer}>
          <div className={styles.splash}>
              <h1 className={styles.splashHead}>hello</h1>
              <p className={styles.splashSubhead}>
                scroll down or just <a className={styles.resume} href="">view my resume</a>
              </p>
          </div>
      </div>
    );
  }
}

export default Splash;