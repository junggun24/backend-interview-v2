import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsNumberString,
} from 'class-validator';

@Exclude()
export class BasePaginationDto {
  @ApiPropertyOptional()
  @Expose()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  take?: number;

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @IsOptional()
  sortBy?: 'DESC' | 'ASC';

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @IsOptional()
  orderBy?: string;

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @IsOptional()
  searchValue?: string;

  @ApiPropertyOptional()
  @Expose()
  @IsString()
  @IsOptional()
  searchKey?: string;

  @ApiPropertyOptional()
  @Expose()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  skip?: number;
}
