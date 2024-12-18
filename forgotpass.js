const userEmail = document.querySelector(".line6 > form input[name='email']")
const btnSubmit = document.querySelector(".line6 > form button")
const textMessage = document.querySelector("#text")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    textMessage.style.visibility = "hidden"
    textMessage.textContent = ""

    const forgotPass = collectData()
    if (!forgotPass.email) {
        textMessage.style.visibility = "visible"
        textMessage.style.color = "red"
        textMessage.textContent = "Enter registered email"
        return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(forgotPass.email)) {
        textMessage.style.visibility = "visible"
        textMessage.textContent = "Email not valid"
        textMessage.style.color = "red"
        return
    }

    textMessage.style.visibility = "visible"
    textMessage.textContent = "New password link has been sent to your email"
    textMessage.style.color = "green"
})

function collectData() {
    const data = {}
    data.email = userEmail.value 
    return data
}