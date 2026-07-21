const randomNumbers = [92, 23, 12, 17, 2, 8, 3, 28, 150, 39, 1, 59, 70];

let largest = randomNumbers[0];
let smallest = randomNumbers[0];

for (const randomNumber of randomNumbers) {
  if (randomNumber > largest) {
    largest = randomNumber;
  } else if (randomNumber < smallest) {
    smallest = randomNumber;
  }
}

console.log(largest);
console.log(smallest);
