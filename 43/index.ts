function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magician_names: string[] = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Dynamo'];

// Make a copy of the array
const magician_names_copy: string[] = [...magician_names];

// Modify the copied array to make the magicians great
const great_magicians = make_great(magician_names_copy);

// Call show_magicians to see the original and modified arrays
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
