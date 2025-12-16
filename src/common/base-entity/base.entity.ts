import { CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


export abstract class BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @CreateDateColumn({
        type:'datetime2',
        default: 'SYSDATETIME()'
    })
    createAt:Date

    @CreateDateColumn({
        type:'datetime2',
        default: 'SYSDATETIME()'
    })
    updateAt:Date
}