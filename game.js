const hearts = document.querySelector("#hearts");
const score = document.querySelector("#score");

let currentScore = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.addEventListener("click", () => {
    currentScore++;
    score.textContent = currentScore;
    heart.remove();
  });
  hearts.appendChild(heart);
}

setInterval(createHeart, 1000);
