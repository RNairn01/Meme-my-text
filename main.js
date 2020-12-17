import { randomCap } from "./memeTypes.js";

let textType = document.getElementById('meme-select').value;
const memeButton = document.getElementById('meme-button');

function memeText(memeType) {
    let input = document.getElementById('text-box').value;
    let textArr = input.split('');
    console.log(textArr);
    

    switch (memeType) {
        case 'randomCap':
            console.log(randomCap(textArr));
            break;
        case 'binary':
            console.log();
            break;
        case 'vaporwave':
            console.log();
            break;
    }
}

memeButton.addEventListener('click', function() {memeText(textType)});