import { Injectable } from "@nestjs/common";
import type { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { IRepository } from "./repository.interface";

@Injectable()
export class GenericRepository<T extends ObjectLiteral> implements IRepository<T> {
    private repository : Repository<T>;
    constructor(private dataSource: DataSource, entity: EntityTarget<T>) {
        this.repository = this.dataSource.getRepository<T>(entity as any);
    }
    findAll(): Promise<T[]> {
        this.repository.find();
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<T[]> {
        this.repository.findOneBy({ id } as any);
        throw new Error("Method not implemented.");
    }
    findOne(where: any): Promise<T[]> {
        this.repository.findOneBy(where);
        throw new Error("Method not implemented.");
    }
    create(entity: Partial<T>): Promise<T[]> {
        this.repository.create(entity as any);
        throw new Error("Method not implemented.");
    }
    update(id: number, data: Partial<T>): Promise<T[]> {
        this.repository.update(id, data as any);
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        this.repository.delete(id);
        throw new Error("Method not implemented.");
    }
}   