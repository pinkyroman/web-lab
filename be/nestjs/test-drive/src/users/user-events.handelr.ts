import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EmailService } from 'src/email/email.service';
import { TestEvent } from './events/test.event';
import { UserCreatedEvent } from './events/user-created.event';

@EventsHandler(UserCreatedEvent, TestEvent)
export class UserEventsHandler
  implements IEventHandler<UserCreatedEvent | TestEvent>
{
  private logger = new Logger(UserEventsHandler.name);

  constructor(private emailService: EmailService) {}

  async handle(event: UserCreatedEvent | TestEvent) {
    switch (event.name) {
      case UserCreatedEvent.name:
        this.logger.debug(
          `sending a verification e-mail to: ${
            (event as UserCreatedEvent).email
          }`,
        );
        break;

      case TestEvent.name:
        this.logger.log('just a test event!');
        break;

      default:
        this.logger.warn('Unknown event: ' + event.name);
        break;
    }
  }
}
