window.onload = function(){ 
var arr = ["要比勤礼拖堂长，<br><br>一节更比一节强。","zǐ","Always Phai<b>do</b><br>Never Phai<b>don't</b>"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("saohua").innerHTML = arr[index]; 

} 
