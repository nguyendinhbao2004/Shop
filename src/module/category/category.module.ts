import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./controller/categogy.controller";
import { CategogyService } from "./service/categogy.service";
import { category } from "./entity/category.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([category])
    ],
    controllers: [CategoryController],
    providers: [
        CategogyService,
        {
            provide: 'ICategory',
            useClass: CategogyService
        }
    ],
    exports: [CategogyService]
})
export class CategoryModule {}