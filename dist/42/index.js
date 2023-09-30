function make_great(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create an array of magician's names
const magician_names = ['David Copperfield', 'Houdini', 'Penn and Teller', 'Dynamo'];
// Modify the magician names to make them great
const great_magicians = make_great(magician_names);
// Call show_magicians to see the modified list
show_magicians(great_magicians);
export {};
