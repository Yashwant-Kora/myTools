const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");
const addBtn = document.getElementById("addBtn");
const Display1 = document.getElementById("Display1");
let number = 0;

addBtn.onclick = function(){
    number++;
    Display1.textContent = number;
}

minusBtn.onclick = function(){
    number--;
    Display1.textContent = number;
}

resetBtn.onclick = function(){
    number = 0;
    Display1.textContent = number
}


