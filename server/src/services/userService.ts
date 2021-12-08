import User from '../models/User/User';
import bcrypt from 'bcrypt';
import IUser from '../models/User/IUser';
import uuid from 'uuid';
import mailService from './mailService';
import tokenService from './tokenService';
import UserDto from '../dtos/user/user.dto';
import IUserDto from '../dtos/user/user';

class UserService {
  async registration(username: string, email: string, password: string) {
    await User.findOne({ email })
      .exec()
      .then(() => {
        throw new Error(`An account with email ${email} already exists`);
      })
      .catch((error: any) => {
        return error;
      });

    const hashPassword: string = await bcrypt.hash(password, 3);
    const activation_link: string = uuid.v4();
    const newUser: IUser = new User({
      username,
      email,
      password: hashPassword,
      activation_link,
    });
    await newUser.save();
    await mailService.sendActivationMail(email, activation_link);

    const userDto: IUserDto = new UserDto(newUser); //id, email, password
    const tokens: any = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
