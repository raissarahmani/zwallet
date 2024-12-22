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

dropdownBtn.addEventListener("click", (event) => {
    event.preventDefault()

    const menu = document.querySelector(".dropdown")
    if (menu.style.visibility === 'visible') {
        menu.style.visibility = 'hidden'
    } else {
        menu.style.visibility = 'visible'
    }
})

window.addEventListener("resize", mobileTf)

const amountTf = document.querySelector("#nominal")
const descTf = document.querySelector("#notes")
const textMessage = document.querySelector("#text")
const btnTf = document.querySelector(".text4 > button")

btnTf.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    if (!amountTf.value) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Enter transfer nominal"
        textMessage.style.color = "red"
        return
    }

    const tfRegex = /^\d{5,}$/
    if (!tfRegex.test(amountTf.value)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Minimum transfer Rp. 10000"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "hidden"
    location.href = "transfer3.html"
})
