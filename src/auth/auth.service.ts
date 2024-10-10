import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    //주입받은 JWT Module의 서비스 이용
    private readonly jwtService: JwtService,
  ) {}

  //Access Token 발급
  getAccessToken(userId: number): string {
    return this.jwtService.sign(
      {
        userId,
      },
      {
        secret: 'jwtjwtjwt',
        expiresIn: '30d',
      },
    );
  }
}
