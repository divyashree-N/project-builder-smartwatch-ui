var today= new Date();
var time=today.getHours()+":"+today.getMinutes();
document.getElementById('small').innerHTML=time;
document.getElementById('timemiddle').innerHTML=time;
console.log(time);

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayNames=days[new Date().getDay()];
document.getElementById('day_name').innerHTML=dayNames;
console.log(dayNames);
