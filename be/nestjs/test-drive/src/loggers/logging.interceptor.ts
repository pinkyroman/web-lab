import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(@Inject(Logger) private readonly logger: Logger) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const { method, url, body } = context.getArgByIndex(0);
    this.logger.debug(`REQUEST: ${method} ${url}\n${JSON.stringify(body)}`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap((data) =>
          this.logger.debug(
            `RESPONSE in ${
              Date.now() - now
            }ms: ${method} ${url}\n${JSON.stringify(data)}`,
          ),
        ),
      );
  }
}
