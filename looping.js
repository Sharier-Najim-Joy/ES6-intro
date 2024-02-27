const actor={
    name:'ananta',
    age:40,
    number:'123456789',
    salary:34567890
}
for(const act in actor){
    const value=actor[act]
    console.log(act,':',value);
}