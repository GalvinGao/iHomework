function saovideo() {
    document.getElementById("saovideo").innerHTML = "";

	var vcover = ["http://ojb479lh2.bkt.clouddn.com/saovideo/IMG_1754.mp4-s","http://ojb479lh2.bkt.clouddn.com/saovideo/IMG_1753.mp4-s","http://ojb479lh2.bkt.clouddn.com/saovideo/IMG_1764.mp4-s"];
    var vlink = ["http://ihomework.top/videohandler.html?url=http://ojb479lh2.bkt.clouddn.com/saovideo/IMG_1754.mp4","http://ihomework.top/videohandler.html?url=http://ojb479lh2.bkt.clouddn.com/saovideo/IMG_1753.mp4","http://ihomework.top/videohandler.html?url=http://ojb479lh2.bkt.clouddn.com/saovideo/IMG_1764.mp4"];
    var author3 = ["Authur","Felix"];

	var index3 = Math.floor((Math.random() * vcover.length));
    var link3 = vcover[index3];
    var getauthor3 = author3[index3];
    var getvlink = vlink[index3]
	var finalm3 = "<a target='_blank' href='" + getvlink + "'><img src='" + link3 + "' /></a>"
    var authortext3 = "<blockquote><small>骚视频 by " + getauthor3 + "</small></blockquote>";
    document.getElementById("saovideo").innerHTML = finalm3;
    document.getElementById("saoauthor3").innerHTML = authortext3;

}
