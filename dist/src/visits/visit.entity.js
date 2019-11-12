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
const pantient_entity_1 = require("../pantients/pantient.entity");
let Visit = class Visit extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BIGINT),
    __metadata("design:type", Number)
], Visit.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => doctor_entity_1.Doctor),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BIGINT, field: 'doctor_id' }),
    __metadata("design:type", Number)
], Visit.prototype, "doctorId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => pantient_entity_1.Pantient),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BIGINT, field: 'pantient_id' }),
    __metadata("design:type", Number)
], Visit.prototype, "pantientId", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Visit.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Visit.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], Visit.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Visit.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], Visit.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => doctor_entity_1.Doctor),
    __metadata("design:type", doctor_entity_1.Doctor)
], Visit.prototype, "doctor", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => pantient_entity_1.Pantient),
    __metadata("design:type", pantient_entity_1.Pantient)
], Visit.prototype, "pantient", void 0);
Visit = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'visit',
    })
], Visit);
exports.Visit = Visit;
//# sourceMappingURL=visit.entity.js.map