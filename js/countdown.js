function getRTime(){ 
var EndTime= new Date('2016/9/14 17:00:00'); //截止时间 
var NowTime = new Date(); 
var t =EndTime.getTime() - NowTime.getTime(); 
/*var d=Math.floor(t/1000/60/60/24); 
t-=d*(1000*60*60*24); 
var h=Math.floor(t/1000/60/60); 
t-=h*60*60*1000; 
var m=Math.floor(t/1000/60); 
t-=m*60*1000; 
var s=Math.floor(t/1000);*/ 

var d=Math.floor(t/1000/60/60/24); 
var h=Math.floor(t/1000/60/60%24); 
var m=Math.floor(t/1000/60%60); 
var s=Math.floor(t/1000%60); 

document.getElementById("t_d").innerHTML = d + "天"; 
document.getElementById("t_h").innerHTML = h + "时"; 
document.getElementById("t_m").innerHTML = m + "分"; 
document.getElementById("t_s").innerHTML = s + "秒"; 
} 
setInterval(getRTime,1000); 


function getRTime2(){ 
var EndTime2= new Date('2016/9/14 17:00:00'); //截止时间 
var NowTime2 = new Date(); 
var t =EndTime2.getTime() - NowTime2.getTime(); 
/*var d=Math.floor(t/1000/60/60/24); 
t-=d*(1000*60*60*24); 
var h=Math.floor(t/1000/60/60); 
t-=h*60*60*1000; 
var m=Math.floor(t/1000/60); 
t-=m*60*1000; 
var s=Math.floor(t/1000);*/ 

var d=Math.floor(t/1000/60/60/24); 
var h=Math.floor(t/1000/60/60%24); 
var m=Math.floor(t/1000/60%60); 
var s=Math.floor(t/1000%60); 

document.getElementById("t_d2").innerHTML = d + "天"; 
document.getElementById("t_h2").innerHTML = h + "时"; 
document.getElementById("t_m2").innerHTML = m + "分"; 
document.getElementById("t_s2").innerHTML = s + "秒"; 
} 
setInterval(getRTime2,1000); 
