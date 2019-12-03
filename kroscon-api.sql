DROP SCHEMA public CASCADE;

CREATE SCHEMA public;

--If you are using PostgreSQL 9.3 or greater, you may also need to restore the default grants.
GRANT ALL ON SCHEMA public TO postgres;

GRANT ALL ON SCHEMA public TO public;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "firstname" varchar(255) NOT NULL,
  "lastname" varchar(255) NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL,
  "city" varchar(255) NULL,
  "age" int NULL,
  "token" varchar(255) NULL,
  "tokenExpired" timestamp NULL,
  "privilegeId" int NOT NULL DEFAULT 1,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "boardGames" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "uuid" int UNIQUE NOT NULL,
  "minPlayers" int NOT NULL,
  "maxPlayers" int NOT NULL,
  "playingTime" int NOT NULL,
  "minAge" int NOT NULL,
  "publisherId" int NOT NULL,
  "image" text,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "loanGames" (
  "id" SERIAL PRIMARY KEY,
  "userId" int NOT NULL,
  "boardGameId" int NOT NULL,
  "hireUserId" int NOT NULL,
  "start" timestamp NOT NULL,
  "end" timestamp NULL,
  "tableId" int,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "publishers" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "types" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "mechanics" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "boardGameTypes" (
  "id" SERIAL PRIMARY KEY,
  "boardGameId" int NOT NULL,
  "typeId" int NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "boardGameMechanics" (
  "id" SERIAL PRIMARY KEY,
  "boardGameId" int NOT NULL,
  "mechanicId" int NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "privileges" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT NOW(),
  "updatedAt" timestamp NULL,
  "deletedAt" timestamp NULL
);

CREATE TABLE "feedbacks" (
  "id" SERIAL PRIMARY KEY,
  "userId" int NOT NULL,
  "boardGameId" int NOT NULL,
  "loanGameId" int NOT NULL,
  "feedback" int NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);

CREATE TABLE "tables" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);

CREATE TABLE "reservations" (
  "id" SERIAL PRIMARY KEY,
  "userId" int NOT NULL,
  "boardGameId" int NOT NULL,
  "tableId" int NOT NULL,
  "time" timestamp NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);

CREATE TABLE "events" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "start" timestamp NOT NULL,
  "end" timestamp NOT NULL,
  "description" text NOT NULL,
  "location" text NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);

CREATE TABLE "lectures" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "start" timestamp NOT NULL,
  "end" timestamp NOT NULL,
  "description" text NOT NULL,
  "eventId" int NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);

ALTER TABLE "users"
  ADD FOREIGN KEY ("privilegeId") REFERENCES "privileges" ("id");

ALTER TABLE "loanGames"
  ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "loanGames"
  ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGames"
  ADD FOREIGN KEY ("publisherId") REFERENCES "publishers" ("id");

ALTER TABLE "loanGames"
  ADD FOREIGN KEY ("hireUserId") REFERENCES "users" ("id");

ALTER TABLE "boardGameTypes"
  ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGameTypes"
  ADD FOREIGN KEY ("typeId") REFERENCES "types" ("id");

ALTER TABLE "boardGameMechanics"
  ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGameMechanics"
  ADD FOREIGN KEY ("mechanicId") REFERENCES "mechanics" ("id");

ALTER TABLE "loanGames"
  ADD FOREIGN KEY ("tableId") REFERENCES "tables" ("id");

ALTER TABLE "feedbacks"
  ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "feedbacks"
  ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "feedbacks"
  ADD FOREIGN KEY ("loanGameId") REFERENCES "loanGames" ("id");

ALTER TABLE "reservations"
  ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "reservations"
  ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "reservations"
  ADD FOREIGN KEY ("tableId") REFERENCES "tables" ("id");

ALTER TABLE "lectures"
  ADD FOREIGN KEY ("eventId") REFERENCES "events" ("id");

INSERT INTO public.privileges (id, name, "createdAt")
  VALUES (1, 'user', now());

INSERT INTO public.privileges (id, name, "createdAt")
  VALUES (2, 'mod', now());

INSERT INTO public.privileges (id, name, "createdAt")
  VALUES (3, 'admin', now());

INSERT INTO "users" ("id", "firstname", "lastname", "email", "password", "privilegeId", "createdAt")
  VALUES (1, 'Test', 'Test', 'test@test.pl', '$2a$08$tFkQLRfMovvG4uPzP7WOWOkzSs/v/e/BMONjpnncTxaNavWU.SNcG', 3, now());

INSERT INTO public.publishers (name, "createdAt")
  VALUES ('text', now());

INSERT INTO public.types (name, "createdAt")
  VALUES ('test', now());

INSERT INTO public.mechanics (name, "createdAt")
  VALUES ('test', now());

