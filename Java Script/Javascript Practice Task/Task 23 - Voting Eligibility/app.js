const age = 25;
const hasID = true;

if (age >= 18) {
  console.log("You are eligible for vote");
  if (hasID) {
    console.log("Cast your vote for the right person.");
  } else {
    console.log("Go back home and bring your ID card.");
  }
} else {
  console.log("You are not eligible to vote");
}
