// const name1 = 'jacob'
// const name2 = 'james'
// const name3 = 'rob'
// const name4 = 'marie'
// const name5 = 'alyssa'

// function longest_string(str_ara) {
//     var max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     result = str_ara.filter(v => v.length == max);
//     return result;
//   }
  
//   console.log(longest_string([name1, name2, name3, name4, name5]))

let name1 = prompt('Enter name 1');
let name2 = prompt('Enter name 2');
let name3 = prompt('Enter name 3');
//name 1 is greater than name 2 and 3
//name 2 is greater than name 1 and 3
//name 3 is greater than name 1 and 2
//name 1 is greater than name 2 and equal to name 3
//name 2 is greater than name 3 and equal to name 1
//name 3 is greater than name 1 and equal to name 2
//they're all equal
if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} has the longest name`)
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} has the longest name`)
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} has the longest name`)
} else if (name1.length > name2.length && name1.length === name3.length) {
    console.log(`${name1} and ${name3} tie for the longest name`)
} else if (name2.length > name3.length && name2.length === name1.length) {
    console.log(`${name2} and ${name1} tie for the longest name`)
} else if (name3.length > name1.length && name3.length === name2.length) {
    console.log(`${name3} and ${name2} tie for the longest name`)
} else {
    console.log(`All three names,${name1}, ${name2}, and ${name3} are the same length`)
}