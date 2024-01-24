// How to find the largest number in array.

const arrayData = [1, 3, 5, 7, 8, 9, 10, 200, 10928];

let lElement = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > lElement) {
    lElement = array[i];
  }
}
console.log(lElement);

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

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Brute Method

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

twoSum([2, 7, 11, 15], 9);

// Optimal Force

function twoSum(nums, target) {
  const numsWithIndex = nums.map((num, index) => [num, index]);
  numsWithIndex.sort((a, b) => a[0] - b[0]);
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
    if (sum === target) {
      return [numsWithIndex[left][1], numsWithIndex[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return []; // No solution found!
}

twoSum([2, 7, 11, 15], 9);
