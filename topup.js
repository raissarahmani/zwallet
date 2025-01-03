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

function mobileTopup() {
    if (window.innerWidth < 769) {
        const topupIcon = document.querySelector("#topup-img")
        topupIcon.src = 'Upload2.png'
        goToTopup.style.color = '#2948FF'
        return
    }
}
mobileTopup()

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

window.addEventListener("resize", mobileTopup)

const amountTopup = document.querySelector("#nominal")
const topupOption = document.querySelectorAll(".bank-option > input[name='bank']")
const textMessage = document.querySelector("#text")
const textMessage2 = document.querySelector("#text2")
const btnTopup = document.querySelector(".payment > button")

btnTopup.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    if (!amountTopup.value) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Enter transfer nominal"
        textMessage.style.color = "red"
        return
    }

    const tfRegex = /^\d{5,}$/
    if (!tfRegex.test(amountTopup.value)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Minimum transfer Rp. 10000"
        textMessage.style.color = "red"
        return
    }

    const bankOption = collectData()
    if (!bankOption.bank) {
        textMessage2.style.visibility = "visible"
        textMessage2.textContent = "Choose payment method"
        textMessage2.style.color = "red"
        return
    }

    textMessage2.style.visibility = "visible"
    textMessage2.textContent = "Topup success"
    textMessage2.style.color = "green"
})

function collectData() {
    const data = {}
    topupOption.forEach(bank => {
        if (bank.checked) {
            data.bank = bank.value
        }
    })
    return data
}