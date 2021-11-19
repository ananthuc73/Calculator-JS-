function add(){
	var x=parseInt(document.getElementById("a").value);
	var y=parseInt(document.getElementById("b").value);
	var z=x+y;
	document.getElementById("c").value=z;
}
function sub(){
	var x=parseInt(document.getElementById("a").value);
	var y=parseInt(document.getElementById("b").value);
	var z=x-y;
	document.getElementById("c").value=z;
}
function mul(){
	var x=parseInt(document.getElementById("a").value);
	var y=parseInt(document.getElementById("b").value);
	var z=x*y;
	document.getElementById("c").value=z;
}
function div(){
	var x=parseInt(document.getElementById("a").value);
	var y=parseInt(document.getElementById("b").value);
	var z=x/y;
	document.getElementById("c").value=z;
}