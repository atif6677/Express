
const express = require('express');
const app = express();

const orderRouter  = require('./routes/orders');
const userRouter = require('./routes/users');



app.use('/orders',orderRouter);

app.use("/users",userRouter)






const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
