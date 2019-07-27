CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "city" varchar(255) null,
  "age" int null,
  "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp,
  "deletedAt" timestamp
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
  "updatedAt" timestamp,
  "deletedAt" timestamp
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

CREATE TABLE "typeGames" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "mechanicsGames" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(255) NOT NULL,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "boardGamesTypeGames" (
  "id" SERIAL PRIMARY KEY,
  "boardGameId" int not null,
  "typeGameId" int not null,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

CREATE TABLE "boardGamesMechanicsGames" (
  "id" SERIAL PRIMARY KEY,
  "boardGameId" int not null,
  "mechanicsGameId" int not null,
  "createdAt" timestamp not null,
  "updatedAt" timestamp null,
  "deletedAt" timestamp null
);

ALTER TABLE "loanGames" ADD FOREIGN KEY ("userId") REFERENCES "users" ("id");

ALTER TABLE "loanGames" ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGames" ADD FOREIGN KEY ("publisherId") REFERENCES "publishers" ("id");

ALTER TABLE "boardGamesTypeGames" ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGamesTypeGames" ADD FOREIGN KEY ("typeGameId") REFERENCES "typeGames" ("id");

ALTER TABLE "boardGamesMechanicsGames" ADD FOREIGN KEY ("boardGameId") REFERENCES "boardGames" ("id");

ALTER TABLE "boardGamesMechanicsGames" ADD FOREIGN KEY ("mechanicsGameId") REFERENCES "mechanicsGames" ("id");