window.onload = function(){ 
var arr = ["要比勤礼拖堂长，<br><br>一节更比一节强。","博 zǐ<br>笑 zǐ<br>(老)师 zǐ<br>电(视) zǐ<br>脑 zǐ<br>骚 zǐ<br>踢 zǐ<br>（闪现）沙县 zǐ<br>"]; 

var index = Math.floor((Math.random()*arr.length)); 
document.getElementById("saohua").innerHTML = arr[index]; 

} 
