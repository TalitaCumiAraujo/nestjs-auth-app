import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Name é um campo obrigatório.' })
  name: string;

  @IsNotEmpty({ message: 'E-mail é um campo obrigatório.' })
  email: string;
}
