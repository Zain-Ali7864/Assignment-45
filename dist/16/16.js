// Store people I'd like to invite in an array
let invitees = [] = ["Sir Jahanzaib", "Ronaldo", "Lionel Messi"];
// Print invitation messages to each person
for (let person of invitees) {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner at my place. Please join us for a delightful evening!\nSincerely, [Z.A Pro]`);
}
// Print a message about the bigger dinner table
console.log("Great news! We found a bigger dinner table for our party.");
// Add one new guest to the beginning of the array
let newGuest1 = "Bill Gates";
invitees.unshift(newGuest1);
// Add one new guest to the middle of the array
let newGuest2 = "Babar Azam";
let middleIndex = Math.floor(invitees.length / 2);
invitees.splice(middleIndex, 0, newGuest2);
// Use push() to add one new guest to the end of the list
let newGuest3 = "Fakhar Zaman";
invitees.push(newGuest3);
// Print a new set of invitation messages
console.log("\nUpdated Invitation List:");
for (let person of invitees) {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner at my place. Please join us for a delightful evening and don't hesitate from anything!\nSincerely, [Z.A Pro]`);
}
export {};
