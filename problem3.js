
const maxNum = (arr1, arr2) => {
  const adds = [...arr1, ...arr2];
  return Math.max(...adds);
  
}
console.log(maxNum([1, 2, 3], [4, 5, 6, 7]));