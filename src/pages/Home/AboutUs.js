import styles from './AboutUs.module.css';
import Button, { BtnColor } from './Button';

const AboutUs = () => {    
    return (
        <div className={`${styles.aboutUs} container`}>
            <img src="./aboutUs.png" alt="about us" />
            <div className={styles.infoCard}>
                <h2>About us</h2>
                <p>For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way. </p>
                <p>We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                <Button  text={"More On Our History"}></Button>
            </div>
        </div>
    )
}

export default AboutUs;