const goToDashboard = document.querySelector("#dashboard")
const goToTransfer = document.querySelector("#transfer")
const goToHistory = document.querySelector("#history")
const goToTopup = document.querySelector("#topup")
const goToProfile = document.querySelector("#profile")
const dropdownBtn = document.querySelector("#dropdown")

if (goToDashboard) {
    goToDashboard.addEventListener("click", (event) => {
        event.preventDefault()
        location.href = 'dashboard.html'
        return
    }) 
}

if (goToTransfer) {
    goToTransfer.addEventListener("click", (event) => {
        event.preventDefault()
        location.href = 'transfer.html'
        return
    }) 
}

if (goToHistory) {
    goToHistory.addEventListener("click", (event) => {
        event.preventDefault()
        location.href = 'history.html'
        return
    }) 
}

if (goToTopup) {
    goToTopup.addEventListener("click", (event) => {
        event.preventDefault()
        location.href = 'topup.html'
        return
    }) 
}

if (goToProfile) {
    goToProfile.addEventListener("click", (event) => {
        event.preventDefault()
        location.href = 'profile.html'
        return
    }) 
}

function mobileProfile() {
    if (window.innerWidth < 769) {
        const profileIcon = document.querySelector("#profile-img")
        profileIcon.src = '2 User2.png'
        goToProfile.style.color = '#2948FF'
        return
    }
}
mobileProfile()

dropdownBtn.addEventListener("click", (event) => {
    event.preventDefault()

    const menu = document.querySelector(".dropdown")
    if (menu.style.visibility === 'visible') {
        menu.style.visibility = 'hidden'
    } else {
        menu.style.visibility = 'visible'
    }
})

window.addEventListener("resize", mobileProfile)

const userName = document.querySelector("#name")
const userPhone = document.querySelector("#phone")
const userEmail = document.querySelector("#email")
const btnSubmit = document.querySelector(".text2 > button")
const textMessage = document.querySelector("#text")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const updateProfile = collectData()
    if (!updateProfile.name || !updateProfile.phone || !updateProfile.email) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "All data must be filled"
        textMessage.style.color = "red"
        return
    }

    const nameRegex = /^[a-zA-Z\s]+$/
    if (!nameRegex.test(updateProfile.name)) {
        textMessage.style.visibility = "visible";
        textMessage.textContent = "Name should only contain letters";
        textMessage.style.color = "red";
        return;
    }

    const phoneRegex = /^[0-9]{10,}$/
    if (!phoneRegex.test(updateProfile.phone)) {
        textMessage.style.visibility = "visible";
        textMessage.textContent = "Phone number not valid";
        textMessage.style.color = "red";
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(updateProfile.email)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Email not valid"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Profile updated"
    textMessage.style.color = "green"
    location.href = "profileedit.html"
})

function collectData() {
    const data = {}
    data.name = userName.value 
    data.phone = userPhone.value 
    data.email = userEmail.value
    return data
}