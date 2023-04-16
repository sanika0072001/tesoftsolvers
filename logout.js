function openLogoutDialog() {
  document.getElementById("logout-dialog").style.display = "block";
}

function closeLogoutDialog() {
  console.log("closeLogoutDialog");
  window.location.href = "home.html";
  document.getElementById("logout-dialog").style.display = "none";
}

function confirmLogout() {
  var choice = confirm("Are you sure you want to logout?");
  if (choice == true) {
    // remove the username from local storage
    localStorage.removeItem("username");
    window.location.href = "login.html";
  } else {
    window.location.href = "home.html";
  }
}
