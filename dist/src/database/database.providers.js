"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_entity_1 = require("../users/user.entity");
const config_service_1 = require("./../shared/config/config.service");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize(configService.sequelizeOrmConfig);
            sequelize.addModels([user_entity_1.User]);
            yield sequelize.sync();
            return sequelize;
        }),
        inject: [config_service_1.ConfigService],
    },
];
//# sourceMappingURL=database.providers.js.map