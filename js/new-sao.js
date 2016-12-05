window.onload = function() {
	var arr = ["<img src='http://p1.bpimg.com/558831/f552af6fc37e748c.png'>", "<img src='http://p1.bpimg.com/558831/1a2e163ba653132a.jpg'>", "<img src='http://p1.bpimg.com/558831/39f7807299184b72.gif'>", "<img src='http://p1.bpimg.com/558831/38e25e01b5605ae8.gif'>", "<img src='http://i1.piimg.com/558831/a2c776c3f6d999af.png'>", "<img src='http://i1.piimg.com/558831/249eabda0bdc06a0.png'>", "<img src='http://p1.bqimg.com/558831/2506142496376731.png'>", "<img src='http://i1.piimg.com/558831/b1fcac58e69104f4.gif'>", "<img src='http://i1.piimg.com/558831/8f1ab372390a0fe6.gif'>", "<img src='http://i1.piimg.com/558831/7cf6be071d44903e.gif'>"];

	var index = Math.floor((Math.random() * arr.length));
	document.getElementById("saohua").innerHTML = arr[index];

}