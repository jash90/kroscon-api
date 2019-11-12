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
const user_login_request_dto_1 = require("./dto/user-login-request.dto");
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_service_1 = require("./users.service");
const user_dto_1 = require("./dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_login_response_dto_1 = require("./dto/user-login-response.dto");
const passport_1 = require("@nestjs/passport");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_offset_1 = require("./dto/user.offset");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    register(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    login(userLoginRequestDto) {
        return this.usersService.login(userLoginRequestDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersService.getUser(id);
        });
    }
    update(updateUserDto, request) {
        return this.usersService.update(request.user.id, updateUserDto);
    }
    delete(request) {
        return this.usersService.delete(request.user.id);
    }
    offset(index = 0) {
        return this.usersService.offset(index);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOkResponse({ type: user_login_response_dto_1.UserLoginResponseDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "register", null);
__decorate([
    common_1.Post('auth'),
    common_1.HttpCode(200),
    swagger_1.ApiOkResponse({ type: user_login_response_dto_1.UserLoginResponseDto }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_request_dto_1.UserLoginRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOkResponse({ type: [user_dto_1.UserDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    swagger_1.ApiImplicitParam({ name: 'id', required: true }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Put('me'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete('me'),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiOkResponse({ type: user_dto_1.UserDto }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOkResponse({ type: user_offset_1.UserOffset }),
    __param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "offset", null);
UsersController = __decorate([
    common_1.Controller('users'),
    swagger_1.ApiUseTags('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map