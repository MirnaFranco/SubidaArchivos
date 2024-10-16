import express, { json } from 'express';
import productsRoutes from './routes/products.router.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
app.use(json());

// Rutas
app.use('/POST', productsRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
