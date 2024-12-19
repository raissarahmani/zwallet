const pinInputs = document.querySelectorAll(".pin")
const btnSubmit = document.querySelector(".line5 > button")
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
    location.href = 'dashboard.html'
})