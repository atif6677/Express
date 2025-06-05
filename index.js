const express = require('express');
const app= express();




const userRoutes = require('./routes/userRoutes.js')
const productRoutes = require('./routes/productRoutes.js')    
const cartRoutes = require('./routes/cartRoutes.js')

app.use(express.static('public'));
app.use(express.json());

app.use('/users',userRoutes);    
app.use('/products',productRoutes); 
app.use('/carts',cartRoutes);



app.use((req, res) => {
    res.status(404).send('Page Not Found'); 
});




const port = 4000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
