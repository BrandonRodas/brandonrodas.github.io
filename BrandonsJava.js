function GetDate(){
	var d = new Date();
	document.getElementById("footer").innerHTML = "Created and built by Brandon Rodas - 2017 " + d.toDateString();
}