import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CustomerEntity {
  @Expose() name: string;
  @Expose() isActive: boolean;

  constructor(rule?: Partial<any>) {
    Object.assign(this, rule);
  }
}
