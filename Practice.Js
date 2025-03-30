let A = 5;
let B = 10;
console.log("Sum of A+B =", A + B);

//1. Find the Largest Number
const Largenumber = [3, 7, 1, 9, 4];
const MaxNo = Math.max(...Largenumber);
console.log("Largest Number: ", MaxNo);
document.getElementById("firstanswer").innerText = "Answer: Largest # " + MaxNo;

//2.reverse an array

let Inputarray = [1, 2, 3, 4, 5];
let Outputrev = Inputarray.reverse();
console.log("Reversed array", Outputrev);
document.getElementById("secondanswer").innerText =
  " Answer : Reverse Array #  " + Outputrev;

// 3. Fiter Even Numbers
let evenNumbers = [1, 2, 3, 4, 5, 6];
let evenum = evenNumbers.filter((eve) => eve % 2 == 0);
console.log("Even #", evenum);
document.getElementById("Thirdanswer").innerText = " Answer:  " + evenum;

//Concatenate Three Arrays
var Array1 = [1, 2];
var Array2 = [3, 4];
var Array3 = [5, 6];
let Con_array = Array1.concat(Array2.concat(Array3));
console.log("Concatenated Array", Con_array);
document.getElementById("fourthanswer").innerText = " Answer:  " + Con_array;


let S_Array=[3, 1, 4, 1, 5];
let Sort_array= S_Array.sort();
console.log("Sorted Number:",Sort_array); 

document.getElementById ("fifthanswer").innerText = "Answer:  "+ Sort_array;