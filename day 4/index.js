if(5>7)
{
    console.log(true)
}else{
    console.log(false)
}



// if else if  else


if(5>8)
{
    console.log('5 > 8')

}else if(7>8)
{
    console.log('7  >  8')

}
else{
    console.log('nothing')
}



//switch case
var currentday='monday'


switch(currentday){

case 'monday':
console.log('timing:10')
break;
case 'tues':
console.log('timing:11')
break;
case 'wed ':
    console.log('timing:12')
    break;
    

    case 'thur':
        console.log('timing:13')
        break;
        

        case 'fri':
            console.log('timing:14')
            break;
            

            case 'saturday':
                console.log('timing:15')
                break;

                case 'sunday':
                    console.log('timing:16')
                    break;
    
                            }


//arithmatic operator

                            // operation using operator 

                            //addition

                            var num1 = 67;
                            var num2 = 90;
                            var num3 = 56;

                            console.log(num1+num2)


                            //subtration

                            console.log(num1+num2-num3)


                            //multiplication

                            console.log(num1*num2)


                            //pre and post increment 

                            console.log(num1++)
                            console.log(num1++)




                            console.log(++num2)


                            //division

                            console.log(num1/num2)



                            //pre and post decrement 

                            console.log(num1--)

                            console.log(--num1)



                            // assignment operator 

                            var  numb1=78;
                            var numb3=90;
                            var  num5=56;

                            //+=
                            numb3 +=numb1
                            console.log(numb3)



                            //-=


                            numb3 -=numb1
                            console.log(numb3)

                          //  %=

                            numb3 %=10
                            console.log(numb3)



                            //logical operators 
                            //&&
                            if(5>10 && 6>19){
                                console.log(true)
                            }else{
                                console.log(false)
                            }


                            //  || 
                            if(55>10 || 6>19){
                                console.log(true)
                            }else{
                                console.log(false)
                            }
                                // ternary opeator

                                2>3 ? console.log(true) :   console.log(false)



                                //string 
                                
var mystr="hello"
var mystr2="everyone"
console.log(mystr+mystr2)


var mys=5
console.log(5+"hello")

console.log(typeof(5))


if(true)
{
    console.log('true')

}
else{
    console.log('false')
}



console.log(typeof(Number('2')))


//  to number
console.log(Number(true),typeof(Number(true)))
console.log(Number(false),typeof(Number(true)))
console.log(Number('apple'),typeof(Number('apple')))


//to boolean

console.log(Boolean(1),typeof(Boolean(1)))
console.log(Boolean(0),typeof(Boolean(0)))                      
console.log(Boolean(1),typeof(Boolean(1)))



//object in javascript


var mystring={
    "name":"gauri",
    "class":"te",
    "sub":"database management system",
    "college":"K.k.wagh college"
}
console.log(mystring)
console.log(typeof(mystring))



var agera={
    name:"saniya",
    manufature:{
        name:"konigseggs",
        location:"nashik"
    },
    topspeed:234,
    color:"black",
    spoliers:false,
    applyBreakers:function(){

    }
}

console.log(agera.name)

console.log(agera.manufature)



//array 1

var myfriend=['gauri','sanim','soham','nima','anisha']
console.log(myfriend)
console.log(typeof(myfriend))
console.log(myfriend[2])
console.log(myfriend[4])
myfriend[1]='sakshi'
console.log(myfriend)

myfriend.push('jack')
console.log(myfriend)

myfriend[10]='ram'
console.log(myfriend)


var mName=myfriend.pop()
console.log(mName)
var mName=myfriend.pop()
console.log(mName)
var mName=myfriend.pop()
console.log(mName)

var mName=myfriend.pop()
console.log(mName)

var mName=myfriend.pop()
console.log(mName)

var mName=myfriend.pop()
console.log(mName)

//array 2


var mname=['sanu','diya','rima','rama']

mname.splice(3,4,'samya','dev')
console.log(mname)
mname.splice(0,0,'devar')
console.log(mname)


var myofficefriends=['athrva','jatin','shweta','katie']
var myallfriends=myfriend.concat(myofficefriends)
console.log("------------------")
console.log(myfriend)
console.log(myallfriends)



//while loop

var mvalue=0;
while(mvalue <50)
{
    mvalue++
}
console.log(mvalue);


