import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import type { IProduct } from "../Interface/product.service.interface";
import { get } from "http";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateProductDto } from "../dto/create-product.dto";
import { BaseResponse } from "src/common/base-response/base.response";

@ApiTags('Products')
@Controller('products')
export class ProductController {
    constructor(
        @Inject('IProduct')
        private readonly pro:IProduct
    ) {}

        @Get()
        async findAllProducts() {
            const result =  await this.pro.findAllProducts();
            return BaseResponse.success(result, 'Get data succsess')
        }

    @Post()
    @ApiBody({type: CreateProductDto})
    async createProduct(@Body() createProduct: CreateProductDto) {
        const create = await this.pro.createProduct(createProduct);
        return BaseResponse.success(create, 'Create successfully')
    }
}