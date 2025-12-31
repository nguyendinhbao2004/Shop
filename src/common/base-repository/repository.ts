// src/common/base-repository/repository.ts
import { Injectable } from '@nestjs/common';
import { Repository, ObjectLiteral, FindOptionsWhere, FindManyOptions } from 'typeorm';

@Injectable()
export class GenericRepository<T extends ObjectLiteral> {
  constructor(
    protected readonly repository: Repository<T>,
  ) {}

  findAll(): Promise<T[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<T | null> {
    return this.repository.findOne({
      where: { id } as any,
    });
  }

  findOne(options: FindManyOptions<T>): Promise<T | null> {
    return this.repository.findOne(options);
  }

  async create(entity: Partial<T>): Promise<T> {
    const newEntity = this.repository.create(entity as T);
    return this.repository.save(newEntity);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    await this.repository.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async save(data:T): Promise<void> {
    await this.repository.save(data);
  }
}
