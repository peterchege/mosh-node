const express = require('express');
const app = express();


app.get('/', (req , res) =>{
    res.send('Hello peter chege, js guru')
});

app.listen(3000, ()=> console.log('Listening to port 3000...'));

// Http Method
// app.get();
// app.post();
// app.length();
// app.delete();
// app.put();