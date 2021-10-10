import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUsers1633821819316 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "privileges" (id, name, "createdAt") VALUES (1, 'user', now())`,
    );
    await queryRunner.query(
      `INSERT INTO "privileges" (id, name, "createdAt") VALUES (2, 'mod', now())`,
    );
    await queryRunner.query(
      `INSERT INTO "privileges" (id, name, "createdAt") VALUES (3, 'admin', now())`,
    );
    await queryRunner.query(
      `INSERT INTO "users" ("id", "firstname", "lastname", "email", "password", "privilege_id", "createdAt") VALUES (1, 'Test', 'Test', 'test@test.pl', '$2a$08$tFkQLRfMovvG4uPzP7WOWOkzSs/v/e/BMONjpnncTxaNavWU.SNcG', 3, now())`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
