const wordDisplay = $('#word');
const hpBar = $('#hp-bar');
const buttons = $('.keyboard-row button');

function init() {
    for (let btn of buttons) {
        btn.onclick = () => {
            press(btn)
        };
    }

    startRound();
}

$.when(getWords()).done(init);