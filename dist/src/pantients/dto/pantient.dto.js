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
class PantientDto {
    constructor(pantient) {
        this.id = pantient.id;
        this.firstName = pantient.firstName;
        this.lastName = pantient.lastName;
        this.postcode = pantient.postcode;
        this.street = pantient.street;
        this.city = pantient.city;
        this.phone = pantient.phone;
        this.pesel = pantient.pesel;
        this.createdAt = pantient.createdAt;
        this.updatedAt = pantient.updatedAt;
    }
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Number)
], PantientDto.prototype, "id", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "postcode", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "street", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "city", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], PantientDto.prototype, "pesel", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], PantientDto.prototype, "createdAt", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Date)
], PantientDto.prototype, "updatedAt", void 0);
exports.PantientDto = PantientDto;
//# sourceMappingURL=pantient.dto.js.map