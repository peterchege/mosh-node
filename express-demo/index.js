const express = require('express');
const app = express();


app.get('/', (req , res) =>{
    res.send('Hello peter chege, js guru');
});

app.get('/api/courses', (req, res)=>{
    res.send([1,2,3,4,5,6,7,8,9]);
});


// Http Method
// app.get();
// app.post();
// app.length();
// app.delete();
// app.put();

// ENVIRONMENT VARIABLE
const port = process.env.app || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
