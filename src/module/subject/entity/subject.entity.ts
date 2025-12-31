import { Column } from "typeorm";


export class Subject extends BaseEntity{
    @Column()
    name: string;

    @Column({unique: true})
    code: string;

    
}