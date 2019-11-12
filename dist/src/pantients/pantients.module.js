"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("../database/database.module");
const common_1 = require("@nestjs/common");
const pantients_controller_1 = require("./pantients.controller");
const pantients_service_1 = require("./pantients.service");
const pantients_providers_1 = require("./pantients.providers");
let PantientsModule = class PantientsModule {
};
PantientsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [pantients_controller_1.PantientsController],
        providers: [pantients_service_1.PantientsService, ...pantients_providers_1.pantientsProviders],
        exports: [],
    })
], PantientsModule);
exports.PantientsModule = PantientsModule;
//# sourceMappingURL=pantients.module.js.map