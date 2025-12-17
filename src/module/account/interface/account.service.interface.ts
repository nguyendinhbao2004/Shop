import { CreateAccountDto } from "../dto/create-account.dto";
import { UpdateAccountDto } from "../dto/update-account.dto";
import { Account } from "../entity/account.entity";


export interface IAccountService{
    findAllUsers(): Promise<Account[]>;
    findUserById(id: number): Promise<Partial<Account> | null>;
    createUser(data: CreateAccountDto): Promise<Account>;
    updateUser(id: number, data: Partial<UpdateAccountDto>): Promise<Account | null>;
    deleteUser(id: number): Promise<boolean>;
}
