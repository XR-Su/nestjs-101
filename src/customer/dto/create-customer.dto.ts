import { IsBoolean, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;
}
