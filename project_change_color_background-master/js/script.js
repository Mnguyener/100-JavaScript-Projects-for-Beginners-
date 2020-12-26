let clickMeBtn = document.getElementsByTagName("button")[0];
let bodyElement = document.body;

clickMeBtn.addEventListener("click", clickMeColor);

let bgColor = ["red","blue","green","pink","orange","purple"];
let numberOfColorsInBgColor = bgColor.length;

function clickMeColor() {
    let randomFloat = Math.random() * numberOfColorsInBgColor;
    let randomWholeNum = Math.floor(randomFloat);
    let randomColor = bgColor[randomWholeNum];
    bodyElement.style.backgroundColor = randomColor;
}