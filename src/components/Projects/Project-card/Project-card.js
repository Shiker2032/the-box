import styles from './Project-card.module.css'

const ProjectCard = ({title, subtitle}) => {
    return (
        <div className={`${styles.card}`}>
                <img src="./project1.jpg" alt="tet"/>
            <div className={styles.textBlock}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default ProjectCard