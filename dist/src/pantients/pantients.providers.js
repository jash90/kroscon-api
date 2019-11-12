"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pantient_entity_1 = require("./pantient.entity");
exports.pantientsProviders = [{ provide: 'PantientsRepository', useValue: pantient_entity_1.Pantient }];
//# sourceMappingURL=pantients.providers.js.map