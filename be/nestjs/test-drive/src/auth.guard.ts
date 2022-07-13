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

    // 테스트를 위한 하드 코드
    request.user = {
      id: 'test-id',
      name: '홍길동',
      // name: 123,
      email: 'ghildong.hong@world.email.com',
      password: 'xptmxjer!123',
      signupVerifyToken: 'test-signup-verify-token',
    };

    return this.validateRequest(request);
  }

  private async validateRequest(request: Request): Promise<boolean> {
    const jwtString = request.headers['authorization'].split('Bearer ')[1];

    this.authService.verify(jwtString);
    return true;
  }
}
