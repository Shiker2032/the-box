import Button, { BtnColor } from "../components/utils/Button";
import Card from "./Card";
import styles from "./Experience.module.css"

const Experience = () => {
    const cards = [
        {title:"Construction", type: "service"},
        {title:"Renovation", type: "service"},
        {title:"Consultation", type: "service"},
        {title:"Repair Services", type: "service"},     
    ]

    return (
    <section className={`${styles.experience} container`}>
            <div className={styles.left}>
                {cards.map((card, i) => (
                    <Card title={card.title} key={i} text={card.text} type={"service"}/>
                ))}
            </div>
            <div className={styles.right}>
                <h2>30 Years Of Experience</h2>
                <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.                    
                </p>
                <Button color={BtnColor.blue} text={"Contact Us"}/>
            </div>
        </section>
    )
}

export default Experience;