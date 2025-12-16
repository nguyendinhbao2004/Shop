import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Accounts')
export class Account extends BaseEntity{
    @Column({unique: true})
    email:string

    @Column()
    passwordHash:string

    @Column()
    fullName:string

    @Column({default:true})
    isActive:boolean
}