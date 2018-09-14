// Code your solutions in this file
function printBadges (nameArray) {
  for (let i = 0; i < nameArray.length; i++) {
    console.log(`Welcome ${nameArray[i]}! You are employee #${i+1}.`);
  }
  return nameArray;
}

function condition() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let count = 0;
	while (condition()) {
    count++;
  }
  console.log(`You got ${count} tails in a row!`)
}
