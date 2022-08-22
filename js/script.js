// showing players 
displayPlayersInGrid("players-area");

// all player expense calculation 
document.getElementById("calculate").addEventListener("click", function (event) {
    let numberOfSelectedPlayers = getNodeLength("#selected-players li");
    numberOfSelectedPlayers = parseInt(numberOfSelectedPlayers);
    const singlePlayerExpense = getInputValueById("single-player-cost");
    // validation
    if (numberOfSelectedPlayers === 0) {
        return alert("Please first select some players to calculate expense");
    }
    else if (Math.sign(singlePlayerExpense) == -1) {
        return alert("You cant put negative value");
    } else if (isNaN(singlePlayerExpense)) {
        return alert("Please put a valid expense for a player");
    }
    // total expense of players
    const playersTotalExpense = gettotalExpenseOfPlayers(numberOfSelectedPlayers, singlePlayerExpense);

    // setting players expense in frontend
    setInnerText("players-expense", playersTotalExpense);
});
