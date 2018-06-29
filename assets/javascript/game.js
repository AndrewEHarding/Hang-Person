

var wordArray = ["example", "test", "awesome"];
var chosenWord;
var usedLetters = [];
var correctLetters = [];
var numTries = 6;
var triesRemain = 0;
var wins = 0;
var losses = 0;
// var gameStart = false;
var gameOver = false;

document.onkeyup = function (event) {

    if (gameOver) {
        newGame();
        gameOver = false;
    }

    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userGuess(event.key.toLowerCase());
        }
    }

};

function userGuess(letter) {

    if (triesRemain > 0) {
        // if (!gameStart) {
        //     gameStart = true;
        // }
        if (usedLetters.indexOf(letter) === -1) {
            usedLetters.push(letter);
            checkInput(letter);
        }

    }

    resetScreen();
    checkWin();

};

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

function checkWin() {
    if (correctLetters.indexOf("_") === -1) {
        document.getElementById("win-img").style.cssText = "display: block";
        wins++;
        gameOver = true;
    }
};

function newGame() {

    usedLetters = [];
    correctLetters = [];
    triesRemain = maxTries;
    // gameStart = false;
    chosenWord = Math.floor(Math.random() * (wordArray.length));
    document.getElementById("win-img").style.cssText = "display: none";
    document.getElementById("lose-img").style.cssText = "display: none";

    for (i = 0; i < wordArray[chosenWord].length; i++) {
        correctLetters.push("_");
    }

};

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






// for (var i = 0; i < wordSplit.length; i++) {
//     answerArray[i] = "_";
// }

// var wordSplit = chosenWord.split("");

// var answerArray = [];

// Display answerArray[] in #answer
// Display numTries[] in #num-tries
// Display usedLetters[] in #used-letters
// Display wins in #wins
// Display losses in #losses

//Needs on win/loss event

// document.onkeyup = function (event) {

//     var userInput = event.key;

//     var success = false;

//     if (usedLetters.indexOf(userInput !== -1)) {
//         alert("Letter already used.");
//     }

//     else {

//         for (var i = 0; i > wordSplit.length; i++) {

//             if (userInput == wordSplit[i]) {
//                 success = true;
//                 usedLetters.push(userInput);
//                 console.log(usedLetters);
//                 // Display wordSplit[i]
//                 // answerArray[i] = wordSplit[i]
//             }

//         }

//         if (success = false) {
//             numTries--;
//             usedLetters.push(userInput);
//         }

//     }

// }