
// creating wins and looses counter
var wins = 0;
$('#Wins').text(wins);
var losses = 0;
$('#Losses').text(losses);
//creating var for user score
var userScore = 0;
// creating var to store random number for each crystal
var crystalOne = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalTwo = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalThree = Math.floor(Math.random() * (12 - 1)) + 1;
var crystalFour = Math.floor(Math.random() * (12 - 1)) + 1;
// create var for random computer choice
var randomComputeChoice = 0;

// this function resets stats and put them on screen whenever called
function restart() {
    userScore = 0;
    $("#Score").text(userScore);
    randomComputeChoice = Math.floor(Math.random() * (100 - 12)) + 12;
    $("#randomNumber").text(randomComputeChoice);
    restartStats();
    function restartStats() {
        crystalOne = Math.floor(Math.random() * (12 - 1)) + 1;
        crystalTwo = Math.floor(Math.random() * (12 - 1)) + 1;
        crystalThree = Math.floor(Math.random() * (12 - 1)) + 1;
        crystalFour = Math.floor(Math.random() * (12 - 1)) + 1;
    }
}
// this if statement checkes score and identify if user winn or loose, adds to score and triggers restart function
function winOrLose() {
    if ((userScore > 0) && (userScore == randomComputeChoice)) {
        alert("You win" + userScore);
        wins++;
        $('#Wins').text(wins);
        restart();
    }
    else if (userScore > randomComputeChoice) {
        alert("You Loose! " + userScore);
        losses++;
        $('#Losses').text(losses);
        restart();
    }
}


//on loaded page creating random number from 12 to 100 passing it to var 
// setting var on screen with #randomNumber
$(document).ready(function () {
    randomComputeChoice = Math.floor(Math.random() * (100 - 12)) + 12;
    $("#randomNumber").text(randomComputeChoice);
    // when clicked on crystal run a function that creates random number
    //store that number in var crystalOne and add it to userScrore.
    // winOrLose() function checkes if userScore is equal to compchoice and gives wins or losses and restart

    // first crystal
    $("#amethyst").on("click", function () {
        userScore = userScore + crystalOne;
        $("#Score").text(userScore);
        winOrLose();
    })

    // second crystal
    $("#emerald").on("click", function () {
        userScore = userScore + crystalTwo;
        $("#Score").text(userScore);
        winOrLose();
    })

    // third crystal
    $("#diamond").on("click", function () {
        userScore = userScore + crystalThree;
        $("#Score").text(userScore);
        winOrLose();
    });

    //fourth crystal
    $("#ruby").on("click", function () {
        userScore = userScore + crystalFour;
        $("#Score").text(userScore);
        winOrLose();

    });

});
