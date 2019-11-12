"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doctor_entity_1 = require("./doctor.entity");
exports.doctorsProviders = [{ provide: 'DoctorsRepository', useValue: doctor_entity_1.Doctor }];
//# sourceMappingURL=doctors.providers.js.map