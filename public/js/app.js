/*global document*/
"use strict";

$(document).ready(() => {
    let userScore = 0;
    let compScore = 0;

    function randomPick() {
        let num = Math.floor((Math.random() * 3) + 1);
        return num;
    }

    function changeToString(number) {
        switch (number) {
            case 1:
                number = "Rock";
                break;
            case 2:
                number = "Paper";
                break;
            case 3:
                number = "Scissors"
                break;
        }
        return number;
    }

    function battle(userChoice) {
        let verb;
        let battleMessage;
        let compChoice;
        let message = document.getElementById("para");
        let userScoreDoc = document.getElementById("userScore");
        let compScoreDoc = document.getElementById("compScore");

        compChoice = randomPick();

        if (userChoice == 1 && compChoice == 1 || userChoice == 2 && compChoice == 2 || userChoice == 3 && compChoice == 3) {
            verb = "equals";
            battleMessage = "It's a Tie!";
        } else if (userChoice == 1 && compChoice == 2 || userChoice == 2 && compChoice == 3 || userChoice == 3 && compChoice == 1) { //comp wins
            verb = "loses to";
            battleMessage = "You Lose!";
            compScore++;
            compScoreDoc.innerHTML = `${compScore}`;
        } else { //user wins
            verb = "beats";
            battleMessage = "You Win!";
            userScore++;
            userScoreDoc.innerHTML = `${userScore}`;
        }

        userChoice = changeToString(userChoice);
        compChoice = changeToString(compChoice);

        message.innerHTML = `${userChoice} ${verb} ${compChoice}. ${battleMessage}`;

    }

    function main() {
        const rock = document.getElementById("r");
        const paper = document.getElementById("p");
        const scisscors = document.getElementById("s");
        let userChoice = "";
        rock.addEventListener("click", () => {
            userChoice = 1;
            battle(userChoice);
        })
        paper.addEventListener("click", () => {
            userChoice = 2;
            battle(userChoice);
        })
        scisscors.addEventListener("click", () => {
            userChoice = 3;
            battle(userChoice);
        })
    }

    main()
});