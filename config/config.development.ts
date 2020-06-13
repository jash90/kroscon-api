import db from './dbdebug.json';
export const config = {
    database: {
        dialect: 'postgres',
        host: db.host,
        port: db.port,
        username: db.user,
        password: db.pass,
        database: 'kroscon',
        logging: false,
    },
    jwtPrivateKey: 'jwtPrivateKey',
};
