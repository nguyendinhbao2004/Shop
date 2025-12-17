import { MigrationInterface, QueryRunner } from "typeorm";

export class Fixrole1765878276532 implements MigrationInterface {
    name = 'Fixrole1765878276532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "FK_3ad05e7971a201741940fb667c6"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ALTER COLUMN "roleId" uniqueidentifier NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "FK_3ad05e7971a201741940fb667c6" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Accounts" DROP CONSTRAINT "FK_3ad05e7971a201741940fb667c6"`);
        await queryRunner.query(`ALTER TABLE "Accounts" ALTER COLUMN "roleId" uniqueidentifier`);
        await queryRunner.query(`ALTER TABLE "Accounts" ADD CONSTRAINT "FK_3ad05e7971a201741940fb667c6" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
