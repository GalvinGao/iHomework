window.onload = function(){ 
var arr = ["要比勤礼拖堂长，<br><br>一节更比一节强。","zǐ","Always Phai<b>do</b><br>Never Phai<b>don't</b>","我在东北玩泥巴，<br>虽然东北不大，<br>我在大连没有家～！","<img src='http://p1.bpimg.com/1949/3a8087fcc2089158.png' width='200' >","<img src='http://p1.bpimg.com/558831/1a2e163ba653132a.jpg' width='200' >"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("saohua").innerHTML = arr[index]; 

} 
