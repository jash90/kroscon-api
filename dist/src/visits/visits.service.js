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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const visit_entity_1 = require("./visit.entity");
const visit_dto_1 = require("./dto/visit.dto");
const js_joda_1 = require("js-joda");
const doctor_entity_1 = require("../doctors/doctor.entity");
const pantient_entity_1 = require("../pantients/pantient.entity");
let VisitsService = class VisitsService {
    constructor(visitsRepository, schedulesRepository, doctorsRepository, pantientsRepository) {
        this.visitsRepository = visitsRepository;
        this.schedulesRepository = schedulesRepository;
        this.doctorsRepository = doctorsRepository;
        this.pantientsRepository = pantientsRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const visits = yield this.visitsRepository.findAll({
                include: [doctor_entity_1.Doctor, pantient_entity_1.Pantient],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return visits.map(visit => {
                return new visit_dto_1.VisitDto(visit);
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const visit = yield this.visitsRepository.findByPk(id, {
                include: [doctor_entity_1.Doctor, pantient_entity_1.Pantient],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!visit) {
                throw new common_1.HttpException('No visit found', common_1.HttpStatus.NOT_FOUND);
            }
            return new visit_dto_1.VisitDto(visit);
        });
    }
    create(createVisitDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { doctorId, pantientId, date, description } = createVisitDto;
            const visit = new visit_entity_1.Visit();
            visit.doctorId = doctorId;
            visit.pantientId = pantientId;
            visit.date = new Date(date);
            visit.description = description;
            const doctor = yield this.doctorsRepository.findByPk(doctorId);
            if (!doctor) {
                throw new common_1.HttpException('Doctor not found', common_1.HttpStatus.NOT_FOUND);
            }
            const pantient = yield this.pantientsRepository.findByPk(pantientId);
            if (!pantient) {
                throw new common_1.HttpException('Pantient not found', common_1.HttpStatus.NOT_FOUND);
            }
            const visitDay = js_joda_1.LocalDateTime.from(js_joda_1.nativeJs(new Date(date)));
            const dateVisit = yield this.dateVisits(new Date(visitDay.toString()));
            if (dateVisit) {
                throw new common_1.HttpException('Wizyta w danym terminie istnieje.', common_1.HttpStatus.CONFLICT);
            }
            const schedules = yield this.schedulesRepository.findAll({
                where: { doctorId },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (schedules.length === 0) {
                throw new common_1.HttpException('Doktor nie ma harmonogramu przyjeć.', common_1.HttpStatus.NOT_FOUND);
            }
            const schedule = schedules.find(s => s.dayOfWeek === visitDay.dayOfWeek().value());
            if (schedule) {
                const hourOpen = js_joda_1.LocalTime.parse(schedule.hourOpen);
                const hourClose = js_joda_1.LocalTime.parse(schedule.hourClose);
                if ((!hourOpen.equals(visitDay.toLocalTime()) && !hourClose.equals(visitDay.toLocalTime()))
                    && !(hourOpen.isBefore(visitDay.toLocalTime()) && hourClose.isAfter(visitDay.toLocalTime()))) {
                    throw new common_1.HttpException('Doctor nie przyjmuje o danej godzinie.', common_1.HttpStatus.CONFLICT);
                }
            }
            else {
                throw new common_1.HttpException('Doctor nie przyjmuje danego dnia.', common_1.HttpStatus.CONFLICT);
            }
            try {
                return yield visit.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    getVisit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const visit = yield this.visitsRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!visit) {
                throw new common_1.HttpException('No visit found', common_1.HttpStatus.NOT_FOUND);
            }
            return visit;
        });
    }
    update(id, updateVisitDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const visit = yield this.getVisit(id);
            visit.doctorId = updateVisitDto.doctorId || visit.doctorId;
            visit.pantientId = updateVisitDto.pantientId || visit.pantientId;
            visit.date = updateVisitDto.date || visit.date;
            visit.description = updateVisitDto.description || visit.description;
            try {
                return yield visit.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const visit = yield this.getVisit(id);
            yield visit.destroy();
            return visit;
        });
    }
    offset(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const visits = yield this.visitsRepository.findAndCountAll({
                include: [doctor_entity_1.Doctor, pantient_entity_1.Pantient],
                limit: 100,
                offset: index * 100,
                order: ['id'],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            const visitsDto = visits.rows.map(visit => {
                return new visit_dto_1.VisitDto(visit);
            });
            return { rows: visitsDto, count: visits.count };
        });
    }
    freeVisit(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const freeDay = [];
            const schedules = yield this.schedulesRepository.findAll({
                where: {
                    doctorId,
                },
            });
            let morning = js_joda_1.LocalDateTime.now().withMinute(0).withSecond(0).withNano(0);
            while (freeDay.length < 13) {
                const schedule = schedules.find((s) => s.dayOfWeek === morning.dayOfWeek().value());
                if (schedule) {
                    const hourOpen = Number(schedule.hourOpen.replace(':00:00', ''));
                    const hourClose = Number(schedule.hourClose.replace(':00:00', ''));
                    for (let index = hourOpen; index < hourClose; index++) {
                        morning = morning.withHour(index);
                        const visit = yield visit_entity_1.Visit.findOne({
                            where: {
                                doctorId,
                                date: morning.toString(),
                            },
                            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                        });
                        if (!visit) {
                            freeDay.push(morning.toString());
                        }
                    }
                }
                morning = morning.plusDays(1);
            }
            return freeDay;
        });
    }
    search(doctorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = js_joda_1.LocalDateTime.now().toLocalDate().toString();
            const next10 = js_joda_1.LocalDateTime.now().plusDays(100).toString();
            const visits = yield this.visitsRepository.findAll({
                where: {
                    doctorId,
                    date: {
                        $between: [new Date(now), new Date(next10)],
                    },
                },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!visits) {
                throw new common_1.HttpException('No visit found', common_1.HttpStatus.NOT_FOUND);
            }
            return visits.map(visit => {
                return new visit_dto_1.VisitDto(visit);
            });
        });
    }
    dateVisits(date) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.visitsRepository.findOne({
                where: { date },
                include: [doctor_entity_1.Doctor, pantient_entity_1.Pantient],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
        });
    }
};
VisitsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('VisitsRepository')),
    __param(1, common_1.Inject('SchedulesRepository')),
    __param(2, common_1.Inject('DoctorsRepository')),
    __param(3, common_1.Inject('PantientsRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], VisitsService);
exports.VisitsService = VisitsService;
//# sourceMappingURL=visits.service.js.map