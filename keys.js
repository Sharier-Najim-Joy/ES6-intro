const info={
    name:'glass',
    color:'red',
    price:34,
    isCleaned:true,
}
// console.log(Object.keys(info));
 //[ 'name', 'color', 'price', 'isCleaned' ]
// console.log(Object.values(info));
 //[ 'glass', 'red', 34, true ]
// console.log(Object.entries(info));
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'red' ],
//     [ 'price', 34 ],
//     [ 'isCleaned', true ]
//   ]
// delete info.isCleaned;
const {isCleaned,...info2}=info
console.log(info2);
//freeze
// Object.freeze(info);