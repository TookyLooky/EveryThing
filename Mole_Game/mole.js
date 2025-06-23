
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i<9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
    setInterval(setMole, 770);
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

    let mole = document.createElement("img");
    mole.src = "../EveryThing/Images/pngwing.com.png";

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
    plant.src = "../EveryThing/Images/pngwing.com (1).png";

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
