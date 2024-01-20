// How to find the largest number in array

const array = [1, 3, 5, 7, 8, 9, 10, 200, 10928];

var largestElement = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > largestElement) {
    largestElement = array[i];
  }
}
console.log(largestElement);
