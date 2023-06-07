import styles from './Projects-list.module.css'

const ProjectsList = ({ projects, isLoading }) => {
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
  projects &&  projects.map((project, i) => (
    <div key={i} className={`${styles.card}`}>
      <img src={project.img} alt="tet" />
      <div className={styles.textBlock}>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
      </div>
    </div>
    ))
  );
};

export default ProjectsList;
