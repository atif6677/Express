
const express = require('express');
const router = express.Router();
const { courses } = require('../data');

router.get('/', (req, res) => {
  const names = courses.map(c => c.name).join(', ');
  res.send(`Courses: ${names}`);
});

router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.send("Course not found");
  }
});

module.exports = router;
