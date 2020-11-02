/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (int1, int2) =>{
    if(int1 === int2){
        return (int1 + int2) * 3;
    } else {
        return int1 + int2;
    }
}
console.log('Ex1:____________', sum(11, 11));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const ex2 = (num1, num2) =>{
    if( num1 === 50 || num2 === 50 || (num1 + num2) === 50){
        return true;
    }else return false;
}
console.log('Ex2:_____________');
console.log(ex2(1, 2));//////////false
console.log(ex2(50, 2));///////true
console.log(ex2(1, 49));////////true

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const ex3 = (pos, str) =>{
    str = str.split('');
    str.splice(pos, 1);
    return str.join('');
}
console.log('Ex3:__________', ex3(1, 'testi'));

/*
4)
 Create a function to find the largest of three given integers.
*/

const ex4 = (n1, n2, n3) => {
    let res = n1;
     if(n2 > res){
        res = n2;
    }
    if(n3 > res){
        res = n3;
    }
    return res;
}
console.log('Ex4:____________', ex4(1,2,3));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const ex5 = (num1, num2) =>{
    let res = '';
    if((num1 >= 40 && num1 <=60) && (num2 >= 40 && num2 <= 60)){
        res = 'both nums are in rage 40..60';
    }else if((num1 >= 70 && num1 <=100) && (num2 >= 70 && num2 <= 100)){
        res = 'both nums are in rage 70..100';
    } else res = "none of the rages";
    return res;
}
console.log('Ex5:____________');
console.log(ex5(1,2));/////none
console.log(ex5(45, 55));/////true
console.log(ex5(74, 99));///true

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

const ex6 = (copiesNum, string) =>{
    let res = '';
    for(let i=0; i<copiesNum; i++){
        res+=string;
    }
    return res;
}
console.log('Ex6:___________', ex6(3, 'blah '));

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const ex7 = (string) => {
    let res = ''
    if(string.startsWith('Los')){
        res = 'Los Angeles';
    } else if(string.startsWith('New')){
        res = 'New York';
    }
    return res;
}
console.log('Ex7:________________', ex7('New'));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const ex8 = (arr) =>{
    let res = 0;
    for(let i=0; i<arr.length; i++){
        res += arr[i];
    }
    return res;
}
console.log('Ex8:___________', ex8([12,4,6]));

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const ex9 = (arr) => {
    let res = false;
    if(arr[0]==1 || arr[0]==3 || arr[1]==1 || arr[3]==3){
        res = true;
    }
    return res;
}
console.log('ex9:_________', ex9([11,23]));

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
const ex10 = (arr) => {
    let res = 'doesnt include 1 or 3';
    if(arr.includes(1) || arr.includes(3)){
        res = 'includes 1 or 3'
    }
    return res;
}
console.log('ex10:_________', ex10([1,32]));

/*
11)
Create a function to find the longest string from a given array of strings.*/

const ex11 = (arr) =>{
    let longestStr = '';
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > longestStr.length){
            longestStr = arr[i];
        }
    }
    return longestStr;
}
console.log('E11:__________', ex11(['0', '11', '222', '3333', '4']));

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

const ex12 = (degrees) =>{
    let angle = '';
    if(degrees >= 0 && degrees < 90){
        angle += 'acute angle';
    }else if(degrees == 90){
        angle += 'right angle';
    }else if(degrees > 90 && degrees < 180){
        angle += 'btuse angle';
    }else if(degrees == 180){
        angle += 'straight angle';
     }else{angle += ' ';}
    return angle;
}
console.log('Ex.12:__________', ex12(90));

/*
13)
Create a function to find the index of the greatest element of a given array of integers*/
const ex13 = (arr) =>{
    let greatestInt = 0;
    let index = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > greatestInt){
            greatestInt = arr[i];
            index = i;
        }
    }
    return ' greatestInt ' + greatestInt + ' index ' + index;
}
console.log('Ex13:_______________', ex13([1, 12, 2, 23, 111]));

/*
14)
Create a function to get the largest even number from an array of integers.*/
const ex14 = (arr) =>{
    let greatestInt = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > greatestInt && (arr[i]%2==0)){
            greatestInt = arr[i];
        }
    }
    return ' greatestEvenInt ' + greatestInt;
}
console.log('Ex14:_______________', ex14([1, 12, 2, 23, 111]));

/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/
console.log('Ex15:_________ex2', ex2(50, 2));

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.*/
const ex16 = (n1, n2) => {
    let res = '';
    if((n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0)){
        res = 'one positive one negative';
    }else{
        res = '!(onePositiveOneNegative)';
    }
    return res;
}
console.log('Ex16:_________', ex16(-1, 1));

/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. 
If the string length is less than 3 convert all the characters in upper case. 
*/

const ex17 = (str) => {
    let res = '';
    if(str.length < 3){
        res = str.toUpperCase();
    }else{
        let arrStr = str.split('');
        let finalArr = [];
        for(let i=0; i<3; i++ ){
            finalArr.push(arrStr[i].toLowerCase());
        }
        for(let i=3; i<arrStr.length; i++){
            finalArr.push(arrStr[i].toUpperCase());
        }
        res = finalArr.join('');
    }
    return res;
}
console.log('Ex17:__________',ex17('aaaaa'));

/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

const ex18 = (n1, n2) =>{
    let sum = n1 + n2;
    let res = 0;
    if(sum >= 50 && sum <= 80){
        res = 65;
    }else res = 80;
    return res;
}

console.log('Ex18:____________', ex18(50, 211));

/*19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

const ex19 = (num) => {
    let res = '';
    if(num%3 === 0){
        res += 'Diego';
    }
    if(num%5 === 0){
        res += 'Riccardo';
    }
    if(num%7 === 0){
        res += 'Stefano';
    }
    if((num%3 !== 0) && (num%5 !== 0) && (num%7 !== 0)){
        res = num;
    }
    return res;
}
console.log('Ex19:________');
console.log(ex19(28));//Stefano
console.log(ex19(30));//DiegoRiccardo
console.log(ex19(34));//34

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const ex20 = (phrase) => {
    let acronym = '';
    let phraseArr = phrase.split('');
    for(let i=0; i<phraseArr.length; i++){
        if(i==0){
            acronym += phraseArr[i];
        }
        if(phraseArr[i] == ' '){
            acronym += phraseArr[i+1];
        }
    }
    return acronym;
}
console.log('Ex20:________', ex20('National Aeronautics Space Administration'));