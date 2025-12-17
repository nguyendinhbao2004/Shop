import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import type { ICategory } from "../interface/categogy.service.interface";
import { CreateCategoryDto } from "../dto/create-categogy.dto";
import { BaseResponse } from "src/common/base-response/base.response";


@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
    constructor(
        @Inject('ICategory')
        private readonly cat: ICategory
    ) {}

    @Get()
    async findAllCategories() {
        const result = await this.cat.findAllCategories();
        return BaseResponse.success(result, 'Get data succsess')
    }

    @Post()
    @ApiBody({type: CreateCategoryDto})
    async createCategory(@Body() createCategory: CreateCategoryDto) {
        const create = await this.cat.createCategory(createCategory);
        return BaseResponse.success(create, 'Create successfully')
    }
}