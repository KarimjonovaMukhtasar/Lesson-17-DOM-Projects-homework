const usernameEl = document.querySelector("#username")
const errornameEl = document.querySelector("#errorName")

const emailEl = document.querySelector("#email")
const erroremailEl = document.querySelector("#errorEmail")

const passwordEl = document.querySelector("#password")
const errorpasswordEl = document.querySelector("#errorPassword")

const confirmEl = document.querySelector("#confirm")
const errorconfirmEl = document.querySelector("#errorConfirm")

const btnEl = document.querySelector("#btn")
const formEl = document.querySelector("#form")


let checkName = false
usernameEl.addEventListener("input", (e) => {
    if (usernameEl.value.length >= 3) {
        errornameEl.classList.remove("active")
        errornameEl.style.display = "none"
        usernameEl.style.border = "2px solid green"
        checkName = true
    }
    else {
        errornameEl.classList.add("active")
        errornameEl.innerHTML = `Enter at least 3 characters for username! + <i class="fa-solid fa-circle-exclamation"></i>`
        errornameEl.style.display = "block"
        usernameEl.style.border =  "2px solid red"

    }
})

let checkemail = false
emailEl.addEventListener("input", (e) => {
    if (emailEl.value.includes("@") && emailEl.value.includes(".")) {
        erroremailEl.classList.remove("active")
        erroremailEl.style.display = "none"
        // emailEl.innerHTML += `<i class="fa-solid fa-circle-check"></i>`
        emailEl.style.border = "2px solid green"
        checkemail = true
    }
    else {
        erroremailEl.classList.add("active")
        erroremailEl.innerHTML = `Enter @ and . for email! + <i class="fa-solid fa-circle-exclamation"></i>`
        erroremailEl.style.display = "block"
        emailEl.style.border =  "2px solid red"
    }
})


let checkpassword = false
passwordEl.addEventListener("input", (e) => {
    if (passwordEl.value.length >= 8) {
        errorpasswordEl.classList.remove("active")
        errorpasswordEl.style.display = "none"
        // passwordEl.innerHTML += `<i class="fa-solid fa-circle-check"></i>`
        passwordEl.style.border = "2px solid green"
        checkpassword = true
    }
    else {
        errorpasswordEl.classList.add("active")
        errorpasswordEl.innerHTML = `Enter at least 8 characters for password + <i class="fa-solid fa-circle-exclamation"></i>`
        errorpasswordEl.style.display = "block"
        passwordEl.style.border =  "2px solid red"
    }
})

let checkconfirm = false
confirmEl.addEventListener("input", (e) => {
    if (confirmEl.value === passwordEl.value) {
        errorconfirmEl.classList.remove("active")
        errorconfirmEl.style.display = "none"
        // confirmEl.innerHTML += `<i class="fa-solid fa-circle-check"></i>`
        confirmEl.style.border = "2px solid green"
        checkconfirm = true
    }
    else {
        errorconfirmEl.classList.add("active")
        errorconfirmEl.innerHTML = `Enter the same with password! + <i class="fa-solid fa-circle-exclamation"></i>`
        errorconfirmEl.style.display = "block"
        confirmEl.style.border =  "2px solid red"
    }
})

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    if(checkName && checkconfirm && checkemail && checkpassword){
        alert("SUCCESSFULLY REGISTERED!")
    }else{
        alert("CHECK YOUR PROBLEMS!")
    }
})