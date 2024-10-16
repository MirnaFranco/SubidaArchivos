const express = require('express');
const dotenv = require('dotenv');
const productsRoutes = require('./src/routes/products');
const errorHandler = require('./src/middlewares/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/products', productsRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
