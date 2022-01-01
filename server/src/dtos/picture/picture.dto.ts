import IMediaDto from './picture';

export default class CreateMediaDto implements IMediaDto {
  name;
  type;
  user;
  path;

  constructor(model: any) {
    this.name = model.name;
    this.type = model.type;
    this.user = model.user;
    this.path = model.path;
  }
}
