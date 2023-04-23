function register(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {

            if (password == confirmPassword) {
                var LS =JSON.parse(localStorage.getItem("practiceUser")) || []
                flagforEmail = false;
                for (i = 0; i < LS.length; i++) {
                    if (LS[i].userEmail == email) {
                        flagforEmail = true;
                    }
                }
                if (!flagforEmail) {
                    var data = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmPassword
                    }
                    LS.push(data);
                    localStorage.setItem("practiceUser", JSON.stringify(LS));
                    alert("risrtation successful")
                    window.location.href="./practice-login.html"
                    var name =document.getElementById("name").value="";
                    var email =document.getElementById("email").value="";
                    var password =document.getElementById("password").value="";
                    var confirmPassword =document.getElementById("confirmPassword").value="";
                } else {
                    alert("emale already exist")
                }



            } else {
                alert("password not matched")
            }

        } else {
            alert("pasword should be 8 or more")
        }
    } else {
        alert("fill all the fields.")
    }

}


function login(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var currentUser;
    if(email && password){
        var LS = JSON.parse(localStorage.getItem("practiceUser"));
        var flag= false;
        for(i =0; i<LS.length; i++){
        if(LS[i].userEmail == email && LS[i].userPassword == password){

            flag = true;
            currentUser = LS[i];
            
        }
    }
    if(flag==true){
            localStorage.setItem("current_user",JSON.stringify(currentUser));
            window.location.href="./index.html";
            alert("login successful")
            var email =document.getElementById("email").value="";
            var password =document.getElementById("password").value="";

    }else{
            alert("cridentials not matched")
        }
    }else{
        alert("fill all the fields")
    }
}


