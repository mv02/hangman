const wordDisplay = $('#word');
const hpBar = $('#hp-bar');
const buttons = $('.keyboard-row button');
const redLayer = $('#red-layer');

function init() {
    for (let btn of buttons) {
        btn.onclick = () => {
            press(btn)
        };
    }

    startRound();
}

$.when(getWords()).done(init);