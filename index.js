const express = require('express');
const app= express();




const userRoutes = require('./routes/user.js')
const productRoutes = require('./routes/product.js')    
const cartRoutes = require('./routes/cart.js')




app.use('/users',userRoutes);    
app.use('/product',productRoutes); 
app.use('/cart',cartRoutes);



app.use((req, res) => {
    res.status(404).send('Page Not Found'); 
});




const port = 4000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
