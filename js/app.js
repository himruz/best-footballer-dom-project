// select 5 player

const playerArray = [];

function addPlayer(arr) {
    if (document.getElementById('selected-players-id').children.length >= 5) {
        alert('You have done selected all 5 player');
        return;
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
    addPlayer(playerArray);
}

// get value from text field
function getTextValue(textId) {
    const getTextField = document.getElementById(textId);
    const getTextFieldValue = getTextField.innerText;
    const getTextFieldNumber = parseFloat(getTextFieldValue);
    return getTextFieldNumber;
}
// get input fields
function getInputField(elementID) {
    const getInputField = document.getElementById(elementID);
    const getInputrString = getInputField.value;
    const getInputNumber = parseFloat(getInputrString);
    return getInputNumber;
}

// set update values to input fields
function setElement(elementId2, newValue) {
    const setElementField = document.getElementById(elementId2);
    setElementField.innerText = newValue;
}

// calculate per player expenxe
document.getElementById('per-player-calculate').addEventListener('click', function () {
    const perPlayerExpenxeNumber = getInputField("per-player");
    const playerNumber = document.getElementById('selected-players-id').children.length;
    const playerExpenxe = perPlayerExpenxeNumber * playerNumber;
    setElement('player-expenxe', playerExpenxe);
})

// calculate total expenxe
document.getElementById('calculate-total').addEventListener('click', function () {
    const getManagerNumber = getInputField("manager");
    const getCoachNumber = getInputField("coach");
    const playerExpenxeNumber = getTextValue("player-expenxe");
    const totalExpenxe = getManagerNumber + getCoachNumber + playerExpenxeNumber;
    setElement('total', totalExpenxe);
})





