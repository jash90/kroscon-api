import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { getRepository, Repository } from 'typeorm';
import { JwtPayload } from './auth/jwt-payload.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { UserDto } from './dto/user.dto';
import { UserOffset } from './dto/user.offset';
import { User } from './user.entity';
import { Privilege } from '../privilege/privilege.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: Repository<User>,
    @Inject('PrivilegesRepository')
    private readonly privilegesRepository: Repository<Privilege>,
  ) { }

  async findAll(): Promise<UserDto[]> {
    const users = await this.usersRepository.find({
      relations: ['privilege', 'reservations', 'loanGames', 'feedbacks'],
    });
    return users.map(user => {
      return new UserDto(user);
    });
  }

  async getUser(id: number): Promise<UserDto> {
    const user = await this.usersRepository.findOne(id, {
      relations: ['privilege', 'reservations', 'loanGames', 'feedbacks'],
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
    return await this.usersRepository.findOne({
      relations: ['privilege', 'reservations', 'loanGames', 'feedbacks'],
      where: { email },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<UserLoginResponseDto> {
    try {
      const user = new User();
      user.email = createUserDto.email.trim().toLowerCase();
      user.firstname = createUserDto.firstname;
      user.lastname = createUserDto.lastname;

      user.privilege = await this.privilegesRepository.findOne('1');

      // user.gender = createUserDto.gender;
      // user.birthday = createUserDto.birthday;

      const salt = await genSalt(10);
      user.password = await hash(createUserDto.password, salt);

      const userData = await getRepository(User).save(user);

      // when registering then log user in automatically by returning a token
      const token = await this.signToken(userData);

      return new UserLoginResponseDto(userData, token);
    } catch (err) {
      console.log(err.message);
      err.status = 500;
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
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }

    user.firstname = updateUserDto.firstname || user.firstname;
    user.lastname = updateUserDto.lastname || user.lastname;
    // user.gender = updateUserDto.gender || user.gender;
    // user.birthday = updateUserDto.birthday || user.birthday;

    try {
      return new UserDto(await getRepository(User).save(user));
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: number): Promise<UserDto> {
    const user = await this.usersRepository.findOne(id);
    return new UserDto(await getRepository(User).remove(user));
  }

  async signToken(user: User): Promise<string> {
    const payload: JwtPayload = {
      email: user.email,
    };

    return sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRES_RESET,
    });
  }
  async offset(index: number = 0): Promise<UserOffset> {
    const users = await this.usersRepository.findAndCount({
      relations: ['privilege', 'reservations', 'loanGames', 'feedbacks'],
      take: 100,
      skip: index * 100,
      order: {
        id: 'ASC',
      },
    });

    const usersDto = users[0].map(user => {
      return new UserDto(user);
    });

    return { rows: usersDto, count: users[1] };
  }
}
