let  num1=10;
console.log(num1);

const name = 'hello'
const mystring = 'guys' +name ;
console.log(mystring)


function greetings(name){
    return 'Welcome ${name}'
}

const mGreeting =(name,age) =>{
    return 'Welcome ${name} ${age}'
}

console.log(greetings('John'));
console.log(mGreeting('John'));