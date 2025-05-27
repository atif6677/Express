
const express = require('express')
const app = express()



app.get('/', (req, res) => {
console.log('Server is up and running on port 3000! Ready to handle requests.')
  res.send('Hello, World! This is a simple Express server.')
})


const port =3000
 app.listen(port)