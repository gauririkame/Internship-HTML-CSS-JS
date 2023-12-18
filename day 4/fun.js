function data(){
    num1=12
    num2=56
    num3=67
    sum=num1+num2+num3
    console.log(sum)

}
data();
/*
function data(){
    num1=20
    num2=67
    num3=90
    sum=num1+num2+num3
    return sum
   

}
var totalsum=100+data()
console.log(totalsum);
*/

function totalsum(num1,num2,num3){
    console.log('num1=>'+ num1);
    console.log('num2=> '+num2);
   console.log(num1+num2)
}
totalsum(2,7)
totalsum(22,38)

function totalsums(num1=78,num2=44,num3=30){
    console.log('num1=>'+ num1);
    console.log('num2=> '+num2);
   console.log(num1+num2)
}
totalsums()




//global variable


var num1=56

function maths(){
    num2=90;
    sum=num1+num2;
    console.log(sum)
}
maths()

var num1=10
function sum(num2)
{
    var total=0;
    console.log(total);
    total=num1+num2;
    console.log(total);

}
sum(20)
sum(50)

// function hosting

sum1(10,34)
 function sum1(num1 ,num2){
    console.log(num1 + num2)
}
 
