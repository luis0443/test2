function login() {
    var login = document.getElementById("log");
    var senha = document.getElementById("sen");

    if (login.value == "admin" && senha.value == "admin") {
        location.href = "main/index.html";
    }else {
        alert("Login failed! Please try again.");
    }
}