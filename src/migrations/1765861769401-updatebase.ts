import { MigrationInterface, QueryRunner } from "typeorm";

export class Updatebase1765861769401 implements MigrationInterface {
    name = 'Updatebase1765861769401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "DF_912a1a05d0b052a02d5517a8882"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "DF_912a1a05d0b052a02d5517a8882" DEFAULT getdate() FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "DF_54b78a70dd5c97b84e4e7ea7bbd"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "DF_54b78a70dd5c97b84e4e7ea7bbd" DEFAULT getdate() FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_7211e9d70a6760f5846b95a4778"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_7211e9d70a6760f5846b95a4778" DEFAULT getdate() FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_176c28170f5162a797f16fe9fd1"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_176c28170f5162a797f16fe9fd1" DEFAULT getdate() FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "DF_9a941e4e7dfd8add72ebde9c215"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "DF_9a941e4e7dfd8add72ebde9c215" DEFAULT getdate() FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "DF_d55dea8d325e78ccbf3d8e9c1af"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "DF_d55dea8d325e78ccbf3d8e9c1af" DEFAULT getdate() FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "orderItem" DROP CONSTRAINT "DF_53bc0498a9cd959551031e07567"`);
        await queryRunner.query(`ALTER TABLE "orderItem" ADD CONSTRAINT "DF_53bc0498a9cd959551031e07567" DEFAULT getdate() FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "orderItem" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItem" DROP CONSTRAINT "DF_e49c9abdc0fea35e589b5b6b4b6"`);
        await queryRunner.query(`ALTER TABLE "orderItem" ADD CONSTRAINT "DF_e49c9abdc0fea35e589b5b6b4b6" DEFAULT getdate() FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "DF_f86a7f2226107ddd2b790a5c103"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "DF_f86a7f2226107ddd2b790a5c103" DEFAULT getdate() FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "DF_92143ddca57f35aec89775b4556"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "DF_92143ddca57f35aec89775b4556" DEFAULT getdate() FOR "updateAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "DF_92143ddca57f35aec89775b4556"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "DF_92143ddca57f35aec89775b4556" DEFAULT 'SYSDATETIME()' FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "DF_f86a7f2226107ddd2b790a5c103"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "DF_f86a7f2226107ddd2b790a5c103" DEFAULT 'SYSDATETIME()' FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "orderItem" DROP CONSTRAINT "DF_e49c9abdc0fea35e589b5b6b4b6"`);
        await queryRunner.query(`ALTER TABLE "orderItem" ADD CONSTRAINT "DF_e49c9abdc0fea35e589b5b6b4b6" DEFAULT 'SYSDATETIME()' FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "orderItem" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItem" DROP CONSTRAINT "DF_53bc0498a9cd959551031e07567"`);
        await queryRunner.query(`ALTER TABLE "orderItem" ADD CONSTRAINT "DF_53bc0498a9cd959551031e07567" DEFAULT 'SYSDATETIME()' FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "DF_d55dea8d325e78ccbf3d8e9c1af"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "DF_d55dea8d325e78ccbf3d8e9c1af" DEFAULT 'SYSDATETIME()' FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "DF_9a941e4e7dfd8add72ebde9c215"`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "DF_9a941e4e7dfd8add72ebde9c215" DEFAULT 'SYSDATETIME()' FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_176c28170f5162a797f16fe9fd1"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_176c28170f5162a797f16fe9fd1" DEFAULT 'SYSDATETIME()' FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_7211e9d70a6760f5846b95a4778"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_7211e9d70a6760f5846b95a4778" DEFAULT 'SYSDATETIME()' FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "DF_54b78a70dd5c97b84e4e7ea7bbd"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "DF_54b78a70dd5c97b84e4e7ea7bbd" DEFAULT 'SYSDATETIME()' FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "updateAt" datetime2 NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "DF_912a1a05d0b052a02d5517a8882"`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "DF_912a1a05d0b052a02d5517a8882" DEFAULT 'SYSDATETIME()' FOR "createAt"`);
    }

}
