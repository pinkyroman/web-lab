import { ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger {
  error(...args) {
    super.error.apply(this, args);
    this.doSomething(args);
  }

  private doSomething(message: any, stack?: string, context?: string, ...rest) {
    // do something like saving log data into database ...
    console.log('do something like saving log data into database ...');
  }
}
