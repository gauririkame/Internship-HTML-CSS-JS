const name='jack mark kuri';
const mystring=name.split(' ');
console.log(mystring);

let[firstName ,middleName]=mystring;
console.log(firstName);
console.log(middleName);



//map function 

const mArr=[1,2,3,4,5,6,7];

let newArr = mArr.map((item) => {
    return item  * 2;
    

});
console.log(newArr);


/*const numArr =[1,2,3,4,5];
 const result =  numArr.reduce((acc,item)
 =>{
    console.log(acc);
    return acc + item;
 },0)
 console.log(result);*/

 const numArr = [1,2,3,4,5,6,7];
 const resultArr =numArr.filter(item=>{
    //console.log(item);
    return item%2 ==0;
 })
 console.log('Result Arr =>' ,resultArr);



 const  fArr = [-1,-2,-3,-4,-5,1,2,,3,4]

 //const result =fArr.find(item =>{
    //return (item %2 ===0 && item>=0);
 //})
 //console.log('result => ' , result);

 const result=fArr.findIndex(item =>{
    return(item %5 ===0 && item >=0);

 })
 console.log('Result => ',result);


 

