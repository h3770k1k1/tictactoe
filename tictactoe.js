let filledFields = 0;
let is3charsInLine = false
let char = 'x'




function addSymbol(button) {
    if (is3charsInLine == false) {
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

const none = document.createElement('button')
const a1 = document.getElementById("button-a1");
const a2 = document.getElementById("button-a2");
const a3 = document.getElementById("button-a3");
const b1 = document.getElementById("button-b1");
const b2 = document.getElementById("button-b2");
const b3 = document.getElementById("button-b3");
const c1 = document.getElementById("button-c1");
const c2 = document.getElementById("button-c2");
const c3 = document.getElementById("button-c3");

let buttonsArray = [none, none, none, none, none, none, none, a1, a2, a3, b1, b2, b3, c1, c2, c3, none, none, none, none, none, none];

function checkIs3CharsInLine() {
    if (buttonsArray[i + 1].innerHTML == char) {
        if (buttonsArray[i + 2].innerHTML == char) {
            is3charsInLine = true;
        }
        if (buttonsArray[i - 1].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i - 1].innerHTML == char) {
        if (buttonsArray[i + 1].innerHTML == char) {
            is3charsInLine = true;
        }
        if (buttonsArray[i - 2].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i + 3].innerHTML == char) {
        if (buttonsArray[i + 6].innerHTML == char) {
            is3charsInLine = true;
        }
        if (buttonsArray[i - 3].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i - 3].innerHTML == char) {
        if (buttonsArray[i + 3].innerHTML == char) {
            is3charsInLine = true;
        }
        if (buttonsArray[i - 6].innerHTML == char) {
            is3charsInLine = true;
        }
    }

    if (buttonsArray[i + 4].innerHTML == char) {
        if (buttonsArray[i - 4].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i - 2].innerHTML == char) {
        if (buttonsArray[i + 2].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i + 4].innerHTML == char) {
        if (buttonsArray[i + 8].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i + 2].innerHTML == char) {
        if (buttonsArray[i + 4].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i - 4].innerHTML == char) {
        if (buttonsArray[i - 8].innerHTML == char) {
            is3charsInLine = true;
        }
    }
    if (buttonsArray[i - 2].innerHTML == char) {
        if (buttonsArray[i - 4].innerHTML == char) {
            is3charsInLine = true;
        }
    }

}


arrayLength = buttonsArray.length;



for (let i = 0; i < arrayLength; i++) {

    buttonsArray[i].addEventListener("click", function() {
        checkIs3CharsInLine();
        addSymbol(buttonsArray[i]);
        changeChar()



    })

}