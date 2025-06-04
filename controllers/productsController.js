const productService = require('../service/productService');

const getProducts= (req, res) => { 
   const result = productService.getAllProducts();
  res.sendFile(result);
}   

const newProduct = (req, res) => {
   const result = productService.addProduct();
    res.send(result);
}

const getProductById = (req, res) => {
    const id = req.params.id;
  const result = productService.getProductById(id);
  res.send(result);
}

module.exports =
{   getProducts,
    newProduct,
    getProductById,
    
};