import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProjectData } from "../api/api";




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
        <div>
            <p>{project.title}</p>
            <p>{project.subtitle}</p>
            <img src={"/project1.jpg"} alt="" />
        </div>
    )
}

export default ProjectPage