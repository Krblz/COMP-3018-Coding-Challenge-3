import express, { Router } from "express";
import {
    getHealthCheck,
    getProducts,
    getSelectedProduct,
    createProduct, 
    updateProduct,
    deleteProduct
} from "../controllers/productController";
import { validateRequest } from "../middleware/validateRequest";
import { postSchemas } from "../validation/productValidation";

const router: Router = express.Router();

router.get("/api/v1/health", getHealthCheck);
router.get("/api/v1/products", getProducts);
router.get("/api/v1/products/:id", validateRequest(postSchemas.getById), getSelectedProduct);
router.post("/api/v1/products", validateRequest(postSchemas.create), createProduct);
router.put("/api/v1/products/:id", validateRequest(postSchemas.update), updateProduct);
router.delete("/api/v1/products/:id", validateRequest(postSchemas.delete), deleteProduct);

export default router;