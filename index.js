let player = document.getElementById("player");

let turn = "X";
player.innerText = turn;
let gameOverFlag = false;

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {
    document.getElementById('board').style.pointerEvents = 'auto'
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach((elem) => {
        elem.innerText = "";
    })
    turn = "X";
    player.innerText = turn;
    gameOverFlag = false ;
    document.getElementById("playerTurnTitle").style.display = " flex" ;
    document.getElementById("player").style.display = "flex" ;
    document.getElementById("player").style.marginLeft = "10px" ;
    document.querySelector(".gameOverMessage").style.display="none" ;
})

const nextTurn = () => {
    return turn === "X" ? "O" : "X"
}




const gameOver = () => {
    let box = document.getElementsByClassName("box");
    let winChaces = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    winChaces.forEach((elem, i) => {

        if (box[winChaces[i][0]].innerText === box[winChaces[i][1]].innerText && box[winChaces[i][1]].innerText === box[winChaces[i][2]].innerText && box[winChaces[i][0]].innerText !== "") {
            gameOverFlag = true;
            document.getElementById('board').style.pointerEvents = 'none'
            return gameOverFlag ;
        }else{
            return gameOverFlag ;
        }
    })
    return gameOverFlag ;
}


let box = document.getElementsByClassName("box");

Array.from(box).forEach((elem) => {

    elem.addEventListener("click", () => {
        if (elem.innerText != "X" && elem.innerText != "O") {
            elem.innerText = turn;
            let check = gameOver();
            console.log(check);
            if(check){
                document.getElementById("playerTurnTitle").style.display = " none" ;
                let winner = document.querySelector(".gameOverMessage") ;
                winner.style.display = "block" 
                winner.style.textAlign = "center" ;
                winner.innerText = `Game Over! Player ${turn} wins` ;
            }else{
                turn = nextTurn();
                player.innerText = turn;
            }
        }

    })
})