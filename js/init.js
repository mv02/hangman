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

    document.onkeypress = e => {
        for (let btn of buttons) {
            if (btn.innerText.toLowerCase() == e.key && !btn.disabled) {
                press(btn);
                break;
            }
        }
    };

    wordDisplay.css('visibility', 'visible');
    startRound();
}

$.when(getWords()).done(init);