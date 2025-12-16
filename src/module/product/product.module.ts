import { Module } from "@nestjs/common";
import { product } from "./entity/product.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./controller/product.controller";
import { ProductService } from "./service/product.service";
import { DataSource } from "typeorm";
import { GenericRepository } from "src/common/base-repository/repository";


@Module({
    imports: [
        TypeOrmModule.forFeature([product])
    ],
    controllers: [ProductController],
    providers: [
        ProductService,
    ],
    exports: [ProductService]
})
export class ProductModule {}