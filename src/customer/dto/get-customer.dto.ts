import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class GetCustomerDto {
  @Expose() name: string;
  @Expose() isActive: boolean;

  constructor(data?: Partial<any>) {
    Object.assign(this, data);
  }
}
