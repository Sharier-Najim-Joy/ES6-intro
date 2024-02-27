const numbers=[12,13,14,15,16,18,19];
const num=Math.max(...numbers);
// console.log(num);

const nums=Math.max(12,13,14,15,16,18,19);
// console.log(nums);
const nums1=Math.min(12,13,14,15,16,18,19,-1,-2);
// console.log(nums1);

const friends=[12,13,14,15,16,18,19];
const bondu=friends;
const dosto=[...friends]
friends.push(20);
// console.log(dosto);
// console.log(friends);

// advance
const value =[...friends,99];
// console.log(value);


const index=[1,2];
const index1=[3,4];
const add=[...index,...index1];
console.log(add);