// Current users list
const current_users = ['Ali', 'Jahanzaib', 'Kashif', 'Asif', 'Amaar'];
// New users list
const new_users = ['Sunny', 'Jahanzaib', 'Danish', 'Amaar', 'Charlie'];
// Function to check if a username is already used
function isUsernameTaken(username) {
    return current_users.some((existingUser) => existingUser.toLowerCase() === username.toLowerCase());
}
// Loop through new_users and check for uniqueness
for (const new_username of new_users) {
    if (isUsernameTaken(new_username)) {
        console.log(`Sorry, the '${new_username}' is already taken. The person will need to enter a new username.`);
    }
    else {
        console.log(`Congratulations! The '${new_username}' is available.`);
    }
}
export {};
