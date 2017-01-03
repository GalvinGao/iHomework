window.onload = function() {
    
//$.get("http://api.github.com/repos/GalvinGao/iHomework/commits", function(data){document.getElementById("ihi-commitsha").innerHTML=JSON.stringify(data[0].sha);});

var ihiver = "v4.1.1-alpha.4";
var ihiupdate = "2017-1-2 14:32 GMT+8";

document.getElementById("ihi-version").innerHTML = ihiver;
document.getElementById("ihi-update").innerHTML = ihiupdate;
//document.getElementById("ihi-commitsha").innerHTML = ihisha;
    
}