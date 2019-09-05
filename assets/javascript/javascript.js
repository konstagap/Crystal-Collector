
// creating wins and looses counter
var wins = 0;
$('#Wins').text(wins);
var losses = 0;
$('#Losses').text(losses);
//creating var for user score
var userScore = 0;
// creating var to store random number for each crystal
var crystalOne = randomCrystalNumber();
var crystalTwo = randomCrystalNumber();
var crystalThree =randomCrystalNumber()
var crystalFour = randomCrystalNumber()
// create var for random computer choice
var randomComputeChoice = 0;
//this function returns random number from 1 to 12
function randomCrystalNumber() {
    return Math.floor(Math.random() * (12 - 1)) + 1;
}
//this function returns random computer number from 12 to 100
function randomComputerNumber() {
    return Math.floor(Math.random() * (100 - 12)) + 12;
}
// this function resets stats and put them on screen whenever called
function restart() {
    userScore = 0;
    $("#Score").text(userScore);
    randomComputeChoice = randomComputerNumber();
    $("#randomNumber").text(randomComputeChoice);
        crystalOne();
        crystalTwo ();
        crystalThree();
        crystalFour ();
   
}
// this if statement checkes score and identify if user winn or loose, adds to score and triggers restart function
function winOrLose() {
    if ((userScore > 0) && (userScore == randomComputeChoice)) {
        alert("You win " + userScore);
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
    randomComputeChoice = randomComputerNumber();
    $("#randomNumber").text(randomComputeChoice);
    // when clicked on crystal run a function that creates random number
    //store that number in var crystalOne and add it to userScrore.
    // winOrLose() function checkes if userScore is equal to compchoice and gives wins or losses and restart
    // first crystal
    $("#crystal1").on("click", function () {
        userScore = userScore + crystalOne;
        $("#Score").text(userScore);
        winOrLose();
    })

    // second crystal
    $("#crystal2").on("click", function () {
        userScore = userScore + crystalTwo;
        $("#Score").text(userScore);
        winOrLose();
    })

    // third crystal
    $("#crystal3").on("click", function () {
        userScore = userScore + crystalThree;
        $("#Score").text(userScore);
        winOrLose();
    });

    //fourth crystal
    $("#crystal4").on("click", function () {
        userScore = userScore + crystalFour;
        $("#Score").text(userScore);
        winOrLose();

    });

});
