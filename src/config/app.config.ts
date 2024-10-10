import { DynamicModule, LoggerService } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

export class AppConfig {
  static configModule(): DynamicModule {
    return ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${__dirname}/dist/env/${process.env.NODE_ENV}.env`,
    });
  }
}
