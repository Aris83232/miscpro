const minInp = document.getElementById("minInput").value;
const maxInp = document.getElementById("maxInput").value;
const generateBtn = document.getElementById("generateBtn");
let number = document.getElementById("number").textContent;
let randomNum

generateBtn.onclick = function(){
    maxInp = Number(maxInp);
    minInp = Number(minInp);
    randomNum = Math.floor(Math.random() * (maxInp - minInp)) + minInp;
    number = randomNum;
}
