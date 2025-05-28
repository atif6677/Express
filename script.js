
const express = require('express');
const app = express();


function attachUser(req, res, next) {
    req.user = "Guest"; 
    next(); 
}


app.get('/welcome', attachUser, (req, res) => {
    
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Open your browser to http://localhost:${port}/welcome`);
});