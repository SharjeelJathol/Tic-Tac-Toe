let turn='X';
let tar
let changeTurn=()=>{
    turn==='X'?turn='O':turn='X';
}

document.querySelectorAll('td').forEach(element => {
    element.addEventListener('click', (e)=>{
        tar=e.target.innerText
        e.target.innerText?changeTurn():e.target.innerText=turn, changeTurn();
    })
    
});