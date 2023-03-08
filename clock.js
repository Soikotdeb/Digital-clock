function digitalClock(){
    var time = new Date()
   var hours =time.getHours();
   var minute =time.getMinutes()
   var seconds =time.getSeconds()
   var session ='AM'
if(hours>12){
    hours=hours-12;
    session='AM'
}


hours=(hours<10)?"0"+ hours:hours;

minute=(minute<10)?"0"+ minute:minute;

seconds=(seconds<10)?"0"+ seconds:seconds;

document.getElementById('clock').innerText=hours +':'+minute +':'+seconds +" "+ session;
   }
setInterval(digitalClock, 1000);