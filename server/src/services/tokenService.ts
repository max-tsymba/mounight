import jwt from 'jsonwebtoken';
import Token from '../models/Token/Token';
import IToken from '../models/Token/IToken';

class TokenService {
  generateTokens(payload: any): any {
    const accessToken: string = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: '30m',
    });

    const refreshToken: string = jwt.sign(
      payload,
      process.env.JWT_REFRESH_KEY,
      {
        expiresIn: '30d',
      },
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: string) {
    try {
      const userData: any = jwt.verify(token, process.env.JWT_ACCESS_KEY);
      return userData;
    } catch (e: any) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData: any = jwt.verify(token, process.env.JWT_REFRESH_KEY);
      return userData;
    } catch (e: any) {
      return null;
    }
  }

  async saveToken(userId: any, refreshToken: string): Promise<IToken> {
    await Token.findOne({ user: userId })
      .exec()
      .then((tokenData: IToken) => {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
      })
      .catch((error: any) => {
        return error;
      });

    const newToken: IToken = new Token({
      user: userId,
      refreshToken,
    });
    await newToken.save();
    return newToken;
  }

  async removeToken(refreshToken: string) {
    const tokenData: any = await Token.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken: string) {
    const tokenData: any = await Token.findOne({ refreshToken });
    return tokenData;
  }
}

export default new TokenService();
