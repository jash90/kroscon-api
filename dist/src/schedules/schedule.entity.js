"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const doctor_entity_1 = require("../doctors/doctor.entity");
let Schedule = class Schedule extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BIGINT),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => doctor_entity_1.Doctor),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BIGINT, field: 'doctor_id' }),
    __metadata("design:type", Number)
], Schedule.prototype, "doctorId", void 0);
__decorate([
    sequelize_typescript_1.Min(1),
    sequelize_typescript_1.Max(7),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Schedule.prototype, "dayOfWeek", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TIME),
    __metadata("design:type", String)
], Schedule.prototype, "hourOpen", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TIME),
    __metadata("design:type", String)
], Schedule.prototype, "hourClose", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], Schedule.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Schedule.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], Schedule.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => doctor_entity_1.Doctor),
    __metadata("design:type", doctor_entity_1.Doctor)
], Schedule.prototype, "doctor", void 0);
Schedule = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'schedule',
    })
], Schedule);
exports.Schedule = Schedule;
//# sourceMappingURL=schedule.entity.js.map