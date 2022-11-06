let turn='X';
let tar;
let boxes=document.querySelectorAll('td');

let changeTurn=()=>{
    turn==='X'?turn='O':turn='X';
}

let checkWin=()=>{
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(element => {
        if(boxes[element[0]].innerText===boxes[element[1]].innerText&&boxes[element[1]].innerText===boxes[element[2]].innerText&&boxes[element[2]].innerText!=''){
            alert(`${turn} has won the Game.`)
            return
        }
    });
}

boxes.forEach(element => {
    element.addEventListener('click', (e)=>{
        tar=e.target.innerText
        e.target.innerText?void(0):(e.target.innerText=turn, checkWin(), changeTurn());
    })
    
});