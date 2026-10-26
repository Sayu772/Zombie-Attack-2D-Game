var idleImageNo = 1;
var idleWorkerNo = 0;

function idle() {
    idleWorkerNo = setInterval(() => {
        idleImageNo = idleImageNo + 1;
        if (idleImageNo == 16) {
            idleImageNo = 1;
        }
        document.getElementById("zombie").src = "idle" + idleImageNo + ".png";
    }, 150);
} 

var runImageNo = 1;
var runWorkerNo = 0;
var runMarginLeft = 120;
var runSound = new Audio("run.mp3");

function run() {
    runSound.play();
    runWorkerNo = setInterval(() => {
        runImageNo = runImageNo + 1;
        if (runImageNo == 11) {
            runImageNo = 1;
        }
        document.getElementById("knight").src = "run" + runImageNo + ".png";
        runMarginLeft = runMarginLeft + 10;
        document.getElementById("knight").style.marginLeft = runMarginLeft + "px";
        if (runMarginLeft == 930) {
            clearInterval(runWorkerNo);
            runSound.pause();
            attack();
        }
    }, 150);  
}

var attackImageNo = 1;
var attackWorkerNo = 0;
attackCount = 0;

function attack() {
    attackWorkerNo = setInterval(()=>{
        attackImageNo = attackImageNo + 1;
        if (attackImageNo == 11) {
            attackImageNo = 1;
            clearInterval(attackWorkerNo);
            attackCount = attackCount + 1;
            if(attackCount == 5){
                alert("You Won!");
                window.location.reload();
            }
        }
        document.getElementById("knight").src = "attack" + attackImageNo + ".png";
    },150);
} 
 
var time = 20;
var timeWorker = 0;

function timer() {
    timeWorker = setInterval(()=>{
        time = time - 1;
        if(time == 0) {
            alert("Game Over!!!...");
            window.location.reload();
        }
        document.getElementById("time").innerHTML = "Time :" + time;
    },1000);
}

function play(event){
   // alert(event.code);
   if(event.code == "Enter" & timeWorker == 0){
    //alert("run");
    timer();
    run();
    idle();
   }
   if(event.code == "Space" & runMarginLeft == 930){
    //alert("attack");
    attack();
   }
}