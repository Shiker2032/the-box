import Card from './Card';
import styles from './Services.module.css'

const cards = [
    {title:"Construction", type: "service"},
    {title:"Renovation", type: "service"},
    {title:"Consultation", type: "service"},
    {title:"Repair Services", type: "service"},
    {title:"Architecture", type: "service"},
    {title:"Electric", type: "service"},
]

const icon = "./service.png"

const Services = () => {
    return (
        <section className={`${styles.services}`}>
            <div className={`container`}>
                <h2>Services</h2>
                <div className={styles.cards}>
                {cards.map((card, i) => (
                    <Card title={card.title} type={card.type} key={i} icon={icon}/>
                   ))}
                </div>
            </div>
        </section>
    )
}

export default Services;