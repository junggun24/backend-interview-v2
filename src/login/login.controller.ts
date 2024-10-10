import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseGuards,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { LoginService } from './login.service';
import LoginDto from './dto/login';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('login')
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response, // : Promise<{ user: GetLoginUserDto; token: string }>
  ) {
    const result = await this.loginService.login(loginDto);
    res.cookie('access-token', result.token, {
      httpOnly: true,
    });
    return result;
  }
}
