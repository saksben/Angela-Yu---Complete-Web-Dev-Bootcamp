// Generates a random number between 1 and 6 for both dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Selects first and second dice
let die1 = document.querySelectorAll("img")[0];
let die2 = document.querySelectorAll("img")[1];

// Rolls both dice
die1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
die2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");