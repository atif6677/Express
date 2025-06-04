const { get } = require('http');
const path = require('path');

const getFormPath = () => {
  return path.join(__dirname, '..', 'views', 'product.html');
};

const getProductById = (id) => {
  return `Fetching product with ID: ${id}`;
};

const addProduct = () => {
  return "Adding a new product";
};

module.exports = {
  getFormPath,
  getProductById,
  addProduct
};
