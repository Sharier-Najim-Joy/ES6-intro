const person ={
    name:'Ridoy',
    age:26
}

// const info= props=>{
//     const{name,age}=props;
//     console.log(name,age);
// }
const info= ({name,age})=>{
    console.log(name,age);
}
info(person)