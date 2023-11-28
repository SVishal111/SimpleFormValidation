console.log("Hello, World!");

var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var btn = document.getElementById("btn");
var form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkData();
});

function checkData() {
    var usernameCD = username.value.trim();
    var emailCD = email.value.trim();
    var passwordCD = password.value.trim();
    var password2CD = password2.value.trim();

    // To Check Username
    if(usernameCD === "") {
        setErrorFor(username, "*Invalid Blank Username!");
    } else {
        setSuccessFor(username);
    }

    // To Check Email Address
    if(emailCD === "") {
        setErrorFor(email, "*Invalid Blank Email!");
    } else if (!isEmail(emailCD)) {
        setErrorFor(email, "*Error-Structure");
    } else {
        setSuccessFor(email);
    }

    // To Check 1st Password
    if(passwordCD === "") {
        setErrorFor(password, "*Invalid Blank Password!");
    } else {
        setSuccessFor(password);
    }

    // To Check 2nd Checking Password
    if(password2CD === "") {
        setErrorFor(password2, "*Invalid Blank Password-2!");
    } else if(password2CD !== passwordCD) {
        setErrorFor(password2, "*Passwords Does Not Match!");
    } else {
        setSuccessFor(password2);
    }

    function setSuccessFor(input) {
        var formAction = input.parentElement;
        formAction = formAction.className = "success";
    }

    function setErrorFor(input, message) {
        var formAction = input.parentElement;
        var small = formAction.querySelector("small");

        formAction = formAction.className = "error";
        small.innerText = message;
    }

    function isEmail(email) {
        return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    console.log("If it Runs, it Runs!");
}

console.log("Bye!");