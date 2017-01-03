function saovideo() {
    document.getElementById("saovideo").innerHTML = "";

	var vcover = ["http://placehold.it/200x250"];
    var vlink = ["http://www.bilibili.com/video/av10492"];
    var author3 = ["I Don't Know."];

	var index3 = Math.floor((Math.random() * vcover.length));
    var link3 = vcover[index3];
    var getauthor3 = author3[index3];
    var getvlink = vlink[index3]
	var finalm3 = "<a href='" + getvlink + "'><img src='" + link3 + "' /></a>"
    var authortext3 = "<blockquote><small>骚视频 by " + getauthor3 + "</small></blockquote>";
    document.getElementById("saovideo").innerHTML = finalm3;
    document.getElementById("saoauthor3").innerHTML = authortext3;

}

