import Button, { BtnColor } from '../Button'
import ProjectCard from './Project-card/Project-card'
import styles from './Projects.module.css'

const cardList = [
    {title:"Wildstone Infra Hotel", subtitle:"2715 Ash Dr. San Jose, South Dakota", img:"img"},
    {title:"Wish Stone Building", subtitle:"2972 Westheimer Rd. Santa Ana, Illinois ", img:"img"},
    {title:"Mr. Parkinston’s House", subtitle:"3517 W. Gray St. Utica, Pennsylvania", img:"img"},    
    {title:"Oregano Height", subtitle:"2464 Royal Ln. Mesa, New Jersey ", img:"img"},    
]

const Projects = () => {
    return (
        <section className={`${styles.projects} container`}>
            <div className={styles.left}>
                <h2>Projects</h2>
                <ul>
                    <li>All</li>
                    <li>Commercial</li>
                    <li>Residential</li>
                    <li>Other</li>                    
                </ul>
            </div>
            <div className={styles.right}>
                <div className={styles.cards}>
                    {cardList.map((card, i) => (
                        <ProjectCard title={card.title} subtitle={card.subtitle}/>
                    ))}
                </div>
                <div className={styles.controls}>
                    <Button color={BtnColor.arrow} text={"<-- Back"} />
                    <Button color={BtnColor.arrow} text={"Next -->"} />
                </div>
            </div>
        </section>
    )
}

export default Projects