const container = document.querySelector(".result")
const resultEl = document.createElement('span');
    resultEl.id = 'result';
    resultEl.textContent = "";
    container.appendChild(resultEl);

const number1El = document.querySelector("#number1")
const number2El = document.querySelector("#number2")
const selectEl = document.querySelector("#operator")
const clclEl = document.querySelector("#calculate")
const resetEL = document.querySelector("#reset")

let count = 0
clclEl.addEventListener("click", (e)=>{
    e.preventDefault()
    const num1 = Number(number1El.value)
    const num2 = Number(number2El.value)
    let operation = selectEl.value

    if(operation === "add"){
        let result = 0
        result = num1 + num2
        resultEl.textContent = result
    }
    else if(operation === "minus"){
        let result = 0
        result = num1 - num2
        resultEl.textContent = result
    }
    else if(operation === "multiply"){
        let result = 1
        result = num1 * num2
        resultEl.textContent = result
    }
    else if(operation === "divide"){
        let result = 1
        result = num1 / num2
        resultEl.textContent = result
    }
    })
resetEL.addEventListener("click", (e)=>{
    number1El.value = "";
    number2El.value = "";
    resultEl.textContent = "";
})