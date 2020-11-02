/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxChar = (str) =>{
    const chars = {};
    str.toLowerCase().split("").forEach(char => {
      if (chars[char] == null) {
        chars[char] = 1;
      } else {
        chars[char] += 1;
      }
    });
  let highest_num = 0;
  let letter = "";
  for (const key in chars) {
    if (chars[key] > highest_num) {
      highest_num = chars[key];
      letter = key;
    }
  }
  return letter;
}
console.log('1:::::::::::', maxChar('testitooooooooooooooooooo'));

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const isAnagram = (str1, str2) =>{
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    sortedStr1 = str1.split('').sort().join('');
    sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
console.log('2:::::::::::', isAnagram('FIrst', 'STrif'));


/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples 
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should 
    return a list containing "inlets".
*/

const ex3 = (word1, wordsList) =>{
    let list = [];
    for(let i=0; i<wordsList.length; i++){
        if(isAnagram(word1, wordsList[i])){
            list.push(wordsList[i]);
        }
    }
    return list;
}
console.log('3:::::::::::', ex3('listen', ["enlists", "google", "inlets", "banana"]));


/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const ex4 = (str) => {
    let res = '';
    let reversedString = '';
    for(let i = str.length; i >= 0; i--){
        reversedString += str.charAt(i);
    }
    if(str === reversedString){
        res = str + ' is a palindrome';
    }else{
        res = str + ' is not a palindrome';
    }
    return res;
}
console.log('4:::::::::', ex4('abba'));

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

 const ex5 = (int) => {

    let string = '' + int;
    string = string.split('');
    let res = [];

    for(let i = string.length-1; i >= 0; i--){
        res.push(string[i]);
        if(string[i] === '-'){
            res.pop();
            res.unshift('-');
        }
    }
    
    let nonZero = false;
    for(let i = 0; i < res.length; i++){
        if(i==0 && res[i] === '-'){
            continue;
        }
        if(res[i] != '0' && res[i] != '-'){
            nonZero = true;
        }
        while(!nonZero && res[i]==='0'){
            res.splice(i, 1);
        }
    }
    return res.join('');
 }
 console.log('5::::::::::', ex5(-500));

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */
console.log('6::::::::');
const ex6 = (num) =>{
    let char = '#';
    for(let i=1; i<=num; i++){
      console.log(char.repeat(i));
    }
}
ex6(3);
/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
const ex7 = (string) =>{
    let reversed = '';
    for(let i=string.length; i >= 0; i--){
        reversed+=string.charAt(i);
    }
    return reversed;
}
console.log('7:::::::::', ex7('Greetings!'));

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const ex8 = (mainArray, arraySize) => {

    let insideArraysNum = Math.ceil(mainArray.length/arraySize);
    let arraysHolder = [];
    let smallArray = [];
    let index = 0
    for(let i=0; i<insideArraysNum; i++){
        for(let j=0; j<arraySize; j++){
            smallArray.push(mainArray[index]);
            index++;
        }
        arraysHolder.push(smallArray);
        smallArray = [];
    }
    return arraysHolder;
}
console.log('8:::::::::::', ex8([1, 2, 3, 4], 2));
/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */
console.log('9:::::::::');
const ex9 = (num) => {
    const char = '#';
    const space = ' ';
    for(let x = 1; x <= num; x++){
      console.log(space.repeat(num - x) + char.repeat(x * 2 -1));
    }
}
ex9(3);

/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/

const ex10 = (n) => {
    let mainArray = [];
    let smallArray = [];
    let esArray = [];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            smallArray.push(j);
        }
        mainArray.push(smallArray);
    }
    return mainArray;
}
console.log('10::::::::::::', ex10(3));


// const ex10 = (mainArray, arraySize) => {

//     let insideArraysNum = Math.ceil(mainArray.length/arraySize);
//     let arraysHolder = [];
//     let smallArray = [];
//     let index = 0
//     for(let i=0; i<insideArraysNum; i++){
//         for(let j=0; j<arraySize; j++){
//             smallArray.push(mainArray[index]);
//             index++;
//         }
//         arraysHolder.push(smallArray);
//         smallArray = [];
//     }
//     return arraysHolder;
// }
