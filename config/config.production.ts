import db from './db.json';
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
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
};
