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
const create_visit_dto_1 = require("./dto/create-visit.dto");
const visits_service_1 = require("./visits.service");
const passport_1 = require("@nestjs/passport");
const visit_entity_1 = require("./visit.entity");
const visit_dto_1 = require("./dto/visit.dto");
const update_visit_dto_1 = require("./dto/update-visit.dto");
const visit_offset_1 = require("./dto/visit.offset");
let VisitsController = class VisitsController {
    constructor(visitsService) {
        this.visitsService = visitsService;
    }
    findAll() {
        return this.visitsService.findAll();
    }
    findOne(id) {
        return this.visitsService.findOne(id);
    }
    create(createVisitDto) {
        return this.visitsService.create(createVisitDto);
    }
    update(id, updateVisitDto) {
        return this.visitsService.update(id, updateVisitDto);
    }
    delete(id) {
        return this.visitsService.delete(id);
    }
    offset(index = 0) {
        return this.visitsService.offset(index);
    }
    freeVisit(index) {
        return this.visitsService.freeVisit(index);
    }
    search(doctorId) {
        return this.visitsService.search(doctorId);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({ type: [visit_dto_1.VisitDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: visit_dto_1.VisitDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: visit_entity_1.Visit }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_visit_dto_1.CreateVisitDto]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: visit_entity_1.Visit }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_visit_dto_1.UpdateVisitDto]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOkResponse({ type: visit_entity_1.Visit }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: visit_offset_1.VisitOffset }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "offset", null);
__decorate([
    common_1.Get('freeVisit/:id'),
    swagger_1.ApiOkResponse({ type: visit_offset_1.VisitOffset }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "freeVisit", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: visit_dto_1.VisitDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VisitsController.prototype, "search", null);
VisitsController = __decorate([
    common_1.Controller('visits'),
    swagger_1.ApiUseTags('visits'),
    __metadata("design:paramtypes", [visits_service_1.VisitsService])
], VisitsController);
exports.VisitsController = VisitsController;
//# sourceMappingURL=visits.controller.js.map