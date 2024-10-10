import { PartialType } from '@nestjs/mapped-types';
import { UserEntity } from '../../users/entities/user.entity';
import { PickType } from '@nestjs/swagger';

export class PickTypeUserDto extends PartialType(
  PickType(UserEntity, ['id', 'age', 'email', 'name', 'nickname'] as const),
) {}
