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
const user_entity_1 = require("./user.entity");
const bcrypt_1 = require("bcrypt");
const user_dto_1 = require("./dto/user.dto");
const user_login_response_dto_1 = require("./dto/user-login-response.dto");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_service_1 = require("./../shared/config/config.service");
let UsersService = class UsersService {
    constructor(usersRepository, configService) {
        this.usersRepository = usersRepository;
        this.configService = configService;
        this.jwtPrivateKey = this.configService.jwtConfig.privateKey;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersRepository.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            return users.map(user => {
                return new user_dto_1.UserDto(user);
            });
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            if (!user) {
                throw new common_1.HttpException('User with given id not found', common_1.HttpStatus.NOT_FOUND);
            }
            return new user_dto_1.UserDto(user);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersRepository.findOne({
                where: { email },
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
        });
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new user_entity_1.User();
                user.email = createUserDto.email.trim().toLowerCase();
                user.firstName = createUserDto.firstName;
                user.lastName = createUserDto.lastName;
                user.gender = createUserDto.gender;
                user.birthday = createUserDto.birthday;
                const salt = yield bcrypt_1.genSalt(10);
                user.password = yield bcrypt_1.hash(createUserDto.password, salt);
                const userData = yield user.save();
                const token = yield this.signToken(userData);
                return new user_login_response_dto_1.UserLoginResponseDto(userData, token);
            }
            catch (err) {
                if (err.original.constraint === 'user_email_key') {
                    throw new common_1.HttpException(`User with email already exists`, common_1.HttpStatus.CONFLICT);
                }
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    login(userLoginRequestDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = userLoginRequestDto.email;
            const password = userLoginRequestDto.password;
            const user = yield this.getUserByEmail(email);
            if (!user) {
                throw new common_1.HttpException('Invalid email or password.', common_1.HttpStatus.BAD_REQUEST);
            }
            const isMatch = yield bcrypt_1.compare(password, user.password);
            if (!isMatch) {
                throw new common_1.HttpException('Invalid email or password.', common_1.HttpStatus.BAD_REQUEST);
            }
            const token = yield this.signToken(user);
            return new user_login_response_dto_1.UserLoginResponseDto(user, token);
        });
    }
    update(id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findByPk(id, { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } });
            if (!user) {
                throw new common_1.HttpException('User not found.', common_1.HttpStatus.NOT_FOUND);
            }
            user.firstName = updateUserDto.firstName || user.firstName;
            user.lastName = updateUserDto.lastName || user.lastName;
            user.gender = updateUserDto.gender || user.gender;
            user.birthday = updateUserDto.birthday || user.birthday;
            try {
                const data = yield user.save();
                return new user_dto_1.UserDto(data);
            }
            catch (err) {
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            yield user.destroy();
            return new user_dto_1.UserDto(user);
        });
    }
    signToken(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                email: user.email,
            };
            return jsonwebtoken_1.sign(payload, this.jwtPrivateKey, {});
        });
    }
    offset(index = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersRepository.findAndCountAll({
                limit: 100,
                offset: index * 100,
                order: ['id'],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
            });
            const usersDto = users.rows.map(user => {
                return new user_dto_1.UserDto(user);
            });
            return { rows: usersDto, count: users.count };
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('UsersRepository')),
    __metadata("design:paramtypes", [Object, config_service_1.ConfigService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map