function cnav(e, k) {
	let el = document.querySelector(k);
	if(el == null)
		return;
	el.style.backgroundColor = "rgba(100, 20, 20, 0.6)";
	
	setTimeout(() => {nav(e);}, 50);
}

function nav(e) {
	document.location.href = e;
}