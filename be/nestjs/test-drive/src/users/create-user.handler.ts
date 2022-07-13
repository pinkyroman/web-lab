import { CreateUserCommand } from './commands/create-user.command';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreatedEvent } from './events/user-created.event';
import { TestEvent } from './events/test.event';

@Injectable()
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly usersService: UsersService,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand) {
    const { name, email, password } = command;
    await this.usersService.createUser(name, email, password);

    this.eventBus.publish(new UserCreatedEvent(email, 'test-verify-token'));
    this.eventBus.publish(new TestEvent());
  }
}
