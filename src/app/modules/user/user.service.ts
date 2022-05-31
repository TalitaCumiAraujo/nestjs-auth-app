import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../database/prisma.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.user.create({ data });

    return createdUser;
  }
  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
  async findAll() {
    return await this.prisma.user.findMany();
  }
  async findOne(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('user does not exists.');
    }
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: number, data: UpdateUserDto) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('user does not exists.');
    }
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
  async delete(id: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!userExists) {
      throw new Error('user does not exists.');
    }
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
