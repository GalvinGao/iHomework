function saovideo() {
    document.getElementById("saovideo").innerHTML = "";

    var vcover = ["http://main.qn.iblueg.cn/saovideo/IMG_1754.mp4-s", "http://main.qn.iblueg.cn/saovideo/IMG_1753.mp4-s", "http://main.qn.iblueg.cn/saovideo/IMG_1764.mp4?vframe/jpg/offset/20/w/360/h/640"];
    var vlink = ["http://ihomework.top/videohandler.html?url=http://main.qn.iblueg.cn/saovideo/IMG_1754.mp4", "http://ihomework.top/videohandler.html?url=http://main.qn.iblueg.cn/saovideo/IMG_1753.mp4", "http://ihomework.top/videohandler.html?url=http://main.qn.iblueg.cn/saovideo/IMG_1764.mp4"];
    var author3 = ["Authur", "Felix", "Authur and Teddy"];

    var index3 = Math.floor((Math.random() * vcover.length));
    var link3 = vcover[index3];
    var getauthor3 = author3[index3];
    var getvlink = vlink[index3]
    var finalm3 = "<a target='_blank' href='" + getvlink + "'><img src='" + link3 + "' /></a>"
    var authortext3 = "<blockquote><small>骚视频 by " + getauthor3 + "</small></blockquote>";
    document.getElementById("saovideo").innerHTML = finalm3;
    document.getElementById("saoauthor3").innerHTML = authortext3;

}
