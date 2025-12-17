import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({ example: 'Electronics', description: 'Tên danh mục sản phẩm' })
    @IsString() // <--- Bắt buộc phải có
  @IsNotEmpty()
    name: string;
    @ApiProperty({ example: 'Danh mục các sản phẩm điện tử', description: 'Mô tả danh mục sản phẩm' })
    @IsString() // <--- Bắt buộc phải có
    decripton: string;
}