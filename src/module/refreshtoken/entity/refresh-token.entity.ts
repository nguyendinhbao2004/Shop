import { Account } from "../../account/entity/account.entity";
import { BaseEntity } from "../../../common/base-entity/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";


@Entity('refresh_tokens')
export class RefreshToken extends BaseEntity{
    @Column({select: false})
    token: string

    @Column()
    expiresAt: Date

    @Column()
    isRevoked: boolean

    @Column()
    deviceInfo: string

    @ManyToOne(() => Account, (account) => account.refreshTokens)
    account: Account
}