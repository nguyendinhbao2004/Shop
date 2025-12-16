import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity } from "typeorm";


@Entity('order')
export class order extends BaseEntity {
    @Column()
    userId: number;

    @Column('decimal', { precision: 18, scale: 2 })
    totalAmount: number;

    @Column()
    status: string;
}