const express = require('express');
const app= express();

const routeBooks = require('./routes/books');



app.use('/books', routeBooks);









const port = 4000;
app.listen('4000',()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
