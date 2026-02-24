import express, { Router } from "express";
import {
    getHealthCheck,
    getProducts,
    getSelectedProduct,
    createProduct, 
    updateProduct,
    deleteProduct
} from "../controllers/productController";

const router: Router = express.Router();

router.get("/api/v1/health", getHealthCheck);
router.get("/api/v1/products", getProducts);
router.get("/api/v1/products/:id", getSelectedProduct);
router.post("/api/v1/products", createProduct);
router.put("/api/v1/products/:id", updateProduct);
router.delete("/api/v1/products/:id", deleteProduct);

export default router;