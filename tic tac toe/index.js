
let btn=document.querySelectorAll(".boom");
let winBtn=document.querySelectorAll(".res");

let newBtn=document.querySelector(".reset1");
let container=document.querySelector(".container");
let msg=document.querySelector(".msg");
let turn0=true;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const resetGame=()=>{
    turn0=true;
    enabledBoxes();
    container.classList.add("hide");
}

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box ix xlixcked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    }
    )
})

const disabledBoxes=()=>{
    for(let box of btn){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
msg.innerText=`congratulations! The winner is ${winner}`;
container.classList.remove("hide");
disabledBoxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){

        let pos1Val=btn[pattern[0]].innerText;
        let pos2Val=btn[pattern[1]].innerText;
        let pos3Val=btn[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}
newBtn.addEventListener("click",resetGame);
const winBtns = document.querySelectorAll('.res');

winBtns.forEach(button => {
    button.addEventListener('click', resetGame);
});
