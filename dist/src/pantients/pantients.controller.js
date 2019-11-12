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
const create_pantient_dto_1 = require("./dto/create-pantient.dto");
const pantients_service_1 = require("./pantients.service");
const passport_1 = require("@nestjs/passport");
const pantient_entity_1 = require("./pantient.entity");
const pantient_dto_1 = require("./dto/pantient.dto");
const update_pantient_dto_1 = require("./dto/update-pantient.dto");
const pantient_offset_1 = require("./dto/pantient.offset");
const visit_dto_1 = require("../visits/dto/visit.dto");
let PantientsController = class PantientsController {
    constructor(pantientsService) {
        this.pantientsService = pantientsService;
    }
    findAll() {
        return this.pantientsService.findAll();
    }
    findOne(id) {
        return this.pantientsService.findOne(id);
    }
    create(createPantientDto) {
        return this.pantientsService.create(createPantientDto);
    }
    update(id, updatePantientDto) {
        return this.pantientsService.update(id, updatePantientDto);
    }
    delete(id) {
        return this.pantientsService.delete(id);
    }
    offset(index = 0) {
        return this.pantientsService.offset(index);
    }
    pantientVisits(id) {
        return this.pantientsService.pantientVisits(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({ type: [pantient_dto_1.PantientDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: pantient_dto_1.PantientDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: pantient_entity_1.Pantient }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pantient_dto_1.CreatePantientDto]),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: pantient_entity_1.Pantient }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pantient_dto_1.UpdatePantientDto]),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOkResponse({ type: pantient_entity_1.Pantient }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: pantient_offset_1.PantientOffset }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "offset", null);
__decorate([
    common_1.Get(':pantientId/visits'),
    swagger_1.ApiOkResponse({ type: [visit_dto_1.VisitDto] }),
    swagger_1.ApiImplicitParam({ name: 'pantientId', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('pantientId', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PantientsController.prototype, "pantientVisits", null);
PantientsController = __decorate([
    common_1.Controller('pantients'),
    swagger_1.ApiUseTags('pantients'),
    __metadata("design:paramtypes", [pantients_service_1.PantientsService])
], PantientsController);
exports.PantientsController = PantientsController;
//# sourceMappingURL=pantients.controller.js.map