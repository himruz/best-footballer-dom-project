// select 5 player

const playerArray = [];

function addPlayer(arr) {
    if (document.getElementById('selected-players-id').children.length >= 5) {
        alert('You have done selected all 5 player')
        return
    }
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



// calculate per player expenxe
document.getElementById('per-player-calculate').addEventListener('click', function () {
    const getPerPlayerinput = document.getElementById('per-player')
    const perPlayerString = getPerPlayerinput.value;
    const perPlayerNumber = parseFloat(perPlayerString);
    const playerExpenxe = perPlayerNumber * 5;
    const perPlayerExpenxeField = document.getElementById('player-expenxe');
    perPlayerExpenxeField.innerText = playerExpenxe;

})

// calculate total expenxe

document.getElementById('calculate-total').addEventListener('click', function () {
    const getManagerinput = document.getElementById('manager')
    const getManagerString = getManagerinput.value;
    const getManagerNumber = parseFloat(getManagerString);

    const getCoachinput = document.getElementById('coach')
    const getCoachString = getCoachinput.value;
    const getCoachNumber = parseFloat(getCoachString);
    const perPlayerExpenxeField = document.getElementById('player-expenxe');
    const totalPlayerExpenxe = perPlayerExpenxeField.innerText;
    const totalPlayerExpenxeNumber = parseFloat(totalPlayerExpenxe)
    const totalExpenxe = getManagerNumber + getCoachNumber + totalPlayerExpenxeNumber;
    const getTotalExpexeField = document.getElementById('total')
    getTotalExpexeField.innerText = totalExpenxe;
})





