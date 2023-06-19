const projectsData =  [
    {
      title: 'Wildstone Infra Hotel',
      subtitle: '2715 Ash Dr. San Jose, South Dakota',
      img: '/project1.jpg',
      category: "commercial",
      id:1,
    },
    {
      title: 'Wish Stone Building',
      subtitle: '2972 Westheimer Rd. Santa Ana, Illinois ',
      img: '/project1.jpg',
      category: "commercial",
      id:2,
    },
    {
      title: 'Mr. Parkinston’s House',
      subtitle: '3517 W. Gray St. Utica, Pennsylvania',
      img: '/project1.jpg',
      category: "residential",
      id:3,
    },
    {
      title: 'Oregano Height',
      subtitle: '2464 Royal Ln. Mesa, New Jersey ',
      img: '/project1.jpg',
      category: "residential",
      id:4,
    },

    {
      title: 'Wildstone Infra Hotel',
      subtitle: '2715 Ash Dr. San Jose, South Dakota',
      img: '/project2.jpg',
      id:5,
      category: "residential",
    },
    {
      title: 'Wish Stone Building',
      subtitle: '2972 Westheimer Rd. Santa Ana, Illinois ',
      img: '/project2.jpg',
      category: "residential",
      id:6
    },
    {
      title: 'Mr. Parkinston’s House',
      subtitle: '3517 W. Gray St. Utica, Pennsylvania',
      img: '/project2.jpg',
      category: "commercial",
      id:7
    },
    {
      title: 'Oregano Height',
      subtitle: '2464 Royal Ln. Mesa, New Jersey ',
      img: '/project2.jpg',
      category: "test",
      id:8
    },
  ]

  const DELAY = 500


  const getProjectsData = () => {
    const promise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
       resolve(projectsData)
      }, DELAY);
    });
    return promise;
  };

  const getProjectDataById = (id) => {
    const promise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
     const   result = projectsData.find((el) => el.id.toString() === id);
     console.log(result);
       resolve(result)
      }, DELAY);
    });
    return promise;
  } 

  const getFilteredProjectsDataByCategory = (category) => {
    const promise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
       resolve(projectsData.filter((el) => (el.category == category)))
      }, DELAY);
    });
    return promise;
  };

export { getProjectsData, getProjectDataById as getProjectData, getFilteredProjectsDataByCategory }