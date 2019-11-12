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
const class_validator_1 = require("class-validator");
class UpdateScheduleDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateScheduleDto.prototype, "doctorId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.Min(1),
    class_validator_1.Max(7),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], UpdateScheduleDto.prototype, "dayOfWeek", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsMilitaryTime(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateScheduleDto.prototype, "hourOpen", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsMilitaryTime(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateScheduleDto.prototype, "hourClose", void 0);
exports.UpdateScheduleDto = UpdateScheduleDto;
//# sourceMappingURL=update-schedule.dto.js.map