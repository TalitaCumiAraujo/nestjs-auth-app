import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsNotEmpty({ message: 'Name é um campo obrigatório.' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'E-mail é um campo obrigatório.' })
  @IsEmail({}, { message: 'Formato do e-mail invalido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é um campo obrigatório.' })
  @IsString()
  @MinLength(8, { message: 'Senha deve ter no minino 8 caracteres' })
  @MaxLength(20, { message: 'Senha deve ter no máximo 20 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca.',
  })
  password: string;
}
