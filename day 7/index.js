var username =document.getElementById('username');
var liginForm =document.getElementById('login-form');
var usernameErrpara=document.getElementById('username-error')

username.addEventListener('input', function(e){
    console.log(e.target.value);
    var pattern=/^[\w]{6,8}$/;
    var currentValue =e.target.value;

    var valid=pattern.test(currentValue);
    if(valid)
    {
        usernameErrpara.style.display = 'block'

    }else{
        usernameErrpara.style.display='none'
    }
    });


