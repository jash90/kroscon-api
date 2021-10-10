CREATE TABLE "privileges" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_913e0b87d35069ac7bd7982d889" UNIQUE ("name"), CONSTRAINT "PK_13f3ff98ae4d5565ec5ed6036cd" PRIMARY KEY ("id"));
CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "firstname" text NOT NULL, "lastname" text NOT NULL, "age" smallint, "city" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "privilege_id" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"));
CREATE TABLE "reservations" ("id" SERIAL NOT NULL, "time" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "user_id" integer, "boardGame_id" integer, "table_id" integer, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"));
CREATE TABLE "tables" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_672c2f353f696989bb92d5e799c" UNIQUE ("name"), CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"));
CREATE TABLE "loanGames" ("id" SERIAL NOT NULL, "start" date NOT NULL, "end" date, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "hireUser_id" integer, "user_id" integer, "table_id" integer, "boardGame_id" integer, CONSTRAINT "PK_806171255ca8f00c5169941c69e" PRIMARY KEY ("id"));
CREATE TABLE "feedbacks" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "loanGame_id" integer, "user_id" integer, "boardGame_id" integer, CONSTRAINT "CHK_942e2a3f6a00169029ee43d3cf" CHECK (rating > 1 AND rating < 10), CONSTRAINT "PK_79affc530fdd838a9f1e0cc30be" PRIMARY KEY ("id"));
CREATE TABLE "mechanics" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_5fe13a39ef5b5718c94b2cdb10e" UNIQUE ("name"), CONSTRAINT "PK_2c0ed23afc0cc7ff361c17e53df" PRIMARY KEY ("id"));
CREATE TABLE "publishers" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_39082806f986a63cd7dcf1782a5" UNIQUE ("name"), CONSTRAINT "PK_9d73f23749dca512efc3ccbea6a" PRIMARY KEY ("id"));
CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_fa170fda66d232af69b7f880c9e" UNIQUE ("name"), CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"));
CREATE TABLE "boardGames" ("id" SERIAL NOT NULL, "name" text NOT NULL, "uuid" text NOT NULL, "min_players" smallint NOT NULL, "max_players" smallint NOT NULL, "playing_time" smallint NOT NULL, "min_age" smallint NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "publisher_id" integer, CONSTRAINT "UQ_dd22a67ed9858185617b96beb77" UNIQUE ("name"), CONSTRAINT "UQ_bbfd48a7c8940a4d570c2fc0dec" UNIQUE ("uuid"), CONSTRAINT "CHK_1672dd675d5dbb42a2d4455b82" CHECK (min_age > 1 AND min_age < 99), CONSTRAINT "CHK_ec317cda040128883785d20d61" CHECK (max_players > 1), CONSTRAINT "CHK_8fefd383a36dc0afbfcb0bcc71" CHECK (min_players > 0), CONSTRAINT "PK_aad31ad7390826a56445f048641" PRIMARY KEY ("id"));
CREATE TABLE "lectures" ("id" SERIAL NOT NULL, "name" text NOT NULL, "start" date NOT NULL, "end" date NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "event_id" integer, CONSTRAINT "PK_0fbf04287eb4e401af19caf7677" PRIMARY KEY ("id"));
CREATE TABLE "events" ("id" SERIAL NOT NULL, "name" text NOT NULL, "start" date NOT NULL, "end" date NOT NULL, "description" text NOT NULL, "location" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"));
CREATE TABLE "boardGame_mechanic" ("mechanic_id" integer NOT NULL, "boardGame_id" integer NOT NULL, CONSTRAINT "PK_649c85b8e27ed8d038db67867d1" PRIMARY KEY ("mechanic_id", "boardGame_id"));

CREATE INDEX "IDX_85112f64e86883179bbc965bb3" ON "boardGame_mechanic" ("mechanic_id");
CREATE INDEX "IDX_fcac64ab27d6d327cdda0d6dc5" ON "boardGame_mechanic" ("boardGame_id");

CREATE TABLE "boardGame_type" ("type_id" integer NOT NULL, "boardGame_id" integer NOT NULL, CONSTRAINT "PK_bd235aa14fedec2fb09e4583a03" PRIMARY KEY ("type_id", "boardGame_id"));

CREATE INDEX "IDX_2b6a4257915fe3e14c330a59a5" ON "boardGame_type" ("type_id");
CREATE INDEX "IDX_7b5b5d3f53aab0abfb4a1bfea3" ON "boardGame_type" ("boardGame_id");

ALTER TABLE "users" ADD CONSTRAINT "FK_743b787d0e656e7209523f1c5ec" FOREIGN KEY ("privilege_id") REFERENCES "privileges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "reservations" ADD CONSTRAINT "FK_4af5055a871c46d011345a255a6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "reservations" ADD CONSTRAINT "FK_da6e121752dd09f1e263d3e624b" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "reservations" ADD CONSTRAINT "FK_5027ce24b4bc5e090302b2f7754" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "loanGames" ADD CONSTRAINT "FK_c725251fade4fdbe76f38d20444" FOREIGN KEY ("hireUser_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "loanGames" ADD CONSTRAINT "FK_9c442897101849465240960ca91" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "loanGames" ADD CONSTRAINT "FK_335cf12a6cb7b5af12f98405332" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "loanGames" ADD CONSTRAINT "FK_7f0377b1928f7427f91e8c15383" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_bcd04c70a19d4bb7e274287d7f5" FOREIGN KEY ("loanGame_id") REFERENCES "loanGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_4334f6be2d7d841a9d5205a100e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_da6cdb581bb6673c09f24e8f6a9" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "boardGames" ADD CONSTRAINT "FK_b1bdcf45730dd050d3faf579ecd" FOREIGN KEY ("publisher_id") REFERENCES "publishers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "lectures" ADD CONSTRAINT "FK_14745f06787f71fbed78300d96a" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE "boardGame_mechanic" ADD CONSTRAINT "FK_85112f64e86883179bbc965bb33" FOREIGN KEY ("mechanic_id") REFERENCES "mechanics"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "boardGame_mechanic" ADD CONSTRAINT "FK_fcac64ab27d6d327cdda0d6dc5a" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

ALTER TABLE "boardGame_type" ADD CONSTRAINT "FK_2b6a4257915fe3e14c330a59a55" FOREIGN KEY ("type_id") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "boardGame_type" ADD CONSTRAINT "FK_7b5b5d3f53aab0abfb4a1bfea32" FOREIGN KEY ("boardGame_id") REFERENCES "boardGames"("id") ON DELETE CASCADE ON UPDATE NO ACTION;


INSERT INTO "privileges" (id, name, "createdAt") VALUES (1, 'user', now());
INSERT INTO "privileges" (id, name, "createdAt") VALUES (2, 'mod', now());
INSERT INTO "privileges" (id, name, "createdAt") VALUES (3, 'admin', now());
INSERT INTO "users" ("id", "firstname", "lastname", "email", "password", "privilege_id", "createdAt") VALUES (1, 'Test', 'Test', 'test@test.pl', '$2a$08$tFkQLRfMovvG4uPzP7WOWOkzSs/v/e/BMONjpnncTxaNavWU.SNcG', 3, now());

INSERT INTO "tables" ("name") VALUES ('table 1');
INSERT INTO "tables" ("name") VALUES ('tabel 2');
INSERT INTO "tables" ("name") VALUES ('table 3');
INSERT INTO "tables" ("name") VALUES ('table 4');
INSERT INTO "tables" ("name") VALUES ('table 5');
INSERT INTO "tables" ("name") VALUES ('table 6');
INSERT INTO "tables" ("name") VALUES ('table 7');
INSERT INTO "tables" ("name") VALUES ('table 8');

INSERT INTO "mechanics" ("name") VALUES ('mech 1');
INSERT INTO "mechanics" ("name") VALUES ('mech 2');
INSERT INTO "mechanics" ("name") VALUES ('mech 3');
INSERT INTO "mechanics" ("name") VALUES ('mech 4');
INSERT INTO "mechanics" ("name") VALUES ('mech 5');
INSERT INTO "mechanics" ("name") VALUES ('mech 6');
INSERT INTO "mechanics" ("name") VALUES ('mech 7');
INSERT INTO "mechanics" ("name") VALUES ('mech 8');

INSERT INTO "types" ("name") VALUES ('type 1');
INSERT INTO "types" ("name") VALUES ('type 2');
INSERT INTO "types" ("name") VALUES ('type 3');
INSERT INTO "types" ("name") VALUES ('type 4');
INSERT INTO "types" ("name") VALUES ('type 5');
INSERT INTO "types" ("name") VALUES ('type 6');
INSERT INTO "types" ("name") VALUES ('type 7');
INSERT INTO "types" ("name") VALUES ('type 8');

INSERT INTO "publishers" ("name") VALUES ('publisher 1');
INSERT INTO "publishers" ("name") VALUES ('publisher 2');
INSERT INTO "publishers" ("name") VALUES ('publisher 3');
INSERT INTO "publishers" ("name") VALUES ('publisher 4');
INSERT INTO "publishers" ("name") VALUES ('publisher 5');
INSERT INTO "publishers" ("name") VALUES ('publisher 6');
INSERT INTO "publishers" ("name") VALUES ('publisher 7');
INSERT INTO "publishers" ("name") VALUES ('publisher 8');

INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 1', '123456', 1, 4, 60, 8, 1);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 2', '123457', 1, 4, 120, 8, 2);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 3', '123458', 1, 4, 80, 8, 3);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 4', '123459', 1, 4, 70, 8, 4);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 5', '123450', 1, 4, 75, 8, 5);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 6', '123451', 1, 4, 40, 8, 6);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 7', '123452', 1, 4, 60, 8, 7);
INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 8', '123453', 1, 4, 60, 8, 8);

INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 1', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 2', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 3', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 4', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 5', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 6', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 7', '2021-04-01 12:00', '2021-04-01 21:00', 'desc','Krosno');
INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 8', '2021-04-01 12:00', '2021-04-01 20:00', 'desc','Krosno');

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7);

INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);
INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8);

INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 1, 1);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 2, 2);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 3, 3);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 4, 4);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 5, 5);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 6, 6);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 7, 7);
INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 8, 8);

INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 1, 1);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 2, 2);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 3, 3);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 4, 4);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 5, 5);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 6, 6);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 7, 7);
INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 8, 8);

INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 1, 1, 1);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 2, 1, 2);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 3, 1, 3);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 4, 1, 4);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 5, 1, 5);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 6, 1, 6);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 7, 1, 7);
INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 8, 1, 8);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (1, 1);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (2, 1);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (1, 2);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (2, 2);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (3, 3);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (4, 3);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (3, 4);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (4, 4);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (5, 5);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (6, 5);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (5, 6);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (6, 6);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (7, 7);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (8, 7);

INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (7, 8);
INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (8, 8);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (1, 1);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (2, 1);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (1, 2);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (2, 2);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (3, 3);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (4, 3);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (3, 4);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (4, 4);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (5, 5);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (6, 5);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (5, 6);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (6, 6);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (7, 7);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (8, 7);

INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (7, 8);
INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (8, 8);