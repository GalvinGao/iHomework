function getRTime(){ 
var EndTime= new Date('2016/9/9 17:00:00'); //截止时间 
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


if (d=0) 
   {
   }
else if (h=0)
   {
   }
else if (m=0)
   {
   }
else if (s=0)
   {
   document.getElementById("autolink").innerHTML = "<a target=\"_black\" class=\"waves-effect waves-light btn-large modal-trigger\" href=\"http://ihomeworkkhs.applinzi.com/ihomework_cdn.php\"><i class=\"material-icons left\">cloud</i>点我到 iHomework<script type=\"text/javascript\">mixpanel.track(\"CDN Redirect\");</script></a>"; 
   }
else
   {
   document.getElementById("autolink").innerHTML = "Unavailable";
   }
