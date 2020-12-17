export function randomCap(arr) {
let output = arr.map(e => {
    let rand = Math.round(Math.random());
    if (rand === 0) return e;
    if (e == e.toUpperCase()) return e.toLowerCase();
    if (e == e.toLowerCase()) return e.toUpperCase();
  }).join('');

  return output;
}

export function binary(arr) {}

export function vaporwave(arr) {}