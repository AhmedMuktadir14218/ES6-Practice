//#Source https://bit.ly/2neWfJ2 
const pullAtValue = (arr, pullArr) => {
    let removed = [],
      pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
      mutateTo = arr.filter((v, i) => !pullArr.includes(v));
    arr.length = 0;
    mutateTo.forEach(v => arr.push(v));
    return removed;
  };
  let myArray = ['a', 'b', 'c', 'd'];
  let pulled = pullAtValue(myArray, ['b', 'd']); 
  console.log('Original data',myArray);
  console.log('Pulled data',pulled);
  