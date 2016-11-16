window.onload = function(){ 
var arr = ["要比勤礼拖堂长，<br><br>一节更比一节强。","zǐ","Always Phai<b>do</b><br>Never Phai<b>don't</b>","我在东北玩泥巴，<br>虽然东北不大，<br>我在大连没有家～！","<img src='http://p1.bpimg.com/558831/f552af6fc37e748c.png' width='200' >","<img src='http://p1.bpimg.com/558831/1a2e163ba653132a.jpg' width='200' >","<img src='http://p1.bpimg.com/558831/39f7807299184b72.gif' width='200' >","<img src='http://p1.bpimg.com/558831/38e25e01b5605ae8.gif' width='200' >"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("saohua").innerHTML = arr[index]; 

} 
