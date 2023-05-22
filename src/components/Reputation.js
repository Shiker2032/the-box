import Card from "./Card";
import styles from "./Reputation.module.css"

const cards = [
    {title: "Best Services", text: "Nullam senectus porttitor in eget. Eget rutrum leo interdum."},
    {title: "Best Teams", text: "Cursus semper tellus volutpat aliquet lacus. "},
    {title: "Best Designs", text: "Ultricies at ipsum nunc, tristique nam lectus."},
]

const Reputation = () => {
    return (
        <div className={`${styles.reputation} container`}>
            <h2>Our Reputation</h2>
            <div className={styles.cards}>
               {cards.map((card, i) => (
                <Card title={card.title} text={card.text} key={i}/>
               ))}
            </div>
        </div>
    )
}

export default Reputation;