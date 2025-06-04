const path = require('path');

const getAllProducts = () => {
  
  return (path.join(__dirname, '..', 'view', 'product.html'));
};

const getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

const addProduct = () => {
  return "Adding a new product";
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};
