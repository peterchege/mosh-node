
// const p = Promise.resolve({id: 1});
// p.then(result => console.log(result));

const j = Promise.reject(new Error('This is the reason for rejection'));
j.catch(error => console.log(error));