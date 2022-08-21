function displayPlayersInGrid(containerId) {
    const playerContainer = document.getElementById(containerId);
    const playersInfo = [
        { name: "Tamim Iqbal", },
        { name: "Mashrafe Bin Mortaza", },
        { name: "Mushfiqur Rahim", },
        { name: "Sakib Al Hasan", },
        { name: "Mahmudullah Ryad", },
        { name: "Mustafiz", },
        { name: "SaifUddin", },
        { name: "Liton Das", },
        { name: "Mehedi Hasan", },
    ];
    for (let i = 0; i < playersInfo.length; i++) {
        playerContainer.innerHTML += `
        <div class="player-card text-center text-white bg-black shadow-xl">
        <div class="player-image">
            <img src="images/players/player-${i + 1}.png" alt="player-${i + 1}">
        </div>
        <div class="player-info my-4">
            <h2 class="font-semibold my-4">${playersInfo[i].name}</h2>
            <button id="player-${i + 1}-btn" class="bg-blue-600 px-16 py-1" onclick="selectedPlayer(this)">Select</button>
        </div>
     </div>`
    }

}
