function add() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rId = document.getElementById("rId").value;
    var myObject = { Name: name, Email: email, Password: password, id: rId };
    localStorage.setItem("data", JSON.stringify(myObject));
    alert("Successful Signup");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("rId").value = "";
}

function verify() {
    var parseData = localStorage.getItem("data");
    JSON.parse(parseData);
    var userEnteredEmail = document.getElementById("userEnteredEmail").value;
    var userEnteredPassword = document.getElementById("userEnteredPassword").value;
    if (userEnteredEmail === JSON.parse(parseData).Email && userEnteredPassword === JSON.parse(parseData).Password) {
        location = "./quiz/Quiz.html";
    } else {
        (alert("Something Wrong! Please Enter the correct User name and password"))
    }
}