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

const passExisting = document.querySelector(".inputs-existing > input[name='existing']")
const passNew = document.querySelector(".inputs-new > input[name='new']")
const passConfirm = document.querySelector(".inputs-confirm > input[name='confirm']")
const showExist = document.querySelector("#showExisting")
const showNew = document.querySelector("#showNew")
const showConfirm = document.querySelector("#showConfirm")
const btnSubmit = document.querySelector(".text2 > form button")
const textMessage = document.querySelector("#text")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const changePass = collectData()
    if (!changePass.existing || !changePass.new || !changePass.existing) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "All data must be filled"
        textMessage.style.color = "red"
        return
    } 

    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    if (!passwordRegex.test(changePass.new)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Password must be combination of letter and number min. 6 digits"
        textMessage.style.color = "red"
        return
    }

    if (changePass.new === changePass.existing) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Password can not be same with the existing one"
        textMessage.style.color = "red"
        return
    }

    if (changePass.new !== changePass.confirm) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Passwords do not match"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "Password changed"
    textMessage.style.color = "green"
    location.href = "profileedit.html"
})

function collectData() {
    const data = {}
    data.existing = passExisting.value 
    data.new = passNew.value 
    data.confirm = passConfirm.value 
    return data
}

showExist.addEventListener ("click", () => {
    if (passExisting.type === "password") {
        passExisting.type = "text";
    } else {
        passExisting.type = "password"
    }
})

showNew.addEventListener ("click", () => {
    if (passNew.type === "password") {
        passNew.type = "text";
    } else {
        passNew.type = "password"
    }
})

showConfirm.addEventListener ("click", () => {
    if (passConfirm.type === "password") {
        passConfirm.type = "text";
    } else {
        passConfirm.type = "password"
    }
})