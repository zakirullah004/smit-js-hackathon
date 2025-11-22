console.log("running");

let getcurrentUser = JSON.parse(localStorage.getItem("currentUser"));

let greetUser = document.querySelector("#user-name")
let getuserEmail = document.querySelector("#user-email")
let showImg = document.querySelector("#userImageUrl")
showImg.src = getcurrentUser.imgUrl || "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"


if (getcurrentUser) {
    greetUser.innerHTML = `${getcurrentUser.userName.toUpperCase()}`
    getuserEmail.innerHTML = `${getcurrentUser.userEmail.toUpperCase()}`
}


let changeuserName = document.querySelector("#changeuserName")
let changeuserImage = document.querySelector("#changeuserImage")


changeuserName.value = getcurrentUser.userName
function edituserData() {
    let getcurrentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!changeuserName.value) {
        alert("please write name correctly")
        return
    }

    getcurrentUser.userName = changeuserName.value
    getcurrentUser.imgUrl = changeuserImage.value


    greetUser.innerHTML = `${getcurrentUser.userName.toUpperCase()}`
    getuserEmail.innerHTML = `${getcurrentUser.userEmail.toUpperCase()}`

    console.log(getcurrentUser);
    localStorage.setItem("currentUser", JSON.stringify(getcurrentUser))

    showImg.src = getcurrentUser.imgUrl || "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
}



let allPosts = document.querySelector("#allPosts")
let uploadpostTitle = document.querySelector("#uploadpostTitle")
let uploadpostImg = document.querySelector("#uploadpostImg")

function uploadPost() {


    let post = `
 <div class="mycard">
            <div class="mycard-title">${uploadpostTitle.value}</div>
            <div class="mycard-time">Posted 2 hours ago</div>

            <img class="mycard-img" src="${uploadpostImg.value}" />

            <div class="mycard-actions">
                <div class="mycard-btn">❤️ Like</div>
                <div class="mycard-btn">💬 Comment</div>
                <div class="mycard-btn">↗ Share</div>
            </div>
        </div>
`
let div = document.createElement("div")
div.innerHTML = post

allPosts.prepend(div) 

    
localStorage.setItem("allPosts",JSON.stringify(allPosts.innerHTML))

loadAllPosts()

}  


function loadAllPosts(){
    let getPost = JSON.parse(localStorage.getItem("allPosts"))
    console.log(getPost);
    allPosts.innerHTML = getPost
}
loadAllPosts()
