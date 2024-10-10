import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import GetLoginUserDto from './dto/login-user.dto';
import LoginDto from './dto/login';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from '../users/entities/user.entity';
import { PickTypeUserDto } from './dto/pick-type.user.dto';
import { UsersService } from '../users/users.service';
import * as bcryptjs from 'bcryptjs';
import { AuthService } from '../auth/auth.service';
import { BusinessException } from '../exceptions/business-exception';
import { Error } from '../exceptions/error-code';

@Injectable()
export class LoginService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}
  async login(
    loginDto: LoginDto,
  ): Promise<{ userData: PickTypeUserDto; token: string }> {
    const userInfo = await this.usersService.findOneByEmail(loginDto.email);

    const comparePw = await this.comparePasswords(
      loginDto.password,
      userInfo.password,
    );

    if (!comparePw) {
      throw new BusinessException(Error.NOT_FOUND, `not found user`);
    }

    const userData = plainToInstance(PickTypeUserDto, userInfo, {
      excludeExtraneousValues: true,
      exposeUnsetFields: false,
    });

    const token = this.authService.getAccessToken(userInfo.id);
    return { userData, token };
  }

  async comparePasswords(
    candidatePassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      return bcryptjs.compareSync(candidatePassword, hashedPassword);
    } catch (error) {
      throw new BusinessException(Error.FORBIDDEN, `failed to decode token`);
    }
  }
}
