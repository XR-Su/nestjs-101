import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsRequired } from '../../validation/IsRequired';
import { IsVerifyCustomerName } from '../../validation/IsValidCustomerName';

export class CreateCustomerDto {
  @IsString()
  @IsVerifyCustomerName()
  @IsRequired()
  name: string;

  @IsBoolean()
  isActive: boolean;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  age: number;
}
