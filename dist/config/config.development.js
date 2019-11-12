"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbdebug_json_1 = __importDefault(require("./dbdebug.json"));
exports.config = {
    database: {
        dialect: 'postgres',
        host: dbdebug_json_1.default.host,
        port: 5533,
        username: dbdebug_json_1.default.user,
        password: dbdebug_json_1.default.pass,
        database: 'kroscon',
        logging: false,
    },
    jwtPrivateKey: 'jwtPrivateKey',
};
//# sourceMappingURL=config.development.js.map