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
  html += `<div style = "grid-area : 1/12"><img src="./img/red_ghost.png" alt="ghost-img"/></div>`;
  html += `<div style = "grid-area : 8/25"><img src="./img/red_ghost.png" alt="ghost-img"/></div>`;
  html += `<div style = "grid-area : 31/18"><img src="./img/red_ghost.png" alt="ghost-img"/></div>`;
  html += `<div style = "grid-area : 24/9"><img src="./img/red_ghost.png" alt="ghost-img"/></div>`;

  html += `<div class="power-pellet" style = "grid-area : 16/28"></div>`;
  html += `<div class="power-pellet" style = "grid-area : 19/6"></div>`;

  html += `<div class="power-pellet" style = "grid-area : 4/20"></div>`;
  html += `<div class="power-pellet" style = "grid-area : 9/15"></div>`;
  gameBoard.innerHTML = html;
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
setInterval(initGame, 150);
