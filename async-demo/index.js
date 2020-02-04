console.log('Before');
 getUser(1, (user) => {

     console.log('User', user); //worked well

    // Get the repositories
    getRepositories(user.gitHunUsername, (repos) =>{
        getCommits(repo, (commits) =>{

        });
    });
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

function getRepositories(username, callback) {
    setTimeout(() =>{
        console.log('Calling gihub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}