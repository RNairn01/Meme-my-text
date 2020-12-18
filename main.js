import { randomCap, vaporwave } from "./memeTypes.js";


const memeButton = document.getElementById('meme-button');

function memeText(memeType) {
    let input = document.getElementById('text-box').value;
    let characterArr = input.split('');
    let wordArr = input.split(' ');
    

    switch (memeType) {
        case 'randomCap':
            console.log(randomCap(characterArr));
            break;
        case 'binary':
            console.log();
            break;
        case 'vaporwave':
            console.log(vaporwave(wordArr));
            break;
    }
}

memeButton.addEventListener('click', function() {memeText(document.getElementById('meme-select').value)});