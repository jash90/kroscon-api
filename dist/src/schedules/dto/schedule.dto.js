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
class ScheduleDto {
    constructor(schedule) {
        this.id = schedule.id;
        this.doctorId = schedule.doctorId;
        this.doctorFirstName = schedule.doctor.firstName;
        this.doctorLastName = schedule.doctor.lastName;
        this.dayOfWeek = schedule.dayOfWeek;
        this.hourOpen = schedule.hourOpen;
        this.hourClose = schedule.hourClose;
        this.createdAt = schedule.createdAt;
        this.updatedAt = schedule.updatedAt;
    }
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], ScheduleDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], ScheduleDto.prototype, "doctorId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "doctorFirstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "doctorLastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], ScheduleDto.prototype, "dayOfWeek", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "hourOpen", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ScheduleDto.prototype, "hourClose", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], ScheduleDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], ScheduleDto.prototype, "updatedAt", void 0);
exports.ScheduleDto = ScheduleDto;
//# sourceMappingURL=schedule.dto.js.map