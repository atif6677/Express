
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/products/:username', (req, res) => {
    const username = req.params.username;
    const age = req.query.age;
    const city = req.query.city;

    res.send(`Hello ${username}, welcome to the product page!, You are ${age} years old and live in ${city}.`);
}
);
app.post('/products/:username', (req, res) => {
    const username = req.params.username;
    const age = req.query.age;
    const city = req.query.city;

    res.send(`Hello ${username}, welcome to the product page!, You are ${age} years old and live in ${city}.`);
}
);



app.all('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
