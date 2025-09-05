const minusEl = document.querySelector("#minus")
const resetEl = document.querySelector("#reset")
const plusEl = document.querySelector("#plus")
const container = document.querySelector("#res")
const resultEl = document.createElement('span');
    resultEl.id = 'result';
    resultEl.textContent = '0';
    resultEl.style.fontSize = "35px";
    container.appendChild(resultEl);

let count = 0
resultEl.textContent = count
    minusEl.addEventListener("click", (e) => {
        count -= 1
        resultEl.textContent = count
        resultEl.style.color = "red"
    })
    resetEl.addEventListener("click", (e)=>{
        count = 0
        resultEl.textContent = count
        resultEl.style.color = "black"
    })
    plusEl.addEventListener("click", (e)=>{
        count += 1
            resultEl.textContent = count
            resultEl.style.color = "green"
    })
