function changea() {
	document.getElementById("div").classList.toggle('big');

	setTimeout(function() {
		document.getElementById("div").classList.toggle('big');
	
	},3000);
}