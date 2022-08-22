// showing players 
displayPlayersInGrid("players-area");


// test function
let selected = [];
function selectedPlayer(playerinfo) {

    const Info = playerinfo;
    const data = playerinfo.parentNode.children[0].innerText;
    selected.push(data);

}