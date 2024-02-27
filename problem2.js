// let store=0;
// const calculate=(x)=>{
//     for(const y of x){
//         const square=y*2;
//         store+=square;
//     }
//     const avg =store/4
//     return avg
// }
// console.log(calculate([2,3,4,5]));

const output=[2,3,4,5];
const calculate = output.map(x=>x*2);
const calculate1 = calculate.reduce((p,c)=>p+c,0);
console.log(calculate,calculate1);