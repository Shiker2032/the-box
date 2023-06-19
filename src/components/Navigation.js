import { useState } from 'react';
import styles from './Navigation.style.module.css';
import { Link } from 'react-router-dom';



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
           <Link className={styles.link} to={"/"}>Home</Link>
          </li>
          <li className={styles.item}>
           <Link className={styles.link} to={"/about"}>About us</Link>
          </li>
          <li className={styles.item}>
           <Link className={styles.link} to={"/projects"}>Projects</Link>
          </li>
          <li className={styles.item}>
           <Link className={styles.link} to={"/services"}>Services</Link>
          </li>
          <li className={styles.item}>
           <Link className={styles.link} to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul> 
      </div>      
    </div>
  );
};

export default Navigation;
