let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


let count = 0

function present(){
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save(){
    let add = " "+count + " - "
    saveEl.textContent += add
    countEl.textContent = 0
    count = 0
}