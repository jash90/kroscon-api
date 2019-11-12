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
const create_schedule_dto_1 = require("./dto/create-schedule.dto");
const schedules_service_1 = require("./schedules.service");
const passport_1 = require("@nestjs/passport");
const schedule_entity_1 = require("./schedule.entity");
const schedule_dto_1 = require("./dto/schedule.dto");
const update_schedule_dto_1 = require("./dto/update-schedule.dto");
const schedules_offset_1 = require("./dto/schedules.offset");
let SchedulesController = class SchedulesController {
    constructor(schedulesService) {
        this.schedulesService = schedulesService;
    }
    findAll() {
        return this.schedulesService.findAll();
    }
    findOne(id) {
        return this.schedulesService.findOne(id);
    }
    create(createScheduleDto) {
        return this.schedulesService.create(createScheduleDto);
    }
    update(id, updateScheduleDto) {
        return this.schedulesService.update(id, updateScheduleDto);
    }
    delete(id) {
        return this.schedulesService.delete(id);
    }
    search(id) {
        return this.schedulesService.search(id);
    }
    offset(index = 0) {
        return this.schedulesService.offset(index);
    }
};
__decorate([
    common_1.Get(),
    swagger_1.ApiOkResponse({ type: [schedule_dto_1.ScheduleDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: schedule_dto_1.ScheduleDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({ type: schedule_entity_1.Schedule }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_schedule_dto_1.CreateScheduleDto]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOkResponse({ type: schedule_entity_1.Schedule }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_schedule_dto_1.UpdateScheduleDto]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOkResponse({ type: schedule_entity_1.Schedule }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: schedule_dto_1.ScheduleDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "search", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: schedules_offset_1.ScheduleOffset }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SchedulesController.prototype, "offset", null);
SchedulesController = __decorate([
    common_1.Controller('schedules'),
    swagger_1.ApiUseTags('schedules'),
    __metadata("design:paramtypes", [schedules_service_1.SchedulesService])
], SchedulesController);
exports.SchedulesController = SchedulesController;
//# sourceMappingURL=schedules.controller.js.map