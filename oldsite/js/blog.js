function titlePaster() {
	var h1 = document.getElementById('articleTitle');
	var h2 = document.getElementById('articleSubTitle');

	document.getElementById('pageTitle').innerHTML = h1.innerHTML;
	document.getElementById('pageDescription').innerHTML = h2.innerHTML;

	document.getElementById('ogContentTitle').innerHTML = h1.innerHTML;
	document.getElementById('ogContentDescription').innerHTML = h2.innerHTML;
	
}