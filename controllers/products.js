

const getProducts= (req, res) => { 
    res.send('Fetch all products.');
}   

const newProduct = (req, res) => {
    res.send('Add a new product.');
}

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Fetch product with ID: ${productId}`);
}

module.exports =
{   getProducts,
    newProduct,
    getProductById
};