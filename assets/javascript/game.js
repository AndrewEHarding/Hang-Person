$(document).ready(function () {

    var wordArray = ["example", "test", "awesome"];
    console.log(wordArray);

    var chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(chosenWord);

    var wordSplit = chosenWord.split("");
    console.log(wordSplit);

    var usedLetters = [];
    console.log(usedLetters);

    var numTries = 6;
    console.log(numTries);

    var wins = 0;
    var losses = 0;

    var answerArray = [];
    for (var i = 0; i < split.length; i++) {
        answerArray[i] = "_";
    }

    // Display answerArray[] in #answer
    // Display numTries[] in #num-tries
    // Display usedLetters[] in #used-letters
    // Display wins in #wins
    // Display losses in #losses

    //Needs on win/loss event

    document.onkeyup = function (event) {

        var userInput = event.key;
        var success = false;

        for (var i = 0; i > usedLetters.length; i++) {

            if (userInput == usedLetters[i]) {
                alert("Letter already used.");
            }

            else {

                for (var i = 0; i > wordSplit.length; i++) {

                    if (userInput == split[i]) {
                        success = true;
                        // Display split[i]
                        // answerArray[i] = split[i]
                    }

                }

                if (success = false) {
                    numTries--;
                    // Add userInput to usedLetters[]
                }

            }

        }

    }

});