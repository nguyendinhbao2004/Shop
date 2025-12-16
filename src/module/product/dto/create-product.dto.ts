import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({ example: 'Laptop Dell XPS 13', description: 'Tên sản phẩm' })
    name: string;
    @ApiProperty({ example: 1500.00, description: 'Giá sản phẩm' })
    price: number;
    @ApiProperty({ example: 10, description: 'Số lượng trong kho' })
    stock: number
    @ApiProperty({ example: '1', description: 'ID danh mục sản phẩm' })
    categoryId: string;
}