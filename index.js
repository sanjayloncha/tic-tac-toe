

let player = document.getElementById("player") ;


let turn = "X" ;
player.innerText = turn ;

let resetBtn = document.getElementById("resetBtn") ;
resetBtn.addEventListener("click",()=>{
    let box = document.getElementsByClassName("box") ;
    Array.from(box).forEach((elem)=>{
        elem.innerText = "" ;
    })
    turn = "X" ;
    player.innerText = turn ;
})

const nextTurn = ()=>{
    return turn === "X" ? "O" : "X" 
}

const gameOver = ()=>{
    let box = document.getElementsByClassName("box") ;
    console.log(box[0]) ;
    return true ;
}


let box = document.getElementsByClassName("box") ;

Array.from(box).forEach((elem)=>{

    elem.addEventListener("click",()=>{
        if(elem.innerText != "X" && elem.innerText != "O"){
            elem.innerText = turn ;
            let check = gameOver() ;
            console.log(check) ;
            turn = nextTurn() ;
            player.innerText = turn ;
        }
    
    })
})