"use strict";

// ----- global scope -----
const globalMessage = "I am global";

function showGlobal() {
  console.log(globalMessage); // accessible from inside a function
}
showGlobal();

// ----- function scope -----
function functionScopeDemo() {
  const localMessage = "I only exist inside this function";
  console.log(localMessage);
}
functionScopeDemo();
// console.log(localMessage); // would throw ReferenceError - not accessible here

// ----- block scope -----
if (true) {
  const blockMessage = "I only exist inside this block";
  console.log(blockMessage);
}
// console.log(blockMessage); // would throw ReferenceError - not accessible here

// ----- nested scope (inner function can access outer variables) -----
function outer() {
  const outerValue = "from outer";

  function inner() {
    console.log(outerValue); // inner function can see outer's variables
  }

  inner();
}
outer();

// ----- what is a closure -----
// A closure is when an inner function "remembers" the variables
// from its outer function, even after the outer function has finished running.
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// ----- each closure keeps its own separate memory -----
const counter2 = createCounter();
console.log(counter2()); // 1, not affected by "counter"

// ----- simple practical example of closure -----
function greeting(name) {
  return function (message) {
    console.log(`${message}, ${name}!`);
  };
}

const greetAhnaf = greeting("Ahnaf");
greetAhnaf("Good morning"); // "Good morning, Ahnaf!"
greetAhnaf("Good night"); // "Good night, Ahnaf!"
