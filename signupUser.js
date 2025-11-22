    var signupName = document.querySelector("#signupName")
    var signupEmail = document.querySelector("#signupEmail")
    var signupPassword = document.querySelector("#signupPassword")


let getuserData = JSON.parse(localStorage.getItem("userSignupData")) || []


function signupUserHandler() {

    if (signupPassword.value.trim().length < 8) {
        alert("password length should be atleast 8")
    }

    if (!signupEmail.value || !signupName.value || !signupPassword.value) {
        alert("please fill all the feilds")

    }


    let useralreadyRegistered = getuserData.find(function (eachuser){
        return eachuser.userEmail.toLowerCase() == signupEmail.value.toLowerCase()
    })

    // console.log(useralreadyRegistered);
    if(useralreadyRegistered){
        alert("Already registered with this email")
        return
    }


    let userData = {
        userName : signupName.value,
        userEmail :  signupEmail.value,
        userPass : signupPassword.value
    }

    getuserData.push(userData)
    localStorage.setItem("userSignupData", JSON.stringify(getuserData))

    alert("Signup Successfully")

    location.href = "./loginpage.html"

}