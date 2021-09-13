let filledFields = 0;
let char = 'x'
let winCombination = false
let divsArray = [];

function changeClassToWinning(div1, div2, div3) {
    if (char == 'kolo') {
        div1.classList.remove("kolo");
        div1.className += 'winning';
        div2.classList.remove("kolo");
        div2.className += 'winning';
        div3.classList.remove("kolo");
        div3.className += 'winning';

    }
    if (char == 'krzyzyk') {
        div1.classList.remove("krzyzyk");
        div1.className += 'winning';
        div2.classList.remove("krzyzyk");
        div2.className += 'winning';
        div3.classList.remove("krzyzyk");
        div3.className += 'winning';

    }
}

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


function checkIsWinCombination() {

    if (divsArray[0].innerHTML == char && divsArray[1].innerHTML == char && divsArray[2].innerHTML == char) {
        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[0], divsArray[1], divsArray[2]);

    }

    if (divsArray[3].innerHTML == char && divsArray[4].innerHTML == char && divsArray[5].innerHTML == char) {
        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[3], divsArray[4], divsArray[5]);

    }
    if (divsArray[6].innerHTML == char && divsArray[7].innerHTML == char && divsArray[8].innerHTML == char) {

        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[6], divsArray[7], divsArray[8]);

    }

    if (divsArray[0].innerHTML == char && divsArray[3].innerHTML == char && divsArray[6].innerHTML == char) {

        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[0], divsArray[3], divsArray[6]);

    }
    if (divsArray[1].innerHTML == char && divsArray[4].innerHTML == char && divsArray[7].innerHTML == char) {

        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[1], divsArray[4], divsArray[7]);

    }
    if (divsArray[2].innerHTML == char && divsArray[5].innerHTML == char && divsArray[8].innerHTML == char) {

        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[2], divsArray[5], divsArray[8]);

    }
    if (divsArray[0].innerHTML == char && divsArray[4].innerHTML == char && divsArray[8].innerHTML == char) {

        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[0], divsArray[4], divsArray[8]);

    }
    if (divsArray[2].innerHTML == char && divsArray[4].innerHTML == char && divsArray[6].innerHTML == char) {

        winCombination = true;
        window.alert('WIN');
        changeClassToWinning(divsArray[2], divsArray[4], divsArray[6]);

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
    })
}