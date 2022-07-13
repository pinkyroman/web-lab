import { TransformInterceptor } from './interceptors/transform.interceptor';
// import { LoggingInterceptor } from './loggers/logging.interceptor';
// import { MyLogger } from './loggers/myLogger.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.BUILD === 'production'
        ? ['error', 'warn', 'log']
        : ['error', 'warn', 'log', 'verbose', 'debug'],
  });

  // app.useLogger(app.get(MyLogger)); // 전역적으로 커스텀 로거 사용하기
  app.useGlobalInterceptors(
    // new LoggingInterceptor(),
    new TransformInterceptor(),
  ); // 전역적으로 커스텀 인터셉터 사용하기

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
