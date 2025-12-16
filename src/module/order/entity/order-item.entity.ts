import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity } from "typeorm";


@Entity('orderItem')
export class orderItem extends BaseEntity {
    @Column()
    orderId: number;

    @Column()
    productId: number;

    @Column()
    quantity: number;

    @Column('decimal', { precision: 18, scale: 2 })
    price: number;
}