const projectsData =  [
    {
      title: 'Wildstone Infra Hotel',
      subtitle: '2715 Ash Dr. San Jose, South Dakota',
      img: '/project1.jpg',
      id:1,
    },
    {
      title: 'Wish Stone Building',
      subtitle: '2972 Westheimer Rd. Santa Ana, Illinois ',
      img: '/project1.jpg',
      id:2,
    },
    {
      title: 'Mr. Parkinston’s House',
      subtitle: '3517 W. Gray St. Utica, Pennsylvania',
      img: '/project1.jpg',
      id:3,
    },
    {
      title: 'Oregano Height',
      subtitle: '2464 Royal Ln. Mesa, New Jersey ',
      img: '/project1.jpg',
      id:4,
    },

    {
      title: 'Wildstone Infra Hotel',
      subtitle: '2715 Ash Dr. San Jose, South Dakota',
      img: '/project2.jpg',
      id:5,
    },
    {
      title: 'Wish Stone Building',
      subtitle: '2972 Westheimer Rd. Santa Ana, Illinois ',
      img: '/project2.jpg',
      id:6
    },
    {
      title: 'Mr. Parkinston’s House',
      subtitle: '3517 W. Gray St. Utica, Pennsylvania',
      img: '/project2.jpg',
      id:7
    },
    {
      title: 'Oregano Height',
      subtitle: '2464 Royal Ln. Mesa, New Jersey ',
      img: '/project2.jpg',
      id:8
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
     const   result = projectsData.find((el) => el.id.toString() === id);
     console.log(result);
       resolve(result)
      }, 1000);
    });
    return promise;
  } 

export { getProjectsData, getProjectData }