import { product } from '../entity/product.entity';
import { In, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { IProduct } from '../Interface/product.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericRepository } from 'src/common/base-repository/repository';
import { find } from 'rxjs';

@Injectable()
export class ProductService
  extends GenericRepository<product>
  implements IProduct
{
  constructor(
    @InjectRepository(product)
    repository: Repository<product>,
  ) {
    super(repository);
  }

  async findAllProducts(): Promise<product[]> {
    return this.findAll();
  }
  async findProductById(id: number): Promise<product> {
    const product = await this.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }
  async findProdcutsByCategoryIds(categoryIds: number[]): Promise<product[]> {
    const products = await this.repository.find({
      where: {
        category: {
          id: In(categoryIds),
        },
      },
      relations: ['category'],
    });

    if (products.length === 0) {
      throw new Error('Products not found');
    }

    return products;
  }

  async findProductByName(name: string): Promise<product[]> {
    const findName = await this.findOne({where: {name} });
    if (!findName) {
      throw new Error('Product not found');
    }
    return [findName];
  }
  async createProduct(data: Partial<product>): Promise<product> {
    const createdProduct = await this.create(data);
    return createdProduct;
  }
  async updateProduct(id: number, data: Partial<product>): Promise<product> {
    const updatedProduct = await this.update(id, data);
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
  }
  async deleteProduct(id: number): Promise<void> {
    return this.delete(id);
  }
}
