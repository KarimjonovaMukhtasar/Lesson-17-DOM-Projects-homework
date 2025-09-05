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
    let result

    if(operation === "add"){
        result = num1 + num2
    }
    else if(operation === "minus"){
        result = num1 - num2
    }
    else if(operation === "multiply"){
        result = num1 * num2
    }
    else if(operation === "divide"){
        result = num1 / num2
    }
       resultEl.textContent += result
    })
resetEL.addEventListener("click", (e)=>{
    number1El.value = "";
    number2El.value = "";
    resultEl.textContent = "";
})