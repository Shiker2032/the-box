const projectsData =  [
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
  ]


  const getProjectsData = () => {
    const promise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
       resolve(projectsData)
      }, 1000);
    });
    return promise;
  };

  const getProjectData = (id) => {
    const promise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
       resolve(projectsData[id])
      }, 1000);
    });
    return promise;
  } 

export { getProjectsData, getProjectData }