import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfig } from './config/app.config';
import { TypeOrmConfigService } from './database/typeorm.config.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './interface/http-exception.filter';
import { BusinessExceptionFilter } from './interface/business-exception.filter';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    UsersModule,
    LoginModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${__dirname}/env/${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    {
      provide: APP_FILTER,
      useClass: BusinessExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
