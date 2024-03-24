var timer=60;
var score=0;
var hitRn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}



function hitChange(){
   hitRn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitRn;
}
function makeBubble(){var clutter= "";

for(var i=1;i<=126;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbtm").innerHTML=clutter;
}
function runTimer(){
    var time1=setInterval(function(){
        if(timer>0){
             timer--;
       document.querySelector("#time").textContent=timer;
        }else{
            clearInterval(time1);
            document.querySelector(".pbtm").innerHTML=`Your Score Is ${score}`;
        }
      
    },1000);
}
 function matchBubble(){
    document.querySelector(".pbtm").addEventListener("click",function(dets){
       var clickedNum=Number(dets.target.textContent);
       if(clickedNum===hitRn){
        increaseScore();
        hitChange();
        makeBubble();
       }
    })
 }

makeBubble();
runTimer();
hitChange();
matchBubble();
