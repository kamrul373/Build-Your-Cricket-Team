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
// total expense calculation 
document.getElementById("calculate-total").addEventListener("click", function (event) {

    // getting expenses amount 
    let managerExpense = getInputValueById("manager");
    managerExpense = parseInt(managerExpense);

    let coachExpense = getInputValueById("coach");
    coachExpense = parseInt(coachExpense);

    let playersExpense = getInnerText("players-expense");
    playersExpense = parseInt(playersExpense);

    if (isNaN(managerExpense) || isNaN(coachExpense) || isNaN(playersExpense)) {
        return alert("Please fill the empty fields by a valid number");
    }

    // total calculation
    const totalExpense = gettotal(managerExpense, coachExpense, playersExpense);
    setInnerText("total", totalExpense);

});