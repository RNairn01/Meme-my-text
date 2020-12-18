export function randomCap(characterArr) {
let output = characterArr.map(e => {
    let rand = Math.round(Math.random());
    if (rand === 0) return e;
    if (e == e.toUpperCase()) return e.toLowerCase();
    if (e == e.toLowerCase()) return e.toUpperCase();
  }).join('');

  return output;
}

export function binary(characterArr) {
    let output;
    function convertToBinary(char) {
        return char.charCodeAt(0).toString(2);
    }
    output = characterArr.map(e => e.charCodeAt(0).toString(2));
    return output.join(" ");

}

export function vaporwave(wordArr) {
    let splitArr = wordArr.map(e => e.split(''));
    let output = splitArr.map(e => {
        return e.map(v => v.toUpperCase());
    }).join(" ");
    return output;
}