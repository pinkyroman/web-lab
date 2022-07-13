import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import emailConfig from './config/emailConfig';
import { UsersModule } from './users/users.module';
import { validationSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import authConfig from './config/authConfig';
import { LoggerModule } from './loggers/logger.module';
import { ExceptionModule } from './exceptions/exception.module';
import { BatchModule } from './batch/schedule.module';

// import * as winston from 'winston';
// import {
//   utilities as nestWinstonModuleUtilities,
//   WinstonModule,
// } from 'nest-winston';

console.log(
  `${__dirname}/config/env/.${process.env.NODE_ENV}.env file is used.`,
);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [authConfig, emailConfig],
      isGlobal: true,
      validationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
    }),
    // WinstonModule.forRoot({
    //   transports: [
    //     new winston.transports.Console({
    //       level: process.env.BUILD === 'production' ? 'info' : 'silly',
    //       format: winston.format.combine(
    //         winston.format.timestamp(),
    //         winston.format.ms(),
    //         nestWinstonModuleUtilities.format.nestLike('MyApp', {
    //           prettyPrint: true,
    //         }),
    //       ),
    //     }),
    //   ],
    // }),
    ExceptionModule,
    UsersModule,
    AuthModule,
    LoggerModule,
    BatchModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
