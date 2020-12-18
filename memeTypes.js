export function randomCap(arr) {
let output = arr.map(e => {
    let rand = Math.round(Math.random());
    if (rand === 0) return e;
    if (e == e.toUpperCase()) return e.toLowerCase();
    if (e == e.toLowerCase()) return e.toUpperCase();
  }).join('');

  return output;
}

export function binary(arr) {
    let output = arr.map(e => e.charCodeAt(0).toString(2));
    return output.join(" ");
}

export function vaporwave(arr) {
    let splitArr = arr.map(e => e.split(''));
    let output = splitArr.map(e => {
        return e.map(v => v.toUpperCase());
    }).join(" ");
    return output;
}