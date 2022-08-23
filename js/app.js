// select 5 player

function selectPlayer(element) {
    const player = element.parentNode.children[0];
    const selectedPlayer = player.innerText;

    const selectedPlayerArea = document.getElementsByClassName('select-players');

    for (eachPlayer = 0; eachPlayer <= selectedPlayerArea.length; eachPlayer++) {
        const createPlayer = document.createElement('li');
        createPlayer.innerText = selectedPlayer;
        const players = createPlayer;
        selectedPlayerArea[eachPlayer].appendChild(players);
    }


}