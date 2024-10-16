import { Router } from 'express';
import { createProduct } from '../controllers/productsController.js';
import upload from '../middlewares/multerConfig.js';
const router = Router();

router.post('/products', upload.single('productImage'), createProduct);

export default router;