function register(event) {
    event.preventDefault();
    var name = document.getElementById("userName").value
    var email = document.getElementById("userEmail").value
    var password = document.getElementById("userPassword").value
    var confirmPassword = document.getElementById("userConfirmPassword").value

    // console.log(name,"name here");
    // console.log(email,"email here");
    // console.log(password,"password here");
    // console.log(confirmPassword,"confirmPassword here");

    if (name && email && password && confirmPassword) {
        if (password.length >= 8 && confirmPassword.length >= 8) {
            if (password == confirmPassword) {
                // var data = object{}
                var data = {
                    nameee: name,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                }
                // console.log("data is here",data);
                // now store data in ls
                localStorage.setItem("USERS", JSON.stringify(data))
                // var fetchedData = JSON.parse(localStorage.getItem("USERS"));
                // console.log(fetchedData);
                //     console.log(JSON.parse(fetchedData));
                // JSON.stringify(); convert object into json
                // JSON.parse(); convert json into object
                // localStorage.setItem(key,value) to save data in ls
                // localStorage.getItem(key) to get data from ls
                // localStorage.removeItem(key)to remove data from ls

            } else {
                console.log("password not matched");
            }
        } else {
            console.log("password should be 8 or more digit");
        }
    } else {
        console.log("fill all the fields");
    }

}


function getData() {
   var fetchedData =JSON.parse(localStorage.getItem("USERS"));
   console.log(fetchedData);
}