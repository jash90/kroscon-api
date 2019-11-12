"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./user.entity");
exports.usersProviders = [{ provide: 'UsersRepository', useValue: user_entity_1.User }];
//# sourceMappingURL=users.providers.js.map