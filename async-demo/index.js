console.log('Before');
 getUser(1, function(user) {
    console.log('User', user);
 });
console.log('After');

// Callbacks
// Promises
// Async/await


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({
            id: id,
            gitHunUsername: 'peter'
        });
    }, 2000);

}