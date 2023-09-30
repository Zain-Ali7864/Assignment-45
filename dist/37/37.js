function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}
// Create a large shirt with the default message
make_shirt(); // This will use the default values
// Create a medium shirt with the default message
make_shirt('Medium'); // This specifies the size only, uses the default message
// Create a small shirt with a custom message
make_shirt('Small', 'JavaScript is awesome!');
export {};
