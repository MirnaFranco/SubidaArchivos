import { v4 as uuidv4 } from 'uuid';

let products = [];

export function createProduct(req, res) {
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
}
