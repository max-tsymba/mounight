import User from '../models/User/User';
import bcrypt from 'bcrypt';
import IUser from '../models/User/IUser';
import * as uuid from 'uuid';
import mailService from './mailService';
import tokenService from './tokenService';
import UserDto from '../dtos/user/user.dto';
import IUserDto from '../dtos/user/user';
import ApiError from '../exceptions/api.error';

class UserService {
  async registration(username: string, email: string, password: string) {
    const userFound = await User.findOne({ email }).exec();
    if (userFound)
      throw ApiError.BadRequest(
        `An account with email ${email} already exists`,
      );

    const hashPassword: string = await bcrypt.hash(password, 3);
    const activation_link: string = uuid.v4();

    const newUser: IUser = new User({
      username,
      email,
      password: hashPassword,
      activation_link,
    });
    await newUser.save();

    let service: mailService = new mailService();
    await service.sendActivationMail(
      email,
      `${process.env.API_URL}/api/activate/${activation_link}`,
    );

    const userDto: IUserDto = new UserDto(newUser); //id, email, password
    const tokens: any = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink: string) {
    const userFound = User.findOne({ activation_link: activationLink }).exec();
    if (!userFound) throw ApiError.BadRequest('Link incorrect!');
  }

  async login(email: string, password: string) {
    const userFound = await User.findOne({ email }).exec();
    if (!userFound) throw ApiError.BadRequest('User not found!');
    const isPasswordEquals: boolean = await bcrypt.compare(
      password,
      userFound.password,
    );
    if (!isPasswordEquals) throw ApiError.BadRequest('Password incorrect!');

    const userDto: IUserDto = new UserDto(userFound);
    const tokens: any = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken: string) {
    const token: any = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData: any = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB: any = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const userFound: any = await User.findById(userData.id);
    const userDto: IUserDto = new UserDto(userFound);
    const tokens: any = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
