
function currentYear() {
	const copyright = document.getElementById("copyright");
	const currentYear = new Date().getFullYear();
	copyright.textContent += ` ${currentYear}`;	
}
currentYear();