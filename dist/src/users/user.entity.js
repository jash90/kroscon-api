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
let User = class User extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_typescript_1.DataType.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'first_name' }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column({ field: 'last_name' }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM(enums_1.Gender.female, enums_1.Gender.male) }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", String)
], User.prototype, "birthday", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
User = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'user',
    })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map