const array =[
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];
const updatedArray = array.map((obj) => {
    return { ...obj, grade: 'N/A' };
  });

console.log(updatedArray)

// const obj1 = [{a: 1, b: 2}, {c: 3, d: 4, b: 5}]
// const obj2 = [{c: 3, d: 4, b: 5}]

// // console.log({...obj1, ...obj2, name: 'rashisky'})
// console.log({...obj1, name: 'rashisky'})
