import { CreateCategoryDto } from "../dto/create-categogy.dto";
import { category } from "../entity/category.entity";

export interface ICategory {
    findAllCategories(): Promise<any[]>;
    findCategoryById(id: number): Promise<category>;
    createCategory(data: CreateCategoryDto): Promise<category>;
    updateCategory(id: number, data: Partial<any>): Promise<category>;
    deleteCategory(id: number): Promise<void>;
}