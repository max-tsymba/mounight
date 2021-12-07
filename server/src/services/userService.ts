import User from '../models/User/User';
import bcrypt from 'bcrypt';
import IUser from '../models/User/IUser';
import uuid from 'uuid';
import mailService from './mailService';
import tokenService from './tokenService';

class UserService {
  async registration(userName: string, email: string, password: string) {
    await User.findOne({ email })
      .exec()
      .then(() => {
        throw new Error(`An account with email ${email} already exists`);
      })
      .catch((error: any) => {
        console.log(error);
      });

    const hashPassword: string = await bcrypt.hash(password, 3);
    const activationLink: string = uuid.v4();
    const newUser: IUser = new User({
      userName,
      email,
      password: hashPassword,
      activationLink,
    });
    await newUser.save();
    await mailService.sendActivationMail(email, activationLink);
    // const tokens: any = tokenService.generateTokens()
  }
}

export default new UserService();
