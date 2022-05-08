import { Exclude, Expose, Transform, Type } from 'class-transformer';

@Exclude()
export class CustomerDto {
  @Expose() name: string;
  @Expose() isActive: boolean;

  constructor(customer?: Partial<any>) {
    Object.assign(this, customer);
  }
}
