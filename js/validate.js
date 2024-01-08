function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    console.log(username);
  
    if (username.length === 0) {
      alert("It is empty email!");
    // } else if (username.includes(".") === false) {
    //   alert("Username is incorrect.Please enter valid email");
    // } else if (username.includes(".") === false) {
    //   alert("Username is incorrect.Please enter valid email");
    } else if (password.length === 0) {
      alert("It is empty password!");
    } else if (password.length > 8) {
      alert("please enter valid password!");
    } else {
      //   alert("Logined successfully");
    //   let UserData = JSON.parse(localStorage.getItem("UserData"));
    //   console.log(UserData);
    //   let exist =
    //     // saveData.length &&
    //     JSON.parse(localStorage.getItem("UserData"));
    //   console.log(exist);
    
      if (username === "user" && password === "pass") {
        alert("Logged in Successfully!");
        window.location.href = "homepage.html";
      } else {
        alert("Wrong Username or please do signup..");
      }
    }
  }

function togglePasswordVisibility() {
      var passwordInput = document.getElementById("password");
      var eyeIcon = document.querySelector(".fas.fa-eye");

      if (passwordInput.type === "password") {
          passwordInput.type = "text";
          eyeIcon.classList.remove("fa-eye");
          eyeIcon.classList.add("fa-eye-slash");
      } else {
          passwordInput.type = "password";
          eyeIcon.classList.remove("fa-eye-slash");
          eyeIcon.classList.add("fa-eye");
      }
  }