const numbers = [2, 5, 8, 10, 4, 6, 12, 3, 7, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

////////////////////////////////////////////////////////////
const arr = [1, 2, 5, 9, 4, 13, 4, 10];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 4) {
    console.log("Наявний!");
    break;
  }
}

///////////////////////////////////////////////////////////////
const mass = [42, 2, 33, 11, 12, 10, 0];

const sum = mass.reduce((acc, curr) => acc + curr, 0);
const average = sum / mass.length;

console.log(average);

///////////////////////////////////////////////////////////////////
const stringsArray = ["parrot", "bull", "bear", "monkey"];

const totalCharacters = stringsArray.reduce((acc, str) => acc + str.length, 0);

console.log(totalCharacters);

/////////////////////////////////////////////////////////////////
const array = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];

const stringArray = array.filter((item) => typeof item === "string");

console.log(stringArray);
