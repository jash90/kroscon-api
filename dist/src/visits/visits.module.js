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
const visits_controller_1 = require("./visits.controller");
const visits_service_1 = require("./visits.service");
const visits_providers_1 = require("./visits.providers");
let VisitsModule = class VisitsModule {
};
VisitsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [visits_controller_1.VisitsController],
        providers: [visits_service_1.VisitsService, ...visits_providers_1.visitsProviders],
        exports: [],
    })
], VisitsModule);
exports.VisitsModule = VisitsModule;
//# sourceMappingURL=visits.module.js.map