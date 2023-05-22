import { useEffect, useState } from 'react';
import Button, { BtnColor } from '../../components/utils/Button';
import styles from './Projects.module.css';
import ProjectsList from './Projects-list/Projects-list';

const Projects = () => {
  const projectsData = [
    {
      title: 'Wildstone Infra Hotel',
      subtitle: '2715 Ash Dr. San Jose, South Dakota',
      img: './project1.jpg',
    },
    {
      title: 'Wish Stone Building',
      subtitle: '2972 Westheimer Rd. Santa Ana, Illinois ',
      img: './project1.jpg',
    },
    {
      title: 'Mr. Parkinston’s House',
      subtitle: '3517 W. Gray St. Utica, Pennsylvania',
      img: './project1.jpg',
    },
    {
      title: 'Oregano Height',
      subtitle: '2464 Royal Ln. Mesa, New Jersey ',
      img: './project1.jpg',
    },

    {
      title: 'Wildstone Infra Hotel',
      subtitle: '2715 Ash Dr. San Jose, South Dakota',
      img: './project2.jpg',
    },
    {
      title: 'Wish Stone Building',
      subtitle: '2972 Westheimer Rd. Santa Ana, Illinois ',
      img: './project2.jpg',
    },
    {
      title: 'Mr. Parkinston’s House',
      subtitle: '3517 W. Gray St. Utica, Pennsylvania',
      img: './project2.jpg',
    },
    {
      title: 'Oregano Height',
      subtitle: '2464 Royal Ln. Mesa, New Jersey ',
      img: './project2.jpg',
    },
  ];

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(4);
  const [loading, setLoading] = useState(false);

  const lastProject = currentPage * perPage;
  const firstProject = lastProject - perPage;
  const currentProjects = projectsData.slice(firstProject, lastProject);
  const totalPages = projectsData.length / perPage;

  const increasePage = () => {

    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const decreasePage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const updateProjects = async () => {
    setLoading(true);
    setTimeout(() => {
      setProjects(projectsData.slice(firstProject, lastProject));
      setLoading(false);
    }, 1000);
  };

  useEffect(() => updateProjects, []);
  useEffect(() => updateProjects, [currentPage]);

  return (
    <section className={`${styles.projects} container`}>
      {!loading ? (
        <>
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
              <ProjectsList isLoading={loading} projects={currentProjects} />
            </div>
            <div className={styles.controls}>
              <Button
                  color={`${BtnColor.arrow} ${currentPage !==1  ? '' : BtnColor.disabled}`}
                handleClick={decreasePage}
                text={'<-- Back'}
              />
              <Button
                color={`${BtnColor.arrow} ${currentPage < totalPages ? '' : BtnColor.disabled}`}
                handleClick={increasePage}
                text={'Next -->'}
              />
            </div>
          </div>
        </>
      ) : (
        <h3 style={{width: "100%", textAlign:"center"}}>Loading...</h3>
      )}
    </section>
  );
};

export default Projects;
