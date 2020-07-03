const twinId = str => [...str]
    .map((c, i) => [i % 2, c])
    .sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]))
    .map(([_, c]) => c)
    .join('');
const Twins = (a, b) => a.map((s, i) => twinId(s) == twinId(b[i])? 'Yes': 'No');

let string1 = ["abcd", "abcd", "abcd"]
let string2 = ["cdab", "bcda", "adcb"]

let result = Twins(string1, string2)
document.write(result)
