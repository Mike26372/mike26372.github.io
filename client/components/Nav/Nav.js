import styles from './Nav.css';

const Nav = () => {
  
  let menuStyle = `${styles.navMenu} pure-menu pure-menu-horizontal pure-menu-fixed`;
  let titleStyle = `${styles.title} pure-menu-heading ${styles.titleStart}`;
  return (
    <div className="header">
      <div className={menuStyle}>
        
        <a className={titleStyle} href="">michaeltutt.io</a>
      </div>
    </div>
  )
}

export default Nav;

// <ul className="pure-menu-list">
//     <li className="pure-menu-item pure-menu-selected"><a href="#" className="pure-menu-link"></a></li>
//     <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
//     <li className="pure-menu-item"><a href="#" className="pure-menu-link"></a></li>
// </ul>