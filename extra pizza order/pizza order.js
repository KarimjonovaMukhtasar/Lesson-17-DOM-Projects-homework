const boxEl = document.querySelector("#box")
const breadEl = document.querySelector("#bread")
const sizeEl = document.querySelector(".size_container")
const ingredEl = document.querySelector(".top-ingredients")
const extraEl = document.querySelector(".extra")
const orderEl = document.querySelector(".order")
boxEl.addEventListener("click", (e)=>{
    e.preventDefault()
        orderEl.style.display = "flex"
        const bread = document.querySelector("#non")
        bread.innerHTML += breadEl.value
        const size = document.querySelector("#kattaligi")
        size.textContent += sizeEl.value
        const top = document.querySelector("#ustida")
        top.textContent += ingredEl.value
        const extra = document.querySelector("#qoshimcha")
        extra.textContent += extraEl.value
})
