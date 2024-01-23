// How to find the largest number in array.

// const array = [1, 3, 5, 7, 8, 9, 10, 200, 10928];

// var largestElement = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > largestElement) {
//     largestElement = array[i];
//   }
// }
// console.log(largestElement);

// How to find the second largest element number in array.

const array = [1, 2, 3, 4, 5, 98, 87, 23, 67];

let largestElement = 0;
let secondLargest = -1;

for (let i = 0; i < array.length; i++) {
  if (largestElement < array[i]) {
    largestElement = array[i];
  }
}
for (let i = 0; i < array.length; i++) {
  if (array[i] > secondLargest && array[i] != largestElement) {
    secondLargest = array[i];
  }
}
console.log(secondLargest);
