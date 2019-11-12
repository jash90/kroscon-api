"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_json_1 = __importDefault(require("./db.json"));
exports.config = {
    database: {
        dialect: 'postgres',
        host: db_json_1.default.host,
        port: 5533,
        username: db_json_1.default.user,
        password: db_json_1.default.pass,
        database: 'kroscon',
        logging: false,
    },
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
};
//# sourceMappingURL=config.production.js.map