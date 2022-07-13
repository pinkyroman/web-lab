import { IsString } from 'class-validator';

export class UserInfo {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  email: string;
}
