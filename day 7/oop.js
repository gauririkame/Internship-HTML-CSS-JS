var firstName='roseline';
var person={
    firstName:'jack',
    lastname:'duffer',
    job:'piolet',
    getName :function(){
        console.log(this.firstName)
  
},
parents:  {
    firstName:'ryan',
    job:'pilot',
    getName:function()
    {
        console.log(this.firstName)
  },
  }
 }

person.getName();
person.parents.getName();


var person={
    name:'sanika',
    domain:'web development',
    college:'kkw',
    birthyear:2012
}




function Person(pName,pBirthyear,pJob)

{
    this.name=pName;
    this.Birthyear=pBirthyear;
    this.job=pJob;

}
person.prototype.calculateAge=function(){
    {
        console.log(2019-this.birthyear)
    
    }
    
}
var john = new Person('john ',1990,'pilot')
john.calculateAge();