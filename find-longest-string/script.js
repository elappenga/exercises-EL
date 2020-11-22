const strings = ['one', 'something', 'jacob', 'car', 'another'];
function getLongestString(array) {
    let longestString = '';
    for(let str of array) {
        if (str.length > longestString.length) {
            longestString = str;
        }
    }
    return longestString;
}

const longest = getLongestString(strings);
console.log(longest);

// for each version

// array.forEach(word => {
//     if (word.length > longestString.length) {
//         longestString = str;
// }
// }
// return longestString;
// }
