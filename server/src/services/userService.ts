import User from '../models/User/User';
import bcrypt from 'bcrypt';
import IUser from '../models/User/IUser';
import * as uuid from 'uuid';
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
    await User.findOne({
      activation_link: activationLink,
    })
      .exec()
      .then(async (findedUser) => {
        if (!findedUser) {
          throw new Error('Link incorrect!');
        }
        findedUser.is_activated = true;
        await findedUser.save();
      })
      .catch((err: any) => {
        return err;
      });
  }
}

export default new UserService();
