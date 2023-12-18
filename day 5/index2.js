var countdownElement = document.getElementById("countdown");
var initialCountdownval = countdownElement.innerHTML;

var interval= setInterval(function(){
initialCountdownval  = initialCountdownval > 0 ? initialCountdownval -1 : 0;

    countdownElement.innerHTML=initialCountdownval;
    countdownElement.style.fontSize=initialCountdownval * 100 + "px"

    console.log(inititalCountdownval * 100 +"px")

    if(inititalCountdownval <= 0){
        clearInterval(interval)
    }
    clearInterval(interval);
}, 1000);