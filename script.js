function getCookie(name) {
	let cookies = document.cookie.split('; ');
	for (let cookie of cookies) {
		let [key, value] = cookie.split('=');
		if (key === name) return value;
	}
	return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
	let expires = "";
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + value + "; path=/" + expires;
}

window.onload = function () {
	let savedFontSize = getCookie("fontsize");
	let savedFontColor = getCookie("fontcolor");

	if (savedFontSize) {
		document.documentElement.style.setProperty('--fontsize', savedFontSize + 'px');
		document.getElementById("fontsize").value = savedFontSize;
	}
	if (savedFontColor) {
		document.documentElement.style.setProperty('--fontcolor', savedFontColor);
		document.getElementById("fontcolor").value = savedFontColor;
	}
};

document.querySelector("#btn").addEventListener("click", () => {
	event.preventDefault();
	let fontSize = document.getElementById("fontsize").value;
	let fontColor = document.getElementById("fontcolor").value;

	setCookie("fontsize", fontSize, 365);
	setCookie("fontcolor", fontColor, 365);

	document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
	document.documentElement.style.setProperty('--fontcolor', fontColor);
})