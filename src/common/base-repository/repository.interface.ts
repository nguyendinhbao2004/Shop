import { ParamData } from "@nestjs/common"

export interface IRepository<T>{
    findAll() : Promise<T[]>
    findById(id:number) : Promise<T[]>
    findOne(where : any) : Promise<T[]>
    create(entity: Partial<T>) : Promise<T[]>
    update(id:number, data: Partial<T>) : Promise<T[]>
    delete(id:number) : Promise<void>
}