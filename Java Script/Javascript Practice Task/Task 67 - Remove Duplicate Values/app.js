const duplicateNumbers = [2, 3, 93, 24, 34, 3, 93, 5, 12, 9, 5];

const uniqueNumber = [];

for (const duplicateNum of duplicateNumbers) {
  if (uniqueNumber.includes(duplicateNum)) {
    continue;
  }
  uniqueNumber.push(duplicateNum);
}

console.log(uniqueNumber);
