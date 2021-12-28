import IUserDto from './user';

export default class UserDto implements IUserDto {
  username;
  email;
  id;
  isActivated;

  constructor(model: any) {
    this.username = model.username;
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.is_activated;
  }
}
