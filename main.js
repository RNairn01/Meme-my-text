import { randomCap, binary, vaporwave, reverse } from "./memeTypes.js";


const memeButton = document.getElementById('meme-button');

function memeText(memeType) {
    let input = document.getElementById('text-box').value;
    let output = document.getElementById('output-box');
    let characterArr = input.split('');

    switch (memeType) {
        case 'randomCap':
            output.innerText = randomCap(characterArr);
            break;
        case 'binary':
            output.innerText = binary(characterArr);
            break;
        case 'vaporwave':
            output.innerText = vaporwave(characterArr);
            break;
        case 'reverse':
            output.innerText = reverse(characterArr);
            break;        
    }
}

memeButton.addEventListener('click', function() {memeText(document.getElementById('meme-select').value)});