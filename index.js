let player = document.getElementById("player");

let turn = "X";
player.innerText = turn;
let gameOverFlag = false;
let count = 0;

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    document.getElementById('board').style.pointerEvents = 'auto'
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach((elem) => {
        elem.innerText = "";
    })
    count = 0;
    turn = "X";
    player.innerText = turn;
    gameOverFlag = false;
    document.querySelector(".line").style.width = "0";
    document.getElementById("playerTurnTitle").style.display = " flex";
    document.getElementById("player").style.display = "flex";
    document.getElementById("player").style.marginLeft = "10px";
    document.querySelector(".gameOverMessage").style.display = "none";
})

const nextTurn = () => {
    return turn === "X" ? "O" : "X"
}




const gameOver = () => {
    let box = document.getElementsByClassName("box");
    let winChaces = [
        [0, 1, 2, 12.5, 5, 0],
        [3, 4, 5, 12.5, 15, 0],
        [6, 7, 8, 12.5, 25, 0],
        [0, 3, 6, 2.5, 15, 90],
        [1, 4, 7, 12.5, 15, 90],
        [2, 5, 8, 22.5, 15, 90],
        [0, 4, 8, 12.5, 15, 45],
        [2, 4, 6, 12.5, 15, 135]
    ]

    let winChacesMob = [
        [1, 4, 7, 33.5, 22, 90]
    ]

    winChaces.forEach((elem, i) => {

        if (box[winChaces[i][0]].innerText === box[winChaces[i][1]].innerText && box[winChaces[i][1]].innerText === box[winChaces[i][2]].innerText && box[winChaces[i][0]].innerText !== "") {
            if (window.innerWidth <= 767) {
                console.log("hello");
                gameOverFlag = true;
                document.querySelector(".line").style.width = "33vw";
                document.getElementById('board').style.pointerEvents = 'none';
                document.querySelector(".line").style.transform = `translate(${winChacesMob[0][3]}vw,${winChacesMob[0][4]}vw) rotate(${winChacesMob[0][5]}deg) `
                return gameOverFlag;
            } else {
                gameOverFlag = true;
                document.querySelector(".line").style.width = "25vw";
                document.getElementById('board').style.pointerEvents = 'none';
                document.querySelector(".line").style.transform = `translate(${winChaces[i][3]}vw,${winChaces[i][4]}vw) rotate(${winChaces[i][5]}deg) `
                return gameOverFlag;
            }
        }
    })
    return gameOverFlag;
}


let box = document.getElementsByClassName("box");

Array.from(box).forEach((elem) => {

    elem.addEventListener("click", () => {
        if (elem.innerText != "X" && elem.innerText != "O") {
            elem.innerText = turn;
            let check = gameOver();
            // console.log(check);
            if (check) {
                document.getElementById("playerTurnTitle").style.display = " none";
                let winner = document.querySelector(".gameOverMessage");
                winner.style.display = "block"
                winner.style.textAlign = "center";
                winner.innerText = `Player ${turn} wins`;
            } else {
                turn = nextTurn();
                player.innerText = turn;
                count++;
                if (count == 9) {

                    let winner = document.querySelector(".gameOverMessage");
                    winner.style.display = "block"
                    winner.style.textAlign = "center";
                    winner.innerText = "DRAW";
                    document.getElementById("playerTurnTitle").style.display = " none";
                }
            }
        }

    })
})