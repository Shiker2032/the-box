import { useState } from 'react';
import styles from './Navigation.style.module.css';



const Navigation = () => {
  const [active, setActive] = useState(false);
  const menuClass = `${styles.menu} ${active ? styles._active: null}`

  const toggleActive = () => {
    setActive(!active);
  }
  return (
    <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <img src="/logo.png" alt="logo" />
              <h2>TheBox</h2>
              <button className={styles.hamburgerBtn} onClick={toggleActive}>click</button>
            </div>
          </div>         
          <ul className={menuClass}>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Home</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>About Us</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Projects</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Services</a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>Contact Us</a>
          </li>
        </ul> 
      </div>      
    </div>
  );
};

export default Navigation;
