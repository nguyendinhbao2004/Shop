import { ParamData } from "@nestjs/common"

export interface IRepository<T>{
    findAll() : Promise<T[]>
    findById(id:string) : Promise<T[]>
    findOne(where : any) : Promise<T[]>
    create(entity: Partial<T>) : Promise<T[]>
    update(id:string, data: Partial<T>) : Promise<T[]>
    delete(id:string) : Promise<void>
}