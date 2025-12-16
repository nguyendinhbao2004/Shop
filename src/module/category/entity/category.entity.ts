import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity } from "typeorm";

@Entity('category')
export class category extends BaseEntity{
    @Column()
    name:string
    @Column()
    decripton:string
}