CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "city" varchar(255) null,
  "age" int null,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "boardGames" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "uuid" int UNIQUE not null,
  "minPlayers" int NOT NULL,
  "maxPlayers" int NOT NULL,
  "playingTime" int NOT NULL,
  "minAge" int NOT NULL,
  "publisherId" int NOT NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "loanGames" (
  "id" SERIAL PRIMARY KEY,
  "userId" int NOT NULL,
  "boardGameId" int NOT NULL,
  "startLoan" timestamp NOT NULL,
  "endLoan" timestamp NULL,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
);

CREATE TABLE "publishers" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) not null,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "types" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "mechanics" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "boardGameTypes" (
  "id" SERIAL PRIMARY KEY,
  "boardGameId" int not null,
  "typeId" int not null,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "boardGameMechanics" (
  "id" SERIAL PRIMARY KEY,
  "boardGameId" int not null,
  "mechanicId" int not null,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

ALTER TABLE "loanGames" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "loanGames" ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGames" ADD FOREIGN KEY ("publisherId") REFERENCES "publishers" ("id");

ALTER TABLE "boardGameTypes" ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGameTypes" ADD FOREIGN KEY ("typeId") REFERENCES "types" ("id");

ALTER TABLE "boardGameMechanics" ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGameMechanics" ADD FOREIGN KEY ("mechanicId") REFERENCES "mechanics" ("id");