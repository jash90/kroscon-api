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
const doctor_entity_1 = require("./doctor.entity");
const doctor_dto_1 = require("./dto/doctor.dto");
const visit_entity_1 = require("../visits/visit.entity");
const schedule_entity_1 = require("../schedules/schedule.entity");
const visit_dto_1 = require("../visits/dto/visit.dto");
const pantient_entity_1 = require("../pantients/pantient.entity");
let DoctorsService = class DoctorsService {
    constructor(doctorsRepository) {
        this.doctorsRepository = doctorsRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const doctors = yield this.doctorsRepository.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return doctors.map(doctor => {
                return new doctor_dto_1.DoctorDto(doctor);
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.doctorsRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!doctor) {
                throw new common_1.HttpException('No doctor found', common_1.HttpStatus.NOT_FOUND);
            }
            return new doctor_dto_1.DoctorDto(doctor);
        });
    }
    create(createDoctorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = new doctor_entity_1.Doctor();
            doctor.numberPwz = createDoctorDto.numberPwz;
            doctor.firstName = createDoctorDto.firstName;
            doctor.lastName = createDoctorDto.lastName;
            doctor.specialization = createDoctorDto.specialization;
            try {
                return yield doctor.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    getDoctor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.doctorsRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!doctor) {
                throw new common_1.HttpException('No doctor found', common_1.HttpStatus.NOT_FOUND);
            }
            return doctor;
        });
    }
    update(id, updateDoctorDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.getDoctor(id);
            doctor.numberPwz = updateDoctorDto.numberPwz || doctor.numberPwz;
            doctor.firstName = updateDoctorDto.firstName || doctor.firstName;
            doctor.lastName = updateDoctorDto.lastName || doctor.lastName;
            doctor.specialization = updateDoctorDto.specialization || doctor.specialization;
            try {
                return yield doctor.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.getDoctor(id);
            yield doctor.destroy();
            return doctor;
        });
    }
    offset(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctors = yield this.doctorsRepository.findAndCountAll({
                include: [visit_entity_1.Visit, schedule_entity_1.Schedule],
                limit: 100,
                offset: index * 100,
                order: ['id'],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            const DoctorsDto = doctors.rows.map(doctor => {
                return new DoctorsDto(doctor);
            });
            return { rows: DoctorsDto, count: doctors.count };
        });
    }
    doctorVisits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const doctor = yield this.doctorsRepository.findByPk(id, {
                include: [{ model: visit_entity_1.Visit, include: [doctor_entity_1.Doctor, pantient_entity_1.Pantient] }],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return doctor.visits.map(visit => {
                return new visit_dto_1.VisitDto(visit);
            });
        });
    }
};
DoctorsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('DoctorsRepository')),
    __metadata("design:paramtypes", [Object])
], DoctorsService);
exports.DoctorsService = DoctorsService;
//# sourceMappingURL=doctors.service.js.map