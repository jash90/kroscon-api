import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { compare, genSalt, hash } from 'bcrypt';
import { UserDto } from './dto/user.dto';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { JwtPayload } from './auth/jwt-payload.model';
import { sign } from 'jsonwebtoken';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from './../shared/config/config.service';
import { UserOffset } from './dto/user.offset';
import { Privilege } from 'src/privilege/privilege.entity';
import { Feedback } from 'src/feedback/feedback.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { LoanGame } from 'src/loanGame/loanGame.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    private readonly jwtPrivateKey: string;

    constructor(
        @Inject('UsersRepository')
        private readonly usersRepository: Repository<User>,
        private readonly configService: ConfigService,
    ) {
        this.jwtPrivateKey = this.configService.jwtConfig.privateKey;
    }

    async findAll(): Promise<UserDto[]> {
        const users = await this.usersRepository.find<User>({
            include: [Privilege, Reservation, LoanGame, Feedback],
        });
        return users.map(user => {
            return new UserDto(user);
        });
    }

    async getUser(id: number): Promise<UserDto> {
        const user = await this.usersRepository.findByPk<User>(id, {
            include: [Privilege, Reservation, LoanGame, Feedback],
        });
        if (!user) {
            throw new HttpException(
                'User with given id not found',
                HttpStatus.NOT_FOUND,
            );
        }

        return new UserDto(user);
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.usersRepository.findOne<User>({
            include: [Privilege, Reservation, LoanGame, Feedback],
            where: { email },
        });
    }

    async create(createUserDto: CreateUserDto): Promise<UserLoginResponseDto> {
        try {
            const user = new User();
            user.email = createUserDto.email.trim().toLowerCase();
            user.firstname = createUserDto.firstname;
            user.lastname = createUserDto.lastname;
            user.gender = createUserDto.gender;
            user.birthday = createUserDto.birthday;
            user.privilegeId = createUserDto.privilegeId;

            const salt = await genSalt(10);
            user.password = await hash(createUserDto.password, salt);

            const userData = await user.save();

            // when registering then log user in automatically by returning a token
            const token = await this.signToken(userData);

            return new UserLoginResponseDto(userData, token);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async login(
        userLoginRequestDto: UserLoginRequestDto,
    ): Promise<UserLoginResponseDto> {
        const email = userLoginRequestDto.email;
        const password = userLoginRequestDto.password;

        const user = await this.getUserByEmail(email);
        if (!user) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.FORBIDDEN,
            );
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            throw new HttpException(
                'Invalid email or password.',
                HttpStatus.FORBIDDEN,
            );
        }

        const token = await this.signToken(user);
        return new UserLoginResponseDto(user, token);
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
        const user = await this.usersRepository.findByPk<User>(id);
        if (!user) {
            throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
        }

        user.firstname = updateUserDto.firstname || user.firstname;
        user.lastname = updateUserDto.lastname || user.lastname;
        user.gender = updateUserDto.gender || user.gender;
        user.birthday = updateUserDto.birthday || user.birthday;

        try {
            const data = await user.save();
            return new UserDto(data);
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: number): Promise<UserDto> {
        const user = await this.usersRepository.findByPk<User>(id);
        await user.destroy();
        return new UserDto(user);
    }

    async signToken(user: User): Promise<string> {
        const payload: JwtPayload = {
            email: user.email,
        };

        return sign(payload, this.jwtPrivateKey, {});
    }
    async offset(index: number = 0): Promise<UserOffset> {
        const users = await this.usersRepository.findAndCountAll({
            include: [Privilege, Reservation, LoanGame, Feedback],
            limit: 100,
            offset: index * 100,
            order: ['id'],
        });

        const usersDto = users.rows.map(user => {
            return new UserDto(user);
        });

        return { rows: usersDto, count: users.count };
    }
}
