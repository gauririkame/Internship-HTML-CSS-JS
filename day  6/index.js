var username=document.getElementById("username")

var Loginform = document.getElementById("login-form")

username.addEventListener('input' ,function(){
    console.log('value changed');
});



var username = document.getElementById("username")
username.addEventListener('input' ,function(event){
    console.log('event.target');
});



username.addEventListener('focus',function()
{
    console.log('element focus');
});


username.addEventListener('lost focus',function()
{
    console.log('element lost focus');
});
/*
Loginform.addEventListener('submit',function()
{
    alert('submit button click');
});*/

//keyboard event 
document.body.addEventListener('keyup',function(e)
{
    var  keyCode   = e.keyCode;
    if(keyCode === 13)
    {
        console.log(keyCode   +         'key is up');
    }
   
});

document.body.addEventListener('keypress',function(e)
{
    var  keyCode   = e.keyCode;
    if(keyCode === 13)
    {
        console.log(keyCode   +         'key is press');
    }
   
});









document.body.addEventListener('keydown',function(e)
{
    var  keyCode   = e.keyCode;
    if(keyCode === 13)
    {
        console.log(keyCode   +         'key is clicked');
    }
   
});

//mouse event
var btn=document.getElementById('button-submit');


    btn.addEventListener('mouseup',function(){
        console.log('mouse up event');
});


btn.addEventListener('mousedown',function(){
    console.log('mouse down event');
});

btn.addEventListener('click',function(){
    console.log('mouse click event');
});



btn.addEventListener('dblclick',function(){
    console.log('mouse dblclick event');
});


