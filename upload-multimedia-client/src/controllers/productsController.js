const { v4: uuidv4 } = require('uuid');

let products = [];

exports.createProduct = (req, res) => {
  const { name, description, price } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;
  
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price: parseFloat(price),
    imageUrl
  };
  
  products.push(newProduct);
  
  res.status(201).json(newProduct);
};
