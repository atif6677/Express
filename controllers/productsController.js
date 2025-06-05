const productService = require('../service/productService');

const getProducts= (req, res) => { 
   const result = productService.getFormPath();
  res.sendFile(result);
}   

const newProduct = (req, res) => {
   const result = productService.addProduct();
    const data= req.body;
    res.json({ value: data.productName});
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