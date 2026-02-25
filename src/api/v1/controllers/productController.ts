import {Request, Response} from "express";
import { HTTP_STATUS} from "../../../constants/httpsConstants";
import { 
    getAllProducts,
    getProductById,
    getHealthStatus,
    createNewProduct,
    updateOldProduct
        } from "../services/productService";



export const getHealthCheck = (req: Request, res: Response) => {
    let healthStatus = getHealthStatus();
    res.status(HTTP_STATUS.OK).json(healthStatus);
}

export const getProducts = (req: Request, res: Response) => {
    let productWithCount = getAllProducts();
    res.status(HTTP_STATUS.OK).json(productWithCount);
}

export const getSelectedProduct = (req: Request, res: Response) => {
    let productId = Number(req.params.id);
    let selectedProduct = getProductById(productId);

    if(selectedProduct === undefined){
        res.status(HTTP_STATUS.NOT_FOUND).send('Not Found');
    }

    res.status(HTTP_STATUS.OK).json(selectedProduct);
}

export const createProduct = (req: Request, res: Response) => {
    let name: string = String(req.body.name);
    let sku: string = String(req.body.sku);
    let quantity: number = Number(req.body.quantity);
    let price: number = Number(req.body.price);
    let category: string = String(req.body.category);

    if(!name || sku || quantity || price || category){
        res.status(HTTP_STATUS.BAD_REQUEST).send('Bad Request');
    }
    
    let newProduct = createNewProduct(name, sku, quantity, price, category);
    res.status(HTTP_STATUS.OK).json(newProduct);
}

export const updateProduct = (req: Request, res: Response) => {
    let name: string = String(req.body.name);
    let sku: string = String(req.body.sku);
    let quantity: number = Number(req.body.quantity);
    let price: number = Number(req.body.price);
    let category: string = String(req.body.category);

    let updateProduct = updateOldProduct(id, name, sku, quantity, price, category);

    if(updateProduct === undefined){
        res.status(HTTP_STATUS.NOT_FOUND).send('Not Found.')
    }

    res.status(HTTP_STATUS.OK).json(updateProduct);
}

export const deleteProduct = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK);
}