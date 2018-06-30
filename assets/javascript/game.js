

var wordArray = ["example", "test", "awesome"];
var chosenWord;
var usedLetters = [];
var correctLetters = [];
var numTries = 6;
var triesRemain = 0;
var wins = 0;
var losses = 0;
var gameOver = false;

// ======Key Press Function=====
document.onkeyup = function (event) {

    if (gameOver) {
        newGame();
        gameOver = false;
    }

    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuess(event.key.toLowerCase());
        }

        else {
            alert("Not a valid guess.")
        }
    }

};

// =====User Input=====`
function userGuess(letter) {

    if (triesRemain > 0) {
        
        if (usedLetters.indexOf(letter) === -1) {
            usedLetters.push(letter);
            checkInput(letter);
        }

    }

    resetScreen();
    checkWin();

};

// =====Check Input=====
function checkInput(letter) {

    var position = [];

    for (i = 0; i < wordArray[chosenWord].length; i++) {
        if (wordArray[chosenWord][i] === letter) {
            position.push(i);
        }
    }

    if (positions.length <= 0) {
        remainingGuesses--;
    }

    else {
        for (var i = 0; i < positions.length; i++) {
            correctLetters[positions[i]] = letter;
        }
    }

};

// =====Check Win=====
function checkWin() {
    if (correctLetters.indexOf("_") === -1) {
        document.getElementById("win-img").style.cssText = "display: block";
        wins++;
        gameOver = true;
    }
};

// =====New Game Function=====
function newGame() {

    usedLetters = [];
    correctLetters = [];
    triesRemain = numTries;
    chosenWord = Math.floor(Math.random() * (wordArray.length));
    document.getElementById("win-img").style.cssText = "display: none";
    document.getElementById("lose-img").style.cssText = "display: none";

    for (i = 0; i < wordArray[chosenWord].length; i++) {
        correctLetters.push("_");
    }

};

// =====Screen Reset Function=====
function resetScreen() {

    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("answer").innerText = "";

    for (i = 0; i < correctLetters.length; i++) {
        document.getElementById("answer").innerText = + correctLetters[i];
    }

    document.getElementById("num-tries").innerText = triesRemain;
    document.getElementById("used-letters").innerText = usedLetters;

    if (triesRemain <= 0) {
        gameOver = true;
        document.getElementById("lose-img").style.cssText = "display: block";
    }

};