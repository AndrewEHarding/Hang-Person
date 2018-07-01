// That deaf, dumb, and blind kid sure plays a mean pinball!

var wordArray = ["doge", "nyancat", "datboi", "lolcat", "leeroyjenkins", "gangnamstyle"];
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
            alert("Try again, n00b")
        }
    }

};

// =====User Input=====
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

    if (position.length <= 0) {
        triesRemain--;
    }

    else {
        for (var i = 0; i < position.length; i++) {
            correctLetters[position[i]] = letter;
        }
    }
};

// =====Check Win=====
function checkWin() {
    if (correctLetters.indexOf("_") === -1) {
        document.getElementById("win-img").style.cssText = "display: block; margin: auto; height: 250px;";
        wins++;
        gameOver = true;
        // resetScreen();
        document.getElementById("wins").innerText = wins;
        document.getElementById("memeimage").src = "./assets/images/imgarray-" + chosenWord + ".jpg";

    }
};

// =====New Game Function=====
function newGame() {
    chosenWord = Math.floor(Math.random() * (wordArray.length));
    usedLetters = [];
    correctLetters = [];
    triesRemain = numTries;
    document.getElementById("win-img").style.cssText = "display: none";
    document.getElementById("lose-img").style.cssText = "display: none";

    for (i = 0; i < wordArray[chosenWord].length; i++) {
        correctLetters.push("_");
    }

    document.getElementById("answer").innerText = correctLetters.join("");
    document.getElementById("num-tries").innerText = triesRemain;
    document.getElementById("used-letters").innerText = "";
    document.getElementById("memeimage").src = "";
};

// =====Screen Reset Function=====
function resetScreen() {
    document.getElementById("answer").innerText = "";

    for (i = 0; i < correctLetters.length; i++) {
        document.getElementById("answer").innerText += correctLetters[i];
    }

    document.getElementById("num-tries").innerText = triesRemain;
    document.getElementById("used-letters").innerText = usedLetters;

    if (triesRemain <= 0) {
        gameOver = true;
        document.getElementById("lose-img").style.cssText = "display: block; margin: auto; height: 250px;";
        losses++;
    }

    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;

};