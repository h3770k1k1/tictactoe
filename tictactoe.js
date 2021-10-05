let filledFields = 0;
let char = 'x'
let winCombination = false
let divslist = [];
document.getElementById("replay-button").style.display = "none";

const combinations = [
    [
        [0],
        [1],
        [2]
    ],
    [
        [3],
        [4],
        [5]
    ],
    [
        [6],
        [7],
        [8]
    ],
    [
        [0],
        [3],
        [6]
    ],
    [
        [1],
        [4],
        [7]
    ],
    [
        [2],
        [5],
        [8]
    ],
    [
        [0],
        [4],
        [8]
    ],
    [
        [2],
        [4],
        [6]
    ]
]

function addSymbol(div) {
    if (winCombination == false) {
        div.innerHTML = char;

    }
}

function changeChar() {
    if (char == 'x') {
        char = 'o';
    } else {
        char = 'x';
    }
}

function makeBoard() {
    let row1 = document.getElementById("row-1");
    let row2 = document.getElementById("row-2");
    let row3 = document.getElementById("row-3");

    for (let i = 0; i <= 8; i++) {
        let field = document.createElement("div");
        field.className += 'empty';
        divslist.push(field);
        if (i <= 2) {
            row1.appendChild(field);
        }
        if (i > 2 && i <= 5) {
            row2.appendChild(field);
        }
        if (i > 5 && i <= 8) {
            row3.appendChild(field);
        }
    }
}

function displayWinWindow() {
    const winningNotification = document.getElementById('winning-notification');
    winningNotification.innerHTML = char + ' wins!';
    document.getElementById("replay-button").style.display = "";
}

function addingWinningClass(div1, div2, div3) {
    div1.classList.add('winning');
    div2.classList.add('winning');
    div3.classList.add('winning');
}

function checkIsWinCombination() {

    if (divslist[0].innerHTML == char && divslist[1].innerHTML == char && divslist[2].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[0], divslist[1], divslist[2]);
        displayWinWindow();
        if (divslist[2].className == 'winning') { console.log('cd') }
    }

    if (divslist[3].innerHTML == char && divslist[4].innerHTML == char && divslist[5].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[3], divslist[4], divslist[5]);

        displayWinWindow();

    }
    if (divslist[6].innerHTML == char && divslist[7].innerHTML == char && divslist[8].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[6], divslist[7], divslist[8]);
        displayWinWindow();

    }

    if (divslist[0].innerHTML == char && divslist[3].innerHTML == char && divslist[6].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[0], divslist[3], divslist[6]);
        displayWinWindow();

    }
    if (divslist[1].innerHTML == char && divslist[4].innerHTML == char && divslist[7].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[1], divslist[4], divslist[7]);
        displayWinWindow();

    }
    if (divslist[2].innerHTML == char && divslist[5].innerHTML == char && divslist[8].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[2], divslist[5], divslist[8]);
        displayWinWindow();

    }
    if (divslist[0].innerHTML == char && divslist[4].innerHTML == char && divslist[8].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[0], divslist[4], divslist[8]);
        displayWinWindow();

    }
    if (divslist[2].innerHTML == char && divslist[4].innerHTML == char && divslist[6].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divslist[2], divslist[4], divslist[6]);
        displayWinWindow();
    }
}


makeBoard();
for (let i = 0; i < divslist.length; i++) {
    divslist[i].addEventListener("click", function() {
        addSymbol(divslist[i]);
        checkIsWinCombination();
        changeChar();
        if (char == 'x') {
            divslist[i].classList.remove("empty");
            divslist[i].className += 'krzyzyk';
        }
        if (char == 'o') {
            divslist[i].classList.remove("empty");
            divslist[i].className += 'kolo';
        }
        checkIsWinCombination();
        document.getElementById("replay-button").addEventListener("click", function() {
            console.log('xd');
            location.reload();
        })
    })
}