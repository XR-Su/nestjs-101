import { Expose } from 'class-transformer';

export class CustomerDto {
  @Expose() name: string;
  @Expose() isActive: boolean;

  constructor(rule?: Partial<any>) {
    Object.assign(this, rule);
  }
}
