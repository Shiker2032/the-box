import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProjectData } from "../api/api"

import styles from "./Project-page.module.css"




const ProjectPage = () => {
    
const getProject = async (id) => {
    const projectData = await getProjectData(id);    

    setProject(projectData);
}

    const [project, setProject] = useState({});
    const {id} = useParams();
    useEffect(() => {
        getProject(id)
    }, [])
    return (
        <div className={`${styles.content} container`}>
            {project && 
            
            <>
                <img src={project.img} className={styles.img} alt="" />
                <div className={styles.info}>
                    <p>{project.title}</p>
                    <p>{project.subtitle}</p>
                </div>
            </>
            }
        </div>
    )
}

export default ProjectPage