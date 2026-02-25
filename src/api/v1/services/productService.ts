import { HTTP_STATUS } from "../../../constants/httpsConstants";

interface productInterface {
    id: string,
    name: string,
    sku: string, 
    quantity: number,
    price: number,
    category: string,
    createdAt: string,
    updatedAt: string
}

const currentProducts: productInterface[] = [
    {
        id: "1",
        name: "Torch",
        sku: "FBT", 
        quantity: 500,
        price: 10,
        category: "Camping",
        createdAt: "2025-02-20T18:00:00.000Z",
        updatedAt: "2025-02-20T18:00:00.000Z"
    }
];

export const getAllProducts = (): productInterface => {
    return currentProducts;
}

export const getProductById = (productId:string): productInterface | undefined => {
    let product = currentProducts.find(x => x.id == productId);
    return product;
}

export const createNewProduct = (
        id: string,
        name: string,
        sku: string, 
        quantity: number,
        price: number,
        category: string,
        createdAt: Date,
        updatedAt: Date): productInterface => {
    let newProduct = {
        id: id,
        name: name,
        sku: sku, 
        quantity: quantity,
        price: price,
        category: category,
        createdAt: createdAt,
        updatedAt: updatedAt
    }

    currentProducts.push(newProduct);

    return newProduct;
}

export const updateOldProduct = (p
    id: string,
    name: string,
    sku: string, 
    quantity: number,
    price: number,
    category: string,
    createdAt: Date,
    updatedAt: Date): productInterface | undefined => {
    let product = currentProducts.find(x => x.id == productId);

    if(!product){
        return undefined;
    }

    product.id: id,
    product.name: name,
    product.sku: sku, 
    product.quantity: quantity,
    product.price: price,
    product.category: category,
    product.createdAt: createdAt,
    product.updatedAt: updatedAt

    return product;
}