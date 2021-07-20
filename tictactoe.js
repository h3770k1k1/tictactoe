let filledFields = 0;
let symbolsInLineCount = 0;
let char = 'x'

function addSymbol(button, square) {
    square.innerHTML = char;
}

function changeChar() {
    if (char == 'x') {
        char = 'o';
    } else {
        char = 'x';
    }
}

document.getElementById("button-a1").addEventListener("click", function() {
    let button = document.getElementById("button-a1");
    let square = document.getElementById("square-a1");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-a2").addEventListener("click", function() {
    let button = document.getElementById("button-a2");
    let square = document.getElementById("square-a2");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-a3").addEventListener("click", function() {
    let button = document.getElementById("button-a3");
    let square = document.getElementById("square-a3");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-b1").addEventListener("click", function() {
    let button = document.getElementById("button-b1");
    let square = document.getElementById("square-b1");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-b2").addEventListener("click", function() {
    let button = document.getElementById("button-b2");
    let square = document.getElementById("square-b2");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-b3").addEventListener("click", function() {
    let button = document.getElementById("button-b3");
    let square = document.getElementById("square-b3");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-c1").addEventListener("click", function() {
    let button = document.getElementById("button-c1");
    let square = document.getElementById("square-c1");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-c2").addEventListener("click", function() {
    let button = document.getElementById("button-c2");
    let square = document.getElementById("square-c2");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})
document.getElementById("button-c3").addEventListener("click", function() {
    let button = document.getElementById("button-c3");
    let square = document.getElementById("square-c3");
    addSymbol(button, square);
    changeChar();
    filledFields += 1;
})