const gameBoard = document.getElementById("game-board");
const score = document.getElementById("score");
const highestScore = document.getElementById("highest-score");

let pacmanX = 1,
  pacmanY = 1,
  velocityX = 0,
  velocityY = 0;

const initGame = () => {
  pacmanX += velocityX;
  pacmanY += velocityY;
  html = `<div class="pacman" style = "grid-area : ${pacmanY}/${pacmanX}"><img src="./img/PacMan1.png" alt="pacman-img"/></div>`;
  html += `<div class="ghost" style = "grid-area : 1/12"><img class="ghost-img" src="./img/red_ghost.png" alt="ghost-img"/></div>`;
  html += `<div class="ghost" style = "grid-area : 8/25"><img class="ghost-img" src="./img/pink_ghost.png" alt="ghost-img"/></div>`;
  html += `<div class="ghost" style = "grid-area : 31/18"><img class="ghost-img" src="./img/green_ghost.png" alt="ghost-img"/></div>`;
  html += `<div class="ghost" style = "grid-area : 24/9"><img class="ghost-img" src="./img/purple_ghost.png" alt="ghost-img"/></div>`;
  html += `<div class="power-pellet" style="grid-area: 4/20"> <img src="img/pallet.png" /> </div>
<div class="power-pellet" style="grid-area: 19/16"> <img src="img/pallet.png" /></div>
<div class="power-pellet" style="grid-area: 2/3"> <img src="img/pallet.png" /></div>
<div class="power-pellet" style="grid-area: 9/15"> <img src="img/pallet.png" /></div>
<div class="power-pellet" style="grid-area: 18/22"> <img src="img/pallet.png" /></div>
<div class="power-pellet" style="grid-area: 19/6"> <img src="img/pallet.png" /></div>
<div class="power-pellet" style="grid-area: 12/20"> <img src="img/pallet.png" /></div>`;
  gameBoard.innerHTML = html;

  const ghostImage = document.querySelectorAll("#game-board .ghost-img");

  if ((pacmanY == 2) & (pacmanX == 3)) {
    for (let i = 0; i < ghostImage.length; i++) {
      ghostImage[i].style.opacity = "0";
    }
  }
  if (pacmanX <= 0 || pacmanX > 30 || pacmanY <= 0 || pacmanY > 30) {
    (velocityX = 0), (velocityY = 0);
    clearInterval(game);
  }
};

const pacmanDirection = (e) => {
  console.log(e.key);
  if (e.key === "ArrowDown") {
    velocityY = 1;
    velocityX = 0;
  } else if (e.key === "ArrowUp") {
    velocityY = -1;
    velocityX = 0;
  } else if (e.key === "ArrowLeft") {
    velocityY = 0;
    velocityX = -1;
  } else if (e.key === "ArrowRight") {
    velocityY = 0;
    velocityX = 1;
  }
  initGame();
};
// To move pacman
document.addEventListener("keydown", pacmanDirection);
let game = setInterval(initGame, 250);
