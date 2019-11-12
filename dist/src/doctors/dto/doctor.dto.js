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
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../shared/enum/enums");
class DoctorDto {
    constructor(doctor) {
        this.id = doctor.id;
        this.numberPwz = doctor.numberPwz;
        this.firstName = doctor.firstName;
        this.lastName = doctor.lastName;
        this.specialization = doctor.specialization;
        this.createdAt = doctor.createdAt;
        this.updatedAt = doctor.updatedAt;
    }
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], DoctorDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DoctorDto.prototype, "numberPwz", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DoctorDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DoctorDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], DoctorDto.prototype, "specialization", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], DoctorDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], DoctorDto.prototype, "updatedAt", void 0);
exports.DoctorDto = DoctorDto;
//# sourceMappingURL=doctor.dto.js.map