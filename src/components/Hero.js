import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
           <h2 className={styles.caption}>Building things is our mission.</h2> 
        </div>
    )
}

export default Hero;