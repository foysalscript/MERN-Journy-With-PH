const duplicateNumber = [1, 2, 2, 3, 4, 4, 5];
const duplicateNumber2 = [1, 2, 2, 3, 4, 4, 5, 7, 8, 9, 8, 7];

function removeDuplicates(array) {
  let uniqueNumber = [];
  for (const digit of array) {
    if (uniqueNumber.includes(digit)) {
      continue;
    } else {
      uniqueNumber.push(digit);
    }
  }
  return uniqueNumber;
}

const result = removeDuplicates(duplicateNumber);
const result2 = removeDuplicates(duplicateNumber2);
console.log(result);
console.log(result2);
