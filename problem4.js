
const friends=['tom','timsouth','jimy','kimjon'];

const evenNam=friends.filter(p=>p.length%2===0);
const oddNam=friends.filter(p=>p.length%2===1);
console.log(evenNam);
console.log(oddNam);