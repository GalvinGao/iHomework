function saoimg() {
    document.getElementById("saoimg").innerHTML = "";

	var arr2 = ["http://p1.bpimg.com/558831/f552af6fc37e748c.png","http://p1.bpimg.com/558831/1a2e163ba653132a.jpg","http://p1.bpimg.com/558831/39f7807299184b72.gif","http://p1.bpimg.com/558831/38e25e01b5605ae8.gif","http://i1.piimg.com/558831/a2c776c3f6d999af.png","http://i1.piimg.com/558831/249eabda0bdc06a0.png","http://p1.bqimg.com/558831/2506142496376731.png","http://i1.piimg.com/558831/b1fcac58e69104f4.gif","http://i1.piimg.com/558831/8f1ab372390a0fe6.gif"];
    var author2 = ["Arthur","Arthur","Arthur","Arthur","Arthur","Arthur","Arthur","Arthur","Arthur"];

	var index2 = Math.floor((Math.random() * arr2.length));
    var link2 = arr2[index2];
    var getauthor2 = author2[index2];
	var finalm = "<img src='" + link2 + "' />"
    var authortext = "<blockquote><small>骚图 by " + getauthor2 + "</small></blockquote>";
    document.getElementById("saoimg").innerHTML = finalm;
    document.getElementById("saoauthor2").innerHTML = authortext;

}

