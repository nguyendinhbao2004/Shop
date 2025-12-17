import { GenericRepository } from "src/common/base-repository/repository";
import { ICategory } from "../interface/categogy.service.interface";
import { category } from "../entity/category.entity";
import { CreateCategoryDto } from "../dto/create-categogy.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategogyService 
extends GenericRepository<category>
implements ICategory
{
    constructor(
        @InjectRepository(category)
        repository)
    {
        super(repository);
    }

    async findAllCategories(): Promise<any[]> {
        return await this.findAll();
    }
    findCategoryById(id: number): Promise<category> {
        throw new Error("Method not implemented.");
    }
    async createCategory(data: CreateCategoryDto): Promise<category> {
        const createdCategory = await this.create(data);
        if (!createdCategory) {
            throw new Error('Category not created');
        }
        this.save(createdCategory);
        return createdCategory;
    }
    updateCategory(id: number, data: Partial<any>): Promise<category> {
        throw new Error("Method not implemented.");
    }
    deleteCategory(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}