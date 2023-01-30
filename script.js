const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById("save")
const incBtn = document.getElementById("increment")

let count = 0

incBtn.addEventListener("click", function() {
    count += 1
    countEl.textContent = count
})

saveBtn.addEventListener("click", function() {
    let mySaved = count + " - "
    saveEl.textContent += mySaved
    count = 0
    countEl.textContent = count
})