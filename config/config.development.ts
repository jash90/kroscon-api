import {ConnectionOptions} from 'typeorm/connection/ConnectionOptions';
import {development} from './config.json';

export const config: ConnectionOptions = {
    type: 'postgres',
    host: development.host,
    port: development.port,
    username: development.username,
    password: development.password,
    database: development.database,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true
};
