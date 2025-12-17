import { CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export abstract class BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @CreateDateColumn({
        type:'datetime2',
    })
    createAt:Date

    @UpdateDateColumn({
        type:'datetime2',
    })
    updateAt:Date
}