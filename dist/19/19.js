// Store people I'd like to invite in an array
let invitees = ["Albert Einstein", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Nikola Tesla", "Ada Lovelace", "Charles Darwin"];
// Print a message indicating the number of people invited to dinner
console.log(`You are inviting ${invitees.length} people to dinner.`);
// Print invitation messages to each person
for (let person of invitees) {
    console.log(`Dear ${person},\nYou are cordially invited to a dinner at my place. Please join us for a delightful evening!\nSincerely, [Your Name]`);
}
export {};
