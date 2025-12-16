import { product } from "../entity/product.entity";

export interface IProduct {
    findAllProducts(): Promise<product[]>;
    findProductById(id: number): Promise<product>;
    findProdcutsByCategoryIds(categoryIds: number[]): Promise<product[]>;
    findProductByName(name: string): Promise<product[]>;
    createProduct(data: Partial<product>): Promise<product>;
    updateProduct(id: number, data: Partial<product>): Promise<product>;
    deleteProduct(id: number): Promise<void>;
}