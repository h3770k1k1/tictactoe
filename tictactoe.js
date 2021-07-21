let filledFields = 0;
let symbolsInLineCount = 0;
let char = 'x'

function addSymbol(square) {
    square.innerHTML = char;
}

function changeChar() {
    if (char == 'x') {
        char = 'o';
    } else {
        char = 'x';
    }
}


const a1 = document.getElementById("square-a1");
const a2 = document.getElementById("square-a2");
const a3 = document.getElementById("square-a3");
const b1 = document.getElementById("square-b1");
const b2 = document.getElementById("square-b2");
const b3 = document.getElementById("square-b3");
const c1 = document.getElementById("square-c1");
const c2 = document.getElementById("square-c2");
const c3 = document.getElementById("square-c3");


let squaresArray = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
arrayLength = squaresArray.length;
for (let i = 0; i < arrayLength; i++) {
    squaresArray[i].addEventListener("click", function() {
        addSymbol(squaresArray[i]);
        changeChar()

    })

}