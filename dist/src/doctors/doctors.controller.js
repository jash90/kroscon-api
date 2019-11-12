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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_doctor_dto_1 = require("./dto/create-doctor.dto");
const doctors_service_1 = require("./doctors.service");
const passport_1 = require("@nestjs/passport");
const doctor_entity_1 = require("./doctor.entity");
const doctor_dto_1 = require("./dto/doctor.dto");
const update_doctor_dto_1 = require("./dto/update-doctor.dto");
const doctor_offset_1 = require("./dto/doctor.offset");
const visit_dto_1 = require("../visits/dto/visit.dto");
let DoctorsController = class DoctorsController {
    constructor(doctorsService) {
        this.doctorsService = doctorsService;
    }
    findAll() {
        return this.doctorsService.findAll();
    }
    findOne(id) {
        return this.doctorsService.findOne(id);
    }
    create(createDoctorDto) {
        return this.doctorsService.create(createDoctorDto);
    }
    update(id, updateDoctorDto) {
        return this.doctorsService.update(id, updateDoctorDto);
    }
    delete(id) {
        return this.doctorsService.delete(id);
    }
    offset(index = 0) {
        return this.doctorsService.offset(index);
    }
    pantientVisits(id) {
        return this.doctorsService.doctorVisits(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({ type: [doctor_dto_1.DoctorDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: doctor_dto_1.DoctorDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: doctor_entity_1.Doctor }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: doctor_entity_1.Doctor }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_doctor_dto_1.UpdateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOkResponse({ type: doctor_entity_1.Doctor }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: doctor_offset_1.DoctorOffset }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "offset", null);
__decorate([
    common_1.Get(':doctorId/visits'),
    swagger_1.ApiOkResponse({ type: [visit_dto_1.VisitDto] }),
    swagger_1.ApiImplicitParam({ name: 'doctorId', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('doctorId', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorsController.prototype, "pantientVisits", null);
DoctorsController = __decorate([
    common_1.Controller('doctors'),
    swagger_1.ApiUseTags('doctors'),
    __metadata("design:paramtypes", [doctors_service_1.DoctorsService])
], DoctorsController);
exports.DoctorsController = DoctorsController;
//# sourceMappingURL=doctors.controller.js.map