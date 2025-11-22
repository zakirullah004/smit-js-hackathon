var loginEmail = document.querySelector("#loginEmail")
var loginPassword = document.querySelector("#loginpassword")


let getuserData = JSON.parse(localStorage.getItem("userSignupData")) || []

function loginuserHandler(){


    // console.log(getuserData);

    
    let checkforcurrentUser = getuserData.find(function (eachuser){
        return eachuser.userEmail.toLowerCase() == loginEmail.value.toLowerCase()
    })

    // console.log(checkforcurrentUser);
    
    if(checkforcurrentUser.userPass.toLowerCase() != loginPassword.value.toLowerCase()){
        alert("passwords dosent match")
        return
    }


    if (loginPassword.value.trim().length < 8) {
        alert("password length should be atleast 8")
        return
    }

    if (!loginEmail.value || !loginPassword.value) {
        alert("please fill all the feilds")
        return
    }

    
    if(checkforcurrentUser){
        if(checkforcurrentUser.userEmail == loginEmail.value && checkforcurrentUser.userPass == loginPassword.value){
            localStorage.setItem("currentUser",JSON.stringify(checkforcurrentUser))
            alert("Login hogaya")

            location.href = "./mianpage.html"

            console.log(checkforcurrentUser);

        }
    }


}
