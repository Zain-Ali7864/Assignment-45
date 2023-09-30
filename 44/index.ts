function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Swiss Cheese', 'Tomato', 'Mustard');
make_sandwich('Peanut Butter', 'Jelly');
