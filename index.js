var wins = 0;
var ties = 0;
var losse = 0

// Array of options for computer to pick from
var options = ["R", "P", "S"]

function start() {
    var userChoice = window.prompt("Rock, Paper, Scissors?")

    // If user pressed Cancel, immediately end function
    if (!userChoice) {
        return
    }
    // Convert to uppercase to make comparisons easier
    userChoice = userChoice.toUpperCase();

    console.log("userChoice: ", userChoice)

    var index = Math.floor(Math.random() * options.length)
    var computerChoice = options[index]

    window.alert("The computer choise " + computerChoice)
    console.log("computerChoice: ", computerChoice)

    // If choices are the same, It's tie!
    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!")
        console.log("It's a tie!")
        // Check every win condition for the player
    } else if (
        (userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")
    ) {
        wins++
        window.alert("You win!")
        console.log("You win!")
        // If above conditions failed, assume player lost
    } else {
        losse++;
        window.alert("You lost!")
        console.log("You lost!")
    }

    // Print atats with line breaks
    window.alert(
        "stats:\nWins:" + wins + "\nlosses: " + losse + "\nties: " + ties
    )
    //  Ask user to play again
    var playAgain = window.confirm("Play again?!")
    // If user pressed OK, run the function again
    if (playAgain) {
        start();
    }
}
// Run the game for the first time
start()
