const express = require('express');
const app= express();
const port = 4000;
app.use(express.json());


const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');


app.get('/', (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});


app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

app.use((req, res) => {
    res.status(404).send('Page Not Found'); 
});





app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
