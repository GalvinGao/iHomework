window.onload = function(){ 
var arr = ["要比勤礼拖堂长，<br><br>一节更比一节强。","zǐ","Always Phai<b>do</b><br>Never Phai<b>don't</b>","我在东北玩泥巴，<br>虽然东北不大，<br>我在大连没有家～！"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("saohua").innerHTML = arr[index]; 

} 
