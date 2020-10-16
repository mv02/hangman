let word, display;
let hp = 100;

function startRound() {
    for (let btn of buttons) {
        btn.disabled = false;
    }

    word = newWord();
    display = '';
    // pridej podtrzitka podle delky slova
    for (let i = 0; i < word.length; i++) display += '_';
    wordDisplay.text(formatWord(display));
    wordDisplay.removeClass('correct');
    wordDisplay.removeClass('wrong');

    hp = 100;
    hpBar.css('width', `${hp}%`);
}

function press(btn) {
    btn.disabled = true;
    let guess = btn.innerText.toLowerCase();

    if (correctLetter(guess)) {
        let indexes = [];
        // najdi indexy uhadnuteho pismene
        for (let i = 0; i < word.length; i++) {
            if (word.charAt(i) == guess) indexes.push(i);
        }
        // nahrad podtrzitka uhadnutym pismenem
        for (let index of indexes) {
            display = display.substring(0, index) + guess + display.substring(index + 1);
        }

        wordDisplay.text(formatWord(display));
    }
    else fail();

    if (!display.includes('_')) win();
    if (hp <= 0) lose();
}

function correctLetter(n) {
    for (let letter of word) {
        if (n == letter) return true;
    }
    return false;
}

function fail() {
    redLayer.show();
    setTimeout(() => {
        redLayer.hide()
    }, 50);
    hp -= 10;
    hpBar.css('width', `${hp}%`);
}

function win() {
    alert('gg');
    wordDisplay.addClass('correct');
    setTimeout(startRound, 1500);
}

function lose() {
    alert('kokot');
    wordDisplay.addClass('wrong');
    wordDisplay.text(formatWord(word));
    setTimeout(startRound, 1500);
}

function setDiff(n) {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}