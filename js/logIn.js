// login 

document.getElementById("btn_login")
    .addEventListener("click", function () {
        const userValue = document.getElementById("userValue");
        const userName = userValue.value;
        const passwordValue = document.getElementById("passwordValue");
        const passNumber = passwordValue.value;

        if(userName === "admin" && passNumber === "admin123"){
            alert("logIn successfully");
            window.location.assign("./index.html")
            userValue.value = ""
            passwordValue.value = ""
        }
        else{
            alert("login failed")
            return;
        }
        

})