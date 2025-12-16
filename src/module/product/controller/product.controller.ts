import { Body, Controller, Get, Post } from "@nestjs/common";
import type { IProduct } from "../Interface/product.service.interface";
import { get } from "http";
import { ApiBody } from "@nestjs/swagger";
import { CreateProductDto } from "../dto/create-product.dto";

@Controller('products')
export class ProductController {
    constructor(private readonly pro:IProduct) {}

    @Get()
    findAllProducts() {
        return this.pro.findAllProducts();
    }

    @Post()
    @ApiBody({type: CreateProductDto})
    createProduct(@Body() createProduct: CreateProductDto) {
        return this.pro.createProduct(createProduct);
    }
}