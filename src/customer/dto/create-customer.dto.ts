import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsRequired } from '../../validation/IsRequired';
import { IsValidCustomerName } from '../../validation/IsValidCustomerName';

export class CreateCustomerDto {
  @IsString()
  @IsValidCustomerName()
  @IsRequired()
  name: string;

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  age: number;
}
