//Variables

var randomNumber = "";
var totalScore = "";
var computerChoiceCrystal = [0,0,0,0];

var wins = 0;
var losses = 0;

//Function for loading the page, resetting the game, and picking random numbers for crystals
$(document).ready(function () {

    reset = function() {
            randomNumber = Math.floor((Math.random() * 101) + 20);
            message = "",
            totalScore = 0;
            setTimeout(function() {
                $("#message").html("");
                $("#total-score").html("0");
                $("#guess-number").html(randomNumber);
            }, 1000);
            computerChoiceCrystal[0] = Math.floor((Math.random() * 12) + 1);
            computerChoiceCrystal[1] = Math.floor((Math.random() * 12) + 1);
            computerChoiceCrystal[2] = Math.floor((Math.random() * 12) + 1);
            computerChoiceCrystal[3] = Math.floor((Math.random() * 12) + 1);
    }

    reset();
    //Function for picking a random number and adding onclick functions (for images)

    $("#guess-number").append(randomNumber);

    $("#image1").on("click", function () {
        totalScore += computerChoiceCrystal[0];
        $('#total-score').html(totalScore);
        wonOrLost();
    });
    $("#image2").on("click", function () {
        totalScore += computerChoiceCrystal[1];
        $('#total-score').html(totalScore);
        wonOrLost();
    });

    $("#image3").on("click", function () {
        totalScore += computerChoiceCrystal[2];
        $('#total-score').html(totalScore);
        wonOrLost();
    });

    $("#image4").on("click", function () {
        totalScore += computerChoiceCrystal[3];
        $('#total-score').html(totalScore);
        wonOrLost();
    });
    //Function for keeping scores
    wonOrLost = function() {
        if(totalScore === randomNumber) {
            $("#message").html("You won!");
            wins++;
            $("#wins").html(wins); 
            reset();           
        } else if (totalScore > randomNumber) {
            $("#message").html("You lost!");
            losses++;
            $("#losses").html(losses);
            reset();
        } 
    }
    
});