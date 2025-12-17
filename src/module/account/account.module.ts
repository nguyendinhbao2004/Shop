import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "./entity/account.entity";
import { AccountController } from "./controller/account.controller";

import { DataSource } from "typeorm";
import { AccountService } from "./service/account.service";
import { GenericRepository } from "src/common/base-repository/repository";
import { Module } from "@nestjs/common";


@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  controllers: [AccountController],
  providers: [
    AccountService,
    // --- PHẦN QUAN TRỌNG NHẤT: ĐỊNH NGHĨA PROVIDER ---
    {
      provide: 'ACCOUNT_REPOSITORY', // Token này PHẢI GIỐNG Y HỆT bên Service
      useFactory: (dataSource: DataSource) => {
        // 1. Lấy Repository gốc của TypeORM
        const typeOrmRepo = dataSource.getRepository(Account);

        // 2. Trả về BaseRepository bọc lấy typeOrmRepo
        return new GenericRepository(typeOrmRepo);
      },
      inject: [DataSource], // Inject DataSource để dùng trong factory
    },
  ],
  exports: [AccountService, 'ACCOUNT_REPOSITORY'],
})
export class AccountModule {}