import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Get()
  async listing() {
    return await this.userService.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.userService.findOne(id);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UpdateUserDto) {
    return await this.userService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
