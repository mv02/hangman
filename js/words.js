let words;

function getWords() {
    return $.getJSON('https://raw.githubusercontent.com/bevacqua/correcthorse/master/wordlist.json', data => {
        words = data;
    });
}

function newWord() {
    let word;
    do {
        word = words[Math.floor(Math.random() * words.length)];
    } while (word.length < 4)
    return word;
}

function formatWord(str) {
    let formatted = '';
    for (let i = 0; i < str.length; i++) {
        formatted += str[i] + ' ';
    }
    return formatted.trim();
}