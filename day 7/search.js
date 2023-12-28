//for searching the words 
var str= "this is black ball pen .this pen is really good !"
var pattern=/ pen/;
console.log(str.search(pattern));

//for test .......
var str= "this is black ball pen .this pen is really good !"
var pattern=/ pen/;
console.log(pattern.test(str));
//matching string will be  display....
var str= "this is black ball pen .this pen is really good !"
var pattern=/ pen/g;
console.log(str.match(pattern));

var str= "this is black 102 ball pen .this pen is 230 really 678 good !"
var pattern=/[0-9]/gi;
console.log(str.match(pattern));

var str= "this is black 102 ball pen .this pen is 230 really 678 good !"
var pattern=/./ig;
console.log(str.match(pattern));


var str='www.kkwagh.com'
var pattern=/./ig;
console.log(str.match(pattern));

var str='www.kkwagh.com'
var pattern=/^www\.[\w]+\.com?$/g;
console.log(str.match(pattern));

