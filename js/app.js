// select 5 player

const playerArray = [];

function addPlayer(arr) {

    console.log(arr)
    const selectedPlayerArea = document.getElementById('selected-players-id')
    selectedPlayerArea.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const playerName = playerArray[i];
        const createPlayer = document.createElement('li');
        createPlayer.innerText = playerName;
        selectedPlayerArea.appendChild(createPlayer);
    }
}

function selectPlayer(element) {
    element.setAttribute("disabled", true);

    const player = element.parentNode.children[0];
    const selectedPlayer = player.innerText;
    playerArray.push(selectedPlayer);
    addPlayer(playerArray)
}





