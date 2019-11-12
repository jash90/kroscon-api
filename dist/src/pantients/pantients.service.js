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
const pantient_entity_1 = require("./pantient.entity");
const pantient_dto_1 = require("./dto/pantient.dto");
const visit_entity_1 = require("../visits/visit.entity");
const visit_dto_1 = require("../visits/dto/visit.dto");
const doctor_entity_1 = require("../doctors/doctor.entity");
let PantientsService = class PantientsService {
    constructor(pantientsRepository) {
        this.pantientsRepository = pantientsRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const pantients = yield this.pantientsRepository.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return pantients.map(pantient => {
                return new pantient_dto_1.PantientDto(pantient);
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantient = yield this.pantientsRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!pantient) {
                throw new common_1.HttpException('No pantient found', common_1.HttpStatus.NOT_FOUND);
            }
            return new pantient_dto_1.PantientDto(pantient);
        });
    }
    create(createPantientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantient = new pantient_entity_1.Pantient();
            pantient.firstName = createPantientDto.firstName;
            pantient.lastName = createPantientDto.lastName;
            pantient.postcode = createPantientDto.postcode;
            pantient.street = createPantientDto.street;
            pantient.city = createPantientDto.city;
            pantient.phone = createPantientDto.phone;
            pantient.pesel = createPantientDto.pesel;
            try {
                return yield pantient.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    getPantient(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantient = yield this.pantientsRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!pantient) {
                throw new common_1.HttpException('No pantient found', common_1.HttpStatus.NOT_FOUND);
            }
            return pantient;
        });
    }
    update(id, updatePantientDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantient = yield this.getPantient(id);
            pantient.firstName = updatePantientDto.firstName || pantient.firstName;
            pantient.lastName = updatePantientDto.lastName || pantient.lastName;
            pantient.postcode = updatePantientDto.postcode || pantient.postcode;
            pantient.street = updatePantientDto.street || pantient.street;
            pantient.city = updatePantientDto.city || pantient.city;
            pantient.phone = updatePantientDto.phone || pantient.phone;
            pantient.pesel = updatePantientDto.pesel || pantient.pesel;
            try {
                return yield pantient.save();
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantient = yield this.getPantient(id);
            yield pantient.destroy();
            return pantient;
        });
    }
    offset(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantients = yield this.pantientsRepository.findAndCountAll({
                include: [visit_entity_1.Visit],
                limit: 100,
                offset: index * 100,
                order: ['id'],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            const PantientsDto = pantients.rows.map(pantient => {
                return new pantient_dto_1.PantientDto(pantient);
            });
            return { rows: PantientsDto, count: pantients.count };
        });
    }
    pantientVisits(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pantient = yield this.pantientsRepository.findByPk(id, {
                include: [{ model: visit_entity_1.Visit, include: [doctor_entity_1.Doctor, pantient_entity_1.Pantient] }],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return pantient.visits.map(visit => {
                return new visit_dto_1.VisitDto(visit);
            });
        });
    }
};
PantientsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('PantientsRepository')),
    __metadata("design:paramtypes", [Object])
], PantientsService);
exports.PantientsService = PantientsService;
//# sourceMappingURL=pantients.service.js.map