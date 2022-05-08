import { Exclude, Expose, Transform, Type } from 'class-transformer';

@Exclude()
export class GetCustomerDto {
  @Expose() name: string;
  @Expose() isActive: boolean;

  constructor(customer?: Partial<any>) {
    Object.assign(this, customer);
  }
}
