function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
const magician_names: string[] = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Dynamo'];

// Call the show_magicians function to print the names
show_magicians(magician_names);
