function checkLogin() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if(email === "admin@gmail.com" && password === "admin123") {
		window.location.href = "dashboard.html";
	} else {
		alert("Invalid email or password");
	}
}
