let filledFields = 0;
let char = 'x'
let winCombination = false
let divsArray = [];
document.getElementById("replay-button").style.display = "none";


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
        divsArray.push(field);
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

function showWinningNotificationAndReplyButton() {
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

    if (divsArray[0].innerHTML == char && divsArray[1].innerHTML == char && divsArray[2].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[0], divsArray[1], divsArray[2]);
        showWinningNotificationAndReplyButton();

    }

    if (divsArray[3].innerHTML == char && divsArray[4].innerHTML == char && divsArray[5].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[3], divsArray[4], divsArray[5]);
        showWinningNotificationAndReplyButton();

    }
    if (divsArray[6].innerHTML == char && divsArray[7].innerHTML == char && divsArray[8].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[6], divsArray[7], divsArray[8]);
        showWinningNotificationAndReplyButton();

    }

    if (divsArray[0].innerHTML == char && divsArray[3].innerHTML == char && divsArray[6].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[0], divsArray[3], divsArray[6]);
        showWinningNotificationAndReplyButton();

    }
    if (divsArray[1].innerHTML == char && divsArray[4].innerHTML == char && divsArray[7].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[1], divsArray[4], divsArray[7]);
        showWinningNotificationAndReplyButton();

    }
    if (divsArray[2].innerHTML == char && divsArray[5].innerHTML == char && divsArray[8].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[2], divsArray[5], divsArray[8]);
        showWinningNotificationAndReplyButton();

    }
    if (divsArray[0].innerHTML == char && divsArray[4].innerHTML == char && divsArray[8].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[0], divsArray[4], divsArray[8]);
        showWinningNotificationAndReplyButton()

    }
    if (divsArray[2].innerHTML == char && divsArray[4].innerHTML == char && divsArray[6].innerHTML == char) {
        winCombination = true;
        addingWinningClass(divsArray[2], divsArray[4], divsArray[6]);
        showWinningNotificationAndReplyButton()

    }
}
makeBoard();
for (let i = 0; i <= divsArray.length; i++) {
    divsArray[i].addEventListener("click", function() {
        addSymbol(divsArray[i]);
        checkIsWinCombination();
        changeChar();
        if (char == 'x') {
            divsArray[i].classList.remove("empty");
            divsArray[i].className += 'krzyzyk';

        }
        if (char == 'o') {
            divsArray[i].classList.remove("empty");
            divsArray[i].className += 'kolo';

        }
        checkIsWinCombination();


        document.getElementById("replay-button").addEventListener("click", function() {
            console.log('xd');
            location.reload();
        })
    })
}