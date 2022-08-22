// display player grids function

function displayPlayersInGrid(containerId) {
    const playerContainer = document.getElementById(containerId);
    // player info array contains object
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
    generatePlayerGrid(playersInfo, playerContainer);
}

// using for loop to display palyer grid dynamically
// using innerHtml += features to append new element

function generatePlayerGrid(playersInfo, playerContainer) {
    // generating dynamic player grid 
    for (let i = 0; i < playersInfo.length; i++) {
        playerContainer.innerHTML += `
        <div class="player-card text-center text-white bg-black shadow-xl">
        <div class="player-image">
            <img src="images/players/player-${i + 1}.png" alt="player-${i + 1}">
        </div>
        <div class="player-info my-4">
            <h2 class="font-semibold my-4">${playersInfo[i].name}</h2>
            <button id="player-${i + 1}-btn" class="px-16 py-1 bg-[#015196]" onclick="displaySelectedPlayers(this)" type="submit">Select</button>
        </div>
     </div>`
    }
}
// selected player function 
// using createElement and appending JS functions

function displaySelectedPlayers(playerinfo) {
    // getting initial info
    const info = playerinfo;
    const selectedPlayerContainer = document.getElementById("selected-players");
    const data = info.parentNode.children[0].innerText;

    const selectedPlayersNodeLength = document.querySelectorAll("#selected-players li").length;

    // validation for max 5 player can be added
    if (selectedPlayersNodeLength > 4) {
        return alert("Maximum 5 plyaers are allowed to add in your selection panel");
    }
    // disabling current button 
    info.setAttribute("disabled", true);
    info.style.background = "gray";

    // creating new element
    const li = document.createElement("li");
    li.innerText = data
    li.classList.add("text-white");
    li.classList.add("my-2");

    // appending new element to its parent <ul>
    selectedPlayerContainer.append(li);
}

// common functions 

function getNodeLength(element) {
    return document.querySelectorAll(element).length
}
function getInputValueById(elementId) {
    let value = document.getElementById(elementId).value;
    return parseInt(value);
}
function gettotalExpenseOfPlayers(numberOfPlayers, singlePlayerExpense) {
    return numberOfPlayers * singlePlayerExpense;
}
function getInnerText(elementId) {
    return document.getElementById(elementId).innerText;
}
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

