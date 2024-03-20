// Generates a random number between 1 and 6 for both dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Selects first and second dice, and score text
let die1 = document.querySelectorAll("img")[0];
let die2 = document.querySelectorAll("img")[1];
let score = document.querySelectorAll("h1")[0];

// Rolls both dice
die1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
die2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// Game logic for score
if (randomNumber1 > randomNumber2) {
    score.innerHTML = "🚩Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    score.innerHTML = "Player 2 Wins!🚩"
} else {
    score.innerHTML = "Draw!"
}