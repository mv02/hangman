let word, display;

function startRound() {
    for (let btn of buttons) {
        btn.disabled = false;
    }

    word = newWord();
    display = '';
    // pridej podtrzitka podle delky slova
    for (let i = 0; i < word.length; i++) display += '_';
    wordDisplay.text(formatWord(display));
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
}

function correctLetter(n) {
    for (let letter of word) {
        if (n == letter) return true;
    }
    return false;
}

function fail() {
    //
}