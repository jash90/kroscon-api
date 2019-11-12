"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schedule_entity_1 = require("./schedule.entity");
const doctor_entity_1 = require("../doctors/doctor.entity");
exports.schedulesProviders = [{ provide: 'SchedulesRepository', useValue: schedule_entity_1.Schedule }, { provide: 'DoctorsRepository', useValue: doctor_entity_1.Doctor }];
//# sourceMappingURL=schedules.providers.js.map