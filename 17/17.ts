// Store people I'd like to invite in an array
let invitees=[] = ["Sir Jahanzaib", "Ronaldo", "Lionel Messi", "Ishfaq Cheema"];

// Print invitation messages to each person
for (let person of invitees) {
  console.log(`Dear ${person},\nYou are cordially invited to a dinner at my place. Please join us for a delightful evening!\nSincerely.`);
}

// Print a message that we can invite only two people
console.log("\nUnfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (invitees.length > 2) {
  let removedGuest= invitees.pop() || "";
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

// Print a message to the two remaining guests
for (let person of invitees) {
  console.log(`Dear ${person},\nYou are still invited to dinner. We look forward to seeing you`);
}

// Remove the last two names to have an empty list
invitees.pop();
invitees.pop();

// Print the empty list
console.log("\nUpdated Invitation List (Empty):");
console.log(invitees);
