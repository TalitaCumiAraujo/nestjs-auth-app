import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './app/database/prisma.module';
import { UsersModule } from './app/modules/user/user.module';
import { AuthModule } from './app/modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
