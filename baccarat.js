let point = 0;
let imgCount = 0;
let deck;

function buildDeck() {
  let value = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];
  let type = ["spades", "clubs", "diamonds", "hearts"];
  deck = [];

  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < value.length; j++) {
      deck.push(value[j] + "_of_" + type[i]);
    }
  }
}
// random deck
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length); //random 52 deck
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  console.log(deck);
}

function startGame() {
  point = 0;
  imgCount = 0;
  for (let i = 0; i < 3; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./52-card_deck/" + card + ".png";
    point += getValue(card);
    imgCount += checkImage(card);
    document.getElementById("cards").append(cardImg);
  }
  // display point
  if (imgCount == 3) {
    document.getElementById("point").innerHTML = "3 tiên";
  } else {
    point %= 10;
    if (point == 0) {
      document.getElementById("point").innerHTML = "bù";
    } else {
      document.getElementById("point").innerHTML = point;
    }
  }
}
function getValue(card) {
  let data = card.split("_of_");
  let value = data[0];

  if (isNaN(value)) {
    // A,J,Q,K
    if (value == "ace") {
      return 1;
    }
    return 10;
  }
  return parseInt(value);
}

function checkImage(card) {
  let data = card.split("_of_");
  let value = data[0];
  if (value == "jack" || value == "queen" || value == "king") {
    return 1;
  }
  return 0;
}

function reload() {
  location.reload();
}
window.onload = function load() {
  buildDeck();
  shuffleDeck();
  startGame();
  document.getElementById("play").addEventListener("click", reload);
};
