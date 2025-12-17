import { Account } from "../../../module/account/entity/account.entity";
import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity, OneToMany } from "typeorm";


@Entity('roles')
export class Role extends BaseEntity{
    @Column()
    name:string;
    @Column()
    description:string;

    @OneToMany(()=> Account, (account) => account.role)
    acounts: Account[]
}