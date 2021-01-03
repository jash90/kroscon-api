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

        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 1', '123456', 1, 4, 60, 8, 1)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 2', '123457', 1, 4, 120, 8, 2)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 3', '123458', 1, 4, 80, 8, 3)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 4', '123459', 1, 4, 70, 8, 4)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 5', '123450', 1, 4, 75, 8, 5)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 6', '123451', 1, 4, 40, 8, 6)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 7', '123452', 1, 4, 60, 8, 7)`);
        await queryRunner.query(`INSERT INTO "boardGames"( name, uuid, min_players, max_players, playing_time, min_age, publisher_id) VALUES ('boardGame 8', '123453', 1, 4, 60, 8, 8)`);

        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 1', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 2', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 3', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 4', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 5', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 6', '2021-04-01 12:00', '2021-04-01 18:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 7', '2021-04-01 12:00', '2021-04-01 21:00', 'desc','Krosno')`);
        await queryRunner.query(`INSERT INTO "events" (name, start, "end", description, location) VALUES ('event 8', '2021-04-01 12:00', '2021-04-01 20:00', 'desc','Krosno')`);

        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 1)`);
        
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 2)`);

        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 3)`);

        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 4)`);
        
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 5)`);

        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 6)`);

        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 7)`);

        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 1', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 2', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 3', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 4', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 5', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 6', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 7', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);
        await queryRunner.query(`INSERT INTO "lectures" ( name, start, "end", description, event_id) VALUES ('lectures 8', '2021-04-01 12:20', '2021-04-01 13:00', 'desc', 8)`);

        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 1, 1)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 2, 2)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 3, 3)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 4, 4)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 5, 5)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 6, 6)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 7, 7)`);
        await queryRunner.query(`INSERT INTO "reservations" ( "time", user_id, "boardGame_id", table_id) VALUES ('2020-04-01 12:00', 1, 8, 8)`);

        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 1, 1)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 2, 2)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 3, 3)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 4, 4)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 5, 5)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 6, 6)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 7, 7)`);
        await queryRunner.query(`INSERT INTO "loanGames" (start, "end", "hireUser_id", user_id, table_id, "boardGame_id") VALUES ('2020-04-01', null, 1, 1, 8, 8)`);
        
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 1, 1, 1)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 2, 1, 2)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 3, 1, 3)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 4, 1, 4)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 5, 1, 5)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 6, 1, 6)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 7, 1, 7)`);
        await queryRunner.query(`INSERT INTO feedbacks( rating, "loanGame_id", user_id, "boardGame_id") VALUES (5, 8, 1, 8)`);

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (1, 1)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (2, 1)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (1, 2)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (2, 2)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (3, 3)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (4, 3)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (3, 4)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (4, 4)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (5, 5)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (6, 5)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (5, 6)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (6, 6)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (7, 7)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (8, 7)`)

        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (7, 8)`)
        await queryRunner.query(`INSERT INTO "boardGame_mechanic"( mechanic_id, "boardGame_id") VALUES (8, 8)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (1, 1)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (2, 1)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (1, 2)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (2, 2)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (3, 3)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (4, 3)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (3, 4)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (4, 4)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (5, 5)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (6, 5)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (5, 6)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (6, 6)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (7, 7)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (8, 7)`)

        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (7, 8)`)
        await queryRunner.query(`INSERT INTO "boardGame_type"( type_id, "boardGame_id") VALUES (8, 8)`)
       }
   
       public async down(queryRunner: QueryRunner): Promise<void> {
       }

}
