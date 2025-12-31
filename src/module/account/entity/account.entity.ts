import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { join } from "path";
import { RefreshToken } from "src/module/refreshtoken/entity/refresh-token.entity";

export enum AccountRole{
    ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

@Entity('Accounts')
export class Account extends BaseEntity{
    @Column()
    roleId: string
    @Column({unique: true})
    email:string

    @Column({select: false})
    passwordHash:string

    @Column({nullable:true})
    fullName:string

    @Column({default:true})
    isActive:boolean

    @Column({type:'enum', enum:AccountRole, default:AccountRole.STUDENT})
    role: AccountRole

    @OneToMany(()=> RefreshToken, (refreshToken) => refreshToken.account)
    refreshTokens: RefreshToken[]
}