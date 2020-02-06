console.log('Before');
//  getUser(1, getRepositories);

// function getRepositories(user){
//     getRepositories(user.gitHubUsername, getCommits);
// }
// function getCommits(repo) {
//     getCommits(repo, displayCommits);
// }
// function displayCommits(commits){
//     console.log(commits);
// }

// Callbacks



//consuming promise

//  getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and await approach

async function displayCommits() {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
}

displayCommits();

console.log('After');

function getUser(id) {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({
                id: id,
                gitHubUsername: 'peter'
            });
        }, 2000);
    });
}

function getRepositories(username) {
  
    return new Promise((resolve, reject)=>{
         setTimeout(() => {
             console.log('Calling gihub API...');
             resolve(['repo1', 'repo2', 'repo3']);
         }, 2000);
    });
   
}

function getCommits(repo){
    
    return new Promise((resolved, rejected) => {
        setTimeout(() => {
            console.log('Calling github Api...')
            resolved(['commit']);
        }, 2000);
    });
}