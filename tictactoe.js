let filledFields = 0;
let char = 'x'
let winCombination = false

function addSymbol(button) {
    if (winCombination == false) {
        button.innerHTML = char;
    }
}

function changeChar() {
    if (char == 'x') {
        char = 'o';
    } else {
        char = 'x';
    }
}

const a1 = document.getElementById("button-a1");
const a2 = document.getElementById("button-a2");
const a3 = document.getElementById("button-a3");
const b1 = document.getElementById("button-b1");
const b2 = document.getElementById("button-b2");
const b3 = document.getElementById("button-b3");
const c1 = document.getElementById("button-c1");
const c2 = document.getElementById("button-c2");
const c3 = document.getElementById("button-c3");
const buttonsArray = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

function checkIsWinCombination() {
    if (buttonsArray[0].innerHTML == char && buttonsArray[1].innerHTML == char) {
        if (buttonsArray[2].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[3].innerHTML == char && buttonsArray[4].innerHTML == char) {
        if (buttonsArray[5].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[6].innerHTML == char && buttonsArray[7].innerHTML == char) {
        if (buttonsArray[8].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[0].innerHTML == char && buttonsArray[3].innerHTML == char) {
        if (buttonsArray[6].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[1].innerHTML == char && buttonsArray[4].innerHTML == char) {
        if (buttonsArray[7].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[2].innerHTML == char && buttonsArray[5].innerHTML == char) {
        if (buttonsArray[8].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[0].innerHTML == char && buttonsArray[4].innerHTML == char) {
        if (buttonsArray[8].innerHTML == char) {
            winCombination = true;
        }
    }
    if (buttonsArray[2].innerHTML == char && buttonsArray[4].innerHTML == char) {
        if (buttonsArray[6].innerHTML == char) {
            winCombination = true;
        }
    }
}

for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener("click", function() {
        addSymbol(buttonsArray[i]);
        checkIsWinCombination();
        changeChar();
    })
}
if (winCombination) {
    window.alert('WIN')
}