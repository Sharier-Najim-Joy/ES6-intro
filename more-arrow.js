// single parameter or one parameter
const getAge=(person)=>person.age;
const student={name:'abc', age:25};
const age=getAge(student);
console.log(age);

const getThirdIndex=numbers=>numbers[3];
const number=getThirdIndex([12,14,16,17,14,18,19]);
console.log(number);

// no parameter
const getPi= () =>Math.PI;
console.log(getPi());

// large arrow function
const doMath=(x,y,z)=>{
    const sum=x+y+z;
    const multi=x*y*z;
    const result=sum+multi;
    return result
}
console.log(doMath(1,2,3));