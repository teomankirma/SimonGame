const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
