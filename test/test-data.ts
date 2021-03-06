import { UserLoginRequestDto } from './../src/users/dto/user-login-request.dto';
import { UpdateUserDto } from './../src/users/dto/update-user.dto';
import { UserLoginResponseDto } from './../src/users/dto/user-login-response.dto';
import { UserDto } from './../src/users/dto/user.dto';
import { Gender } from '../src/shared/enum/enums';
import { CreateUserDto } from './../src/users/dto/create-user.dto';

export const createUserDto1: CreateUserDto = {
    email: 'testemail@gmail.com',
    password: 'password123',
    firstname: 'John',
    lastname: 'Smith',
    gender: Gender.male,
    birthday: '1986-07-17',
    privilegeId: 1,
    city: '',
    age: 1,
};

export const createUserDto2 = {
    email: 'testemail@gmail.com',
    password: 'password123',
    lastname: 'Smith',
    gender: Gender.male,
    birthday: '1986-07-17',
};

export const createUserDto3 = {
    ...createUserDto1,
    email: 'not-email',
};

export const createUserDto4 = {
    ...createUserDto1,
    birthday: 'not-valid-date',
};

export const createUserDto5 = {
    ...createUserDto1,
    gender: 'not-valid-gender',
};

export const userLoginRequestDto1: UserLoginRequestDto = {
    email: createUserDto1.email,
    password: createUserDto1.password,
};

export const userLoginRequestDto2: UserLoginRequestDto = {
    email: 'wrong-email',
    password: createUserDto1.password,
};

export const userLoginRequestDto3: UserLoginRequestDto = {
    email: 'wrong-email',
    password: createUserDto1.password,
};

export const userDto1: UserDto = {
    id: 12,
    email: 'testemail@gmail.com',
    firstname: 'John',
    lastname: 'Smith',
    gender: Gender.male,
    birthday: '1986-07-17',
    privilegeId: 1,
    privilegeName: 'admin',
};

export const userLoginResponseDto1: UserLoginResponseDto = {
    ...userDto1,
    token: 'token',
};

export const updateUserDto1: UpdateUserDto = {
    gender: Gender.female,
    birthday: '1996-07-17',
};

export const userDto2: UserDto = {
    ...userDto1,
    gender: Gender.female,
    birthday: '1996-07-17',
};
