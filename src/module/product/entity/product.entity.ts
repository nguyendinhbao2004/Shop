
import { BaseEntity } from "../../../common/base-entity/base.entity";
import { category } from "../../../module/category/entity/category.entity";
import { Column, Entity, ManyToOne } from "typeorm";


@Entity('product')
export class product extends BaseEntity {
    @Column()
    name: string;

    @Column('decimal', { precision: 18, scale: 2 })
    price: number;

    @Column()
    stock: number;

    @ManyToOne(() => category)
    category: category;
}