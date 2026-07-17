const username = "foysaliio";
const password = 1213;
const isAdmin = true;
const role = isAdmin ? "Admin" : "User";

if (username === "foysaliio" && password === 1213) {
  console.log("Login successful");
  console.log(`${role} Dashboard`);
} else {
  console.log("Your password is wrong! Please try again.");
}
