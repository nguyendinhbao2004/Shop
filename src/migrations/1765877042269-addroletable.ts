import { MigrationInterface, QueryRunner } from "typeorm";

export class Addroletable1765877042269 implements MigrationInterface {
    name = 'Addroletable1765877042269'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_c1433d71a4838793a49dcad46ab" DEFAULT NEWSEQUENTIALID(), "createAt" datetime2 NOT NULL CONSTRAINT "DF_e6c4ead7310ae3dadd4294e387e" DEFAULT getdate(), "updateAt" datetime2 NOT NULL CONSTRAINT "DF_cbb05274a25edd2a770ba27b04e" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD "roleId" uniqueidentifier`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "FK_3ad05e7971a201741940fb667c6" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "FK_3ad05e7971a201741940fb667c6"`);
        await queryRunner.query(`ALTER TABLE "Accounts" DROP COLUMN "roleId"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
