// I first retrieve the strings inside an array
const twinId = str => [...str]
    // I give the value odd or even numbers of each index
    // value%2 == 0 for even
    // value%2 == 1 for odd
    .map((c, i) => [i % 2, c])
    // I sort values by 0 or 1
    .sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]))
    // For each key/value, I retrieve the value
    .map(([_, c]) => c)
    // That I join together
    .join('');
//For each current value it index is egal to b[i] then there are twins 'yes' or not 'no'
const Twins = (a, b) => a.map((s, i) => twinId(s) == twinId(b[i])? 'Yes': 'No');


// I test the code with the examples
let string1 = ["abcd", "abcd", "abc"]
let string2 = ["cdab", "bcda", "ab"]

let result = Twins(string1, string2)
document.write(result)
