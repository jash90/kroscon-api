import {MigrationInterface, QueryRunner} from "typeorm";

export class createDatabase1609449650539 implements MigrationInterface {
    name = 'createDatabase1609449650539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "privileges" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_913e0b87d35069ac7bd7982d889" UNIQUE ("name"), CONSTRAINT "PK_13f3ff98ae4d5565ec5ed6036cd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "firstname" text NOT NULL, "lastname" text NOT NULL, "age" smallint, "city" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "privilege_id" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" SERIAL NOT NULL, "time" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_id" integer, "boardGame_id" integer, "table_id" integer, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tables" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_672c2f353f696989bb92d5e799c" UNIQUE ("name"), CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loanGames" ("id" SERIAL NOT NULL, "start" date NOT NULL, "end" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "hireUser_id" integer, "user_id" integer, "table_id" integer, "boardGame_id" integer, CONSTRAINT "PK_806171255ca8f00c5169941c69e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feedbacks" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "loanGame_id" integer, "user_id" integer, "boardGame_id" integer, CONSTRAINT "CHK_942e2a3f6a00169029ee43d3cf" CHECK (rating > 1 AND rating < 10), CONSTRAINT "PK_79affc530fdd838a9f1e0cc30be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mechanics" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_5fe13a39ef5b5718c94b2cdb10e" UNIQUE ("name"), CONSTRAINT "PK_2c0ed23afc0cc7ff361c17e53df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "publishers" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "boardGamesId" integer, CONSTRAINT "UQ_39082806f986a63cd7dcf1782a5" UNIQUE ("name"), CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_fa170fda66d232af69b7f880c9e" UNIQUE ("name"), CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boardGames" ("id" SERIAL NOT NULL, "name" text NOT NULL, "uuid" text NOT NULL, "min_players" smallint NOT NULL, "max_players" smallint NOT NULL, "playing_time" smallint NOT NULL, "min_age" smallint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "publisher_id" integer, CONSTRAINT "UQ_dd22a67ed9858185617b96beb77" UNIQUE ("name"), CONSTRAINT "UQ_bbfd48a7c8940a4d570c2fc0dec" UNIQUE ("uuid"), CONSTRAINT "CHK_1672dd675d5dbb42a2d4455b82" CHECK (min_age > 1 AND min_age < 99), CONSTRAINT "CHK_ec317cda040128883785d20d61" CHECK (max_players > 1), CONSTRAINT "CHK_8fefd383a36dc0afbfcb0bcc71" CHECK (min_players > 0), CONSTRAINT "PK_aad31ad7390826a56445f048641" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lectures" ("id" SERIAL NOT NULL, "name" text NOT NULL, "start" date NOT NULL, "end" date NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "event_id" integer, CONSTRAINT "PK_0fbf04287eb4e401af19caf7677" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "name" text NOT NULL, "start" date NOT NULL, "end" date NOT NULL, "description" text NOT NULL, "location" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_743b787d0e656e7209523f1c5ec" FOREIGN KEY ("privilege_id") REFERENCES "privileges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_4af5055a871c46d011345a255a6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_da6e121752dd09f1e263d3e624b" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_5027ce24b4bc5e090302b2f7754" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loanGames" ADD CONSTRAINT "FK_c725251fade4fdbe76f38d20444" FOREIGN KEY ("hireUser_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loanGames" ADD CONSTRAINT "FK_9c442897101849465240960ca91" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loanGames" ADD CONSTRAINT "FK_335cf12a6cb7b5af12f98405332" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loanGames" ADD CONSTRAINT "FK_7f0377b1928f7427f91e8c15383" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_bcd04c70a19d4bb7e274287d7f5" FOREIGN KEY ("loanGame_id") REFERENCES "loanGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_4334f6be2d7d841a9d5205a100e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_da6cdb581bb6673c09f24e8f6a9" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "publishers" ADD CONSTRAINT "FK_efd9dab6d097345b22946a93faa" FOREIGN KEY ("boardGamesId") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "boardGames" ADD CONSTRAINT "FK_b1bdcf45730dd050d3faf579ecd" FOREIGN KEY ("publisher_id") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lectures" ADD CONSTRAINT "FK_14745f06787f71fbed78300d96a" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lectures" DROP CONSTRAINT "FK_14745f06787f71fbed78300d96a"`);
        await queryRunner.query(`ALTER TABLE "boardGames" DROP CONSTRAINT "FK_b1bdcf45730dd050d3faf579ecd"`);
        await queryRunner.query(`ALTER TABLE "publishers" DROP CONSTRAINT "FK_efd9dab6d097345b22946a93faa"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_da6cdb581bb6673c09f24e8f6a9"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_4334f6be2d7d841a9d5205a100e"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_bcd04c70a19d4bb7e274287d7f5"`);
        await queryRunner.query(`ALTER TABLE "loanGames" DROP CONSTRAINT "FK_7f0377b1928f7427f91e8c15383"`);
        await queryRunner.query(`ALTER TABLE "loanGames" DROP CONSTRAINT "FK_335cf12a6cb7b5af12f98405332"`);
        await queryRunner.query(`ALTER TABLE "loanGames" DROP CONSTRAINT "FK_9c442897101849465240960ca91"`);
        await queryRunner.query(`ALTER TABLE "loanGames" DROP CONSTRAINT "FK_c725251fade4fdbe76f38d20444"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_5027ce24b4bc5e090302b2f7754"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_da6e121752dd09f1e263d3e624b"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_4af5055a871c46d011345a255a6"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_743b787d0e656e7209523f1c5ec"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP TABLE "lectures"`);
        await queryRunner.query(`DROP TABLE "boardGames"`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`DROP TABLE "publishers"`);
        await queryRunner.query(`DROP TABLE "mechanics"`);
        await queryRunner.query(`DROP TABLE "feedbacks"`);
        await queryRunner.query(`DROP TABLE "loanGames"`);
        await queryRunner.query(`DROP TABLE "tables"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "privileges"`);
    }

}
