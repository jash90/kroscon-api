import { MigrationInterface, QueryRunner } from 'typeorm';

export class seeds1609258651869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('1')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('2')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('3')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('4')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('5')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('6')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('7')`);
     await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('8')`);

     await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('rzut kością')`)   
     
     await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('bitewna')`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
