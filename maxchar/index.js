// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
common string problems:
 most common character?
 does string A have the same letters as string B  ? (anagram)
 does the given string haber any repeats?
 */

function maxChar(str) {
  let hash = {}
  str.split('').map(el => hash[el] = hash[el] + 1  || 1 )
  return Object.keys(hash)[0]

}

module.exports = maxChar;
