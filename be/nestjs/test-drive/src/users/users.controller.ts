import { GetUserInfoQuery } from './queries/get-user-info.query';
import { CreateUserCommand } from './commands/create-user.command';
import { ErrorsInterceptor } from './../exceptions/errors.interceptor';
import { MyLogger } from './../loggers/myLogger.service';
// import { UserEntity } from './entities/user.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
  ValidationPipe,
  Logger,
  // Inject,
  UseInterceptors,
  // InternalServerErrorException,
  // BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserInfo } from './userInfo';
import { AuthGuard } from 'src/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
// import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  private readonly myLogger = new MyLogger(UsersController.name);

  constructor(
    // @Inject(WINSTON_MODULE_PROVIDER) private readonly logger,
    private readonly usersService: UsersService,
    private authService: AuthService,
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async createUser(
    @User(
      new ValidationPipe({
        validateCustomDecorators: true,
      }),
    )
    user: UserInfo,
    @Body() dto: CreateUserDto,
  ): Promise<void> {
    const { name, email, password } = dto;
    // await this.usersService.createUser(name, email, password);
    const command = new CreateUserCommand(name, email, password);

    this.logger.debug('사용자 생성 요청 계정: ', user);
    this.myLogger.error('커스텀 로거 테스트');

    return this.commandBus.execute(command);
  }

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;

    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;

    return await this.usersService.login(email, password);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    // return this.usersService.getUserInfo(userId);
    const getUserInfoQuery = new GetUserInfoQuery(userId);
    return this.queryBus.execute(getUserInfoQuery);
  }

  @Post('/error')
  @UseInterceptors(ErrorsInterceptor)
  error(foo: any): string {
    return foo.bar();
  }
}
