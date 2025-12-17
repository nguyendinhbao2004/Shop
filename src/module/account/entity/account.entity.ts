import { Role } from "../../../module/role/entity/role.entity";
import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { join } from "path";


@Entity('Accounts')
export class Account extends BaseEntity{
    @Column()
    roleId: string
    @Column({unique: true})
    email:string

    @Column()
    passwordHash:string

    @Column()
    fullName:string

    @Column({default:true})
    isActive:boolean

    @ManyToOne(() => Role, (role) => role.acounts)
    @JoinColumn({name: 'roleId'})
    role:Role
}