import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, isNotEmpty, IsNumber, IsString, isString, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop Dell XPS 13', description: 'Tên sản phẩm' })
  @IsNotEmpty()
  @IsString() // <--- Bắt buộc phải có
  name: string;
  @ApiProperty({ example: 1500.0, description: 'Giá sản phẩm' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;
  @ApiProperty({ example: 10, description: 'Số lượng trong kho' })
  @IsNotEmpty()
  @IsNumber() // <--- Bắt buộc phải có
  stock: number;
  @ApiProperty({ example: 'AFD73089-3DDA-F011-B8B2-D422D1AD75CE', description: 'ID danh mục sản phẩm' })
  @IsNotEmpty()
  @IsString()
  categoryId: string;
}
