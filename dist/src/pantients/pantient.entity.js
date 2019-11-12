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
const visit_entity_1 = require("../visits/visit.entity");
let Pantient = class Pantient extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.BIGINT),
    __metadata("design:type", Number)
], Pantient.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'first_name' }),
    __metadata("design:type", String)
], Pantient.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'last_name' }),
    __metadata("design:type", String)
], Pantient.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Length({
        min: 6, max: 6,
        msg: `The length of postcode must be 6.`,
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pantient.prototype, "postcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pantient.prototype, "street", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pantient.prototype, "city", void 0);
__decorate([
    sequelize_typescript_1.Length({
        min: 9, max: 9,
        msg: `The length of phone must be 6.`,
    }),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pantient.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Length({
        min: 11, max: 11,
        msg: `The length of pesel must be 11.`,
    }),
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Pantient.prototype, "pesel", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], Pantient.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Pantient.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], Pantient.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => visit_entity_1.Visit),
    __metadata("design:type", Array)
], Pantient.prototype, "visits", void 0);
Pantient = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'pantient',
    })
], Pantient);
exports.Pantient = Pantient;
//# sourceMappingURL=pantient.entity.js.map