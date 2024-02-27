const actor={
    name:'ananta',
    age:40,
    number:'123456789',
    salary:34567890,
    address:{
        village:'ki jani',
        road:'152/2'
    }
}
// const{number}=actor; 
// console.log(number);
// const{number ,age}=actor;
// console.log(age);
// const{number ,age:boyos}=actor; //property name change
// const{name,age,...other}=actor; //property name change
// console.log(other);
//--------
// const {address:{road}}=actor;
// console.log(road);
const {address}=actor
const {road}=address;
console.log(road);
//----------------
const numbers=[23,24];
const[one,two]=numbers;
// console.log(one);

// advanced

function doubleThem(a,b){
    return [a*2,b*3]
}
// console.log(doubleThem(2,3));
// skipping 
const array=[2,3,4];
const [first,,three]=array;
// console.log(first);

// swap
let x=[2,3];
let y=[4,5];
let s=x;
let[e,f]=s
let[a,b]=x;
let[c,d]=y;
[a,b]=[c,d];
// console.log(a,b,e,f);

let num1=2;
let num2=3;
[num1,num2]=[num2,num1]
// console.log(num1,num2);

let p=[1,2,3,4,5,6,7,8,9];
const[,,,,t]=p;
// console.log(t);
