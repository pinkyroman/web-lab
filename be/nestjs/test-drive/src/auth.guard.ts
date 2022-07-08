import { UsersService } from './users/users.service';
import { AuthService } from 'src/auth/auth.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(request: Request): Promise<boolean> {
    const jwtString = request.headers['authorization'].split('Bearer ')[1];

    this.authService.verify(jwtString);

    return true;
  }
}
