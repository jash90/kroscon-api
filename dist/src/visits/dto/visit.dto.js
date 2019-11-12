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
class VisitDto {
    constructor(visit) {
        this.id = visit.id;
        this.doctorId = visit.doctorId;
        this.doctorFirstName = visit.doctor.firstName;
        this.doctorLastName = visit.doctor.lastName;
        this.pantientId = visit.pantientId;
        this.pantientFirstName = visit.pantient.firstName;
        this.pantientLastName = visit.pantient.lastName;
        this.date = visit.date;
        this.description = visit.description;
        this.createdAt = visit.createdAt;
        this.updatedAt = visit.updatedAt;
    }
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], VisitDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], VisitDto.prototype, "doctorId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], VisitDto.prototype, "doctorFirstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], VisitDto.prototype, "doctorLastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], VisitDto.prototype, "pantientId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], VisitDto.prototype, "pantientFirstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], VisitDto.prototype, "pantientLastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], VisitDto.prototype, "date", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], VisitDto.prototype, "description", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], VisitDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], VisitDto.prototype, "updatedAt", void 0);
exports.VisitDto = VisitDto;
//# sourceMappingURL=visit.dto.js.map