window.onload = function(){ 
var arr = ["要比勤礼拖堂长，<br>一节更比一节强。"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("saohua").innerHTML = arr[index]; 

} 
