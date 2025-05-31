const express = require('express');
const router = express.Router();
const {students}= require('../data');

router.get('/', (req, res) => {
  const names = students.map(s => s.name).join(', ');
  res.send(`Students: ${names}`);
});

router.get('/:id', (req, res) => {

    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.send("Student not found");
  }
});





module.exports = router;