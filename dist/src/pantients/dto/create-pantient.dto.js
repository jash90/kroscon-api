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
class CreatePantientDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(6),
    class_validator_1.MaxLength(6),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "postcode", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "street", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "city", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsPhoneNumber('PL'),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(11),
    class_validator_1.MaxLength(11),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePantientDto.prototype, "pesel", void 0);
exports.CreatePantientDto = CreatePantientDto;
//# sourceMappingURL=create-pantient.dto.js.map