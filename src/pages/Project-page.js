import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectData } from '../api/api';

import styles from './Project-page.module.css';

const ProjectPage = () => {
  const getProject = async (id) => {
    setLoading(true);
    const projectData = await getProjectData(id);
    setProject(projectData);
    setLoading(false);
  };

  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getProject(id);
  }, []);
  return (
    <div className={`${styles.content} container`}>
      {project.img && !loading ? (
        <>
          <img src={project.img} className={styles.img} alt="" />
          <div className={styles.info}>
            <p>{project.title}</p>
            <p>{project.subtitle}</p>
          </div>
        </>
      ) : (
        <>
          <h3 style={{width: "100%", textAlign:"center"}}>Loading...</h3>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
