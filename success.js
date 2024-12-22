const goToDashboard = document.querySelector("#dashboard")
const goToTransfer = document.querySelector("#transfer")
const goToHistory = document.querySelector("#history")
const goToTopup = document.querySelector("#topup")
const goToProfile = document.querySelector("#profile")

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

function mobileTf() {
    if (window.innerWidth < 769) {
        const tfIcon = document.querySelector("#transfer-img")
        tfIcon.src = 'Send3.png'
        goToTransfer.style.color = '#2948FF'
        return
    }
}
mobileTf()

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

window.addEventListener("resize", mobileTf)

const popupShadow = document.querySelector(".shadow")
const popupEl = document.querySelector(".popup")

window.addEventListener("click", (event) => {
    if (!popupEl.contains(event.target)) {
        popupShadow.style.visibility = "hidden"
        popupEl.style.visibility = "hidden"
        window.location.href = "transfer2.html"
    }
})