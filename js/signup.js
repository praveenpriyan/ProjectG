function validate() {
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var username = document.getElementById("user").value;
    var number = document.getElementById("num").value;
    var conpwd = document.getElementById("con-pwd").value;
    var checkbox = document.getElementById("check").value;
    console.log(email);
  
    if (username.length === 0) {
      alert("Username is empty! Enter your username...");
    } else if (username <= 5) {
      alert("Username is incorrect!");
    } else if (username.includes("number") !== false) {
      alert("incorrect username!");
    } else if (number.length < 10) {
      alert("please enter valid mobile number!...");
    } else if (email.length === 0) {
      alert("email is empty! Enter your email...");
    } else if (email.includes("@") === false) {
      alert("Email is incorrect!.Please enter valid email..");
    } else if (email.includes(".") === false) {
      alert("Email is incorrect!.Please enter valid email..");
    } else if (password.length === 0) {
      alert("password is empty!.Enter your password...");
    } else if (password.includes("@") === false) {
      alert("password should contain atleast one special character!...");
    } else if (conpwd !== password) {
      alert("password doesn't matched!");
    } else if (checkbox === "off") {
      alert("Please checkout the checkbox..!");
    } else {
      alert("Signup successfully");
      window.location.href = "terms_and_conditions.html";
      var UserData = {
        email,
        username,
        password,
        number
      };
      localStorage.setItem("UserData", JSON.stringify(UserData));
      console.log(localStorage);
    }
  }