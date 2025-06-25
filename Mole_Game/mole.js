
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
const timing = document.getElementById("time-block");

window.onload = function() {
    setGame();
    gameOver = true;
}

function startGame() {
    gameOver = false;
    let x = document.getElementById("btn-start");
    x.style.display = "none";
    timer();
}



function setGame() {
    for (let i = 0; i<9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
    setInterval(setMole, 1000);
    setInterval(setPlant, 500);
}



function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function reset() {
    location.reload(true);
}


function setMole() {

    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    var mole = document.createElement("img");
    mole.src = "../Images/pngwing.com.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {

    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "../Images/pngwing.com (1).png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {

    if (gameOver) {
        return;
    }

    if (this == currMoleTile) {
        
        score += 10;
        document.getElementById("score").innerText = score.toString();

        
    }

    else if (this == currPlantTile) {
        document.getElementById("score").innerText  = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

function timer() {
    

timing.style.display = "block";

const startingMinutes = 0.5;
let time = startingMinutes * 60;

var countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {

    

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;



    countdownEl.innerHTML = minutes + ":" + seconds;

    if(minutes + ":" + seconds == "0:00") {
        gameOver = true;
        
    }
    
    else{ 
    time--;
    }

    if (gameOver == true) {
        const game_ended = document.getElementById("game-ended-img");
        game_ended.style.display = "flex";
        document.getElementById("score").innerHTML = "Final score = " + score;

        
        timing.style.display = "none"
    }


    
}
}    


