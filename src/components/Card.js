import styles from './Card.module.css'

const Card = ({title, text, type, icon = "./icon.png"}) => {
    
    if (!type) {
        return (
            <div className={styles.card}>
                <img src={icon} alt="" />
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        )
    }
    if (type === "service") {
        return (
            <div className={`${styles.card} ${styles.service}`}>
                <img src={icon} alt="" />
                <span>_______</span>
                <h3>{title}</h3>
            </div>
        )
    }
    
}

export default Card;