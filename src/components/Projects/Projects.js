import { useEffect, useState } from 'react';
import Button, { BtnColor } from '../../components/utils/Button';
import styles from './Projects.module.css';
import ProjectsList from './Projects-list/Projects-list';
import {
  getFilteredProjectsDataByCategory,
  getProjectsData,
} from '../../api/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const perPage = 4;
  const lastProject = currentPage * perPage;
  const firstProject = lastProject - perPage;
  const totalPages = projects.length / perPage;
  const activeProjects = projects.slice(firstProject, lastProject);

  const increasePage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const decreasePage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const loadProjects = async () => {
    setLoading(true);
    const data = await getProjectsData();
    setProjects(data);
    setLoading(false);
  };

  const handleFilterClick = async (evt) => {
    setActiveCategory(evt.target.textContent.toLowerCase())
    setLoading(true);

    if (activeCategory !== 'all') {
      const data = await getFilteredProjectsDataByCategory(activeCategory);
      setProjects((prev) => prev = [...data]);
    } else {
      const data = await getProjectsData();      
      setProjects((prev) => prev = [...data]);
    }
    setLoading(false);
  };

  useEffect(() => loadProjects, [currentPage]);

  return (
    <section className={`${styles.projects} container`}>
      {!loading ? (
        <>
          <div className={styles.left}>
            <h2>Projects</h2>
            <ul className={styles.projects__list}>
              <li className={`${styles.projects__item} ${activeCategory === "all" ? styles.active : ""}`} onClick={handleFilterClick}>All</li>
              <li className={`${styles.projects__item} ${activeCategory === "commercial" ? styles.active : ""}`} onClick={handleFilterClick}>Commercial</li>
              <li className={`${styles.projects__item} ${activeCategory === "residential" ? styles.active : ""}`} onClick={handleFilterClick}>Residential</li>
              <li className={`${styles.projects__item} ${activeCategory === "other" ? styles.active : ""}`} onClick={handleFilterClick}>Other</li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.cards}>
              <ProjectsList isLoading={loading} projects={activeProjects} />
            </div>
            <div className={styles.controls}>
              <Button
                color={`${BtnColor.arrow} ${currentPage !== 1 ? '' : BtnColor.disabled
                  }`}
                handleClick={decreasePage}
                text={'<-- Back'}
              />
              <Button
                color={`${BtnColor.arrow} ${currentPage < totalPages ? '' : BtnColor.disabled
                  }`}
                handleClick={increasePage}
                text={'Next -->'}
              />
            </div>
          </div>
        </>
      ) : (
        <h3 style={{ width: '100%', textAlign: 'center' }}>Loading...</h3>
      )}
    </section>
  );
};

export default Projects;
