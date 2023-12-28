var myobject={
    "Name": 'gauri',
    "age":20,
    "married":undefined,
    score:{
        "science":91,
        "maths":95
    }
 
}

var strJson=JSON.stringify(myobject)
console.log(strJson)
console.log(JSON.parse(strJson));