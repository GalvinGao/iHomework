function saoimg() {
    document.getElementById("saoimg").innerHTML = "";

	var arr2 = ["http://placehold.it/200x200?text=敬请期待1","http://placehold.it/200x200?text=敬请期待2","http://placehold.it/200x200?text=敬请期待3"];

	var index2 = Math.floor((Math.random() * arr2.length));
    var link2 = arr2[index2];
	var finalm = "<img src='" + link2 + "' />"
    document.getElementById("saoimg").innerHTML = finalm;

}