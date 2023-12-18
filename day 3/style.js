var  num1=10;
var num2=20;
var sum=num1+num2;
console.log(sum);

console.log(typeof(sum));
var divbyzero=num1/0;
console.log(divbyzero)



var strFloat=87.987653;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2))
console.log(strFloat.toFixed(3))
//string function
var doubleQuotesString="this is \"javascrift\"  string"
console.log(doubleQuotesString)


var myFirststring ="welcome to our javascript course"
console.log(myFirststring.length)


console.log(myFirststring.indexOf('javascript'))
console.log(myFirststring.slice(0 ,5))


console.log(myFirststring.substr(0,4))
console.log(myFirststring.substr(21))

//changing to upper ,lower case 

var string1="focus On your StuDy.."
console.log(string1.toUpperCase())

console.log(string1.toLowerCase())

//concatation 
var firstName="javascript"
var lastName="playground";
console.log(string1.concat(firstName))
console.log(string1.concat(' ',firstName,'  ',lastName))



//splitting  function for string 
var newstring="nice to meet you guys "
console.log(newstring.split(' ') )



// null and undefine values 

var mvar
console.log(mvar)

mvar=null
console.log(mvar)