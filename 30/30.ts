// test one 
let usernames: string[] = ['admin', 'Arshad', 'Arslan', 'Zahid', 'Jalal', 'Akrma'];

for (let username of usernames) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report of today chart?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
