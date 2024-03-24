const squares=document.querySelectorAll(".square");
const mole=document.querySelector(".mole");
const timeLeft=document.querySelector(".time-left");
const score=document.querySelector(".score");

let result=0;
let hitPosition;
let timeNow=60;
let timerId=null;

function randomSquare(){
    squares.forEach(square=>{
        square.classList.remove("mole");
    })
    let randomSquare=squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add("mole");

    hitPosition=randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown',() => {
    if(square.id==hitPosition){
      result++;
      score.textContent=result;
      hitPosition=null
    }
    })
})

function moveMole(){
    
    timerId=setInterval(randomSquare,700);
}

moveMole();

function countDown(){
    timeNow--;
    timeLeft.textContent=timeNow;

    if(timeNow==0){
        clearInterval(countDownId);
        clearInterval(timerId)
        alert("GAME OVER!  Your Final Score is "+result);
    }
}

let countDownId=setInterval(countDown,1000);

const restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click', () => {
    resetGame();
});

function resetGame() {
    clearInterval(countDownId);
    clearInterval(timerId);
    result = 0;
    timeNow = 60; 
    score.textContent = result;
    timeLeft.textContent = timeNow;
    countDownId = setInterval(countDown, 1000);
    moveMole();
}


