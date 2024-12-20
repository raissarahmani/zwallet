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

const pinInputs = document.querySelectorAll(".pin")
const btnSubmit = document.querySelector(".container-profile > button")
const textMessage = document.querySelector("#text")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    let pinValue = ""
    pinInputs.forEach(input => {
        pinValue += input.value
    })

    if (!pinValue) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Enter 6 digits pin"
        textMessage.style.color = "red"
        return
    }

    const pinRegex = /^\d{6}$/
    if (!pinRegex.test(pinValue)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Pin should be 6 digits"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Login success"
    textMessage.style.color = "green"
    location.href = "profileedit.html"
})