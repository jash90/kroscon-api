"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const visit_entity_1 = require("./visit.entity");
const schedule_entity_1 = require("../schedules/schedule.entity");
const doctor_entity_1 = require("../doctors/doctor.entity");
const pantient_entity_1 = require("../pantients/pantient.entity");
exports.visitsProviders = [{ provide: 'VisitsRepository', useValue: visit_entity_1.Visit }, { provide: 'SchedulesRepository', useValue: schedule_entity_1.Schedule },
    { provide: 'DoctorsRepository', useValue: doctor_entity_1.Doctor }, { provide: 'PantientsRepository', useValue: pantient_entity_1.Pantient }];
//# sourceMappingURL=visits.providers.js.map