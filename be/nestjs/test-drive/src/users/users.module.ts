import { GetUserInfoQueryHandler } from './get-user-info-query.handler';
import { UserEventsHandler } from './user-events.handelr';
import { CreateUserHandler } from './create-user.handler';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmailModule } from './../email/email.module';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    AuthModule,
    EmailModule,
    TypeOrmModule.forFeature([UserEntity]),
    CqrsModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserHandler,
    UserEventsHandler,
    GetUserInfoQueryHandler,
  ],
})
export class UsersModule {}
