function register(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var LS;
    var flag = false;
    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password == confirmPassword) {

                LS = JSON.parse(localStorage.getItem("practice2")) || []
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var data = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmPassword
                    }
                    LS.push(data);
                    localStorage.setItem("practice2", JSON.stringify(LS));
                    alert("registration successful")
                    window.location.href="./practice2-login.html"
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("confirmPassword").value = "";
                } else {
                    alert("email already exist")
                }

            } else {
                alert("password not matched.")
            }
        } else {
            alert("password should be 8 or minimun")
        }
    } else {
        alert("fill all the fields")
    }
}


function login(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var flagforEmail = false;
    var currentUser;
    var LS = JSON.parse(localStorage.getItem("practice2"));
    for (var i = 0; i < LS.length; i++) {
        if (LS[i].userEmail == email && LS[i].userPassword == password) {
            flagforEmail = true;
            currentUser = LS[i];
        }
    }
    if (flagforEmail == true) {
        alert("login successful")
        localStorage.setItem("prctice2_currentUser",JSON.stringify(currentUser));
        window.location.href="./practice2-index.html"
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("credentials not matched")
    }
}
























