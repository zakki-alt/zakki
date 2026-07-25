let score = 0;

const target = document.getElementById("target");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

// Fungsi untuk memindahkan target
function moveTarget() {
    let x = Math.random() * (gameArea.clientWidth - target.clientWidth);
    let y = Math.random() * (gameArea.clientHeight - target.clientHeight);

    target.style.left = x + "px";
    target.style.top = y + "px";
}

// Saat target diklik
target.onclick = function() {
    score++;
    scoreText.textContent = score;

    moveTarget();
};

// Fungsi memulai game
function startGame() {
    score = 0;
    scoreText.textContent = score;

    moveTarget();
}
