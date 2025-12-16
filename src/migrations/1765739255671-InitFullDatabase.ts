import { MigrationInterface, QueryRunner } from "typeorm";

export class InitFullDatabase1765739255671 implements MigrationInterface {
    name = 'InitFullDatabase1765739255671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_bebc9158e480b949565b4dc7a82" DEFAULT NEWSEQUENTIALID(), "createAt" datetime2 NOT NULL CONSTRAINT "DF_7211e9d70a6760f5846b95a4778" DEFAULT 'SYSDATETIME()', "updateAt" datetime2 NOT NULL CONSTRAINT "DF_176c28170f5162a797f16fe9fd1" DEFAULT 'SYSDATETIME()', "name" nvarchar(255) NOT NULL, "price" decimal(18,2) NOT NULL, "stock" int NOT NULL, "categoryId" uniqueidentifier, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_1031171c13130102495201e3e20" DEFAULT NEWSEQUENTIALID(), "createAt" datetime2 NOT NULL CONSTRAINT "DF_9a941e4e7dfd8add72ebde9c215" DEFAULT 'SYSDATETIME()', "updateAt" datetime2 NOT NULL CONSTRAINT "DF_d55dea8d325e78ccbf3d8e9c1af" DEFAULT 'SYSDATETIME()', "userId" int NOT NULL, "totalAmount" decimal(18,2) NOT NULL, "status" nvarchar(255) NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orderItem" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_fe5c4758e5f47a681deb1065c92" DEFAULT NEWSEQUENTIALID(), "createAt" datetime2 NOT NULL CONSTRAINT "DF_53bc0498a9cd959551031e07567" DEFAULT 'SYSDATETIME()', "updateAt" datetime2 NOT NULL CONSTRAINT "DF_e49c9abdc0fea35e589b5b6b4b6" DEFAULT 'SYSDATETIME()', "orderId" int NOT NULL, "productId" int NOT NULL, "quantity" int NOT NULL, "price" decimal(18,2) NOT NULL, CONSTRAINT "PK_fe5c4758e5f47a681deb1065c92" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`DROP TABLE "orderItem"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
