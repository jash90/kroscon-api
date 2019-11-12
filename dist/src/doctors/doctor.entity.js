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
const enums_1 = require("../shared/enum/enums");
const schedule_entity_1 = require("../schedules/schedule.entity");
const visit_entity_1 = require("../visits/visit.entity");
let Doctor = class Doctor extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BIGINT),
    __metadata("design:type", Number)
], Doctor.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Length({
        min: 7, max: 7,
        msg: `The length of comment must be 7.`,
    }),
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Doctor.prototype, "numberPwz", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'first_name' }),
    __metadata("design:type", String)
], Doctor.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'last_name' }),
    __metadata("design:type", String)
], Doctor.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.ENUM(['chirurg_ogólny', 'okulista', 'dermatolog', 'laryngolog', 'ginekolog', 'kardiolog', 'urolog', 'ortopeda', 'pulmonolog',
            'neurolog', 'alergolog', 'gastrolog', 'diabetolog', 'endokrynolog', 'reumatolog', 'nefrolog', 'hematolog', 'onkolog']),
    }),
    __metadata("design:type", String)
], Doctor.prototype, "specialization", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], Doctor.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Doctor.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], Doctor.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => schedule_entity_1.Schedule),
    __metadata("design:type", Array)
], Doctor.prototype, "schedules", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => visit_entity_1.Visit),
    __metadata("design:type", Array)
], Doctor.prototype, "visits", void 0);
Doctor = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'doctor',
    })
], Doctor);
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.entity.js.map