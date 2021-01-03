import { MigrationInterface, QueryRunner } from 'typeorm';

export class seeds1609258651869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 1')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('tabel 2')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 3')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 4')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 5')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 6')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 7')`);
        await queryRunner.query(`INSERT INTO "tables" ("name") VALUES ('table 8')`);
   
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 1')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 2')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 3')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 4')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 5')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 6')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 7')`);
        await queryRunner.query(`INSERT INTO "mechanics" ("name") VALUES ('mech 8')`);
        
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 1')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 2')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 3')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 4')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 5')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 6')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 7')`);
        await queryRunner.query(`INSERT INTO "types" ("name") VALUES ('type 8')`);

        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 1')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 2')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 3')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 4')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 5')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 6')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 7')`);
        await queryRunner.query(`INSERT INTO "publishers" ("name") VALUES ('publisher 8')`);

       }
   
       public async down(queryRunner: QueryRunner): Promise<void> {
       }

}
