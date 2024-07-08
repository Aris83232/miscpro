const cpuntH2 = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const reserBtn = document.getElementById("resetBtn");
let count = 0

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reserBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count
}

increaseBtn.onclick = function(){
    count ++
    countLabel.textContent = count
}
