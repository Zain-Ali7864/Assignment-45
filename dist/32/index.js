"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Current users list
const current_users = ['John', 'Alice', 'Bob', 'Eve', 'Charlie'];
// New users list
const new_users = ['alice', 'Frank', 'EVE', 'David', 'Grace'];
// Function to check if a username is already used
function isUsernameTaken(username) {
    return current_users.some((existingUser) => existingUser.toLowerCase() === username.toLowerCase());
}
// Loop through new_users and check for uniqueness
for (const new_username of new_users) {
    if (isUsernameTaken(new_username)) {
        console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different one.`);
    }
    else {
        console.log(`Congratulations! The username '${new_username}' is available.`);
    }
}
