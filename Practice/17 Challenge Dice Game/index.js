// Generates a random number between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Selects first die
let die1 = document.querySelectorAll("img")[0]

// Rolls the first die
die1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");