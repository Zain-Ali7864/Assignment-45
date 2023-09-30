// Store people's I'd 
let invitees = [] = ["Sir Jahanzaib", "Ronaldo", "Lionel Messi"];
// Print invitation messages to each person
for (let person of invitees) {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner at my place. Please join us for a delightful evening!\nSincerely, [Regards: Z.A Pro]`);
}
// Print a message about the guest who can't make it
let guestWhoCantMakeIt = invitees[1];
// For example, "Leonardo da Vinci"
console.log(`${guestWhoCantMakeIt} regrets that they can't make it to the dinner.`);
// Replace the guest who can't make it with a new person
let newInvitee = "Lionel Messi";
invitees[1] = newInvitee;
// Replace Leonardo da Vinci with Isaac Newton
// Print a second set of invitation messages
console.log("\nUpdated Invitation List:");
for (let person of invitees) {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner at my place. Please join us for a delightful evening!\nSincerely, [Your Name]`);
}
export {};
