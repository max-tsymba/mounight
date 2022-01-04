import { IUserDto } from './user';

export default class UserDto implements IUserDto {
  id;
  username;
  email;
  isActivated;
  bg_cover;
  avatar;
  createdAt;

  constructor(model: any) {
    this.id = model._id;
    this.username = model.username;
    this.email = model.email;
    this.isActivated = model.is_activated;
    this.bg_cover = model.bg_cover;
    this.avatar = model.avatar;
    this.createdAt = model.createdAt;
  }
}
