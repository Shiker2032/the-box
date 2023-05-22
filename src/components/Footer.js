import Button, { BtnColor } from '../pages/Home/Button';
import styles from './Footer.module.css'

const Footer = () => {
    return (
      <section className={`${styles.footer} container`}>
        <div className={styles.content}>
            <div className={styles.left}>
              <ul>
                <li>
                  <span>ADDRESS:</span>6391 Elgin St. Celina, Delaware 10299
                </li>
                <li>
                  <span>PHONE:</span>+84 1102 2703
                </li>
                <li>
                  <span>EMAIL:</span>hello@thebox.com
                </li>
              </ul>
              <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
                <h2>TheBox</h2>
              </div>
            </div>
            <div className={styles.right}>
                <h3>NEWSLETTER:</h3>
                <div className={styles.subscribe}>
                    <input type="email" placeholder='Your email here'/>
                    <Button color={BtnColor.orange} text={"Subscribe"}/>
                </div>
                <h3>SOCIAL:</h3>
                <div className={styles.social}>
                    <img src="./facebook.png" alt="facebook" />
                    <img src="./facebook.png" alt="facebook" />
                    <img src="./facebook.png" alt="facebook" />
                </div>
            </div>
        </div>
      </section>
    );
}

export default Footer